package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.sis.server.Classe;
import com.lemania.sis.server.EvaluationHeader;
import com.lemania.sis.server.Professor;

public class EvaluationHeaderDao extends MyDAOBase {
	/*
	 * */
	public List<EvaluationHeader> listAll(){
		//
		Query<EvaluationHeader> q = this.ofy().query(EvaluationHeader.class);
		List<EvaluationHeader> returnList = new ArrayList<EvaluationHeader>();
		for (EvaluationHeader evaluationHeader : q){
			returnList.add( evaluationHeader );
		}
		return returnList;
	}
	
	/*
	 * */
	public List<EvaluationHeader> listAllByClass(String classId){
		//
		Query<EvaluationHeader> q = this.ofy().query(EvaluationHeader.class)
				.filter("classe", new Key<Classe>(Classe.class, Long.parseLong(classId)));
		List<EvaluationHeader> returnList = new ArrayList<EvaluationHeader>();
		for (EvaluationHeader evaluationHeader : q){
			returnList.add( evaluationHeader );
		}
		return returnList;
	}
	
	/*
	 * */
	public void save(EvaluationHeader evaluationHeader){
		this.ofy().put(evaluationHeader);
	}
	
	/*
	 * */
	public EvaluationHeader saveAndReturn(EvaluationHeader evaluationHeader){
		Key<EvaluationHeader> key = this.ofy().put(evaluationHeader);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	/*
	 * */
	public EvaluationHeader saveAndReturn(String fromDate, String toDate, String objective, String schoolYear, String classMasterId, String classId) {
		EvaluationHeader evaluationHeader = new EvaluationHeader();
		evaluationHeader.setFromDate(fromDate);
		evaluationHeader.setToDate(toDate);
		evaluationHeader.setObjective(objective);
		evaluationHeader.setSchoolYear(schoolYear);
		evaluationHeader.setClasse(new Key<Classe>(Classe.class, Long.parseLong(classId)));
		evaluationHeader.setClassMaster(new Key<Professor>(Professor.class, Long.parseLong(classMasterId)));
		
		Key<EvaluationHeader> key = this.ofy().put(evaluationHeader);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	/*
	 * */
	public void removeEvaluationHeader(EvaluationHeader evaluationHeader){
		this.ofy().delete(evaluationHeader);
	}	
}
