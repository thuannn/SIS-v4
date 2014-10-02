package com.lemania.sis.server.bean.bulletinsubject;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.cmd.Query;
import com.lemania.sis.server.BulletinBranche;
import com.lemania.sis.server.Professor;
import com.lemania.sis.server.Profile;
import com.lemania.sis.server.ProfileBranche;
import com.lemania.sis.server.ProfileSubject;
import com.lemania.sis.server.Subject;
import com.lemania.sis.server.bean.assignment.Assignment;
import com.lemania.sis.server.bean.bulletin.Bulletin;
import com.lemania.sis.server.bean.student.Student;
import com.lemania.sis.server.service.MyDAOBase;

public class BulletinSubjectDao extends MyDAOBase {
	//
	public void initialize(){
		return;
	}
	
	
	/**/
	public List<BulletinSubject> listAll(){
		Query<BulletinSubject> q = ofy().load().type(BulletinSubject.class).order("subjectName");
		List<BulletinSubject> returnList = new ArrayList<BulletinSubject>();
		for (BulletinSubject bulletinSubject : q){
			if (bulletinSubject.getProfessor() != null) {
				bulletinSubject.setProfName( ofy().load().key(bulletinSubject.getProfessor()).now().getProfName() );
				bulletinSubject.setProfId( Long.toString( bulletinSubject.getProfessor().getId() ));
			}
			bulletinSubject.setSubjectName( ofy().load().key( bulletinSubject.getSubject()).now().getSubjectName() );
			bulletinSubject.setSubjectId( Long.toString(
					ofy().load().key( bulletinSubject.getSubject()).now().getId() ));
			bulletinSubject.setClassId( Long.toString( 
					ofy().load().key( ofy().load().key( bulletinSubject.getBulletin()).now().getClasse() ).now().getId() ));
			returnList.add(bulletinSubject);
		}
		return returnList;
	}
	
	
	/**/
	public List<BulletinSubject> listAllActive(){
		Query<BulletinSubject> q = ofy().load().type(BulletinSubject.class)
				.filter("isActive", true)
				.order("subjectName");
		List<BulletinSubject> returnList = new ArrayList<BulletinSubject>();
		for ( BulletinSubject bulletinSubject : q ){
			if (bulletinSubject.getProfessor() != null){
				bulletinSubject.setProfName( ofy().load().key(bulletinSubject.getProfessor()).now().getProfName() );
				bulletinSubject.setProfId( Long.toString( bulletinSubject.getProfessor().getId() ));
			}
			bulletinSubject.setSubjectName( ofy().load().key( bulletinSubject.getSubject()).now().getSubjectName() );
			bulletinSubject.setSubjectId( Long.toString(
					ofy().load().key( bulletinSubject.getSubject()).now().getId() ));
			bulletinSubject.setClassId( Long.toString( 
					ofy().load().key( ofy().load().key( bulletinSubject.getBulletin()).now().getClasse() ).now().getId() ));
			returnList.add( bulletinSubject );
		}
		return returnList;
	}
	
	
	/*
	 * */
	public List<BulletinSubject> listAll( String bulletinId ){
		Query<BulletinSubject> q = ofy().load().type(BulletinSubject.class)
				.filter("bulletin", Key.create(Bulletin.class, Long.parseLong( bulletinId )))
				.order("subjectName");
		List<BulletinSubject> returnList = new ArrayList<BulletinSubject>();
		for ( BulletinSubject bulletinSubject : q ){
			//
			if (bulletinSubject.getProfessor() != null){
				bulletinSubject.setProfName( ofy().load().key(bulletinSubject.getProfessor()).now().getProfName() );
				bulletinSubject.setProfId( Long.toString( bulletinSubject.getProfessor().getId() ));
			}
			//
			bulletinSubject.setSubjectName( ofy().load().key( bulletinSubject.getSubject()).now().getSubjectName() );	
			bulletinSubject.setSubjectId( Long.toString(
					ofy().load().key( bulletinSubject.getSubject()).now().getId() ));
			bulletinSubject.setClassId( Long.toString( 
					ofy().load().key( ofy().load().key( bulletinSubject.getBulletin()).now().getClasse() ).now().getId() ));
			//
			returnList.add( calculateTotalBrancheCoef( bulletinSubject.getId().toString() ) );
		}
		return returnList;
	}
	
	
	
	/*
	 * */
	public List<BulletinSubject> listAllByStudent( String studentId ) throws Exception{
		//
		// First load the bulletin of this student
		Query<Bulletin> qBulletin = ofy().load().type( Bulletin.class )
				.filter("student", Key.create( Student.class, Long.parseLong(studentId)))
				.filter("isFinished", false);
		if ( ! (qBulletin.count() > 0) )
			throw new Exception();
		//
		Query<BulletinSubject> q = ofy().load().type(BulletinSubject.class)
				.filter("bulletin", Key.create( Bulletin.class, qBulletin.list().get(0).getId() ));
		List<BulletinSubject> returnList = new ArrayList<BulletinSubject>();
		for ( BulletinSubject bulletinSubject : q ){
			//
			if (bulletinSubject.getProfessor() != null){
				bulletinSubject.setProfName( ofy().load().key(bulletinSubject.getProfessor()).now().getProfName() );
				bulletinSubject.setProfId( Long.toString( bulletinSubject.getProfessor().getId() ));
			}
			//
			bulletinSubject.setSubjectName( ofy().load().key( bulletinSubject.getSubject()).now().getSubjectName() );	
			bulletinSubject.setSubjectId( Long.toString(
					ofy().load().key( bulletinSubject.getSubject()).now().getId() ));
			bulletinSubject.setClassId( Long.toString( 
					ofy().load().key( ofy().load().key( bulletinSubject.getBulletin()).now().getClasse() ).now().getId() ));
			//
			bulletinSubject.setStudentName( qBulletin.list().get(0).getStudentName() );
			bulletinSubject.setStudentId( qBulletin.list().get(0).getStudentId().toString() );
			//
			returnList.add( bulletinSubject );
		}
		return returnList;
	}
	
	
	
	/*
	 * Dans les cas qu'il y a deux us plus profs pour une matière, il faut pas filtrer les bulletin subject par prof
	 * */
	public List<BulletinSubject> listAllByAssignment(String assignmentId) {
		// Get the assignment object
		Assignment assignment = ofy().load().key( Key.create(Assignment.class, Long.parseLong(assignmentId))).now();
		//
		if (assignment != null) {
			// Get the Bulletin list by class
			Query<Bulletin> qBulletin = ofy().load().type(Bulletin.class)
					.filter("classe", assignment.getClasse())
					.filter("isActive", true);
			
			// Get the Bulletin Subject list
			Query<BulletinSubject> q = ofy().load().type(BulletinSubject.class)
					.filter("subject", assignment.getSubject())
					.filter("professor", assignment.getProf())
					.order("subjectName");
			List<BulletinSubject> returnList = new ArrayList<BulletinSubject>();
			for ( BulletinSubject bulletinSubject : q ){
				// Check if this Bulletin Subject belongs to Bulletin list of the class
				for (Bulletin bulletin : qBulletin){
					//
					if (bulletin.getIsFinished().equals(true))
						continue;
					//
					if (bulletinSubject.getBulletin().getId() == bulletin.getId()) {
						//
						if (bulletinSubject.getProfessor() != null){
							bulletinSubject.setProfName( ofy().load().key(bulletinSubject.getProfessor()).now().getProfName() );
							bulletinSubject.setProfId( Long.toString( bulletinSubject.getProfessor().getId() ));
						}
						//
						bulletinSubject.setSubjectName( ofy().load().key( bulletinSubject.getSubject()).now().getSubjectName() );	
						bulletinSubject.setSubjectId( Long.toString(
								ofy().load().key( bulletinSubject.getSubject()).now().getId() ));
						bulletinSubject.setClassId( Long.toString( 
								ofy().load().key( ofy().load().key( bulletinSubject.getBulletin()).now().getClasse() ).now().getId() ));
						//
						bulletinSubject.setStudentName( bulletin.getStudentName() );
						bulletinSubject.setStudentId( bulletin.getStudentId().toString() );
						returnList.add( bulletinSubject );
						break;
					}
				}
			}
			Collections.sort(returnList);
			return returnList;
		}
		return null;
	}
	
	
	/**/
	public void save(BulletinSubject bulletinSubject){
		ofy().save().entities( bulletinSubject );
	}
	
	
	/**/
	public BulletinSubject saveAndReturn(BulletinSubject bulletin){
		//
		Key<BulletinSubject> key = ofy().save().entities(bulletin).now().keySet().iterator().next();
		Double totalT1 = -0.000001;
		Double totalT2 = -0.000001;
		Double totalT3 = -0.000001;
		Double totalT4 = -0.000001;
		//
		Double totalCoefT1 = -0.000001;
		Double totalCoefT2 = -0.000001;
		Double totalCoefT3 = -0.000001;
		Double totalCoefT4 = -0.000001;
		//
		Double examT1 = -0.000001;
		Double examT2 = -0.000001;
		Double examT3 = -0.000001;
		Double examT4 = -0.000001;
		//
		Double coefExam = -0.000001;
		Double totalAn = -0.000001;
		Double avantExam = -0.000001;
		Integer countAn = 0;
		//
		try {
			BulletinSubject ps = ofy().load().key(key).now();
			if (ps.getProfessor() != null)
				ps.setProfName( ofy().load().key(ps.getProfessor()).now().getProfName() );
			ps.setSubjectName( ofy().load().key( ps.getSubject()).now().getSubjectName() );
			ps.setStudentName(ofy().load().key(ps.getBulletin()).now().getStudentName());
			//
			Query<BulletinBranche> qBranche = ofy().load().type(BulletinBranche.class)
					.filter("bulletinSubject", Key.create(BulletinSubject.class, ps.getId()));
			for (BulletinBranche branche : qBranche){
				if (branche.getBulletinBrancheName().toLowerCase().contains("examen") 
						|| branche.getBulletinBrancheName().toLowerCase().contains("bac blanc")){
					if (!branche.getT1().isEmpty()) {
						examT1 = Double.parseDouble(branche.getT1());						
					}
					if (!branche.getT2().isEmpty()) {
						examT2 = Double.parseDouble(branche.getT2());						
					}
					if (!branche.getT3().isEmpty()) {
						examT3 = Double.parseDouble(branche.getT3());						
					}
					if (!branche.getT4().isEmpty()) {
						examT4 = Double.parseDouble(branche.getT4());						
					}
					coefExam = branche.getBrancheCoef();
					//
				} else {
					if (!branche.getT1().isEmpty()){
						if (totalT1 == -0.000001) totalT1 = totalT1 + 0.000001;
						totalT1 = totalT1 + Double.parseDouble(branche.getT1()) * branche.getBrancheCoef();											
						totalCoefT1 = totalCoefT1 + branche.getBrancheCoef();
					}
					if (!branche.getT2().isEmpty()){
						if (totalT2 == -0.000001) totalT2 = totalT2 + 0.000001;						
						totalT2 = totalT2 + Double.parseDouble(branche.getT2()) * branche.getBrancheCoef();
						totalCoefT2 = totalCoefT2 + branche.getBrancheCoef();
					}
					if (!branche.getT3().isEmpty()){
						if (totalT3 == -0.000001) totalT3 = totalT3 + 0.000001;
						totalT3 = totalT3 + Double.parseDouble(branche.getT3()) * branche.getBrancheCoef();
						totalCoefT3 = totalCoefT3 + branche.getBrancheCoef();
					}
					if (!branche.getT4().isEmpty()){
						if (totalT4 == -0.000001) totalT4 = totalT4 + 0.000001;
						totalT4 = totalT4 + Double.parseDouble(branche.getT4()) * branche.getBrancheCoef();
						totalCoefT4 = totalCoefT4 + branche.getBrancheCoef();
					}
				}
			}
			//
			String programmeName = ofy().load().key(
					ofy().load().key(
							ofy().load().key(ps.getBulletin()).now().getClasse()).now().getProgramme()).now()
								.getCoursNom().toLowerCase();
			String className = ofy().load().key( 
					ofy().load().key( ps.getBulletin() ).now().getClasse()).now().getClassName();
			//
			if (totalCoefT1 > -0.000001) totalCoefT1 = totalCoefT1 + 0.000001;
			if (totalCoefT2 > -0.000001) totalCoefT2 = totalCoefT2 + 0.000001;
			if (totalCoefT3 > -0.000001) totalCoefT3 = totalCoefT3 + 0.000001;
			if (totalCoefT4 > -0.000001) totalCoefT4 = totalCoefT4 + 0.000001;
			if (coefExam > -0.000001) coefExam = coefExam + 0.000001;
			//
			if (programmeName.contains("matu")){
				if (className.toLowerCase().contains("prématurité")){
					if (totalT1>=0 && examT1>=0)
						ps.setT1( Double.toString(((double)Math.round((totalT1+(examT1*coefExam))/(totalCoefT1+coefExam)*10))/10) );
					if (totalT1>=0 && examT1<0)
						ps.setT1( Double.toString(((double)Math.round(totalT1/totalCoefT1*10))/10 ));
					if (totalT1<0 && examT1>=0)
						ps.setT1( Double.toString(((double)Math.round(examT1*10))/10 ));
					if (totalT1<0 && examT1<0)
						ps.setT1("");
					
					if (totalT2>=0 && examT2>=0)
						ps.setT2( Double.toString(((double)Math.round((totalT2+(examT2*coefExam))/(totalCoefT2+coefExam)*10))/10) );
					if (totalT2>=0 && examT2<0)
						ps.setT2( Double.toString(((double)Math.round(totalT2/totalCoefT2*10))/10 ));
					if (totalT2<0 && examT1>=0)
						ps.setT2( Double.toString(((double)Math.round(examT2*10))/10 ));
					if (totalT2<0 && examT2<0)
						ps.setT2("");
					
					if (totalT3>=0 && examT3>=0)
						ps.setT3( Double.toString(((double)Math.round((totalT3+(examT3*coefExam))/(totalCoefT3+coefExam)*10))/10) );
					if (totalT3>=0 && examT3<0)
						ps.setT3( Double.toString(((double)Math.round(totalT3/totalCoefT3*10))/10 ));
					if (totalT3<0 && examT3>=0)
						ps.setT3( Double.toString(((double)Math.round(examT3*10))/10 ));
					if (totalT3<0 && examT3<0)
						ps.setT3("");
					
					if (totalT4>=0 && examT4>=0)
						ps.setT4( Double.toString(((double)Math.round((totalT4+(examT4*coefExam))/(totalCoefT4+coefExam)*10))/10) );
					if (totalT4>=0 && examT4<0)
						ps.setT4( Double.toString(((double)Math.round(totalT4/totalCoefT4*10))/10 ));
					if (totalT4<0 && examT4>=0)
						ps.setT4( Double.toString(((double)Math.round(examT4*10))/10 ));
					if (totalT4<0 && examT4<0)
						ps.setT4("");
					
					if (!ps.getT1().isEmpty()) { totalAn = totalAn + Double.parseDouble(ps.getT1()); countAn++; }
					if (!ps.getT2().isEmpty()) { totalAn = totalAn + Double.parseDouble(ps.getT2()); countAn++; }
					if (!ps.getT3().isEmpty()) { totalAn = totalAn + Double.parseDouble(ps.getT3()); countAn++; }
					if (!ps.getT4().isEmpty()) { totalAn = totalAn + Double.parseDouble(ps.getT4()); countAn++; }
					if (countAn>0)
						ps.setAn( Double.toString(((double)Math.round(totalAn/countAn*10))/10) );
					else
						ps.setAn("");
				}
				else {
					if (totalT1>=0 && examT1>=0) {
						totalT1 = totalT1 + (examT1 * coefExam);
						totalCoefT1 = totalCoefT1 + coefExam;
						ps.setT1( Double.toString( ((double)Math.round(totalT1/totalCoefT1*10))/10 ) );
					}
					if (totalT1>=0 && examT1<0)
						ps.setT1( Double.toString(((double)Math.round(totalT1/totalCoefT1*10))/10 ));
					if (totalT1<0 && examT1>=0)
						ps.setT1("");
					if (totalT1<0 && examT1<0)
						ps.setT1("");
					
					if (totalT2>=0 && totalT1>=0) {
						ps.setT2( Double.toString( ((double)Math.round((totalT2/totalCoefT2)*10))/10) );
						avantExam = ((double)Math.round(((totalT2/totalCoefT2)+(totalT1/totalCoefT1))/2*10))/10;
					}
					if (totalT2>=0 && totalT1<0) {
						ps.setT2( Double.toString(((double)Math.round(totalT2/totalCoefT2*10))/10 ));
						avantExam = ((double)Math.round(totalT2/totalCoefT2*10))/10;
					}
					if (totalT2<0 && totalT1>=0) { 
						ps.setT2("");
						avantExam = ((double)Math.round((totalT1/totalCoefT1)*10))/10;
					}
					if (totalT2<0 && totalT1<0) {
						ps.setT2("");
						avantExam = -0.001;
					}
					
					if (avantExam>=0 && examT2>=0)
						ps.setAn( Double.toString(((double)Math.round((avantExam+examT2)/2*10))/10) );
					if (avantExam>=0 && examT2<0)
						ps.setAn( Double.toString(avantExam) );
					if (avantExam<0 && examT2>=0)
						ps.setAn( Double.toString(((double)Math.round(examT2*10))/10 ));
					if (avantExam<0 && examT2<0)
						ps.setAn("");
					
					ps.setT3("");
					ps.setExamT3("");
				}
			}
			//
			if (programmeName.contains("bacc")){
				if (totalT1>=0 && examT1>=0)
					ps.setT1( Double.toString(((double)Math.round((totalT1+(examT1*coefExam))/(totalCoefT1+coefExam)*10))/10) );
				if (totalT1>=0 && examT1<0)
					ps.setT1( Double.toString(((double)Math.round(totalT1/totalCoefT1*10))/10 ));
				if (totalT1<0 && examT1>=0)
					ps.setT1( Double.toString(((double)Math.round(examT1*10))/10 ));
				if (totalT1<0 && examT1<0)
					ps.setT1("");
				
				if (totalT2>=0 && examT2>=0)
					ps.setT2( Double.toString(((double)Math.round((totalT2+(examT2*coefExam))/(totalCoefT2+coefExam)*10))/10) );
				if (totalT2>=0 && examT2<0)
					ps.setT2( Double.toString(((double)Math.round(totalT2/totalCoefT2*10))/10 ));
				if (totalT2<0 && examT1>=0)
					ps.setT2( Double.toString(((double)Math.round(examT2*10))/10 ));
				if (totalT2<0 && examT2<0)
					ps.setT2("");
				
				if (totalT3>=0 && examT3>=0)
					ps.setT3( Double.toString(((double)Math.round((totalT3+(examT3*coefExam))/(totalCoefT3+coefExam)*10))/10) );
				if (totalT3>=0 && examT3<0)
					ps.setT3( Double.toString(((double)Math.round(totalT3/totalCoefT3*10))/10 ));
				if (totalT3<0 && examT3>=0)
					ps.setT3( Double.toString(((double)Math.round(examT3*10))/10 ));
				if (totalT3<0 && examT3<0)
					ps.setT3("");
				
				if (!ps.getT1().isEmpty()) { totalAn = totalAn + Double.parseDouble(ps.getT1()); countAn++; }
				if (!ps.getT2().isEmpty()) { totalAn = totalAn + Double.parseDouble(ps.getT2());  countAn++; }
				if (!ps.getT3().isEmpty()) { totalAn = totalAn + Double.parseDouble(ps.getT3()); countAn++; }
				if (countAn>0)
					ps.setAn( Double.toString(((double)Math.round(totalAn/countAn*10))/10) );
				else
					ps.setAn("");
			}	
			//
			if (programmeName.contains("second")){
				if (totalT1>=0 && examT1>=0)
					ps.setT1( Double.toString(((double)Math.round((totalT1+(examT1*coefExam))/(totalCoefT1+coefExam)*10))/10) );
				if (totalT1>=0 && examT1<0)
					ps.setT1( Double.toString(((double)Math.round(totalT1/totalCoefT1*10))/10 ));
				if (totalT1<0 && examT1>=0)
					ps.setT1( Double.toString(((double)Math.round(examT1*10))/10 ));
				if (totalT1<0 && examT1<0)
					ps.setT1("");
				
				if (totalT2>=0 && examT2>=0)
					ps.setT2( Double.toString(((double)Math.round((totalT2+(examT2*coefExam))/(totalCoefT2+coefExam)*10))/10) );
				if (totalT2>=0 && examT2<0)
					ps.setT2( Double.toString(((double)Math.round(totalT2/totalCoefT2*10))/10 ));
				if (totalT2<0 && examT1>=0)
					ps.setT2( Double.toString(((double)Math.round(examT2*10))/10 ));
				if (totalT2<0 && examT2<0)
					ps.setT2("");
				
				if (totalT3>=0 && examT3>=0)
					ps.setT3( Double.toString(((double)Math.round((totalT3+(examT3*coefExam))/(totalCoefT3+coefExam)*10))/10) );
				if (totalT3>=0 && examT3<0)
					ps.setT3( Double.toString(((double)Math.round(totalT3/totalCoefT3*10))/10 ));
				if (totalT3<0 && examT3>=0)
					ps.setT3( Double.toString(((double)Math.round(examT3*10))/10 ));
				if (totalT3<0 && examT3<0)
					ps.setT3("");
				
				if (!ps.getT1().isEmpty()) { totalAn = totalAn + Double.parseDouble(ps.getT1()); countAn++; }
				if (!ps.getT2().isEmpty()) { totalAn = totalAn + Double.parseDouble(ps.getT2());  countAn++; }
				if (!ps.getT3().isEmpty()) { totalAn = totalAn + Double.parseDouble(ps.getT3()); countAn++; }
				if (countAn>0)
					ps.setAn( Double.toString(((double)Math.round(totalAn/countAn*10))/10) );
				else
					ps.setAn("");
			}
			
			//
			if (examT1>=0)
				ps.setExamT1(Double.toString(examT1));
			else
				ps.setExamT1("");
			//
			if (examT2>=0)
				ps.setExamT2(Double.toString(examT2));
			else
				ps.setExamT2("");
			//
			if (examT3>=0)
				ps.setExamT3(Double.toString(examT3));
			else
				ps.setExamT3("");
			//
			if (examT4>=0)
				ps.setExamT4(Double.toString(examT4));
			else
				ps.setExamT4("");
			
			//
			ofy().save().entities(ps);
			return ps;
			//
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	/*
	 * */
	public BulletinSubject saveAndReturn(String bulletinId, String subjectId, String professorId, String subjectCoef ) {
		//
		BulletinSubject ps = new BulletinSubject();
		ps.setBulletin( Key.create( Bulletin.class, Long.parseLong(bulletinId)));
		ps.setSubject(Key.create( Subject.class, Long.parseLong(subjectId)));
		ps.setProfessor( Key.create(Professor.class, Long.parseLong(professorId)));
		
		ps.setSubjectName( ofy().load().key( ps.getSubject()).now().getSubjectName() );
		ps.setProfName( ofy().load().key(ps.getProfessor()).now().getProfName());
		ps.setSubjectCoef( Double.parseDouble(subjectCoef));
		
		Key<BulletinSubject> key = ofy().save().entities( ps ).now().keySet().iterator().next();
		
		// Save the related branches
		BulletinBranche curBulletinBranche;		
		//
		Profile profile;
		Bulletin bulletin = ofy().load().key(ps.getBulletin()).now();
		if ( bulletin.getProfile() != null ) {
			profile = ofy().load().key( bulletin.getProfile() ).now();
		} else {
			Query<Profile> profiles = ofy().load().type(Profile.class)
					.filter("classe", bulletin.getClasse());
			profile = profiles.list().get(0);
		}
		//
		Query<ProfileSubject> profileSubjects = ofy().load().type(ProfileSubject.class)
				.filter("profile", profile)
				.filter("subject", ps.getSubject())
				.filter("professor", ps.getProfessor());
		//
		Query<ProfileBranche> profileBranches = ofy().load().type(ProfileBranche.class)
				.filter("profileSubject", profileSubjects.keys().list().get(0));
		//
		for (ProfileBranche profileBranche : profileBranches) {
			curBulletinBranche = new BulletinBranche();
			curBulletinBranche.setBulletinBranche( profileBranche.getProfileBranche() );
			curBulletinBranche.setBrancheCoef( profileBranche.getBrancheCoef() );
			curBulletinBranche.setBulletinBrancheName( profileBranche.getProfileBrancheName() );
			curBulletinBranche.setBulletinSubject( key );
			ofy().save().entities(curBulletinBranche);
			//
			ps.setTotalBrancheCoef( ps.getTotalBrancheCoef() + profileBranche.getBrancheCoef() );
		}		
		//
		ofy().save().entities( ps );
		//
		try {
			return ofy().load().key(key).now();
		} catch ( Exception e ) {
			throw new RuntimeException(e);
		}
	}
	
	
	/*
	 * */
	public Boolean removeProfileSubject(BulletinSubject bulletinSubject) {
		//
		Query<BulletinBranche> q = ofy().load().type(BulletinBranche.class)
				.filter("bulletinSubject", Key.create(BulletinSubject.class, bulletinSubject.getId()));
		if (q.count() > 0)
			return false;
		else {
			ofy().delete().entities(bulletinSubject);
			return true;
		}
	}
	
	
	/*
	 * */
	public BulletinSubject calculateTotalBrancheCoef(String bulletinSubjectId) {
		//
		BulletinSubject ps = ofy().load().key( Key.create(BulletinSubject.class, Long.parseLong(bulletinSubjectId)) ).now();
		Query<BulletinBranche> q = ofy().load().type(BulletinBranche.class)
				.filter("bulletinSubject", Key.create( BulletinSubject.class, Long.parseLong(bulletinSubjectId)) )
				.order("bulletinBrancheName");
		ps.setTotalBrancheCoef(0.0);
		for ( BulletinBranche profileBranche : q ){
			ps.setTotalBrancheCoef( ps.getTotalBrancheCoef() + profileBranche.getBrancheCoef() );
		}
		ofy().save().entities( ps );
		return ps;
	}
	
	
	/*
	 * */
	public BulletinSubject updateBulletinSubjectProf( BulletinSubject bs, String profId ) {
		//
		Key<Professor> kf = Key.create(Professor.class, Long.parseLong(profId));
		bs.setProfessor( kf );
		bs.setProfName( ofy().load().key( kf ).now().getProfName() );
		//
		Key<BulletinSubject> key = ofy().save().entities( bs ).now().keySet().iterator().next();
		//
		try {
			return ofy().load().key(key).now();
		} catch ( Exception e ) {
			throw new RuntimeException(e);
		}
	}

}
