package com.lemania.sis.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.sis.server.service.BulletinBrancheDao;
import com.lemania.sis.server.service.DaoServiceLocator;
import com.lemania.sis.shared.BulletinBrancheProxy;

public interface BulletinBrancheRequestFactory extends RequestFactory {
	//
	@Service(value=BulletinBrancheDao.class, locator=DaoServiceLocator.class)
	interface BulletinBrancheRequestContext extends RequestContext {
		//
		Request<List<BulletinBrancheProxy>> listAll();
		Request<List<BulletinBrancheProxy>> listAllActive();
		
		Request<List<BulletinBrancheProxy>> listAll( String bulletinSubjectId );
		Request<Void> save(BulletinBrancheProxy bulletinBranche);
		
		Request<BulletinBrancheProxy> saveAndReturn(BulletinBrancheProxy branche);		
		Request<BulletinBrancheProxy> saveAndReturn(String bulletinSubjectId, String brancheId, String brancheCoef );
		
		Request<Void> removeProfileBranche(BulletinBrancheProxy bulletinBranche);
	}
	
	BulletinBrancheRequestContext bulletinBrancheRequest();
}
