package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.sis.server.Assignment;
import com.lemania.sis.server.Cours;
import com.lemania.sis.server.Log;
import com.lemania.sis.server.LogType;
import com.lemania.sis.server.Professor;

public class ProfessorDao extends MyDAOBase {
	
	public void initialize(){
		return;
	}
	
	public List<Professor> listAll(){
		Query<Professor> q = this.ofy().query(Professor.class).order("profName");
		List<Professor> returnList = new ArrayList<Professor>();
		for (Professor prof : q){
			returnList.add(prof);
		}
		return returnList;
	}
	
	
	/*
	 * List all professor belong to a department */
	public List<Professor> listAllByCourse(String courseId){
		Key<Cours> course = new Key<Cours>(Cours.class, Long.parseLong(courseId));
		Query<Assignment> qa = this.ofy().query(Assignment.class).filter("cours", course);
		
		List<Key<? extends Professor>> profKeys = new ArrayList<Key<? extends Professor>>();
		for (Assignment a : qa){
			profKeys.add( a.getProf() );
		}
		
		Map<Key<Professor>, Professor> profs = this.ofy().get(profKeys);
		List<Professor> returnList = new ArrayList<Professor>(profs.values());		
		List<Professor> activeList = new ArrayList<Professor>();
		
		for (Professor prof : returnList) {
			activeList.add(prof);
		}
		
		java.util.Collections.sort(activeList);
		return activeList;
	}
	
	
	/*
	 * List all professor ACTIVE belong to a department */
	public List<Professor> listAllActiveByCourse(String courseId, String year, String month){
		Key<Cours> course = new Key<Cours>(Cours.class, Long.parseLong(courseId));
		Query<Assignment> qa = this.ofy().query(Assignment.class).filter("cours", course);
		
		// Go through all the assignments of this department, select only the profs of the active ones
		List<Key<? extends Professor>> profKeys = new ArrayList<Key<? extends Professor>>();
		for (Assignment a : qa){
			if (a.getActive())
				profKeys.add( a.getProf() );
		}
		
		// Go through the list of professor and select only the active professors
		Map<Key<Professor>, Professor> profs = this.ofy().get(profKeys);
		List<Professor> returnList = new ArrayList<Professor>(profs.values());		
		List<Professor> activeList = new ArrayList<Professor>();
		for (Professor prof : returnList) {
			if (prof.getProfActive())
				activeList.add(prof);
		}
		
		// Go through the list of professor and get the latest modification date
		Query<Log> qLog;
		for (Professor curProf : activeList){
			qLog = this.ofy().query(Log.class)
					.filter("year", Integer.parseInt(year))
					.filter("month", Integer.parseInt(month))
					.filter("prof", new Key<Professor>(Professor.class, curProf.getId()))
					.filter("cours", course);
			if (qLog.count()>0)
				curProf.setLogModifyDate(qLog.get().getModifyDate());
		}
		
		// Sort the professor list by name and return
		java.util.Collections.sort(activeList);
		return activeList;
	}
	
	
	public List<Professor> listAllByCourseList(List<Cours> courses){
		
		Key<Cours> course;
		List<Key<? extends Professor>> profKeys;
		Map<Key<Professor>, Professor> profs;
		List<Professor> returnList;
		Query<Assignment> qa;		
		List<Professor> activeList = new ArrayList<Professor>();
		List<Professor> activeListUnique = new ArrayList<Professor>();
		
		for (Cours curr_course : courses)
		{				
			course = new Key<Cours>(Cours.class, curr_course.getId());
			qa = this.ofy().query(Assignment.class).filter("cours", course);
			
			profKeys = new ArrayList<Key<? extends Professor>>();
			for (Assignment a : qa){
				profKeys.add( a.getProf() );
			}
			
			profs = this.ofy().get(profKeys);
			returnList = new ArrayList<Professor>(profs.values());			
			
			for (Professor prof : returnList) {
				if (prof.getProfActive()) {
					activeList.add(prof);					
				}
			}
			
			profKeys.clear();
			profs.clear();
			returnList.clear();
		}
		
		java.util.Collections.sort(activeList);
		for (int i=0; i < activeList.size()-1; i++){
			if (activeList.get(i).getId().compareTo( activeList.get(i+1).getId()) != 0)
				activeListUnique.add(activeList.get(i));
		}
		activeListUnique.add(activeList.get(activeList.size()-1));
		
		java.util.Collections.sort(activeListUnique);
		return activeListUnique;
	}
	
	
	public List<Professor> listAllByCourseWithTime(String deptId, int year){
		// Query a list of keys of all the professors from a department
		Key<Cours> course = new Key<Cours>(Cours.class, Long.parseLong(deptId));
		Query<Assignment> qa = this.ofy().query(Assignment.class).filter("cours", course);
		
		// Get a list of object of those professors and sort by name
		List<Key<? extends Professor>> profKeys = new ArrayList<Key<? extends Professor>>();
		for (Assignment a : qa){
			profKeys.add( a.getProf() );
		}
		Map<Key<Professor>, Professor> profs = this.ofy().get(profKeys);
		List<Professor> returnListAll = new ArrayList<Professor>(profs.values());
		List<Professor> returnList = new ArrayList<Professor>();
		for (int i=0; i<returnListAll.size(); i++) {
			if (returnListAll.get(i).getProfActive())
				returnList.add(returnListAll.get(i));
		}
		java.util.Collections.sort(returnList);
		
		// Get the key of the Frais type
		Query<LogType> qt = this.ofy().query(LogType.class).filter("hourName", "6.Frais");
		Key<LogType> typeFrais = qt.getKey();
		
		// Calculate the total time for each professor
		Query<Log> q = this.ofy().query(Log.class)
				.filter("cours",new Key<Cours>(Cours.class, Long.parseLong(deptId)))
				.filter("year", year)
				.order("prof")
				.order("year")
				.order("month")
				.order("cours");
		List<Log> lstLogs = new ArrayList<Log>();
		for (Log log : q)
			lstLogs.add(log);
		java.util.Collections.sort(lstLogs);
		
		Key<Professor> currentProfKey;
		for (Professor p : returnList) {
			currentProfKey = new Key<Professor>(Professor.class, p.getId());
			for (Log log : lstLogs) {
				if ( currentProfKey.equals(log.getProf()) ){
					switch (log.getMonth()){
					case 1:
						if (log.getLogType().equals(typeFrais))
							p.setFee_01(p.getFee_01() + log.getHour());
						else
							p.setTotal_01(p.getTotal_01() + log.getHour());
						break;
					case 2:
						if (log.getLogType().equals(typeFrais))
							p.setFee_02(p.getFee_02() + log.getHour());
						else
							p.setTotal_02(p.getTotal_02() + log.getHour());
						break;
					case 3:
						if (log.getLogType().equals(typeFrais))
							p.setFee_03(p.getFee_03() + log.getHour());
						else
							p.setTotal_03(p.getTotal_03() + log.getHour());
						break;
					case 4:
						if (log.getLogType().equals(typeFrais))
							p.setFee_04(p.getFee_04() + log.getHour());
						else
							p.setTotal_04(p.getTotal_04() + log.getHour());
						break;
					case 5:
						if (log.getLogType().equals(typeFrais))
							p.setFee_05(p.getFee_05() + log.getHour());
						else
							p.setTotal_05(p.getTotal_05() + log.getHour());
						break;
					case 6:
						if (log.getLogType().equals(typeFrais))
							p.setFee_06(p.getFee_06() + log.getHour());
						else
							p.setTotal_06(p.getTotal_06() + log.getHour());
						break;	
					case 7:
						if (log.getLogType().equals(typeFrais))
							p.setFee_07(p.getFee_07() + log.getHour());
						else
							p.setTotal_07(p.getTotal_07() + log.getHour());
						break;
					case 8:
						if (log.getLogType().equals(typeFrais))
							p.setFee_08(p.getFee_08() + log.getHour());
						else
							p.setTotal_08(p.getTotal_08() + log.getHour());
						break;
					case 9:
						if (log.getLogType().equals(typeFrais))
							p.setFee_09(p.getFee_09() + log.getHour());
						else
							p.setTotal_09(p.getTotal_09() + log.getHour());
						break;
					case 10:
						if (log.getLogType().equals(typeFrais))
							p.setFee_10(p.getFee_10() + log.getHour());
						else
							p.setTotal_10(p.getTotal_10() + log.getHour());
						break;
					case 11:
						if (log.getLogType().equals(typeFrais))
							p.setFee_11(p.getFee_11() + log.getHour());
						else
							p.setTotal_11(p.getTotal_11() + log.getHour());
						break;
					case 12:
						if (log.getLogType().equals(typeFrais))
							p.setFee_12(p.getFee_12() + log.getHour());
						else
							p.setTotal_12(p.getTotal_12() + log.getHour());
						break;	
					}
				}
			}
		}
		
		return returnList;
	}
	
	public void save(Professor prof){
		this.ofy().put(prof);
	}
	
	public Professor saveAndReturn(Professor prof){
		Key<Professor> key = this.ofy().put(prof);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void removeProfessor(Professor prof) {
		this.ofy().delete(prof);
	}
}
