package com.lemania.sis.server.bean.absenceitem;

import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.cmd.Query;
import com.lemania.sis.server.Classe;
import com.lemania.sis.server.Professor;
import com.lemania.sis.server.Subject;
import com.lemania.sis.server.bean.motifabsence.MotifAbsence;
import com.lemania.sis.server.bean.period.Period;
import com.lemania.sis.server.bean.student.Student;
import com.lemania.sis.server.service.MyDAOBase;

public class AbsenceItemDao extends MyDAOBase {

	public void initialize(){
		return;
	}
	
	/*
	 * */
	public List<AbsenceItem> listAll(){
		//
		Query<AbsenceItem> q = ofy().load().type(AbsenceItem.class);
		List<AbsenceItem> returnList = q.list();
		for ( AbsenceItem ai : q ) {
			populateIDs( ai );
		}
		return returnList;
	}
	

	/*
	 * */
	public void save(AbsenceItem ai){
		ofy().save().entities( ai );
	}
	
	
	/*
	 * */
	public AbsenceItem saveAbsenceItem(
			String studentId,
			String periodId,
			String profId,
			String classId,
			String subjectId, 
			String motifId,
			String codeAbsence,
			String profComment,
			int lateMinute,
			boolean justified,
			boolean parentNotified ) {
		//
		AbsenceItem returnAI = new AbsenceItem();
		returnAI.setKeyStudent( Key.create(Student.class, Long.parseLong(studentId)));
		returnAI.setKeyPeriod( Key.create(Period.class, Long.parseLong(periodId)));
		returnAI.setKeyProf( Key.create(Professor.class, Long.parseLong(profId)));
		returnAI.setKeyClasse( Key.create(Classe.class, Long.parseLong(classId)));
		returnAI.setKeySubject( Key.create(Subject.class, Long.parseLong(subjectId)));
		if ( !motifId.equals("") )
			returnAI.setKeyMotif( Key.create(MotifAbsence.class, Long.parseLong(motifId)));
		returnAI.setCodeAbsenceType(codeAbsence);
		returnAI.setProfComment(profComment);
		returnAI.setLateMinutes(lateMinute);
		returnAI.setJusttified(justified);
		returnAI.setParentNotified(parentNotified);
		//
		Key<AbsenceItem> key = ofy().save().entities( returnAI ).now().keySet().iterator().next();
		try {
			returnAI = ofy().load().key(key).now();
			populateIDs( returnAI );
			return returnAI;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	/*
	 * */
	public AbsenceItem saveAndReturn(AbsenceItem ai){
		//
		AbsenceItem returnAI;
		Key<AbsenceItem> key = ofy().save().entities( ai ).now().keySet().iterator().next();
		try {
			returnAI = ofy().load().key(key).now();
			populateIDs( returnAI );
			
			return returnAI;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	/*
	 * */
	public void removeAbsenceItem(AbsenceItem ai){
		ofy().delete().entities(ai);
	}
	
	
	/*
	 * */
	public void removeAbsenceItem(String aiID){
		ofy().delete().entities( ofy().load().key( Key.create(AbsenceItem.class, Long.parseLong(aiID))).now() );
	}
	
	
	/*
	 * */
	private void populateIDs(AbsenceItem ai) {
		//
		ai.setStudentId( Long.toString( ai.getKeyStudent().getId() ));
		ai.setPeriodId( Long.toString( ai.getKeyPeriod().getId() ));
	}
	
}
