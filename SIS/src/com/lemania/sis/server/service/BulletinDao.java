package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.sis.server.Bulletin;
import com.lemania.sis.server.BulletinBranche;
import com.lemania.sis.server.BulletinSubject;
import com.lemania.sis.server.Classe;
import com.lemania.sis.server.Profile;
import com.lemania.sis.server.ProfileBranche;
import com.lemania.sis.server.ProfileSubject;
import com.lemania.sis.server.Student;

public class BulletinDao extends MyDAOBase {
	//
	public void initialize(){
		return;
	}
	
	public List<Bulletin> listAll(){
		Query<Bulletin> q = this.ofy().query(Bulletin.class)
				.order("classeName")
				.order("studentName");
		List<Bulletin> returnList = new ArrayList<Bulletin>();
		for (Bulletin bulletin : q){
			returnList.add(bulletin);
		}
		return returnList;
	}
	
	public List<Bulletin> listAllActive(){
		Query<Bulletin> q = this.ofy().query(Bulletin.class)
				.filter("schoolActive", true)
				.order("classeName")
				.order("studentName");
		List<Bulletin> returnList = new ArrayList<Bulletin>();
		for (Bulletin bulletin : q){
			returnList.add(bulletin);
		}
		return returnList;
	}
	
	
	/* List all bulletin by class */
	public List<Bulletin> listAllByClass(String classId){
		Query<Bulletin> q = this.ofy().query(Bulletin.class)
				.filter("classe", new Key<Classe>(Classe.class, Long.parseLong(classId)))
				.order("classeName")
				.order("studentName");
		List<Bulletin> returnList = new ArrayList<Bulletin>();
		for (Bulletin bulletin : q){
			returnList.add(bulletin);
		}
		return returnList;
	}
	
	
	/* List all bulletin by class */
	public List<Bulletin> listAllByEmail(String email){
		Student student = null;
		List<Bulletin> returnList = new ArrayList<Bulletin>();
		//
		Query<Student> qStudent = this.ofy().query(Student.class).filter("Email", email);
		if (qStudent.count()>0) 
			student = qStudent.list().get(0);
		else
			return returnList;
		//
		Query<Bulletin> q = this.ofy().query(Bulletin.class)
				.filter("student", new Key<Student>(Student.class, student.getId()))
				.order("classeName")
				.order("year");
		for (Bulletin bulletin : q){
			returnList.add(bulletin);
		}
		return returnList;
	}
	
	
	public Bulletin getBulletin(String bulletinId){
		return this.ofy().get(Bulletin.class, Long.parseLong(bulletinId));
	}
	
	
	public void save(Bulletin bulletin){
		this.ofy().put(bulletin);
	}
	
	public Bulletin saveAndReturn(Bulletin bulletin){
		Key<Bulletin> key = this.ofy().put(bulletin);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	/**/
	public Bulletin createBulletin(String studentId, String classId, String year, String profileId){
		//
		Bulletin bulletin = new Bulletin();
		BulletinSubject curBulletinSubject;
		BulletinBranche curBulletinBranche;
		//
		List<Key<BulletinSubject>> keyListSubject = new ArrayList<Key<BulletinSubject>>();
		List<Key<BulletinBranche>> keyListBranche = new ArrayList<Key<BulletinBranche>>();
		Key<Bulletin> keyBulletin = null;
		//
		Student student = this.ofy().get(new Key<Student>(Student.class, Long.parseLong(studentId)));
		Classe classe = this.ofy().get(new Key<Classe>(Classe.class, Long.parseLong(classId)));
		//
		bulletin.setYear(year);
		bulletin.setClasse(new Key<Classe>(Classe.class, classe.getId()));
		bulletin.setStudent(new Key<Student>(Student.class, student.getId()));
		bulletin.setClasseName(classe.getClassName());
		bulletin.setStudentName(student.getFirstName() + " " + student.getLastName());
		//
		try {
			//
			keyBulletin = this.ofy().put(bulletin);
			//
			Query<ProfileSubject> profileSubjects = this.ofy().query(ProfileSubject.class)
					.filter("profile", new Key<Profile>(Profile.class, Long.parseLong(profileId)));
			
			for (ProfileSubject profileSubject : profileSubjects){
				//				
				curBulletinSubject = new BulletinSubject();
				curBulletinSubject.setSubject( profileSubject.getSubject() );
				curBulletinSubject.setSubjectCoef( profileSubject.getSubjectCoef() );
				curBulletinSubject.setBulletin( new Key<Bulletin>(Bulletin.class, bulletin.getId()) );
				curBulletinSubject.setProfessor( profileSubject.getProfessor() );
				curBulletinSubject.setProfName( profileSubject.getProfName() );
				curBulletinSubject.setSubjectName( profileSubject.getSubjectName() );
				curBulletinSubject.setSubjectCoef( profileSubject.getSubjectCoef() );
				keyListSubject.add(this.ofy().put(curBulletinSubject));
				//
				Query<ProfileBranche> profileBranches = this.ofy().query(ProfileBranche.class)
						.filter("profileSubject", new Key<ProfileSubject>(ProfileSubject.class, profileSubject.getId()));
				
				for (ProfileBranche profileBranche : profileBranches) {
					curBulletinBranche = new BulletinBranche();
					curBulletinBranche.setBulletinBranche( profileBranche.getProfileBranche() );
					curBulletinBranche.setBrancheCoef( profileBranche.getBrancheCoef() );
					curBulletinBranche.setBulletinBrancheName( profileBranche.getProfileBrancheName() );
					curBulletinBranche.setBulletinSubject( new Key<BulletinSubject>(BulletinSubject.class, curBulletinSubject.getId()));
					keyListBranche.add( this.ofy().put(curBulletinBranche));
				}
			}
			//
			return bulletin;
			//
		} catch (Exception e) {
			//
			if (keyBulletin != null)
				this.ofy().delete(keyBulletin);
			if (keyListSubject.size() >0)
				this.ofy().delete(keyListSubject);
			if (keyListBranche.size()>0)
				this.ofy().delete(keyListBranche);
			
			throw new RuntimeException(e);
		} finally {
			//
		}
	}
	
	
	public void removeProfile(Bulletin bulletin){
		this.ofy().delete(bulletin);
	}
}
