package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.sis.server.Assignment;
import com.lemania.sis.server.Bulletin;
import com.lemania.sis.server.BulletinSubject;
import com.lemania.sis.server.Classe;
import com.lemania.sis.server.EvaluationHeader;
import com.lemania.sis.server.EvaluationSubject;
import com.lemania.sis.shared.EvaluationSubjectProxy;

public class EvaluationSubjectDao extends MyDAOBase {
	
	/*
	 * */
	public List<EvaluationSubject> listAll(){
		//
		Query<EvaluationSubject> q = this.ofy().query(EvaluationSubject.class);
		List<EvaluationSubject> returnList = new ArrayList<EvaluationSubject>();
		for (EvaluationSubject evaluationSubject : q){
			returnList.add( evaluationSubject );
		}
		return returnList;
	}
	
	/*
	 * */
	public void save(EvaluationSubject evaluationSubject){
		this.ofy().put( evaluationSubject );
	}
	
	/*
	 * */
	public EvaluationSubject saveAndReturn(EvaluationSubject evaluationSubject){
		Key<EvaluationSubject> key = this.ofy().put(evaluationSubject);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	/*
	 * */
	public List<EvaluationSubject> populateEvaluationSubjects(String profId, String assignmentId, String evaluationHeaderId) {
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
			//
			Query<EvaluationSubject> currentES = null;
			List<EvaluationSubject> returnList = new ArrayList<EvaluationSubject>();
			EvaluationSubject curES = null;
			//
			for ( BulletinSubject bulletinSubject : q ){
				// Check if this Bulletin Subject belongs to Bulletin list of the class
				for (Bulletin bulletin : qBulletin){
					if (bulletinSubject.getBulletin().getId() == bulletin.getId()) {
												
						currentES = this.ofy().query(EvaluationSubject.class)
								.filter("subject", bulletinSubject.getSubject())
								.filter("classe", assignment.getClasse())
								.filter("prof", assignment.getProf())
								.filter("student", bulletin.getStudent())
								.filter("evaluationHeader", new Key<EvaluationHeader>(EvaluationHeader.class, Long.parseLong(evaluationHeaderId)));
						if ( currentES.count() > 0 )
							curES = currentES.list().get(0);
						else {
							curES = new EvaluationSubject();
							curES.setSubject( bulletinSubject.getSubject() );
							curES.setClasse( assignment.getClasse() );
							curES.setProf( assignment.getProf() );
							curES.setStudent( bulletin.getStudent() );
							curES.setEvaluationHeader( new Key<EvaluationHeader>(EvaluationHeader.class, Long.parseLong(evaluationHeaderId)) );
							
							curES.setStudentName( bulletin.getStudentName() );
							curES.setSubjectName( bulletinSubject.getSubjectName() );
							curES.setProfessorName( bulletinSubject.getProfName() );
						}
						//
						returnList.add( curES );						
					}
				}				
			}
			if (currentES.count() <= 0)
				this.ofy().put(returnList);
			
			return returnList;
		}
		return null;		
	}
	
	/*
	 * */
	public void removeEvaluationSubject(EvaluationSubject evaluationSubject){
		this.ofy().delete(evaluationSubject);
	}	

	/*
	 * */
	public List<EvaluationSubject> listAllByStudent(String classId, String bulletinId, String evaluationHeaderId) {
		//
		Query<EvaluationSubject> q = this.ofy().query(EvaluationSubject.class)
				.filter("classe", new Key<Classe>(Classe.class, Long.parseLong(classId)))
				.filter("student", this.ofy().get(new Key<Bulletin>(Bulletin.class, Long.parseLong(bulletinId))).getStudent())
				.filter("evaluationHeader", new Key<EvaluationHeader>(EvaluationHeader.class, Long.parseLong(evaluationHeaderId)))
				.order("subjectName");
		List<EvaluationSubject> returnList = new ArrayList<EvaluationSubject>();
		for (EvaluationSubject evaluationSubject : q){
			returnList.add( evaluationSubject );
		}
		return returnList;		
	}
}
