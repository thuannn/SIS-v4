package com.lemania.sis.client.form.masteragenda;

import com.gwtplatform.mvp.client.UiHandlers;

public interface MasterAgendaUiHandlers extends UiHandlers {
	//
	void savePeriodSchedule();
	//
	void onClassChanged( String classId );
	//
	void onProfileChanged( String profileId );
	//
	void loadProfessorList( String subjectId, String classId );
}
