package com.lemania.sis.server;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.NotSaved;

@Entity
public class BulletinSubject extends DatastoreObject {
	//
	private Key<Subject> subject;
	private Key<Bulletin> bulletin;
	private Key<Professor> professor;
	//
	private Boolean isActive = true;
	private Double subjectCoef;
	//
	private String subjectName;
	private String profName;
	//
	private String T1 = "";
	private String T2 = "";
	private String T3 = "";
	//
	private String examT1 = "";
	private String examT2 = "";
	private String examT3 = "";
	//
	private String An = "";
	//
	private String remarqueT1 = "";
	private String remarqueT2 = "";
	private String remarqueT3 = "";
	// This number should always be 1
	private Double totalBrancheCoef = 0.0;
	//
	@NotSaved
	private String studentName;
	
	
	public Key<Subject> getSubject() {
		return subject;
	}
	
	public void setSubject(Key<Subject> subject) {
		this.subject = subject;
	}
	
	public Key<Bulletin> getBulletin() {
		return bulletin;
	}
	
	public void setBulletin(Key<Bulletin> bulletin) {
		this.bulletin = bulletin;
	}
	
	public Key<Professor> getProfessor() {
		return professor;
	}
	
	public void setProfessor(Key<Professor> professor) {
		this.professor = professor;
	}
	
	public Boolean getIsActive() {
		return isActive;
	}
	
	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}
	
	public Double getSubjectCoef() {
		return subjectCoef;
	}
	
	public void setSubjectCoef(Double subjectCoef) {
		this.subjectCoef = subjectCoef;
	}
	
	public String getSubjectName() {
		return subjectName;
	}
	
	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}
	
	public String getProfName() {
		return profName;
	}
	
	public void setProfName(String profName) {
		this.profName = profName;
	}

	public Double getTotalBrancheCoef() {
		return totalBrancheCoef;
	}

	public void setTotalBrancheCoef(Double totalBrancheCoef) {
		this.totalBrancheCoef = totalBrancheCoef;
	}

	public String getT1() {
		return T1;
	}

	public void setT1(String t1) {
		T1 = t1;
	}

	public String getT2() {
		return T2;
	}

	public void setT2(String t2) {
		T2 = t2;
	}

	public String getT3() {
		return T3;
	}

	public void setT3(String t3) {
		T3 = t3;
	}

	public String getAn() {
		return An;
	}

	public void setAn(String an) {
		An = an;
	}

	public String getRemarqueT1() {
		return remarqueT1;
	}

	public void setRemarqueT1(String remarqueT1) {
		this.remarqueT1 = remarqueT1;
	}

	public String getRemarqueT2() {
		return remarqueT2;
	}

	public void setRemarqueT2(String remarqueT2) {
		this.remarqueT2 = remarqueT2;
	}

	public String getRemarqueT3() {
		return remarqueT3;
	}

	public void setRemarqueT3(String remarqueT3) {
		this.remarqueT3 = remarqueT3;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public String getExamT1() {
		return examT1;
	}

	public void setExamT1(String examT1) {
		this.examT1 = examT1;
	}

	public String getExamT2() {
		return examT2;
	}

	public void setExamT2(String examT2) {
		this.examT2 = examT2;
	}

	public String getExamT3() {
		return examT3;
	}

	public void setExamT3(String examT3) {
		this.examT3 = examT3;
	}
}
