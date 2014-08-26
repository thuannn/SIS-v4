package com.lemania.sis.server.bean.bulletin;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.cmd.Query;
import com.lemania.sis.server.BulletinBranche;
import com.lemania.sis.server.Classe;
import com.lemania.sis.server.Profile;
import com.lemania.sis.server.ProfileBranche;
import com.lemania.sis.server.ProfileSubject;
import com.lemania.sis.server.bean.bulletinsubject.BulletinSubject;
import com.lemania.sis.server.bean.student.Student;
import com.lemania.sis.server.service.MyDAOBase;

public class BulletinDao extends MyDAOBase {
	//
	public void initialize(){
		return;
	}
	
	public List<Bulletin> listAll(){
		Query<Bulletin> q = ofy().load().type(Bulletin.class)
				.order("classeName")
				.order("studentName");
		List<Bulletin> returnList = new ArrayList<Bulletin>();
		Student student;
		for (Bulletin bulletin : q){
			student = ofy().load().key( bulletin.getStudent() ).now();
			bulletin.setStudentName( student.getFirstName() + " " + student.getLastName() );
			returnList.add(bulletin);
		}
		Collections.sort(returnList);
		return returnList;
	}
	
	public List<Bulletin> listAllActive(){
		Query<Bulletin> q = ofy().load().type(Bulletin.class)
				.filter("isFinished", false)
				.order("classeName")
				.order("studentName");
		List<Bulletin> returnList = new ArrayList<Bulletin>();
		Student student;
		for (Bulletin bulletin : q){
			student = ofy().load().key( bulletin.getStudent() ).now();
			bulletin.setStudentName( student.getFirstName() + " " + student.getLastName() );
			returnList.add(bulletin);
		}
		Collections.sort(returnList);
		return returnList;
	}
	
	
	/* List all bulletin by class */
	public List<Bulletin> listAllByClass(String classId){
		Query<Bulletin> q = ofy().load().type(Bulletin.class)
				.filter("classe", Key.create(Classe.class, Long.parseLong(classId)))
				.order("classeName")
				.order("studentName");
		List<Bulletin> returnList = new ArrayList<Bulletin>();
		Student student;
		for (Bulletin bulletin : q){
			student = ofy().load().key( bulletin.getStudent() ).now();
			bulletin.setStudentName( student.getFirstName() + " " + student.getLastName() );
			returnList.add(bulletin);
		}
		Collections.sort(returnList);
		return returnList;
	}
	
	
	/* List all bulletin by class */
	public List<Bulletin> listAllActiveByClass(String classId){
		Query<Bulletin> q = ofy().load().type(Bulletin.class)
				.filter("classe", Key.create(Classe.class, Long.parseLong(classId)))
				.filter("isActive", true)
				.order("classeName")
				.order("studentName");
		List<Bulletin> returnList = new ArrayList<Bulletin>();
		Student student;
		for (Bulletin bulletin : q){
			if (bulletin.getIsFinished().equals(true))
				continue;
			student = ofy().load().key( bulletin.getStudent() ).now();
			bulletin.setStudentName( student.getFirstName() + " " + student.getLastName() );
			returnList.add( bulletin );
		}
		Collections.sort(returnList);
		return returnList;
	}
	
	
	
	/* List all bulletin by class */
	public List<Bulletin> listAllActiveByClassProfile( String classId, String profileId ){
		Query<Bulletin> q = ofy().load().type(Bulletin.class)
				.filter("profile", Key.create( Profile.class, Long.parseLong(profileId)))
				.filter("classe", Key.create(Classe.class, Long.parseLong(classId)))
				.filter("isActive", true)
				.order("classeName")
				.order("studentName");
		List<Bulletin> returnList = new ArrayList<Bulletin>();
		Student student;
		for (Bulletin bulletin : q){
			if (bulletin.getIsFinished().equals(true))
				continue;
			student = ofy().load().key( bulletin.getStudent() ).now();
			bulletin.setStudentName( student.getFirstName() + " " + student.getLastName() );
			returnList.add( bulletin );
		}
		Collections.sort(returnList);
		return returnList;
	}
	
	
	
	/* List all bulletin by class */
	public List<Bulletin> listAllByEmail(String email){
		Student student = null;
		List<Bulletin> returnList = new ArrayList<Bulletin>();
		//
		Query<Student> qStudent = ofy().load().type(Student.class).filter("Email", email);
		if (qStudent.count()>0) 
			student = qStudent.list().get(0);
		else
			return returnList;
		//
		Query<Bulletin> q = ofy().load().type(Bulletin.class)
				.filter("student", Key.create(Student.class, student.getId()))
				.order("classeName")
				.order("year");
		for (Bulletin bulletin : q){
			returnList.add(bulletin);
		}
		return returnList;
	}
	
	
	public Bulletin getBulletin(String bulletinId){
		Bulletin bulletin = ofy().load().key( Key.create(Bulletin.class, Long.parseLong(bulletinId))).now();
		bulletin.setProgrammeName( ofy().load().key(
						ofy().load().key( Key.create(Classe.class, bulletin.getClasse().getId())).now()
						.getProgramme()).now()
						.getCoursNom());
		return bulletin;
	}
	
	
	public void save(Bulletin bulletin){
		ofy().save().entities(bulletin);
	}
	
	public Bulletin saveAndReturn(Bulletin bulletin){
		Key<Bulletin> key = ofy().save().entities(bulletin).now().keySet().iterator().next();
		try {
			return ofy().load().key(key).now();
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
		Student student = ofy().load().key(Key.create(Student.class, Long.parseLong(studentId))).now();
		Classe classe = ofy().load().key(Key.create(Classe.class, Long.parseLong(classId))).now();
		//
		bulletin.setYear(year);
		bulletin.setClasse(Key.create(Classe.class, classe.getId()));
		bulletin.setStudent(Key.create(Student.class, student.getId()));
		bulletin.setClasseName(classe.getClassName());
		bulletin.setStudentName( student.getFirstName() + " " + student.getLastName() );
		bulletin.setProfile( Key.create(Profile.class, Long.parseLong(profileId)));
		//
		try {
			//
			keyBulletin = ofy().save().entities(bulletin).now().keySet().iterator().next();
			//
			Query<ProfileSubject> profileSubjects = ofy().load().type(ProfileSubject.class)
					.filter("profile", Key.create(Profile.class, Long.parseLong(profileId)));
			
			for (ProfileSubject profileSubject : profileSubjects){
				//				
				curBulletinSubject = new BulletinSubject();
				curBulletinSubject.setSubject( profileSubject.getSubject() );
				curBulletinSubject.setSubjectCoef( profileSubject.getSubjectCoef() );
				curBulletinSubject.setBulletin( Key.create(Bulletin.class, bulletin.getId()) );
				curBulletinSubject.setProfessor( profileSubject.getProfessor() );
				curBulletinSubject.setProfName( profileSubject.getProfName() );
				curBulletinSubject.setSubjectName( profileSubject.getSubjectName() );
				curBulletinSubject.setSubjectCoef( profileSubject.getSubjectCoef() );
				keyListSubject.add( ofy().save().entities(curBulletinSubject).now().keySet().iterator().next() );
				//
				Query<ProfileBranche> profileBranches = ofy().load().type(ProfileBranche.class)
						.filter("profileSubject", Key.create(ProfileSubject.class, profileSubject.getId()));
				
				for (ProfileBranche profileBranche : profileBranches) {
					curBulletinBranche = new BulletinBranche();
					curBulletinBranche.setBulletinBranche( profileBranche.getProfileBranche() );
					curBulletinBranche.setBrancheCoef( profileBranche.getBrancheCoef() );
					curBulletinBranche.setBulletinBrancheName( profileBranche.getProfileBrancheName() );
					curBulletinBranche.setBulletinSubject( Key.create(BulletinSubject.class, curBulletinSubject.getId()));
					keyListBranche.add( ofy().save().entities(curBulletinBranche).now().keySet().iterator().next() );
				}
			}
			//
			return bulletin;
			//
		} catch (Exception e) {
			//
			if (keyBulletin != null)
				ofy().delete().entities(keyBulletin);
			if (keyListSubject.size() >0)
				ofy().delete().entities(keyListSubject);
			if (keyListBranche.size()>0)
				ofy().delete().entities(keyListBranche);
			
			throw new RuntimeException(e);
		} finally {
			//
		}
	}
	
	
	/**/
	public Boolean removeBulletin(Bulletin bulletin){
		//
		Key<Bulletin> keyBulletin = Key.create(Bulletin.class, bulletin.getId());
		//
		Query<BulletinSubject> bulletinSubjects = ofy().load().type(BulletinSubject.class)
				.filter("bulletin", keyBulletin);
		
		for (BulletinSubject bulletinSubject : bulletinSubjects){				
			//
			Query<BulletinBranche> bulletinBranches = ofy().load().type(BulletinBranche.class)
					.filter("bulletinSubject", Key.create(BulletinSubject.class, bulletinSubject.getId()));
			
			for (BulletinBranche bulletinBranche : bulletinBranches) {
				ofy().delete().entities( bulletinBranche );
			}
			
			ofy().delete().entities( bulletinSubject );
		}			
		//
		ofy().delete().entities(bulletin);
		return true;
		//		
	}
	
	
	/**/
	public void updateBulletinStatus( String studentId, Boolean status ){
		//
		Query<Bulletin> q = ofy().load().type(Bulletin.class)
				.filter("student", Key.create(Student.class, Long.parseLong( studentId )));
		for (Bulletin bulletin : q){
			bulletin.setIsActive( status );
			ofy().save().entities( bulletin );
		}
	}
	
	
	/*
	 * */
	public Bulletin saveBulletinRemarqueDirection( String bulletinId, String remarqueDirection ) {
		//
		Bulletin bulletin = ofy().load().key( Key.create(Bulletin.class, Long.parseLong(bulletinId))).now();
		bulletin.setRemarqueDirection(remarqueDirection);
		ofy().save().entities(bulletin);
		return bulletin;
	}
}
