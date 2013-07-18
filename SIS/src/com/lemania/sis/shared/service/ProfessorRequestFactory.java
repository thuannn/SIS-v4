package com.lemania.sis.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.sis.server.service.DaoServiceLocator;
import com.lemania.sis.server.service.ProfessorDao;
import com.lemania.sis.shared.CoursProxy;
import com.lemania.sis.shared.ProfessorProxy;

public interface ProfessorRequestFactory extends RequestFactory {
	
	@Service(value=ProfessorDao.class, locator=DaoServiceLocator.class)
	interface ProfessorRequestContext extends RequestContext {
		
		Request<List<ProfessorProxy>> listAll();
		
		Request<List<ProfessorProxy>> listAllByCourse(String courseId);
		Request<List<ProfessorProxy>> listAllActiveByCourse(String courseId, String year, String month);
		
		Request<List<ProfessorProxy>> listAllByCourseList(List<CoursProxy> courses);
		Request<List<ProfessorProxy>> listAllByCourseWithTime(String deptId, int year);
		
		Request<Void> save(ProfessorProxy prof);
		
		Request<ProfessorProxy> saveAndReturn(ProfessorProxy newProf);
		
		Request<Void> removeProfessor(ProfessorProxy prof);
		
		Request<Void> initialize();
	}
	
	ProfessorRequestContext professorRequest();

}