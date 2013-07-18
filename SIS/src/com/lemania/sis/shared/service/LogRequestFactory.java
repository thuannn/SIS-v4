package com.lemania.sis.shared.service;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.sis.server.service.DaoServiceLocator;
import com.lemania.sis.server.service.LogDao;
import com.lemania.sis.shared.LogProxy;

public interface LogRequestFactory extends RequestFactory {
	
	@Service(value=LogDao.class, locator=DaoServiceLocator.class)
	interface LogRequestContext extends RequestContext {
		
		Request<List<LogProxy>> listAll();
		Request<List<LogProxy>> listAllFullDetail();
		Request<List<LogProxy>> listAllFullDetailByMonth(int selectedYear, int selectedMonth);
		Request<List<LogProxy>> listAllFullDetailByDepartment(String deptId);
		Request<List<LogProxy>> listAllFullDetailByProf(String deptId);
		
		Request<List<LogProxy>> listAll(String profId, String courseId, String year, String month);
		
		Request<List<LogProxy>> batchUpdate(String profId, String courseId, String year, String month, List<String> typeIdList);
		
		Request<List<LogProxy>> batchUpdate(
				String profId, String courseId, String year, String month,
				String coursTime, String coursNote,
				String maladieTime, String maladieNote,
				String ferieTime, String ferieNote,
				String priveTime, String priveNote, 
				String supervisionTime, String supervisionNote, 
				String fraisAmount, String fraisNote );
		
		Request<Void> save(LogProxy log);
		Request<LogProxy> saveAndReturn(LogProxy newLog);
		
		Request<Void> removeLog(LogProxy log);
		
		Request<Void> initialize();
	}
	
	LogRequestContext logRequest();
}