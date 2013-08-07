package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.sis.server.Bulletin;

public class BulletinDao extends MyDAOBase {
	//
	public void initialize(){
		return;
	}
	
	public List<Bulletin> listAll(){
		Query<Bulletin> q = this.ofy().query(Bulletin.class)
				.order("classeName")
				.order("studentName");
		List<Bulletin> returnList = new ArrayList<Bulletin>();
		for (Bulletin bulletin : q){
			returnList.add(bulletin);
		}
		return returnList;
	}
	
	public List<Bulletin> listAllActive(){
		Query<Bulletin> q = this.ofy().query(Bulletin.class)
				.filter("schoolActive", true)
				.order("classeName")
				.order("studentName");
		List<Bulletin> returnList = new ArrayList<Bulletin>();
		for (Bulletin bulletin : q){
			returnList.add(bulletin);
		}
		return returnList;
	}
	
	public void save(Bulletin bulletin){
		this.ofy().put(bulletin);
	}
	
	public Bulletin saveAndReturn(Bulletin bulletin){
		Key<Bulletin> key = this.ofy().put(bulletin);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void removeProfile(Bulletin bulletin){
		this.ofy().delete(bulletin);
	}
}
