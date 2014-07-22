package com.lemania.sis.server.bean.parent;

import java.util.Collections;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.cmd.Query;
import com.lemania.sis.server.service.MyDAOBase;

public class ParentDao extends MyDAOBase{
	
	public void initialize(){
		return;
	}
	
	/*
	 * */
	public List<Parent> listAll(){
		//
		Query<Parent> q = ofy().load().type(Parent.class);
		List<Parent> returnList = q.list();
		Collections.sort(returnList);
		return returnList;
	}

	/*
	 * */
	public void save(Parent parent){
		ofy().save().entities( parent );
	}
	
	/*
	 * */
	public Parent saveAndReturn(Parent parent){
		Key<Parent> key = ofy().save().entities( parent ).now().keySet().iterator().next();
		try {
			return ofy().load().key(key).now();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	/*
	 * */
	public void removeParent(Parent parent){
		ofy().delete().entities(parent);
	}

}