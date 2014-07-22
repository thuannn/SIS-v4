package com.lemania.sis.shared.parent;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.sis.server.bean.parent.ParentDao;
import com.lemania.sis.server.service.DaoServiceLocator;

public interface ParentRequestFactory extends RequestFactory {

	@Service( value=ParentDao.class, locator=DaoServiceLocator.class )
	interface ParentRequestContext extends RequestContext {
		//
		Request<List<ParentProxy>> listAll();
		Request<Void> save(ParentProxy parent); 
		Request<ParentProxy> saveAndReturn(ParentProxy parent);
		Request<Void> removeParent(ParentProxy parent);
	}
	
	ParentRequestContext parentRequestContext();
}
