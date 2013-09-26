package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.sis.server.Classe;
import com.lemania.sis.server.Cours;

public class ClasseDao extends MyDAOBase {
	//
	public void initialize(){
		return;
	}
	
	public List<Classe> listAll(){
		Query<Classe> q = this.ofy().query(Classe.class).order("className");
		List<Classe> returnList = new ArrayList<Classe>();
		for (Classe classe : q){
			classe.setProgrammeName( this.ofy().get(classe.getProgramme()).getCoursNom());
			returnList.add(classe);
		}
		return returnList;
	}
	
	public List<Classe> listAll(String coursId){
		List<Classe> returnList = new ArrayList<Classe>();
		
		if (coursId.isEmpty())
			return returnList;
		
		Key<Cours> cours = new Key<Cours>(Cours.class, Long.parseLong(coursId));
		Query<Classe> q = this.ofy().query(Classe.class)
				.filter("programme", cours)
				.order("className");
		
		for (Classe classe : q){
			classe.setProgrammeName( this.ofy().get(classe.getProgramme()).getCoursNom());
			returnList.add( classe );
		}
		
		return returnList;
	}
	
	
	public List<Classe> listAllActive(String coursId){
		//
		List<Classe> returnList = new ArrayList<Classe>();
		
		if (coursId.isEmpty())
			return returnList;
		
		Key<Cours> cours = new Key<Cours>(Cours.class, Long.parseLong( coursId ));
		Query<Classe> q = this.ofy().query(Classe.class)
				.filter("programme", cours)
				.order("className");
		
		for (Classe classe : q){
			if (classe.getIsActive().equals(true)) {
				classe.setProgrammeName( this.ofy().get(classe.getProgramme()).getCoursNom());
				returnList.add( classe );
			}
		}
		
		return returnList;
	}
	
	/*
	 * */
	public List<Classe> listAllActive(){
		//
		List<Classe> returnList = new ArrayList<Classe>();
		Query<Classe> q = this.ofy().query(Classe.class)				
				.order("className");
		
		for (Classe classe : q){
			if (classe.getIsActive().equals(true)) {
				classe.setProgrammeName( this.ofy().get(classe.getProgramme()).getCoursNom());
				returnList.add( classe );
			}
		}
		
		return returnList;
	}
	
	public void save(Classe classe){
		this.ofy().put( classe );
	}
	
	
	public void save(Classe classe, String coursId){
		Key<Cours> coursKey = new Key<Cours>(Cours.class, Long.parseLong(coursId));
		classe.setProgramme(coursKey);
		this.ofy().put( classe );
	}
	
	
	public Classe saveAndReturn(Classe classe){
		Key<Classe> key = this.ofy().put(classe);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void removeClasse(Classe classe){
		this.ofy().delete(classe);
	}
}
