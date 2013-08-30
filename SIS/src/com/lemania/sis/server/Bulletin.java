package com.lemania.sis.server;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.NotSaved;

@Entity
public class Bulletin extends DatastoreObject implements Comparable<Bulletin> {
	//
	private String bulletinName;
	private Boolean isActive = true;
	private String classeName;
	private String studentName;
	private String year;
	
	@NotSaved
	private String programmeName;
	
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

	public String getProgrammeName() {
		return programmeName;
	}

	public void setProgrammeName(String programmeName) {
		this.programmeName = programmeName;
	}

	@Override
	public int compareTo(Bulletin bulletin) {
		int result = studentName.compareTo( bulletin.getStudentName() );
		return result;
	}
}
