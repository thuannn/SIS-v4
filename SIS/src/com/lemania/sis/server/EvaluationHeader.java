package com.lemania.sis.server;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.IgnoreSave;

@Entity
public class EvaluationHeader extends DatastoreObject {
	//
	private String fromDate;
	private String toDate;
	private String objective;
	private String schoolYear;	
	
	Key<Professor> classMaster;
	Key<Classe> classe;
	
	@IgnoreSave
	String classMasterName = "";	
	
	public String getFromDate() {
		return fromDate;
	}
	public String getToDate() {
		return toDate;
	}
	public String getObjective() {
		return objective;
	}
	public Key<Professor> getClassMaster() {
		return classMaster;
	}
	public Key<Classe> getClasse() {
		return classe;
	}
	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}
	public void setToDate(String toDate) {
		this.toDate = toDate;
	}
	public void setObjective(String objective) {
		this.objective = objective;
	}
	public void setClassMaster(Key<Professor> classMaster) {
		this.classMaster = classMaster;
	}
	public void setClasse(Key<Classe> classe) {
		this.classe = classe;
	}
	public String getSchoolYear() {
		return schoolYear;
	}
	public void setSchoolYear(String schoolYear) {
		this.schoolYear = schoolYear;
	}
	public String getClassId(){
		return Long.toString(this.classe.getId());
	}
	public String getClassMasterId() {
		return Long.toString(this.classMaster.getId());
	}
	public String getClassMasterName() {
		return classMasterName;
	}
	public void setClassMasterName(String classMasterName) {
		this.classMasterName = classMasterName;
	}
}
