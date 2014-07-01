package com.lemania.sis.client.form.studentagenda.studentagenda;

import com.gwtplatform.mvp.client.UiHandlers;

public interface StudentAgendaUiHandlers extends UiHandlers {
	//
	void onClassChanged( String classId );
	//
	void onProfileChanged( String profileId );
}
