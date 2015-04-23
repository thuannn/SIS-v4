package com.lemania.sis.server.bean.user;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.cmd.Query;
import com.lemania.sis.server.SessionIdentifierGenerator;
import com.lemania.sis.server.bean.student.Student;
import com.lemania.sis.server.professor.Professor;
import com.lemania.sis.server.service.MyDAOBase;

public class UserDao extends MyDAOBase {
	
	public void initialize(){
		return;
	}
	
	public List<User> listAll(){
		Query<User> q = ofy().load().type(User.class);
		List<User> returnList = new ArrayList<User>();
		for (User user : q){
			returnList.add(user);
		}
		Collections.sort(returnList);
		return returnList;
	}
	
	/*
	 * */
	public List<User> listAllByType(String type) {
		Query<User> q = ofy().load().type(User.class);
		List<User> returnList = new ArrayList<User>();
		for (User user : q){
			if (type.contains("prof") && user.getIsProf())
				returnList.add(user);
			if (type.contains("eleve") && user.getIsStudent())
				returnList.add(user);
			if (type.contains("parent") && user.getIsParent())
				returnList.add(user);
			if (type.contains("admin") && user.getAdmin())
				returnList.add(user);
		}
		Collections.sort(returnList);
		return returnList;
	}
	
	
	/**/
	public List<User> listAllActive(){
		Query<User> q = ofy().load().type(User.class)
				.filter("active", true);
		List<User> returnList = new ArrayList<User>();
		for (User user : q){
			returnList.add(user);
		}
		Collections.sort(returnList);
		return returnList;
	}
	
	
	/**/
	public void save(User user){
		//
		user.setUserName( user.getUserName().toLowerCase() );
		ofy().save().entities(user);
	}
	
	
	/**/
	public User saveAndReturn(User user){
		//
		user.setUserName( user.getUserName().toLowerCase() );
		Key<User> key = ofy().save().entities(user).now().keySet().iterator().next();
		try {
			return ofy().load().key(key).now();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	/**/
	public void removeUser(User user){
		ofy().delete().entities(user);
	}
	
	
	/**/
	public User authenticateUser(String userName, String password) {
		//
		Query<User> q = ofy().load().type(User.class)
				.filter("active", true)
				.filter("userName", userName.toLowerCase())
				.filter("password", password);
		List<User> returnList = new ArrayList<User>();
		//
		Calendar cal = Calendar.getInstance();
		SessionIdentifierGenerator sig;
		for ( User user : q ) {
			// the months in Java start by zero, so increase one
//			user.setCurrentMonth(cal.get(Calendar.MONTH) +1);
//			user.setCurrentYear(cal.get(Calendar.YEAR));
//			user.setCurrentDay(cal.get(Calendar.DAY_OF_MONTH));
			
			user.setLastLoggedInTime( user.getCurrentLoggedInTime() );
			user.setCurrentLoggedInTime( 
					cal.get(Calendar.DAY_OF_MONTH) + "." 
					+ (cal.get(Calendar.MONTH) +1) + "." 
					+ cal.get(Calendar.YEAR) + " " 
					+ cal.get(Calendar.HOUR) + ":"
					+ cal.get(Calendar.MINUTE) );
			//
			sig = new SessionIdentifierGenerator();
			user.setSessionId( sig.nextSessionId() );
			//
			ofy().save().entities(user);
			//
			removeSensitiveData(user);
			//
			returnList.add( user ); 
		}
		if (returnList.size() > 0)
			return returnList.get(0);
		else
			return null;
	}

	
	/*
	 * */
	private void removeSensitiveData(User user) {
		//
		user.setPassword("");
	}

	
	/*
	 * */
	public User changePassword(String userName, String password, String newPassword) {
		Query<User> q = ofy().load().type(User.class)
				.filter("active", true)
				.filter("userName", userName.toLowerCase())
				.filter("password", password);
		List<User> returnList = new ArrayList<User>();
		for ( User user : q ){		
			returnList.add(user);
		}
		
		if (returnList.size() > 0) {
			returnList.get(0).setPassword(newPassword);
			ofy().save().entities(returnList.get(0));
			return returnList.get(0);
		}
		else
			return null;
	}
	
	/*
	 * */
	public void updateUserActiveStatus(String userEmail, Boolean userStatus) {
		Query<User> q = ofy().load().type(User.class)
				.filter("email", userEmail);						
		for (User user : q ){		
			user.setActive(userStatus);
			ofy().save().entities(user);
		}	
	}
	
	/*
	 * */
	public void fixStudentName() {
		//
		Query<User> q = ofy().load().type(User.class);	
		for (User user : q ){
			Query<Student> qStudent = ofy().load().type(Student.class).filter("Email", user.getEmail());					
			for (Student student : qStudent){
				user.setFullName( student.getLastName() + " " + student.getFirstName() );
				ofy().save().entities(user);
			}						
		}		
	}
	
	/*
	 * */
	public boolean checkClassMasterRole(String userId, String profId) {
		//
		User user = ofy().load().key( Key.create(User.class, Long.parseLong(userId)) ).now();
		Query<Professor> profs = ofy().load().type(Professor.class).filter("profEmail", user.getEmail());
		for (Professor prof : profs ) {
			if (prof.getId().toString().equals(profId))
				return true;
		} 
		return false;
	}	
}
