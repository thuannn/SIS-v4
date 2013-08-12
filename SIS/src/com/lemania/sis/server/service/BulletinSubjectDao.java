package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.List;

import com.lemania.sis.server.Assignment;
import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.sis.server.Professor;
import com.lemania.sis.server.Bulletin;
import com.lemania.sis.server.ProfileBranche;
import com.lemania.sis.server.BulletinSubject;
import com.lemania.sis.server.Subject;

public class BulletinSubjectDao extends MyDAOBase {
	//
	public void initialize(){
		return;
	}
	
	
	/**/
	public List<BulletinSubject> listAll(){
		Query<BulletinSubject> q = this.ofy().query(BulletinSubject.class).order("subjectName");
		List<BulletinSubject> returnList = new ArrayList<BulletinSubject>();
		for (BulletinSubject bulletinSubject : q){
			if (bulletinSubject.getProfessor() != null)
				bulletinSubject.setProfName( this.ofy().get(bulletinSubject.getProfessor()).getProfName() );
			bulletinSubject.setSubjectName( this.ofy().get( bulletinSubject.getSubject()).getSubjectName() );
			returnList.add(bulletinSubject);
		}
		return returnList;
	}
	
	
	/**/
	public List<BulletinSubject> listAllActive(){
		Query<BulletinSubject> q = this.ofy().query(BulletinSubject.class)
				.filter("isActive", true)
				.order("subjectName");
		List<BulletinSubject> returnList = new ArrayList<BulletinSubject>();
		for ( BulletinSubject bulletinSubject : q ){
			if (bulletinSubject.getProfessor() != null)
				bulletinSubject.setProfName( this.ofy().get(bulletinSubject.getProfessor()).getProfName() );
			bulletinSubject.setSubjectName( this.ofy().get( bulletinSubject.getSubject()).getSubjectName() );
			returnList.add( bulletinSubject );
		}
		return returnList;
	}
	
	
	/**/
	public List<BulletinSubject> listAll( String bulletinId ){
		Query<BulletinSubject> q = this.ofy().query(BulletinSubject.class)
				.filter("bulletin", new Key<Bulletin>(Bulletin.class, Long.parseLong( bulletinId )))
				.order("subjectName");
		List<BulletinSubject> returnList = new ArrayList<BulletinSubject>();
		for ( BulletinSubject bulletinSubject : q ){
			if (bulletinSubject.getProfessor() != null)
				bulletinSubject.setProfName( this.ofy().get(bulletinSubject.getProfessor()).getProfName() );
			bulletinSubject.setSubjectName( this.ofy().get( bulletinSubject.getSubject()).getSubjectName() );
			returnList.add( bulletinSubject );
		}
		return returnList;
	}
	
	
	/**/
	public List<BulletinSubject> listAllByAssignment(String assignmentId){
		// Get the assignment object
		Assignment assignment = this.ofy().get(Assignment.class, Long.parseLong(assignmentId));
		//
		if (assignment != null) {
			// Get the Bulletin list by class
			Query<Bulletin> qBulletin = this.ofy().query(Bulletin.class)
					.filter("classe", assignment.getClasse());
			
			// Get the Bulletin Subject list
			Query<BulletinSubject> q = this.ofy().query(BulletinSubject.class)
					.filter("subject", assignment.getSubject())
					.filter("professor", assignment.getProf())
					.order("subjectName");
			List<BulletinSubject> returnList = new ArrayList<BulletinSubject>();
			for ( BulletinSubject bulletinSubject : q ){
				// Check if this Bulletin Subject belongs to Bulletin list of the class
				for (Bulletin bulletin : qBulletin){
					if (bulletinSubject.getBulletin().getId() == bulletin.getId()) {
						bulletinSubject.setStudentName(bulletin.getStudentName());
						returnList.add( bulletinSubject );
						break;
					}
				}
			}
			return returnList;
		}
		return null;
	}
	
	
	/**/
	public void save(BulletinSubject bulletinSubject){
		this.ofy().put( bulletinSubject );
	}
	
	
	/**/
	public BulletinSubject saveAndReturn(BulletinSubject bulletin){
		Key<BulletinSubject> key = this.ofy().put(bulletin);
		try {
			BulletinSubject ps = this.ofy().get(key);
			if (ps.getProfessor() != null)
				ps.setProfName( this.ofy().get(ps.getProfessor()).getProfName() );
			ps.setSubjectName( this.ofy().get( ps.getSubject()).getSubjectName() );
			return ps;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	/**/
	public BulletinSubject saveAndReturn(String bulletinId, String subjectId, String professorId, String subjectCoef ){
		//
		BulletinSubject ps = new BulletinSubject();
		ps.setBulletin( new Key<Bulletin>( Bulletin.class, Long.parseLong(bulletinId)));
		ps.setSubject(new Key<Subject>( Subject.class, Long.parseLong(subjectId)));
		ps.setProfessor( new Key<Professor>(Professor.class, Long.parseLong(professorId)));
		
		ps.setSubjectName( this.ofy().get( ps.getSubject()).getSubjectName() );
		ps.setProfName( this.ofy().get(ps.getProfessor()).getProfName());
		ps.setSubjectCoef( Double.parseDouble(subjectCoef));
		
		Key<BulletinSubject> key = this.ofy().put( ps );
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	/**/
	public Boolean removeProfileSubject(BulletinSubject bulletinSubject) {
		//
		Query<ProfileBranche> q = this.ofy().query(ProfileBranche.class)
				.filter("bulletinSubject", new Key<BulletinSubject>(BulletinSubject.class, bulletinSubject.getId()));
		if (q.count() > 0)
			return false;
		else {
			this.ofy().delete(bulletinSubject);
			return true;
		}
	}
	
	
	/**/
	public BulletinSubject calculateTotalBrancheCoef(String profileSubjectId) {
		//
		BulletinSubject ps = this.ofy().get( new Key<BulletinSubject>(BulletinSubject.class, Long.parseLong(profileSubjectId)) );
		Query<ProfileBranche> q = this.ofy().query(ProfileBranche.class)
				.filter("bulletinSubject", new Key<BulletinSubject>( BulletinSubject.class, Long.parseLong(profileSubjectId)) )
				.order("profileBranche");
		ps.setTotalBrancheCoef(0.0);
		for ( ProfileBranche profileBranche : q ){
			ps.setTotalBrancheCoef( ps.getTotalBrancheCoef() + profileBranche.getBrancheCoef() );
		}
		this.ofy().put( ps );
		return ps;
	}

}
