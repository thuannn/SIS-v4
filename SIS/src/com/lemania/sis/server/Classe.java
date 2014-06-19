package com.lemania.sis.server;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.IgnoreSave;
import com.googlecode.objectify.annotation.Index;

@Entity
@Index
public class Classe extends DatastoreObject implements Comparable<Classe> {
	private String className;
	private Boolean isActive;
	
	@Index
	Key<Cours> programme;

	@IgnoreSave
	String programmeName;
	
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
	
	public Key<Cours> getProgramme() {
		return programme;
	}

	public void setProgramme(Key<Cours> programme) {
		this.programme = programme;
	}

	public String getProgrammeName() {
		return programmeName;
	}

	public void setProgrammeName(String programmeName) {
		this.programmeName = programmeName;
	}

	@Override
	public int compareTo(Classe classe) {
		int lastClasseName = className.compareTo( classe.getClassName() );
		return lastClasseName;
	}
}