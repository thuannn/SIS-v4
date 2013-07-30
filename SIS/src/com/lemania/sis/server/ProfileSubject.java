package com.lemania.sis.server;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;

@Entity
public class ProfileSubject extends DatastoreObject {
	//
	private Key<Subject> subject;
	private Key<Profile> profile;
	private Boolean isActive = true;
	
	private String subjectName;
	private Double subjectCoef;
	
	public Key<Profile> getProfile() {
		return profile;
	}
	
	public void setProfile(Key<Profile> profile) {
		this.profile = profile;
	}
	
	public Key<Subject> getSubject() {
		return subject;
	}
	
	public void setSubject(Key<Subject> subject) {
		this.subject = subject;
	}

	public Boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}

	public String getSubjectName() {
		return subjectName;
	}

	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}

	public Double getSubjectCoef() {
		return subjectCoef;
	}

	public void setSubjectCoef(Double subjectCoef) {
		this.subjectCoef = subjectCoef;
	}
}
