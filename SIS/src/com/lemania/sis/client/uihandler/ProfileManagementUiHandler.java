package com.lemania.sis.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.sis.shared.ProfileSubjectProxy;

public interface ProfileManagementUiHandler extends UiHandlers {
	//
	void createNewProfile(String profileName);
	//
	void loadProfessorList(String subjectId);
	//
	void addSubjectToProfile( String profileId, String subjectId, String subjectCoef );
	void addBrancheToProfile( String profileSubjectId, String brancheId, String brancheCoef );
	//
	void onProfileChanged( String profileId );
	//
	void updateProfileSubject(ProfileSubjectProxy ps, String coef, Boolean isActive);
	//
	void onSubjectSelected( String profileSubjectId );
}
