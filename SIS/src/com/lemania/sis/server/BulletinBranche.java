package com.lemania.sis.server;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;

@Entity
public class BulletinBranche extends DatastoreObject {
	//
	private Key<BulletinSubject> bulletinSubject;
	private Key<Branche> bulletinBranche;
	//
	private String bulletinBrancheName;
	private Double brancheCoef;
	//
	private String t1_1 = "";
	private String t1_2 = "";
	private String t1_3 = "";
	private String t1_4 = "";
	private String t1_5 = "";
	
	private String t2_1 = "";
	private String t2_2 = "";
	private String t2_3 = "";
	private String t2_4 = "";
	private String t2_5 = "";
	
	private String t3_1 = "";
	private String t3_2 = "";
	private String t3_3 = "";
	private String t3_4 = "";
	private String t3_5 = "";
	
	private String T1 = "";
	private String T2 = "";
	private String T3 = "";
	private String An = "";
		
	public Double getBrancheCoef() {
		return brancheCoef;
	}
	
	public void setBrancheCoef(Double brancheCoef) {
		this.brancheCoef = brancheCoef;
	}

	public String getBulletinBrancheName() {
		return bulletinBrancheName;
	}

	public void setBulletinBrancheName(String bulletinBrancheName) {
		this.bulletinBrancheName = bulletinBrancheName;
	}

	public Key<Branche> getBulletinBranche() {
		return bulletinBranche;
	}

	public void setBulletinBranche(Key<Branche> bulletinBranche) {
		this.bulletinBranche = bulletinBranche;
	}

	public Key<BulletinSubject> getBulletinSubject() {
		return bulletinSubject;
	}

	public void setBulletinSubject(Key<BulletinSubject> bulletinSubject) {
		this.bulletinSubject = bulletinSubject;
	}

	public String getT1_1() {
		return t1_1;
	}

	public void setT1_1(String t1_1) {
		this.t1_1 = t1_1;
	}

	public String getT1_2() {
		return t1_2;
	}

	public void setT1_2(String t1_2) {
		this.t1_2 = t1_2;
	}

	public String getT1_3() {
		return t1_3;
	}

	public void setT1_3(String t1_3) {
		this.t1_3 = t1_3;
	}

	public String getT1_4() {
		return t1_4;
	}

	public void setT1_4(String t1_4) {
		this.t1_4 = t1_4;
	}

	public String getT1_5() {
		return t1_5;
	}

	public void setT1_5(String t1_5) {
		this.t1_5 = t1_5;
	}

	public String getT2_1() {
		return t2_1;
	}

	public void setT2_1(String t2_1) {
		this.t2_1 = t2_1;
	}

	public String getT2_2() {
		return t2_2;
	}

	public void setT2_2(String t2_2) {
		this.t2_2 = t2_2;
	}

	public String getT2_3() {
		return t2_3;
	}

	public void setT2_3(String t2_3) {
		this.t2_3 = t2_3;
	}

	public String getT2_4() {
		return t2_4;
	}

	public void setT2_4(String t2_4) {
		this.t2_4 = t2_4;
	}

	public String getT2_5() {
		return t2_5;
	}

	public void setT2_5(String t2_5) {
		this.t2_5 = t2_5;
	}

	public String getT3_1() {
		return t3_1;
	}

	public void setT3_1(String t3_1) {
		this.t3_1 = t3_1;
	}

	public String getT3_2() {
		return t3_2;
	}

	public void setT3_2(String t3_2) {
		this.t3_2 = t3_2;
	}

	public String getT3_3() {
		return t3_3;
	}

	public void setT3_3(String t3_3) {
		this.t3_3 = t3_3;
	}

	public String getT3_4() {
		return t3_4;
	}

	public void setT3_4(String t3_4) {
		this.t3_4 = t3_4;
	}

	public String getT3_5() {
		return t3_5;
	}

	public void setT3_5(String t3_5) {
		this.t3_5 = t3_5;
	}

	public String getT2() {
		return T2;
	}

	public void set21(String t2) {
		T2 = t2;
	}

	public String getT3() {
		return T3;
	}

	public void setT3(String t3) {
		T3 = t3;
	}

	public String getT1() {
		return T1;
	}

	public void setT1(String t1) {
		T1 = t1;
	}

	public String getAn() {
		return An;
	}

	public void setAn(String an) {
		An = an;
	}
}
