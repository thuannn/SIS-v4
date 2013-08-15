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

public class BulletinBrancheDao extends MyDAOBase {
	/*
	 * 
	 * */
	public void initialize(){
		return;
	}
	
	/*
	 * 
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
	 * 
	 * */
	public List<BulletinBranche> listAllActive(){
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
	 * 
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
	 * 
	 * */
	public List<BulletinBranche> listAllByBulletin( String bulletinId ){
		//
		List<BulletinBranche> returnList = new ArrayList<BulletinBranche>();
		Query<BulletinBranche> q;
		//
		Query<BulletinSubject> qSubject = this.ofy().query(BulletinSubject.class)
				.filter("bulletin", new Key<Bulletin>(Bulletin.class, Long.parseLong(bulletinId)));
		for (BulletinSubject subject : qSubject ){
			//
			q = this.ofy().query(BulletinBranche.class)
					.filter("bulletinSubject", new Key<BulletinSubject>(BulletinSubject.class, subject.getId()));
			for ( BulletinBranche bulletinBranche : q ){
				bulletinBranche.setBulletinSubjectId( subject.getId() );
				returnList.add( bulletinBranche );
			}
		}
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
}
