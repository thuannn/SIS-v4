package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.sis.server.Profile;
import com.lemania.sis.server.ProfileSubject;
import com.lemania.sis.server.Subject;

public class ProfileSubjectDao extends MyDAOBase {
	//
	public void initialize(){
		return;
	}
	
	/**/
	public List<ProfileSubject> listAll(){
		Query<ProfileSubject> q = this.ofy().query(ProfileSubject.class).order("subject");
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
				.order("subject");
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
				.filter("profile", new Key<Profile>(Profile.class, Long.parseLong(profileId)))
				.order("subject");
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
	public void removeProfileSubject(ProfileSubject profileSubject){
		this.ofy().delete(profileSubject);
	}
}
