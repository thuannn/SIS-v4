package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.sis.server.Assignment;
import com.lemania.sis.server.Cours;
import com.lemania.sis.server.Professor;
import com.lemania.sis.server.User;

public class AssignmentDao extends MyDAOBase {
	
	public void initialize(){
		return;
	}
	
	public List<Assignment> listAll(){
		Query<Assignment> q = this.ofy().query(Assignment.class).order("cours");
		List<Assignment> returnList = new ArrayList<Assignment>();
		for (Assignment a : q){
			a.setSchoolName( this.ofy().get(this.ofy().get(a.getCours()).getEcole()).getSchoolName());
			a.setCourseName(this.ofy().get(a.getCours()).getCoursNom());
			returnList.add(a);
		}
		return returnList;
	}
	
	public List<Assignment> listAll(String profId){
		Query<Assignment> q = this.ofy().query(Assignment.class)
				.filter("prof", new Key<Professor>(Professor.class, Long.parseLong(profId)))
				.order("cours");
		List<Assignment> returnList = new ArrayList<Assignment>();
		for (Assignment a : q){
			a.setSchoolName( this.ofy().get(this.ofy().get(a.getCours()).getEcole()).getSchoolName());
			a.setCourseName(this.ofy().get(a.getCours()).getCoursNom());
			returnList.add(a);
		}
		return returnList;
	}
	
	public List<Assignment> listAllActive(){
		Query<Assignment> q = this.ofy().query(Assignment.class)
				.filter("schoolActive", true)
				.order("cours");
		List<Assignment> returnList = new ArrayList<Assignment>();
		for (Assignment a : q){
			returnList.add(a);
		}
		return returnList;
	}
	
	public void save(Assignment a){
		this.ofy().put(a);
	}
	
	public Assignment saveAndReturn(Assignment a){
		Key<Assignment> key = this.ofy().put(a);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	public Assignment saveAndReturn(String courseId, String profId){
		// if the assignment is already existed, do not add more
		Query<Assignment> q = this.ofy().query(Assignment.class)
				.filter("prof", new Key<Professor>(Professor.class, Long.parseLong(profId)))
				.filter("cours", new Key<Cours>(Cours.class, Long.parseLong(courseId)));
		if (q.list().size()>0) {
			return null;
		}
		
		Assignment a = new Assignment();
		a.setCours(new Key<Cours>(Cours.class, Long.parseLong(courseId)));
		a.setProf(new Key<Professor>(Professor.class, Long.parseLong(profId)));
		Key<Assignment> key = this.ofy().put(a);		
		try {
			Assignment savedA = this.ofy().get(key);
			return savedA; 
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	public void removeAssignment(Assignment a){
		this.ofy().delete(a);
	}
}
