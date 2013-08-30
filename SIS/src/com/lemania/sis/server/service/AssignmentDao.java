package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.sis.server.Assignment;
import com.lemania.sis.server.Classe;
import com.lemania.sis.server.Professor;
import com.lemania.sis.server.Subject;

public class AssignmentDao extends MyDAOBase {
	//
	public void initialize(){
		return;
	}
	
	
	public List<Assignment> listAll(){
		Query<Assignment> q = this.ofy().query(Assignment.class).order("classe");
		List<Assignment> returnList = new ArrayList<Assignment>();
		for (Assignment a : q){
			if (a.getClass() != null) {
				a.setProgrammeName( this.ofy().get(this.ofy().get(a.getClasse()).getProgramme()).getCoursNom());
				a.setClasseName(this.ofy().get(a.getClasse()).getClassName());
			}
			if (a.getSubject() != null)
				a.setSubjectName(this.ofy().get(a.getSubject()).getSubjectName());
			returnList.add(a);
		}
		return returnList;
	}
	
	
	/**/
	public List<Assignment> listAll(String profId){
		Query<Assignment> q = this.ofy().query(Assignment.class)
				.filter("prof", new Key<Professor>(Professor.class, Long.parseLong(profId)))
				.order("subject")
				.order("classe");
		List<Assignment> returnList = new ArrayList<Assignment>();
		for (Assignment a : q){
			if (a.getClass() != null) {
				a.setProgrammeName( this.ofy().get(this.ofy().get(a.getClasse()).getProgramme()).getCoursNom());
				a.setClasseName(this.ofy().get(a.getClasse()).getClassName());
			}
			if (a.getSubject() != null)
				a.setSubjectName(this.ofy().get(a.getSubject()).getSubjectName());
			returnList.add(a);
		}
		return returnList;
	}
	
	
	/**/
	public List<Professor> listAllProfessorBySubject(String subjectId){
		Query<Assignment> q = this.ofy().query(Assignment.class)
				.filter("subject", new Key<Subject>(Subject.class, Long.parseLong(subjectId)))
				.order("prof");
		List<Professor> returnList = new ArrayList<Professor>();
		Professor prof = new Professor();
		for (Assignment a : q){
			if (a.getActive()) {
				prof = this.ofy().get(a.getProf());
				if (prof.getProfActive())
					returnList.add(prof);
			}
		}
		return returnList;
	}
	
	
	/**/
	public List<Professor> listAllProfessorBySubject(String subjectId, String classId){
		Query<Assignment> q = this.ofy().query(Assignment.class)
				.filter("classe", new Key<Classe>(Classe.class, Long.parseLong(classId)))
				.filter("subject", new Key<Subject>(Subject.class, Long.parseLong(subjectId)))
				.order("prof");
		List<Professor> returnList = new ArrayList<Professor>();
		Professor prof = new Professor();
		for (Assignment a : q){
			if (a.getActive()) {
				prof = this.ofy().get(a.getProf());
				if (prof.getProfActive())
					returnList.add(prof);
			}
		}
		return returnList;
	}
	
	
	/**/
	public List<Assignment> listAllActive(){
		Query<Assignment> q = this.ofy().query(Assignment.class)
				.filter("schoolActive", true)
				.order("classe");
		List<Assignment> returnList = new ArrayList<Assignment>();
		for (Assignment a : q){
			returnList.add(a);
		}
		return returnList;
	}
	
	
	
	/**/
	public List<Assignment> listAllActive(String profId){
		Query<Assignment> q = this.ofy().query(Assignment.class)
				.filter("active", true)
				.filter("prof", new Key<Professor>(Professor.class, Long.parseLong(profId)))
				.order("classe");
		List<Assignment> returnList = new ArrayList<Assignment>();
		for (Assignment a : q){
			if (a.getClass() != null) {
				a.setProgrammeName( this.ofy().get(this.ofy().get(a.getClasse()).getProgramme()).getCoursNom());
				a.setClasseName(this.ofy().get(a.getClasse()).getClassName());
			}
			if (a.getSubject() != null)
				a.setSubjectName(this.ofy().get(a.getSubject()).getSubjectName());
			returnList.add(a);
		}
		Collections.sort(returnList);
		return returnList;
	}
	
	
	/**/
	public void save(Assignment a){
		this.ofy().put(a);
	}
	
	
	public Assignment saveAndReturn(Assignment a){
		Key<Assignment> key = this.ofy().put(a);
		try {
			Assignment savedA = this.ofy().get(key);
			if (savedA.getClass() != null) {
				savedA.setProgrammeName( this.ofy().get(this.ofy().get(savedA.getClasse()).getProgramme()).getCoursNom());
				savedA.setClasseName(this.ofy().get(savedA.getClasse()).getClassName());
			}
			if (savedA.getSubject() != null)
				savedA.setSubjectName(this.ofy().get(savedA.getSubject()).getSubjectName());
			return savedA; 
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	/*
	 * Save a newly added assigment
	 * */
	public Assignment saveAndReturn(String profId, String classeId, String subjectId, Boolean isActive){
		// if the assignment is already existed, do not add more
		Query<Assignment> q = this.ofy().query(Assignment.class)
				.filter("prof", new Key<Professor>(Professor.class, Long.parseLong(profId)))
				.filter("classe", new Key<Classe>(Classe.class, Long.parseLong(classeId)))
				.filter("subject", new Key<Subject>(Subject.class, Long.parseLong(subjectId)));
		if (q.list().size()>0) {
			return null;
		}
		
		Assignment a = new Assignment();
		a.setClasse(new Key<Classe>(Classe.class, Long.parseLong(classeId)));
		a.setProf(new Key<Professor>(Professor.class, Long.parseLong(profId)));
		a.setSubject(new Key<Subject>(Subject.class, Long.parseLong(subjectId)));
		a.setActive(isActive);
		Key<Assignment> key = this.ofy().put(a);		
		try {
			Assignment savedA = this.ofy().get(key);
			if (savedA.getClass() != null) {
				savedA.setProgrammeName( this.ofy().get(this.ofy().get(savedA.getClasse()).getProgramme()).getCoursNom());
				savedA.setClasseName(this.ofy().get(savedA.getClasse()).getClassName());
			}
			if (savedA.getSubject() != null)
				savedA.setSubjectName(this.ofy().get(savedA.getSubject()).getSubjectName());
			return savedA; 
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	/*
	 * Update active status
	 * */
	public Assignment updateAssignmentStatus(Long userId, Assignment assignment, Boolean status) {
		//
		assignment.setActive(status);
		Key<Assignment> key = this.ofy().put(assignment);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	/*
	 * 
	 * */
	public void removeAssignment(Assignment a){
		this.ofy().delete(a);
	}
}
