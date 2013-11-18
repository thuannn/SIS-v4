package com.lemania.sis.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.sis.server.service.DaoServiceLocator;
import com.lemania.sis.server.service.EvaluationHeaderDao;
import com.lemania.sis.shared.EvaluationHeaderProxy;

public interface EvaluationHeaderRequestFactory extends RequestFactory {
	//
	@Service(value=EvaluationHeaderDao.class, locator=DaoServiceLocator.class)
	interface EvaluationHeaderRequestContext extends RequestContext {
		//
		Request<List<EvaluationHeaderProxy>> listAll();
		Request<List<EvaluationHeaderProxy>> listAllByClass(String classId);
		
		Request<Void> save(EvaluationHeaderProxy evaluationHeader);
		
		Request<EvaluationHeaderProxy> saveAndReturn(EvaluationHeaderProxy newEH);
		Request<EvaluationHeaderProxy> saveAndReturn(String fromDate, String toDate, String objective, String schoolYear, String classMasterId, String classId);
		
		Request<Void> removeEvaluationHeader(EvaluationHeaderProxy ecole);
	}
	
	EvaluationHeaderRequestContext evaluationHeaderRequest();
}
