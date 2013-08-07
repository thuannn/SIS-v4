package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.sis.server.Profile;

public class ProfileDao extends MyDAOBase {
	//
	public void initialize(){
		return;
	}
	
	public List<Profile> listAll(){
		Query<Profile> q = this.ofy().query(Profile.class).order("profileName");
		List<Profile> returnList = new ArrayList<Profile>();
		for (Profile profile : q){
			returnList.add(profile);
		}
		return returnList;
	}
	
	public List<Profile> listAllActive(){
		Query<Profile> q = this.ofy().query(Profile.class)
				.filter("isActive", true)
				.order("profileName");
		List<Profile> returnList = new ArrayList<Profile>();
		for (Profile profile : q){
			returnList.add(profile);
		}
		return returnList;
	}
	
	public void save(Profile profile){
		this.ofy().put(profile);
	}
	
	public Profile saveAndReturn(Profile profile){
		Key<Profile> key = this.ofy().put(profile);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void removeProfile(Profile profile){
		this.ofy().delete(profile);
	}

}
