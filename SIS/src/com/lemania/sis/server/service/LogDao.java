package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.List;
import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.sis.server.Cours;
import com.lemania.sis.server.Log;
import com.lemania.sis.server.LogType;
import com.lemania.sis.server.Professor;

/**
 * @author Thuan
 *
 */
public class LogDao extends MyDAOBase {
	
	public void initialize(){
		return;
	}
	
	public List<Log> listAll(){
		Query<Log> q = this.ofy().query(Log.class).order("type");
		List<Log> returnList = new ArrayList<Log>();
		for (Log log : q){
			log.setTypeName( this.ofy().get(log.getLogType()).getLogTypeName() );
			returnList.add(log);
		}
		
		java.util.Collections.sort(returnList);
		return returnList;
	}
	
	public List<Log> listAllFullDetail(){
		Query<Log> q = this.ofy().query(Log.class)
				.order("prof")
				.order("year")
				.order("month")
				.order("cours");
				
		List<Log> returnList = new ArrayList<Log>();
		for (Log log : q){
			if ( !this.ofy().get(log.getProf()).getProfActive() )
				continue;
			
//			log.setTypeName( this.ofy().get(log.getLogType()).getLogTypeName() );
//			log.setProfName( this.ofy().get(log.getProf()).getProfName());
//			log.setCourseName( this.ofy().get(log.getCours()).getCoursNom() );
//			log.setSchoolName( this.ofy().get( this.ofy().get(log.getCours()).getEcole()).getSchoolName() );
			
			returnList.add(log);
		}
		
		java.util.Collections.sort(returnList);
		return returnList;
	}
	
	public List<Log> listAllFullDetailByMonth(int selectedYear, int selectedMonth){
		Query<Log> q = this.ofy().query(Log.class)
				.filter("year", selectedYear)
				.filter("month", selectedMonth)
				.order("prof")
				.order("cours");
		
		List<Log> returnList = new ArrayList<Log>();
		for (Log log : q){
			if ( !this.ofy().get(log.getProf()).getProfActive() )
				continue;
			
//			log.setTypeName( this.ofy().get(log.getLogType()).getLogTypeName() );
//			log.setProfName( this.ofy().get(log.getProf()).getProfName());
//			log.setCourseName( this.ofy().get(log.getCours()).getCoursNom() );
//			log.setSchoolName( this.ofy().get( this.ofy().get(log.getCours()).getEcole()).getSchoolName() );
			
			returnList.add(log);
		}
		
		// Sort by ProfName
		java.util.Collections.sort(returnList);
		return returnList;
	}
	
	public List<Log> listAllFullDetailByDepartment(String deptId){
		Query<Log> q = this.ofy().query(Log.class)
				.filter("cours",new Key<Cours>(Cours.class, Long.parseLong(deptId)))
				.order("prof")
				.order("year")
				.order("month")
				.order("cours");
		
		List<Log> returnList = new ArrayList<Log>();
		for (Log log : q){
			if ( !this.ofy().get(log.getProf()).getProfActive() )
				continue;
			
//			log.setTypeName( this.ofy().get(log.getLogType()).getLogTypeName() );
//			log.setProfName( this.ofy().get(log.getProf()).getProfName());
//			log.setCourseName( this.ofy().get(log.getCours()).getCoursNom() );
//			log.setSchoolName( this.ofy().get( this.ofy().get(log.getCours()).getEcole()).getSchoolName() );
			
			returnList.add(log);
		}
		
		java.util.Collections.sort(returnList);
		return returnList;
	}
	
	public List<Log> listAllFullDetailByProf(String profId){
		Query<Log> q = this.ofy().query(Log.class)
				.filter("prof",new Key<Professor>(Professor.class, Long.parseLong(profId)))
				.order("year")
				.order("month")
				.order("cours");
		
		List<Log> returnList = new ArrayList<Log>();
		for (Log log : q){
			
//			log.setTypeName( this.ofy().get(log.getLogType()).getLogTypeName() );
//			log.setCourseName( this.ofy().get(log.getCours()).getCoursNom() );						
//			log.setProfName( this.ofy().get(log.getProf()).getProfName());
//			log.setSchoolName( this.ofy().get( this.ofy().get(log.getCours()).getEcole()).getSchoolName() );
			
			returnList.add(log);
		}
		
//		java.util.Collections.sort(returnList);
		return returnList;
	}
	
	public List<Log> listAll(String profId, String coursId, String year, String month){				
		Key<Professor> profKey = new Key<Professor>(Professor.class, Long.parseLong(profId));
		Key<Cours> coursKey = new Key<Cours>(Cours.class, Long.parseLong(coursId));
		
		Query<Log> q = this.ofy().query(Log.class)
				.filter("year", Integer.parseInt(year))
				.filter("month", Integer.parseInt(month))
				.filter("prof", profKey)
				.filter("cours", coursKey);
		
		List<Log> returnList = new ArrayList<Log>();
		for (Log log : q){
//			log.setTypeName( this.ofy().get(log.getLogType()).getLogTypeName() );			
			log.setProfName( "" );
			log.setCourseName( "" );
			returnList.add(log);
		}
		
		java.util.Collections.sort(returnList);
		return returnList;
	}
	
	public void save(Log log){
		log.setTypeName( this.ofy().get(log.getLogType()).getLogTypeName() );			
		log.setProfName( this.ofy().get(log.getProf()).getProfName());
		log.setCourseName( this.ofy().get(log.getCours()).getCoursNom() );
		log.setSchoolName( this.ofy().get( this.ofy().get(log.getCours()).getEcole()).getSchoolName() );
		
		this.ofy().put(log);
	}
	
	public Log saveAndReturn(Log log){
		log.setTypeName( this.ofy().get(log.getLogType()).getLogTypeName() );			
		log.setProfName( this.ofy().get(log.getProf()).getProfName());
		log.setCourseName( this.ofy().get(log.getCours()).getCoursNom() );
		log.setSchoolName( this.ofy().get( this.ofy().get(log.getCours()).getEcole()).getSchoolName() );
		
		Key<Log> key = this.ofy().put(log);
		
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void removeLog(Log log){
		this.ofy().delete(log);
	}
	
	public List<Log> batchUpdate(String profId, String courseId, String year, String month, List<String> typeIdList) {				
		List<Log> returnList = new ArrayList<Log>();
		Log log;
		for (int i=0; i<typeIdList.size(); i++) {
			log = new Log();
			
			log.setProf( new Key<Professor>(Professor.class, Long.parseLong(profId)));
			log.setCours( new Key<Cours>(Cours.class, Long.parseLong(courseId)));
			log.setLogType( new Key<LogType>(LogType.class, Long.parseLong(typeIdList.get(i))));
			log.setYear(Integer.parseInt(year));
			log.setMonth(Integer.parseInt(month));			
			
			log.setTypeName( this.ofy().get(log.getLogType()).getLogTypeName() );			
			log.setProfName( this.ofy().get(log.getProf()).getProfName());
			log.setCourseName( this.ofy().get(log.getCours()).getCoursNom() );
			log.setSchoolName( this.ofy().get( this.ofy().get(log.getCours()).getEcole()).getSchoolName() );
			
			this.ofy().put(log);
			
			returnList.add(log);
		}
		return returnList;
	}
	
	public List<Log> batchUpdate(
			String profId, String courseId, String year, String month,
			String coursTime, String coursNote,
			String maladieTime, String maladieNote,
			String ferieTime, String ferieNote,
			String priveTime, String priveNote, 
			String supervisionTime, String supervisionNote, 
			String fraisAmount, String fraisNote ) {				
		
		// Return list
		List<Log> returnList = new ArrayList<Log>();
		
		// Get all the LogType
		// For each LogType, try to find the existing record, if not found, save a new one
		Query<LogType> q = this.ofy().query(LogType.class).filter("hourActive", true).order("orderNumber");
		Log saveLog;
		for (LogType lt : q) {
			Query<Log> qlog = this.ofy().query(Log.class)
					.filter("prof", new Key<Professor>(Professor.class, Long.parseLong(profId)))
					.filter("cours", new Key<Cours>(Cours.class, Long.parseLong(courseId)))
					.filter("type", new Key<LogType>(LogType.class, lt.getId()) )
					.filter("year", Integer.parseInt(year))
					.filter("month", Integer.parseInt(month));
			
			if (qlog.listKeys().size()>0) {
				saveLog = qlog.list().get(0);	
			} else {
				saveLog = new Log();
				saveLog.setProf( new Key<Professor>(Professor.class, Long.parseLong(profId)));
				saveLog.setCours( new Key<Cours>(Cours.class, Long.parseLong(courseId)));
				saveLog.setLogType( new Key<LogType>(LogType.class, lt.getId()));
				saveLog.setYear(Integer.parseInt(year));
				saveLog.setMonth(Integer.parseInt(month));			
				
				saveLog.setTypeName( this.ofy().get(new Key<LogType>(LogType.class, lt.getId())).getLogTypeName() );			
				saveLog.setProfName( this.ofy().get(new Key<Professor>(Professor.class, Long.parseLong(profId))).getProfName());
				saveLog.setCourseName( this.ofy().get(new Key<Cours>(Cours.class, Long.parseLong(courseId))).getCoursNom() );
				saveLog.setSchoolName( this.ofy().get( this.ofy().get(new Key<Cours>(Cours.class, Long.parseLong(courseId))).getEcole()).getSchoolName() );
			}	
			
			if (lt.getLogTypeName().toLowerCase().equals(TimeTypeNames.cours)) {
				saveLog.setHour(Double.parseDouble(coursTime));
				saveLog.setMemo(coursNote);
			}
			if (lt.getLogTypeName().toLowerCase().equals(TimeTypeNames.maladie)) {
				saveLog.setHour(Double.parseDouble(maladieTime));
				saveLog.setMemo(maladieNote);
			}
			if (lt.getLogTypeName().toLowerCase().equals(TimeTypeNames.ferie)) {
				saveLog.setHour(Double.parseDouble(ferieTime));
				saveLog.setMemo(ferieNote);
			}
			if (lt.getLogTypeName().toLowerCase().equals(TimeTypeNames.prive)) {
				saveLog.setHour(Double.parseDouble(priveTime));
				saveLog.setMemo(priveNote);
			}
			if (lt.getLogTypeName().toLowerCase().equals(TimeTypeNames.supervision)) {
				saveLog.setHour(Double.parseDouble(supervisionTime));
				saveLog.setMemo(supervisionNote);
			}
			if (lt.getLogTypeName().toLowerCase().equals(TimeTypeNames.frais)) {
				saveLog.setHour(Double.parseDouble(fraisAmount));
				saveLog.setMemo(fraisNote);
			}
			
			this.ofy().put(saveLog);
			returnList.add(saveLog);
		}
		
		return returnList;
	}
}
