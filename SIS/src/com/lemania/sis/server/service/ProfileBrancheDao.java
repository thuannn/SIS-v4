package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.sis.server.Branche;
import com.lemania.sis.server.ProfileBranche;
import com.lemania.sis.server.ProfileSubject;

public class ProfileBrancheDao extends MyDAOBase {
	/*
	 * 
	 * */
	public void initialize(){
		return;
	}
	
	/*
	 * 
	 * */
	public List<ProfileBranche> listAll(){
		Query<ProfileBranche> q = this.ofy().query(ProfileBranche.class).order("profileBrancheName");
		List<ProfileBranche> returnList = new ArrayList<ProfileBranche>();
		for (ProfileBranche profileBranche : q){
			profileBranche.setProfileBrancheName( this.ofy().get( profileBranche.getProfileBranche()).getBrancheName() );
			returnList.add(profileBranche);
		}
		return returnList;
	}
	
	/*
	 * 
	 * */
	public List<ProfileBranche> listAllActive(){
		Query<ProfileBranche> q = this.ofy().query(ProfileBranche.class)
				.filter("isActive", true)
				.order("profileBrancheName");
		List<ProfileBranche> returnList = new ArrayList<ProfileBranche>();
		for ( ProfileBranche profileBranche : q ){
			profileBranche.setProfileBrancheName( this.ofy().get( profileBranche.getProfileBranche()).getBrancheName() );
			returnList.add( profileBranche );
		}
		return returnList;
	}
	
	/*
	 * 
	 * */
	public List<ProfileBranche> listAll( String profileSubjectId ){
		Query<ProfileBranche> q = this.ofy().query(ProfileBranche.class)
				.filter("profileSubject", new Key<ProfileSubject>(ProfileSubject.class, Long.parseLong(profileSubjectId)))
				.order("profileBrancheName");
		List<ProfileBranche> returnList = new ArrayList<ProfileBranche>();
		for ( ProfileBranche profileBranche : q ){
			profileBranche.setProfileBrancheName( this.ofy().get( profileBranche.getProfileBranche()).getBrancheName() );
			returnList.add( profileBranche );
		}
		return returnList;
	}
	
	/*
	 * 
	 * */
	public void save(ProfileBranche profileBranche){
		this.ofy().put( profileBranche );
	}
	
	/*
	 * 
	 * */
	public ProfileBranche saveAndReturn(ProfileBranche profile){
		Key<ProfileBranche> key = this.ofy().put(profile);
		try {
			ProfileBranche ps = this.ofy().get(key);
			ps.setProfileBrancheName( this.ofy().get( ps.getProfileBranche()).getBrancheName() );
			return ps;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	/*
	 * 
	 * */
	public ProfileBranche saveAndReturn(String profileSubjectId, String brancheId, String brancheCoef ){
		//
		ProfileBranche ps = new ProfileBranche();
		ps.setProfileSubject( new Key<ProfileSubject>( ProfileSubject.class, Long.parseLong(profileSubjectId)) );
		ps.setProfileBranche(new Key<Branche>( Branche.class, Long.parseLong(brancheId)) );
		ps.setProfileBrancheName( this.ofy().get( ps.getProfileBranche()).getBrancheName() );
		ps.setBrancheCoef( Double.parseDouble(brancheCoef) );
		
		Key<ProfileBranche> key = this.ofy().put( ps );
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	/*
	 * 
	 * */
	public void removeProfileBranche(ProfileBranche profileBranche){
		this.ofy().delete( profileBranche );
	}
}
