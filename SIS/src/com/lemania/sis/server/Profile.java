package com.lemania.sis.server;

import com.googlecode.objectify.annotation.Entity;

@Entity
public class Profile extends DatastoreObject {
	//
	private String profileName = "";
	private Boolean isActive = false;

	public String getProfileName() {
		return profileName;
	}

	public void setProfileName(String profileName) {
		this.profileName = profileName;
	}

	public Boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}
}
