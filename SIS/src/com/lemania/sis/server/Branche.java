package com.lemania.sis.server;

import com.googlecode.objectify.annotation.Entity;

@Entity
public class Branche extends DatastoreObject {
	private String brancheName;
	private Double defaultCoef;
	private Boolean isAdmin;
	
	public String getBrancheName() {
		return brancheName;
	}
	
	public void setBrancheName(String brancheName) {
		this.brancheName = brancheName;
	}
	
	public Double getDefaultCoef() {
		return defaultCoef;
	}
	
	public void setDefaultCoef(Double defaultCoef) {
		this.defaultCoef = defaultCoef;
	}
	
	public Boolean getIsAdmin() {
		return isAdmin;
	}
	
	public void setIsAdmin(Boolean isAdmin) {
		this.isAdmin = isAdmin;
	}
}
