package com.lemania.sis.server;

import java.util.List;
import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.NotSaved;


@Entity
public class User extends DatastoreObject {
	private String fullName;
	private String userName;
	private String password;
	private String email;
	private Boolean active = false;
	private Boolean admin = false;
	private List<Key<Cours>> departments;
	
	@NotSaved
	private int currentMonth = 0;

	@NotSaved
	private int currentYear = 0;
	
	@NotSaved
	private int currentDay = 0;
	
	public String getUserName() {
		return userName;
	}
	
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getFullName() {
		return fullName;
	}
	
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	
	public Boolean getActive() {
		return active;
	}
	
	public void setActive(Boolean active) {
		this.active = active;
	}
	
	public List<Key<Cours>> getDepartments() {
		return departments;
	}
	
	public void setDepartments(List<Key<Cours>> departments) {
		this.departments = departments;
	}
	
	public Boolean getAdmin() {
		return admin;
	}

	public void setAdmin(Boolean admin) {
		this.admin = admin;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public int getCurrentMonth() {
		return currentMonth;
	}
	
	public int getCurrentYear() {
		return currentYear;
	}
	
	public void setCurrentMonth(int currentMonth) {
		this.currentMonth = currentMonth;
	}

	public void setCurrentYear(int currentYear) {
		this.currentYear = currentYear;
	}

	public int getCurrentDay() {
		return currentDay;
	}

	public void setCurrentDay(int currentDay) {
		this.currentDay = currentDay;
	}
}
