package com.lemania.sis.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;

public interface ProfileManagementUiHandler extends UiHandlers {
	//
	void createNewProfile(String profileName);
	//
	void loadProfessorList(String subjectId);
	//
	void addSubjectToProfile( String profileId, String subjectId, String subjectCoef );
	void addBrancheToProfile( String profileSubjectId, String brancheId, String brancheCoef );
	//
}
