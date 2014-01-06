package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.lemania.sis.server.Assignment;
import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.sis.server.BulletinBranche;
import com.lemania.sis.server.Professor;
import com.lemania.sis.server.Bulletin;
import com.lemania.sis.server.BulletinSubject;
import com.lemania.sis.server.Profile;
import com.lemania.sis.server.ProfileBranche;
import com.lemania.sis.server.ProfileSubject;
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
			//
			if (bulletinSubject.getProfessor() != null)
				bulletinSubject.setProfName( this.ofy().get(bulletinSubject.getProfessor()).getProfName() );
			//
			bulletinSubject.setSubjectName( this.ofy().get( bulletinSubject.getSubject()).getSubjectName() );						
			//
			returnList.add( calculateTotalBrancheCoef( bulletinSubject.getId().toString() ) );
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
					.filter("classe", assignment.getClasse())
					.filter("isActive", true);
			
			// Get the Bulletin Subject list
			Query<BulletinSubject> q = this.ofy().query(BulletinSubject.class)
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
						bulletinSubject.setStudentName(bulletin.getStudentName());
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
		this.ofy().put( bulletinSubject );
	}
	
	
	/**/
	public BulletinSubject saveAndReturn(BulletinSubject bulletin){
		//
		Key<BulletinSubject> key = this.ofy().put(bulletin);
		Double totalT1 = -0.000001;
		Double totalT2 = -0.000001;
		Double totalT3 = -0.000001;
		Double totalCoefT1 = -0.000001;
		Double totalCoefT2 = -0.000001;
		Double totalCoefT3 = -0.000001;
		Double examT1 = -0.000001;
		Double examT2 = -0.000001;
		Double examT3 = -0.000001;
		Double coefExam = -0.000001;
		Double totalAn = -0.000001;
		Double avantExam = -0.000001;
		Integer countAn = 0;
		//
		try {
			BulletinSubject ps = this.ofy().get(key);
			if (ps.getProfessor() != null)
				ps.setProfName( this.ofy().get(ps.getProfessor()).getProfName() );
			ps.setSubjectName( this.ofy().get( ps.getSubject()).getSubjectName() );
			ps.setStudentName(this.ofy().get(ps.getBulletin()).getStudentName());
			//
			Query<BulletinBranche> qBranche = this.ofy().query(BulletinBranche.class)
					.filter("bulletinSubject", new Key<BulletinSubject>(BulletinSubject.class, ps.getId()));
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
				}
			}
			//
			String programmeName = this.ofy().get(
					this.ofy().get(
							this.ofy().get(ps.getBulletin()).getClasse()).getProgramme()).getCoursNom().toLowerCase();
			//
			if (totalCoefT1 > -0.000001) totalCoefT1 = totalCoefT1 + 0.000001;
			if (totalCoefT2 > -0.000001) totalCoefT2 = totalCoefT2 + 0.000001;
			if (totalCoefT3 > -0.000001) totalCoefT3 = totalCoefT3 + 0.000001;
			if (coefExam > -0.000001) coefExam = coefExam + 0.000001;			
			//
			if (programmeName.contains("matu")){
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
			this.ofy().put(ps);
			return ps;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	/*
	 * */
	public BulletinSubject saveAndReturn(String bulletinId, String subjectId, String professorId, String subjectCoef ) {
		//
		BulletinSubject ps = new BulletinSubject();
		ps.setBulletin( new Key<Bulletin>( Bulletin.class, Long.parseLong(bulletinId)));
		ps.setSubject(new Key<Subject>( Subject.class, Long.parseLong(subjectId)));
		ps.setProfessor( new Key<Professor>(Professor.class, Long.parseLong(professorId)));
		
		ps.setSubjectName( this.ofy().get( ps.getSubject()).getSubjectName() );
		ps.setProfName( this.ofy().get(ps.getProfessor()).getProfName());
		ps.setSubjectCoef( Double.parseDouble(subjectCoef));
		
		Key<BulletinSubject> key = this.ofy().put( ps );
		
		// Save the related branches
		BulletinBranche curBulletinBranche;		
		//
		Profile profile;
		Bulletin bulletin = this.ofy().get(ps.getBulletin());
		if ( bulletin.getProfile() != null ) {
			profile = this.ofy().get( bulletin.getProfile() );
		} else {
			Query<Profile> profiles = this.ofy().query(Profile.class)
					.filter("classe", bulletin.getClasse());
			profile = profiles.list().get(0);
		}
		//
		Query<ProfileSubject> profileSubjects = this.ofy().query(ProfileSubject.class)
				.filter("profile", profile)
				.filter("subject", ps.getSubject())
				.filter("professor", ps.getProfessor());
		//
		Query<ProfileBranche> profileBranches = this.ofy().query(ProfileBranche.class)
				.filter("profileSubject", profileSubjects.listKeys().get(0));
		//
		for (ProfileBranche profileBranche : profileBranches) {
			curBulletinBranche = new BulletinBranche();
			curBulletinBranche.setBulletinBranche( profileBranche.getProfileBranche() );
			curBulletinBranche.setBrancheCoef( profileBranche.getBrancheCoef() );
			curBulletinBranche.setBulletinBrancheName( profileBranche.getProfileBrancheName() );
			curBulletinBranche.setBulletinSubject( key );
			this.ofy().put(curBulletinBranche);
			//
			ps.setTotalBrancheCoef( ps.getTotalBrancheCoef() + profileBranche.getBrancheCoef() );
		}		
		//
		this.ofy().put( ps );
		//
		try {
			return this.ofy().get(key);
		} catch ( Exception e ) {
			throw new RuntimeException(e);
		}
	}
	
	
	/*
	 * */
	public Boolean removeProfileSubject(BulletinSubject bulletinSubject) {
		//
		Query<BulletinBranche> q = this.ofy().query(BulletinBranche.class)
				.filter("bulletinSubject", new Key<BulletinSubject>(BulletinSubject.class, bulletinSubject.getId()));
		if (q.count() > 0)
			return false;
		else {
			this.ofy().delete(bulletinSubject);
			return true;
		}
	}
	
	
	/*
	 * */
	public BulletinSubject calculateTotalBrancheCoef(String bulletinSubjectId) {
		//
		BulletinSubject ps = this.ofy().get( new Key<BulletinSubject>(BulletinSubject.class, Long.parseLong(bulletinSubjectId)) );
		Query<BulletinBranche> q = this.ofy().query(BulletinBranche.class)
				.filter("bulletinSubject", new Key<BulletinSubject>( BulletinSubject.class, Long.parseLong(bulletinSubjectId)) )
				.order("bulletinBrancheName");
		ps.setTotalBrancheCoef(0.0);
		for ( BulletinBranche profileBranche : q ){
			ps.setTotalBrancheCoef( ps.getTotalBrancheCoef() + profileBranche.getBrancheCoef() );
		}
		this.ofy().put( ps );
		return ps;
	}

}
