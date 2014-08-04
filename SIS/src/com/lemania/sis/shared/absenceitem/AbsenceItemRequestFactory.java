package com.lemania.sis.shared.absenceitem;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.sis.server.bean.absenceitem.AbsenceItemDao;
import com.lemania.sis.server.service.DaoServiceLocator;

public interface AbsenceItemRequestFactory extends RequestFactory {
	
	@Service ( value= AbsenceItemDao.class, locator= DaoServiceLocator.class )
	interface AbsenceItemRequestContext extends RequestContext {
		//
		Request<List<AbsenceItemProxy>> listAll();
		Request<Void> save(AbsenceItemProxy ai); 
		Request<AbsenceItemProxy> saveAndReturn(AbsenceItemProxy ai);
		Request<Void> removeAbsenceItem(AbsenceItemProxy ai);
		Request<Void> removeAbsenceItem(String aiID);
		//
		Request<AbsenceItemProxy> saveAbsenceItem(
				String studentId,
				String periodId,
				String profId,
				String classId,
				String subjectId, 
				String motifId,
				String codeAbsence,
				String profComment,
				int lateMinute,
				boolean justified,
				boolean parentNotified );
	}
	
	AbsenceItemRequestContext absenceItemRequestContext();

}
