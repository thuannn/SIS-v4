package com.lemania.sis.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.sis.shared.SubjectProxy;

public interface FrmSubjectListUiHandler extends UiHandlers {
	//
	public void updateSubject(SubjectProxy subject, String subjectName, String subjectCoef, Boolean isActive);
}
