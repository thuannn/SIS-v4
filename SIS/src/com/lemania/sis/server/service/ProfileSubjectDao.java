package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.sis.server.Profile;
import com.lemania.sis.server.ProfileBranche;
import com.lemania.sis.server.ProfileSubject;
import com.lemania.sis.server.Subject;

public class ProfileSubjectDao extends MyDAOBase {
	//
	public void initialize(){
		return;
	}
	
	
	/**/
	public List<ProfileSubject> listAll(){
		Query<ProfileSubject> q = this.ofy().query(ProfileSubject.class).order("subjectName");
		List<ProfileSubject> returnList = new ArrayList<ProfileSubject>();
		for (ProfileSubject profileSubject : q){
			profileSubject.setSubjectName( this.ofy().get( profileSubject.getSubject()).getSubjectName() );
			returnList.add(profileSubject);
		}
		return returnList;
	}
	
	
	/**/
	public List<ProfileSubject> listAllActive(){
		Query<ProfileSubject> q = this.ofy().query(ProfileSubject.class)
				.filter("isActive", true)
				.order("subjectName");
		List<ProfileSubject> returnList = new ArrayList<ProfileSubject>();
		for ( ProfileSubject profileSubject : q ){
			profileSubject.setSubjectName( this.ofy().get( profileSubject.getSubject()).getSubjectName() );
			returnList.add( profileSubject );
		}
		return returnList;
	}
	
	
	/**/
	public List<ProfileSubject> listAll( String profileId ){
		Query<ProfileSubject> q = this.ofy().query(ProfileSubject.class)
				.filter("profile", new Key<Profile>(Profile.class, Long.parseLong( profileId )))
				.order("subjectName");
		List<ProfileSubject> returnList = new ArrayList<ProfileSubject>();
		for ( ProfileSubject profileSubject : q ){
			profileSubject.setSubjectName( this.ofy().get( profileSubject.getSubject()).getSubjectName() );
			returnList.add( profileSubject );
		}
		return returnList;
	}
	
	
	/**/
	public void save(ProfileSubject profileSubject){
		this.ofy().put( profileSubject );
	}
	
	
	/**/
	public ProfileSubject saveAndReturn(ProfileSubject profile){
		Key<ProfileSubject> key = this.ofy().put(profile);
		try {
			ProfileSubject ps = this.ofy().get(key);
			ps.setSubjectName( this.ofy().get( ps.getSubject()).getSubjectName() );
			return ps;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	/**/
	public ProfileSubject saveAndReturn(String profileId, String subjectId, String subjectCoef ){
		//
		ProfileSubject ps = new ProfileSubject();
		ps.setProfile( new Key<Profile>( Profile.class, Long.parseLong(profileId)));
		ps.setSubject(new Key<Subject>( Subject.class, Long.parseLong(subjectId)));
		ps.setSubjectName( this.ofy().get( ps.getSubject()).getSubjectName() );
		ps.setSubjectCoef( Double.parseDouble(subjectCoef));
		
		Key<ProfileSubject> key = this.ofy().put( ps );
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	
	/**/
	public Boolean removeProfileSubject(ProfileSubject profileSubject) {
		//
		Query<ProfileBranche> q = this.ofy().query(ProfileBranche.class)
				.filter("profileSubject", new Key<ProfileSubject>(ProfileSubject.class, profileSubject.getId()));
		if (q.count() > 0)
			return false;
		else {
			this.ofy().delete(profileSubject);
			return true;
		}
	}
	
	
	/**/
	public ProfileSubject calculateTotalBrancheCoef(String profileSubjectId) {
		//
		ProfileSubject ps = this.ofy().get( new Key<ProfileSubject>(ProfileSubject.class, Long.parseLong(profileSubjectId)) );
		Query<ProfileBranche> q = this.ofy().query(ProfileBranche.class)
				.filter("profileSubject", new Key<ProfileSubject>( ProfileSubject.class, Long.parseLong(profileSubjectId)) )
				.order("profileBranche");
		ps.setTotalBrancheCoef(0.0);
		for ( ProfileBranche profileBranche : q ){
			ps.setTotalBrancheCoef( ps.getTotalBrancheCoef() + profileBranche.getBrancheCoef() );
		}
		this.ofy().put( ps );
		return ps;
	}
}
