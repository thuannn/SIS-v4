package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.sis.server.Branche;

public class BrancheDao extends MyDAOBase {
	
	public void initialize(){
		return;
	}
	
	public List<Branche> listAll(){
		Query<Branche> q = this.ofy().query(Branche.class).order("brancheName");
		List<Branche> returnList = new ArrayList<Branche>();
		for (Branche branche : q){
			returnList.add(branche);
		}
		return returnList;
	}
	
	public void save(Branche branche){
		this.ofy().put(branche);
	}
	
	public Branche saveAndReturn(Branche branche){
		Key<Branche> key = this.ofy().put(branche);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void removeBranche(Branche branche){
		this.ofy().delete(branche);
	}

}
