package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.sis.server.Branche;
import com.lemania.sis.server.Bulletin;
import com.lemania.sis.server.BulletinBranche;
import com.lemania.sis.server.BulletinSubject;
import com.lemania.sis.server.Profile;
import com.lemania.sis.server.ProfileBranche;
import com.lemania.sis.server.ProfileSubject;

public class BulletinBrancheDao extends MyDAOBase {
	/*
	 * */
	public void initialize(){
		return;
	}
	
	
	/*
	 * */
	public List<BulletinBranche> listAll(){
		//
		Query<BulletinBranche> q = this.ofy().query(BulletinBranche.class).order("bulletinBrancheName");
		List<BulletinBranche> returnList = new ArrayList<BulletinBranche>();
		for (BulletinBranche bulletinBranche : q){
			bulletinBranche.setBulletinBrancheName( this.ofy().get( bulletinBranche.getBulletinBranche()).getBrancheName() );
			returnList.add(bulletinBranche);
		}
		return returnList;
	}
	
	/*
	 * */
	public void refreshBulletinBrancheNames(String oldBrancheName, String newBrancheName){
		//
		Query<BulletinBranche> q = this.ofy().query(BulletinBranche.class).filter("bulletinBrancheName", oldBrancheName);
		List<BulletinBranche> branches = new ArrayList<BulletinBranche>();
		for (BulletinBranche bulletinBranche : q) {
			bulletinBranche.setBulletinBrancheName( newBrancheName );
			branches.add(bulletinBranche);
		}
		this.ofy().put(branches);
	}
	
	/*
	 * */
	public List<BulletinBranche> listAllActive() {
		//
		Query<BulletinBranche> q = this.ofy().query(BulletinBranche.class)
				.filter("isActive", true);
		List<BulletinBranche> returnList = new ArrayList<BulletinBranche>();
		for ( BulletinBranche bulletinBranche : q ){
			bulletinBranche.setBulletinBrancheName( this.ofy().get( bulletinBranche.getBulletinBranche()).getBrancheName() );
			returnList.add( bulletinBranche );
		}
		Collections.sort(returnList);
		return returnList;
	}
	
	
	/*
	 * */
	public List<BulletinBranche> listAll( String bulletinSubjectId ){
		//
		Query<BulletinBranche> q = this.ofy().query(BulletinBranche.class)
				.filter("bulletinSubject", new Key<BulletinSubject>(BulletinSubject.class, Long.parseLong(bulletinSubjectId)));
		List<BulletinBranche> returnList = new ArrayList<BulletinBranche>();
		for ( BulletinBranche bulletinBranche : q ){
			bulletinBranche.setBulletinBrancheName( this.ofy().get( bulletinBranche.getBulletinBranche()).getBrancheName() );
			returnList.add( bulletinBranche );
		}
		Collections.sort(returnList);
		return returnList;
	}
	
	
	/*
	 * */
	public List<BulletinBranche> listAllByBulletin( String bulletinId ) {
		//
		List<BulletinBranche> returnList = new ArrayList<BulletinBranche>();
		Query<BulletinBranche> q;
		//
		Query<BulletinSubject> qSubject = this.ofy().query(BulletinSubject.class)
				.filter("bulletin", new Key<Bulletin>(Bulletin.class, Long.parseLong(bulletinId)));
		for (BulletinSubject subject : qSubject ){
			//
			q = this.ofy().query(BulletinBranche.class)
					.filter("bulletinSubject", new Key<BulletinSubject>(BulletinSubject.class, subject.getId()))
					.order("bulletinBrancheName");
			for ( BulletinBranche bulletinBranche : q ){
				bulletinBranche.setBulletinSubjectId( subject.getId() );
				bulletinBranche.setBulletinBrancheName( this.ofy().get( bulletinBranche.getBulletinBranche()).getBrancheName() );
				returnList.add( bulletinBranche );
			}
		}
		Collections.sort(returnList);
		return returnList;
	}
	
	
	/*
	 * 
	 * */
	public void save(BulletinBranche bulletinBranche){
		this.ofy().put( bulletinBranche );
	}
	
	
	/*
	 * 
	 * */
	public BulletinBranche saveAndReturn(BulletinBranche branche){
		//
		Key<BulletinBranche> key = this.ofy().put(branche);
		try {
			BulletinBranche ps = this.ofy().get(key);
			ps.setBulletinBrancheName( this.ofy().get( ps.getBulletinBranche()).getBrancheName() );
			return ps;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	/*
	 * 
	 * */
	public BulletinBranche saveAndReturn(String bulletinSubjectId, String brancheId, String brancheCoef ){
		//
		BulletinBranche ps = new BulletinBranche();
		ps.setBulletinSubject( new Key<BulletinSubject>( BulletinSubject.class, Long.parseLong(bulletinSubjectId)) );
		ps.setBulletinBranche(new Key<Branche>( Branche.class, Long.parseLong(brancheId)) );
		ps.setBulletinBrancheName( this.ofy().get( ps.getBulletinBranche()).getBrancheName() );
		ps.setBrancheCoef( Double.parseDouble(brancheCoef) );
		
		Key<BulletinBranche> key = this.ofy().put( ps );
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	/*
	 * 
	 * */
	public void removeBulletinBranche(BulletinBranche bulletinBranche){
		//
		this.ofy().delete( bulletinBranche );
	}
	
	
	/*
	 *
	 * */
	public List<BulletinBranche> addRelatedBranches( BulletinSubject bulletinSubject ) {
		//
		BulletinBranche curBulletinBranche;
		List<BulletinBranche> returnList = new ArrayList<BulletinBranche>();
		//
		Profile profile;
		Bulletin bulletin = this.ofy().get(bulletinSubject.getBulletin());
		if ( bulletin.getProfile() != null ){
			profile = this.ofy().get( bulletin.getProfile() );
		} else {
			Query<Profile> profiles = this.ofy().query(Profile.class)
					.filter("classe", bulletin.getClasse());
			profile = profiles.list().get(0);
		}
		//
		Query<ProfileSubject> profileSubjects = this.ofy().query(ProfileSubject.class)
				.filter("profile", profile)
				.filter("subject", bulletinSubject.getSubject())
				.filter("professor", bulletinSubject.getProfessor());		
		//
		Query<ProfileBranche> profileBranches = this.ofy().query(ProfileBranche.class)
				.filter("profileSubject", profileSubjects.listKeys().get(0));
		//
		for (ProfileBranche profileBranche : profileBranches) {
			curBulletinBranche = new BulletinBranche();
			curBulletinBranche.setBulletinBranche( profileBranche.getProfileBranche() );
			curBulletinBranche.setBrancheCoef( profileBranche.getBrancheCoef() );
			curBulletinBranche.setBulletinBrancheName( profileBranche.getProfileBrancheName() );
			curBulletinBranche.setBulletinSubject( new Key<BulletinSubject>(BulletinSubject.class, bulletinSubject.getId()));
			this.ofy().put(curBulletinBranche);
			returnList.add(curBulletinBranche);
			//
			bulletinSubject.setTotalBrancheCoef( bulletinSubject.getTotalBrancheCoef() + profileBranche.getBrancheCoef() );
		}
		//
		this.ofy().put( bulletinSubject );
		//
		return returnList;
	}
}
