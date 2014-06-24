package com.lemania.sis.client.form.masteragenda;

import com.gwtplatform.mvp.client.UiHandlers;

public interface MasterAgendaUiHandlers extends UiHandlers {
	//
	void onClassChanged( String classId );
	//
	void onProfileChanged( String profileId );
	//
	void loadProfessorList( String subjectId, String classId );
	//
	void addMasterAgendaItem( String jourCode, String periodId, String profileId, String subjectId, String profId, String classroomId, int duration );
}
