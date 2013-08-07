package com.lemania.sis.server;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;

@Entity
public class BulletinBranche extends DatastoreObject {
	//
	private Key<BulletinSubject> bulletinSubject;
	private Key<Branche> bulletinBranche;
	
	private String bulletinBrancheName;
	private Double brancheCoef;
	
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
}
