package com.lemania.sis.server;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;

@Entity
public class BulletinSubject extends DatastoreObject {
	//
	private Key<Subject> subject;
	private Key<Bulletin> bulletin;
	private Key<Professor> professor;
	//
	private Boolean isActive = true;
	private Double subjectCoef;
	//
	private String subjectName;
	private String profName;

	// This number should always be 1
	private Double totalBrancheCoef = 0.0;
	
	public Key<Subject> getSubject() {
		return subject;
	}
	
	public void setSubject(Key<Subject> subject) {
		this.subject = subject;
	}
	
	public Key<Bulletin> getBulletin() {
		return bulletin;
	}
	
	public void setBulletin(Key<Bulletin> bulletin) {
		this.bulletin = bulletin;
	}
	
	public Key<Professor> getProfessor() {
		return professor;
	}
	
	public void setProfessor(Key<Professor> professor) {
		this.professor = professor;
	}
	
	public Boolean getIsActive() {
		return isActive;
	}
	
	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}
	
	public Double getSubjectCoef() {
		return subjectCoef;
	}
	
	public void setSubjectCoef(Double subjectCoef) {
		this.subjectCoef = subjectCoef;
	}
	
	public String getSubjectName() {
		return subjectName;
	}
	
	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}
	
	public String getProfName() {
		return profName;
	}
	
	public void setProfName(String profName) {
		this.profName = profName;
	}

	public Double getTotalBrancheCoef() {
		return totalBrancheCoef;
	}

	public void setTotalBrancheCoef(Double totalBrancheCoef) {
		this.totalBrancheCoef = totalBrancheCoef;
	}
}
