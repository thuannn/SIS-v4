package com.lemania.sis.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.sis.server.service.DaoServiceLocator;
import com.lemania.sis.server.service.LogTypeDao;
import com.lemania.sis.shared.LogTypeProxy;

public interface LogTypeRequestFactory extends RequestFactory {
	
	@Service(value=LogTypeDao.class, locator=DaoServiceLocator.class)
	interface LogTypeRequestContext extends RequestContext {
		
		Request<List<LogTypeProxy>> listAll();
		Request<List<LogTypeProxy>> listAllActive();
		Request<Void> save(LogTypeProxy type);
		Request<LogTypeProxy> saveAndReturn(LogTypeProxy newHour);
		Request<Void> removeLogType(LogTypeProxy type);
		
		Request<Void> initialize();
	}
	
	LogTypeRequestContext typeRequest();
}
