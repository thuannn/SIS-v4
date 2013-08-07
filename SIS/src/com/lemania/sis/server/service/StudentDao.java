package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.sis.server.Student;

public class StudentDao extends MyDAOBase {
	
	public void initialize(){
		return;
	}
	
	public void save(Student student){
		this.ofy().put(student);
	}
	
	public Student saveAndReturn(Student student){
		Key<Student> key = this.ofy().put(student);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public Student saveAndReturn( String firstName, String lastName, String email, Boolean active ){
		Student student = new Student();
		student.setFirstName(firstName);
		student.setLastName(lastName);
		student.setEmail(email);
		student.setIsActive(active);
		
		Key<Student> key = this.ofy().put(student);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void removeStudent( Student student ){
		this.ofy().delete(student);
	}
	
	/* List all the student both active and inactive. */
	public List<Student> listAll(){
		Query<Student> q = this.ofy().query(Student.class);
		List<Student> returnList = new ArrayList<Student>();
		for (Student student : q){
			returnList.add(student);
		}
		return returnList;
	}
	
	/* List all the active students */
	public List<Student> listAllActive(){
		Query<Student> q = this.ofy().query(Student.class).filter("isActive", true);
		List<Student> returnList = new ArrayList<Student>();
		for (Student student : q){
			returnList.add(student);
		}
		return returnList;
	}
}
