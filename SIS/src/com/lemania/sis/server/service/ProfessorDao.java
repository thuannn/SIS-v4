package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.cmd.Query;
import com.lemania.sis.server.Professor;

public class ProfessorDao extends MyDAOBase {
	
	/*
	 * 
	 * */
	public void initialize(){
		return;
	}
	
	/*
	 * 
	 * */
	public List<Professor> listAll(){
		Query<Professor> q = ofy().load().type(Professor.class).order("profName");
		List<Professor> returnList = new ArrayList<Professor>();
		for (Professor prof : q){
			returnList.add(prof);
		}
		return returnList;
	}
	
	
	/**/
	public List<Professor> getByEmail(String email){
		//
		Query<Professor> q = ofy().load().type(Professor.class).filter("profEmail", email);
		List<Professor> returnList = new ArrayList<Professor>();
		for (Professor prof : q){
			returnList.add(prof);
		}
		return returnList;
	}
	
	
	
	/*
	 * 
	 * */
	public void save(Professor prof){
		ofy().save().entities(prof);
	}
	
	/*
	 * 
	 * */
	public Professor saveAndReturn(Professor prof){
		Key<Professor> key = ofy().save().entities(prof).now().keySet().iterator().next();
		try {
			return ofy().load().key(key).now();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	/*
	 * 
	 * */
	public void removeProfessor(Professor prof) {
		ofy().delete().entities(prof);
	}
}
