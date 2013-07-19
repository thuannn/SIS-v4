package com.lemania.sis.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.sis.server.service.DaoServiceLocator;
import com.lemania.sis.server.service.UserDao;
import com.lemania.sis.shared.CoursProxy;
import com.lemania.sis.shared.UserProxy;

public interface UserRequestFactory extends RequestFactory {
	
	@Service(value=UserDao.class, locator=DaoServiceLocator.class)
	interface UserRequestContext extends RequestContext {
		
		Request<List<UserProxy>> listAll();
		Request<List<UserProxy>> listAllActive();
		
		Request<Void> save(UserProxy user);
		Request<UserProxy> saveAndReturn(UserProxy newUser);
		
		Request<Void> removeUser(UserProxy user);
		
		Request<UserProxy> authenticateUser(String userName, String password);
		Request<UserProxy> changePassword(String userName, String password, String newPassword);
		
		Request<Void> initialize();
	}
	
	UserRequestContext userRequest();
}
