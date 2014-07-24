package com.lemania.sis.server.bean.parent;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import com.googlecode.objectify.Key;
import com.googlecode.objectify.cmd.Query;
import com.lemania.sis.server.bean.student.Student;
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
		//
		Parent returnParent;
		Key<Parent> key = ofy().save().entities( parent ).now().keySet().iterator().next();
		try {
			returnParent = ofy().load().key(key).now();
			loadChildren(returnParent);
			return returnParent;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	public List<Student> loadChildren(Parent parent) {
		//
		List<Key<Student>> children = new ArrayList<Key<Student>>();
		List<String> ids;
		if ( ! parent.getChildIds().equals("") ) {
			ids = Arrays.asList( parent.getChildIds().trim().split(" ") );
			for ( String s : ids ){
				if (!s.equals(""))
					children.add( Key.create(Student.class, Long.parseLong(s)) );
			}
		}
		List<Student> returnChildren = new ArrayList<Student>( ofy().load().keys(children).values() );
		return returnChildren;
	}
	
	
	/*
	 * */
	public void removeParent(Parent parent){
		ofy().delete().entities(parent);
	}

}