package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.sis.server.Ecole;

public class EcoleDao extends MyDAOBase{

	public void initialize(){
		return;
	}
	
	public List<Ecole> listAll(){
		Query<Ecole> q = this.ofy().query(Ecole.class).order("schoolName");
		List<Ecole> returnList = new ArrayList<Ecole>();
		for (Ecole ecole : q){
			returnList.add(ecole);
		}
		return returnList;
	}
	
	public List<Ecole> listAllActive(){
		Query<Ecole> q = this.ofy().query(Ecole.class)
				.filter("schoolActive", true)
				.order("schoolName");
		List<Ecole> returnList = new ArrayList<Ecole>();
		for (Ecole ecole : q){
			returnList.add(ecole);
		}
		return returnList;
	}
	
	public void save(Ecole ecole){
		this.ofy().put(ecole);
	}
	
	public Ecole saveAndReturn(Ecole ecole){
		Key<Ecole> key = this.ofy().put(ecole);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void removeEcole(Ecole ecole){
		this.ofy().delete(ecole);
	}
}
