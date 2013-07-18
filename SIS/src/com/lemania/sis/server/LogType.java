package com.lemania.sis.server;

import com.googlecode.objectify.annotation.Entity;

@Entity
public class LogType extends DatastoreObject implements Comparable<LogType> {

	private String hourName;
	private Boolean hourActive;
	private int orderNumber = 0;
	
	public Boolean getLogTypeActive() {
		return hourActive;
	}
	
	public void setLogTypeActive(Boolean hourActive) {
		this.hourActive = hourActive;
	}
	
	public String getLogTypeName() {
		return hourName;
	}
	
	public void setLogTypeName(String hourName) {
		this.hourName = hourName;
	}

	public int getOrderNumber() {
		return orderNumber;
	}

	public void setOrderNumber(int orderNumber) {
		this.orderNumber = orderNumber;
	}

	@Override
	public int compareTo(LogType otherLog) {
		return hourName.compareTo(otherLog.getLogTypeName());
	}
}
