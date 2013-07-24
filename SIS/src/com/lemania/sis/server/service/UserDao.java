package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.sis.server.User;

public class UserDao extends MyDAOBase {
	
	public void initialize(){
		return;
	}
	
	public List<User> listAll(){
		Query<User> q = this.ofy().query(User.class);
		List<User> returnList = new ArrayList<User>();
		for (User user : q){
			returnList.add(user);
		}
		return returnList;
	}
	
	public List<User> listAllActive(){
		Query<User> q = this.ofy().query(User.class)
				.filter("active", true);
		List<User> returnList = new ArrayList<User>();
		for (User user : q){
			returnList.add(user);
		}
		return returnList;
	}
	
	public void save(User user){
		this.ofy().put(user);
	}
	
	public User saveAndReturn(User user){
		Key<User> key = this.ofy().put(user);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void removeUser(User user){
		this.ofy().delete(user);
	}
	
	public User authenticateUser(String userName, String password) {
		Query<User> q = this.ofy().query(User.class)
				.filter("active", true)
				.filter("userName", userName.toLowerCase())
				.filter("password", password);
		List<User> returnList = new ArrayList<User>();
		
		Calendar cal = Calendar.getInstance();
		
		for (User user : q){
			// the months in Java start by zero, so increase one
			user.setCurrentMonth(cal.get(Calendar.MONTH) +1);
			user.setCurrentYear(cal.get(Calendar.YEAR));
			user.setCurrentDay(cal.get(Calendar.DAY_OF_MONTH));
			returnList.add(user);
		}
		
		if (returnList.size() > 0)
			return returnList.get(0);
		else
			return null;
	}
	
	public User changePassword(String userName, String password, String newPassword) {
		Query<User> q = this.ofy().query(User.class)
				.filter("active", true)
				.filter("userName", userName.toLowerCase())
				.filter("password", password);
		List<User> returnList = new ArrayList<User>();
		for (User user : q){		
			returnList.add(user);
		}
		
		if (returnList.size() > 0) {
			returnList.get(0).setPassword(newPassword);
			this.ofy().put(returnList.get(0));
			return returnList.get(0);
		}
		else
			return null;
	}
}
