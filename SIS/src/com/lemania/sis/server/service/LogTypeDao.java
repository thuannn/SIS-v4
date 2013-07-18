package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.sis.server.LogType;

public class LogTypeDao extends MyDAOBase {
	
	public void initialize(){
		return;
	}
	
	public List<LogType> listAll(){
		Query<LogType> q = this.ofy().query(LogType.class).order("hourName");
		List<LogType> returnList = new ArrayList<LogType>();
		for (LogType type : q){
			returnList.add(type);
		}
		java.util.Collections.sort(returnList);
		return returnList;
	}
	
	public List<LogType> listAllActive(){
		Query<LogType> q = this.ofy().query(LogType.class).filter("hourActive", true).order("orderNumber");
		List<LogType> returnList = new ArrayList<LogType>();
		for (LogType type : q){
			returnList.add(type);
		}
		java.util.Collections.sort(returnList);
		return returnList;
	}
	
	public void save(LogType type){
		this.ofy().put(type);
	}
	
	public LogType saveAndReturn(LogType type){
		Key<LogType> key = this.ofy().put(type);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void removeLogType(LogType type){
		this.ofy().delete(type);
	}
}
