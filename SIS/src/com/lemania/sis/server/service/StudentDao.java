package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.sis.server.Bulletin;
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
	
	
	/**/
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
	
	
	/**/
	public void removeStudent( Student student ){
		this.ofy().delete(student);
	}
	
	
	/* List all the student both active and inactive. */
	public List<Student> listAll(){
		Query<Student> q = this.ofy().query(Student.class)
				.order("LastName")
				.order("FirstName");
		List<Student> returnList = new ArrayList<Student>();
		for (Student student : q){
			returnList.add(student);
		}
		return returnList;
	}
	
	
	/* List all the active students */
	public List<Student> listAllActive(){
		Query<Student> q = this.ofy().query(Student.class).filter("isActive", true)
				.order("LastName")
				.order("FirstName");
		List<Student> returnList = new ArrayList<Student>();
		for (Student student : q){
			returnList.add(student);
		}
		return returnList;
	}
	
	
	/* List all the active students */
	public List<Student> listByEmail(String email){
		Query<Student> q = this.ofy().query(Student.class).filter("Email", email)
				.order("LastName")
				.order("FirstName");
		List<Student> returnList = new ArrayList<Student>();
		for (Student student : q){
			returnList.add(student);
		}
		return returnList;
	}
	
	
	/*
	 * 
	 * */
	public List<Student> listAllActiveWithoutBulletin(){
		// Get the list of student IDs in the list of bulletins that are not finished
		Query<Bulletin> q = this.ofy().query(Bulletin.class)
				.order("student");				
		List<Long> studentIds = new ArrayList<Long>();
		Long prevId = Long.MIN_VALUE;
		Long curId = Long.MIN_VALUE;
		for (Bulletin bulletin : q){
			//
			if (bulletin.getIsFinished().equals(true))
				continue;
			//
			curId = this.ofy().get(bulletin.getStudent()).getId();
			if ( prevId != curId ) {
				prevId = curId;
				studentIds.add( prevId );
			}
		}
		//
		Query<Student> qStudent = this.ofy().query(Student.class).filter("isActive", true)
				.order("LastName")
				.order("FirstName");
		List<Student> returnList = new ArrayList<Student>();
		Boolean notThisStudent = false;
		for (Student student : qStudent){
			notThisStudent = false;
			for (Long id : studentIds){
				if (student.getId().equals(id)){
					notThisStudent = true;
					break;
				}
			}
			if (notThisStudent)
				continue;
			else
				returnList.add(student);
		}
		return returnList;
	}
}
