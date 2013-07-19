package com.lemania.sis.server;

import com.googlecode.objectify.annotation.Entity;

@Entity
public class Program extends DatastoreObject {
	private String className;
	private Boolean isActive;
	
	public String getClassName() {
		return className;
	}
	
	public void setClassName(String className) {
		this.className = className;
	}
	
	public Boolean getIsActive() {
		return isActive;
	}
	
	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}
}