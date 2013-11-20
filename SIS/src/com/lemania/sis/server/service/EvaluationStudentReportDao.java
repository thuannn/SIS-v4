package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.sis.server.Bulletin;
import com.lemania.sis.server.EvaluationHeader;
import com.lemania.sis.server.EvaluationStudentReport;

public class EvaluationStudentReportDao extends MyDAOBase {
	/*
	 * */
	public List<EvaluationStudentReport> listAll(){
		//
		Query<EvaluationStudentReport> q = this.ofy().query(EvaluationStudentReport.class);
		List<EvaluationStudentReport> returnList = new ArrayList<EvaluationStudentReport>();
		for (EvaluationStudentReport evaluationReport : q){
			returnList.add( evaluationReport );
		}
		return returnList;
	}
	
	/*
	 * */
	public void save(EvaluationStudentReport evaluationReport){
		this.ofy().put( evaluationReport );
	}
	
	/*
	 * */
	public void save( String bulletinId, String evaluationHeaderId, String commentaire ) {
		//
		Query<EvaluationStudentReport> q = this.ofy().query(EvaluationStudentReport.class)
				.filter("student", this.ofy().get(new Key<Bulletin>(Bulletin.class, Long.parseLong(bulletinId))).getStudent())
				.filter("evaluationHeader",  new Key<EvaluationHeader>(EvaluationHeader.class, Long.parseLong(evaluationHeaderId)));
		EvaluationStudentReport report;
		if (q.count()>0) {
			report = q.list().get(0);
			report.setEvaluationNote(commentaire);
		} else {
			report = new EvaluationStudentReport();
			report.setEvaluationHeader( new Key<EvaluationHeader>(EvaluationHeader.class, Long.parseLong(evaluationHeaderId)) );
			report.setStudent( this.ofy().get(new Key<Bulletin>(Bulletin.class, Long.parseLong(bulletinId))).getStudent() );
			report.setEvaluationNote(commentaire);
		}
		this.ofy().put(report);
	}
	
	/*
	 * */
	public EvaluationStudentReport load( String bulletinId, String evaluationHeaderId ){
		//
		Query<EvaluationStudentReport> q = this.ofy().query(EvaluationStudentReport.class)
				.filter("student", this.ofy().get(new Key<Bulletin>(Bulletin.class, Long.parseLong(bulletinId))).getStudent())
				.filter("evaluationHeader",  new Key<EvaluationHeader>(EvaluationHeader.class, Long.parseLong(evaluationHeaderId)));		
		if (q.count()>0)
			return q.list().get(0);
		else
			return null;
	}
	
	/*
	 * */
	public EvaluationStudentReport saveAndReturn(EvaluationStudentReport evaluationReport){
		Key<EvaluationStudentReport> key = this.ofy().put( evaluationReport );
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}
