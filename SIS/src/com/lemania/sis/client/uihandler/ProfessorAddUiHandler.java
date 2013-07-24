package com.lemania.sis.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;

public interface ProfessorAddUiHandler extends UiHandlers {
	
	void professorAddCancelled();
	void professorAdd(String profName, String profEmail, Boolean profStatus);
}
