package com.lemania.sis.server;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;

@Entity
public class Bulletin extends DatastoreObject {
	//
	private String bulletinName;
	private Boolean isActive;
	private String classeName;
	private String studentName;
	private String year;
	
	private Key<Classe> classe;
	private Key<Student> student;
	
	public String getBulletinName() {
		return bulletinName;
	}
	
	public void setBulletinName(String bulletinName) {
		this.bulletinName = bulletinName;
	}
	
	public Boolean getIsActive() {
		return isActive;
	}
	
	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}
	
	public String getClasseName() {
		return classeName;
	}
	
	public void setClasseName(String classeName) {
		this.classeName = classeName;
	}
	
	public String getStudentName() {
		return studentName;
	}
	
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	
	public Key<Classe> getClasse() {
		return classe;
	}
	
	public void setClasse(Key<Classe> classe) {
		this.classe = classe;
	}
	
	public Key<Student> getStudent() {
		return student;
	}
	
	public void setStudent(Key<Student> student) {
		this.student = student;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}
}
