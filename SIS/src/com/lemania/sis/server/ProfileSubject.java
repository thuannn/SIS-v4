package com.lemania.sis.server;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Index;

@Entity
@Index
public class ProfileSubject extends DatastoreObject {
	//
	private Key<Subject> subject;
	private Key<Profile> profile;
	private Key<Professor> professor;
	private Boolean isActive = true;
	
	private String subjectName;
	private String profName;
	private Double subjectCoef;
	
	// This number should always be 1
	private Double totalBrancheCoef = 0.0;
	
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

	public Double getTotalBrancheCoef() {
		if (totalBrancheCoef == null)
			return 0.0;
		else
			return totalBrancheCoef;
	}

	public void setTotalBrancheCoef(Double totalBrancheCoef) {
		this.totalBrancheCoef = totalBrancheCoef;
	}

	public Key<Professor> getProfessor() {
		return professor;
	}

	public void setProfessor(Key<Professor> professor) {
		this.professor = professor;
	}

	public String getProfName() {
		if (profName == null)
			return "";
		else
			return profName;
	}

	public void setProfName(String profName) {
		this.profName = profName;
	}
}
