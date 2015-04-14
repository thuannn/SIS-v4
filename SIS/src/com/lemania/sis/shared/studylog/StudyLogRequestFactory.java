package com.lemania.sis.shared.studylog;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.Request;
import com.google.web.bindery.requestfactory.shared.RequestContext;
import com.google.web.bindery.requestfactory.shared.RequestFactory;
import com.google.web.bindery.requestfactory.shared.Service;
import com.lemania.sis.server.bean.studylog.StudyLogDao;
import com.lemania.sis.server.service.DaoServiceLocator;


public interface StudyLogRequestFactory extends RequestFactory {

	@Service ( value = StudyLogDao.class, locator = DaoServiceLocator.class )
	interface StudyLogRequestContext extends RequestContext {
		//
		Request<Void> save( StudyLogProxy studyLog );
		
		Request<StudyLogProxy> saveAndReturn( StudyLogProxy studyLog );
		Request<StudyLogProxy> saveAndReturn( String subjectId, String classeId, String logTitle, String logContent, String logDate ); 
		
		Request<StudyLogProxy> updateLog( String subjectId, String classeId, String logTitle, String logContent, String logDate, String editLogId ); 
		
		Request<List<StudyLogProxy>> saveAndReturnBatch( String subjectId, String classeId, String logTitle, String logContent, String logDate );
		
		Request<Void> removeStudyLog( StudyLogProxy studyLog );
		
		Request<List<StudyLogProxy>> listAll();
		Request<List<StudyLogProxy>> listAllBySubjectClass( String subjectId, String classeId );
		Request<List<StudyLogProxy>> listAllBySubject( String subjectId );
	}
	
	StudyLogRequestContext studyLogRequestContext();
}
