package com.lemania.sis.server.bean.absenceitem;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.IgnoreSave;
import com.googlecode.objectify.annotation.Index;
import com.googlecode.objectify.annotation.Load;
import com.lemania.sis.server.Classe;
import com.lemania.sis.server.DatastoreObject;
import com.lemania.sis.server.Professor;
import com.lemania.sis.server.Subject;
import com.lemania.sis.server.bean.motifabsence.MotifAbsence;
import com.lemania.sis.server.bean.period.Period;
import com.lemania.sis.server.bean.student.Student;

@Entity
@Index
public class AbsenceItem extends DatastoreObject {
	
	@Load private Key<Student> keyStudent;
	@Load private Key<Period> keyPeriod;
	private Key<Professor> keyProf;
	private Key<Classe> keyClasse;
	private Key<Subject> keySubject;
	private Key<MotifAbsence> keyMotif;
	private String codeAbsenceType;
	private String profComment;
	private int lateMinutes = -1;
	private boolean justtified = false;
	private boolean parentNotified = false;
	
	@IgnoreSave
	private String periodId;
	@IgnoreSave
	private String studentId;
	
	public Key<Student> getKeyStudent() {
		return keyStudent;
	}
	public void setKeyStudent(Key<Student> keyStudent) {
		this.keyStudent = keyStudent;
	}
	public Key<Professor> getKeyProf() {
		return keyProf;
	}
	public void setKeyProf(Key<Professor> keyProf) {
		this.keyProf = keyProf;
	}
	public Key<Classe> getKeyClasse() {
		return keyClasse;
	}
	public void setKeyClasse(Key<Classe> keyClasse) {
		this.keyClasse = keyClasse;
	}
	public Key<Subject> getKeySubject() {
		return keySubject;
	}
	public void setKeySubject(Key<Subject> keySubject) {
		this.keySubject = keySubject;
	}
	public Key<Period> getKeyPeriod() {
		return keyPeriod;
	}
	public void setKeyPeriod(Key<Period> keyPeriod) {
		this.keyPeriod = keyPeriod;
	}
	public Key<MotifAbsence> getKeyMotif() {
		return keyMotif;
	}
	public void setKeyMotif(Key<MotifAbsence> keyMotif) {
		this.keyMotif = keyMotif;
	}
	public String getCodeAbsenceType() {
		return codeAbsenceType;
	}
	public void setCodeAbsenceType(String codeAbsenceType) {
		this.codeAbsenceType = codeAbsenceType;
	}
	public String getProfComment() {
		return profComment;
	}
	public void setProfComment(String profComment) {
		this.profComment = profComment;
	}
	public int getLateMinutes() {
		return lateMinutes;
	}
	public void setLateMinutes(int lateMinutes) {
		this.lateMinutes = lateMinutes;
	}
	public boolean isJusttified() {
		return justtified;
	}
	public void setJusttified(boolean justtified) {
		this.justtified = justtified;
	}
	public boolean isParentNotified() {
		return parentNotified;
	}
	public void setParentNotified(boolean parentNotified) {
		this.parentNotified = parentNotified;
	}
	public String getPeriodId() {
		return periodId;
	}
	public void setPeriodId(String periodId) {
		this.periodId = periodId;
	}
	public String getStudentId() {
		return studentId;
	}
	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}
	
}
