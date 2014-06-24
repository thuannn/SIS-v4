package com.lemania.sis.server.period;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Index;
import com.lemania.sis.server.Classe;
import com.lemania.sis.server.DatastoreObject;

@Entity
@Index
public class Period extends DatastoreObject implements Comparable<Period> {
	//
	private Key<Classe> classe;
	private String description = "";
	private int order;
	private String note = "";
	private boolean isActive = true;
	
	public Key<Classe> getClasse() {
		return classe;
	}
	
	public void setClasse(Key<Classe> classe) {
		this.classe = classe;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getNote() {
		return note;
	}
	
	public void setNote(String note) {
		this.note = note;
	}
	
	public boolean isActive() {
		return isActive;
	}
	
	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}

	public int getOrder() {
		return order;
	}

	public void setOrder(int order) {
		this.order = order;
	}

	@Override
	public int compareTo(Period o) {
		//
		return (this.order > o.getOrder()) ? 1: -1;
	}
}
