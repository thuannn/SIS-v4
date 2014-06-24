package com.lemania.sis.shared.masteragendaitem;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.sis.server.masteragendaitem.MasterAgendaItemDao;
import com.lemania.sis.server.service.DaoServiceLocator;

public interface MasterAgendaItemRequestFactory extends RequestFactory {
	
	@Service(value=MasterAgendaItemDao.class, locator=DaoServiceLocator.class)
	interface MasterAgendaItemRequestContext extends RequestContext {
		//	
		Request<Void> initialize();
		Request<List<MasterAgendaItemProxy>> listAll();

		Request<Void> save(MasterAgendaItemProxy c);
		Request<MasterAgendaItemProxy> saveAndReturn(MasterAgendaItemProxy c);
		
		Request<MasterAgendaItemProxy> addMasterAgendaItem( String jourCode, String periodId, String profileId, 
				String subjectId, String profId, String classroomId, int duration );
		
		Request<Void> removeMasterAgendaItem(MasterAgendaItemProxy mai);
	}
	
	MasterAgendaItemRequestContext masterAgendaItemRequestContext();

}
