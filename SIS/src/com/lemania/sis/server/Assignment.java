package com.lemania.sis.server;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.NotSaved;

@Entity
public class Assignment extends DatastoreObject {
	//
	private Key<Professor> prof;
	private Key<Classe> classe;
	private Key<Subject> subject;
	
	private Boolean active = false;
	
	@NotSaved
	private String classeName;
	
	@NotSaved
	private String programmeName;
	
	@NotSaved
	private String schoolName;
	
	@NotSaved
	private String subjectName;
	
	
	public String getSubjectName() {
		return subjectName;
	}


	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}


	public String getClasseName() {
		return classeName;
	}


	public void setClasseName(String classeName) {
		this.classeName = classeName;
	}


	public String getProgrammeName() {
		return programmeName;
	}


	public void setProgrammeName(String programmeName) {
		this.programmeName = programmeName;
	}
	
	
	public String getCourseName() {
		return classeName;
	}

	
	public void setCourseName(String classeeName) {
		this.classeName = classeeName;
	}

	
	public String getSchoolName() {
		return schoolName;
	}

	
	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}

	
	public Key<Professor> getProf() {
		return prof;
	}
	
	
	public void setProf(Key<Professor> prof) {
		this.prof = prof;
	}
	
	
	public Key<Classe> getClasse() {
		return classe;
	}
	
	
	public void setClasse(Key<Classe> classe) {
		this.classe = classe;
	}

	
	public Boolean getActive() {
		return active;
	}

	
	public void setActive(Boolean active) {
		this.active = active;
	}


	public Key<Subject> getSubject() {
		return subject;
	}


	public void setSubject(Key<Subject> subject) {
		this.subject = subject;
	}
}
