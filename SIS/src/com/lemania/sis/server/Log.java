package com.lemania.sis.server;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;

@Entity
public class Log extends DatastoreObject implements Comparable<Log>{
	
	Key<Professor> prof;
	Key<Cours> cours;
	Key<LogType> type;
	int year;
	int month;
	double hour;
	String memo = "";
	
	String profName = "";	
	String typeName = "";	
	String schoolName = "";	
	String courseName = "";
	
	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public int getMonth() {
		return month;
	}

	public void setMonth(int month) {
		this.month = month;
	}

	public Key<Professor> getProf() {
		return prof;
	}
	
	public void setProf(Key<Professor> prof) {
		this.prof = prof;
	}
	
	public Key<Cours> getCours() {
		return cours;
	}
	
	public void setCours(Key<Cours> cours) {
		this.cours = cours;
	}
	
	public Key<LogType> getLogType() {
		return type;
	}
	
	public void setLogType(Key<LogType> type) {
		this.type = type;
	}
	
	public double getHour() {
		return hour;
	}
	
	public void setHour(double hour) {
		this.hour = hour;
	}
	
	public String getCourseId(){
		return Long.toString(prof.getId());
	}
	
	public String getTypeId() {
		return Long.toString(type.getId());
	}
	
	public String getTypeName() {
		return typeName;
	}
	
	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}
	
	public String getProfName() {
		return profName;
	}

	public void setProfName(String profName) {
		this.profName = profName;
	}

	public String getSchoolName() {
		return schoolName;
	}

	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	
	public String getMemo() {
		return memo;
	}

	public void setMemo(String memo) {
		this.memo = memo;
	}

	@Override
	public int compareTo(Log log) {
		int lastProfName = profName.compareTo(log.getProfName());
		if (lastProfName != 0) return lastProfName;
		
		int lastCourseName = courseName.compareTo(log.getCourseName());
		if (lastCourseName != 0) return lastCourseName;
		
		return typeName.compareTo(log.getTypeName());
	}
}