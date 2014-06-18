package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.cmd.Query;
import com.lemania.sis.server.Professor;
import com.lemania.sis.server.Profile;
import com.lemania.sis.server.ProfileBranche;
import com.lemania.sis.server.ProfileSubject;
import com.lemania.sis.server.Subject;

public class ProfileSubjectDao extends MyDAOBase {
	//
	public void initialize(){
		return;
	}
	
	
	/**/
	public List<ProfileSubject> listAll(){
		Query<ProfileSubject> q = ofy().load().type(ProfileSubject.class).order("subjectName");
		List<ProfileSubject> returnList = new ArrayList<ProfileSubject>();
		for (ProfileSubject profileSubject : q){
			if (profileSubject.getProfessor() != null)
				profileSubject.setProfName( ofy().load().key(profileSubject.getProfessor()).now().getProfName() );
			profileSubject.setSubjectName( ofy().load().key( profileSubject.getSubject()).now().getSubjectName() );
			returnList.add(profileSubject);
		}
		return returnList;
	}
	
	
	/**/
	public List<ProfileSubject> listAllActive(){
		Query<ProfileSubject> q = ofy().load().type(ProfileSubject.class)
				.filter("isActive", true)
				.order("subjectName");
		List<ProfileSubject> returnList = new ArrayList<ProfileSubject>();
		for ( ProfileSubject profileSubject : q ){
			if (profileSubject.getProfessor() != null)
				profileSubject.setProfName( ofy().load().key(profileSubject.getProfessor()).now().getProfName() );
			profileSubject.setSubjectName( ofy().load().key( profileSubject.getSubject()).now().getSubjectName() );
			returnList.add( profileSubject );
		}
		return returnList;
	}
	
	
	/**/
	public List<ProfileSubject> listAll( String profileId ){
		Query<ProfileSubject> q = ofy().load().type(ProfileSubject.class)
				.filter("profile", Key.create(Profile.class, Long.parseLong( profileId )))
				.order("subjectName");
		List<ProfileSubject> returnList = new ArrayList<ProfileSubject>();
		for ( ProfileSubject profileSubject : q ){
			if (profileSubject.getProfessor() != null)
				profileSubject.setProfName( ofy().load().key(profileSubject.getProfessor()).now().getProfName() );
			profileSubject.setSubjectName( ofy().load().key( profileSubject.getSubject()).now().getSubjectName() );
			returnList.add( profileSubject );
		}
		return returnList;
	}
	
	
	/**/
	public void save(ProfileSubject profileSubject){
		ofy().save().entities( profileSubject );
	}
	
	
	/**/
	public ProfileSubject saveAndReturn(ProfileSubject profile){
		Key<ProfileSubject> key = ofy().save().entities(profile).now().keySet().iterator().next();
		try {
			ProfileSubject ps = ofy().load().key(key).now();
			if (ps.getProfessor() != null)
				ps.setProfName( ofy().load().key(ps.getProfessor()).now().getProfName() );
			ps.setSubjectName( ofy().load().key( ps.getSubject()).now().getSubjectName() );
			return ps;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	/**/
	public ProfileSubject saveAndReturn(String profileId, String subjectId, String professorId, String subjectCoef ){
		//
		ProfileSubject ps = new ProfileSubject();
		ps.setProfile( Key.create( Profile.class, Long.parseLong(profileId)));
		ps.setSubject( Key.create( Subject.class, Long.parseLong(subjectId)));
		ps.setProfessor( Key.create(Professor.class, Long.parseLong(professorId)));
		
		ps.setSubjectName( ofy().load().key( ps.getSubject()).now().getSubjectName() );
		ps.setProfName( ofy().load().key(ps.getProfessor()).now().getProfName());
		ps.setSubjectCoef( Double.parseDouble(subjectCoef));
		
		Key<ProfileSubject> key = ofy().save().entities( ps ).now().keySet().iterator().next();
		try {
			return ofy().load().key(key).now();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	/**/
	public Boolean removeProfileSubject(ProfileSubject profileSubject) {
		//
		Query<ProfileBranche> q = ofy().load().type(ProfileBranche.class)
				.filter("profileSubject", Key.create(ProfileSubject.class, profileSubject.getId()));
		if (q.count() > 0)
			return false;
		else {
			ofy().delete().entities(profileSubject);
			return true;
		}
	}
	
	
	/**/
	public ProfileSubject calculateTotalBrancheCoef(String profileSubjectId) {
		//
		ProfileSubject ps = ofy().load().key( Key.create(ProfileSubject.class, Long.parseLong(profileSubjectId)) ).now();
		Query<ProfileBranche> q = ofy().load().type(ProfileBranche.class)
				.filter("profileSubject", Key.create( ProfileSubject.class, Long.parseLong(profileSubjectId)) )
				.order("profileBranche");
		ps.setTotalBrancheCoef(0.0);
		for ( ProfileBranche profileBranche : q ){
			ps.setTotalBrancheCoef( ps.getTotalBrancheCoef() + profileBranche.getBrancheCoef() );
		}
		ofy().save().entities( ps );
		return ps;
	}
}
