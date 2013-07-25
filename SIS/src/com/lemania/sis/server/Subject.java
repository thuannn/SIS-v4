package com.lemania.sis.server;

import com.googlecode.objectify.annotation.Entity;

@Entity
public class Subject extends DatastoreObject {
	private String subjectName;
	private Double defaultCoef;
	private Boolean isActive;
	
	public String getSubjectName() {
		return subjectName;
	}
	
	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}
	
	public Double getDefaultCoef() {
		return defaultCoef;
	}
	
	public void setDefaultCoef(Double defaultCoef) {
		this.defaultCoef = defaultCoef;
	}
	
	public Boolean getIsActive() {
		return isActive;
	}
	
	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}
}
