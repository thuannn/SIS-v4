package com.lemania.sis.client.form.attributionmgt;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.sis.shared.ProfileBrancheProxy;
import com.lemania.sis.shared.ProfileSubjectProxy;

public interface ProfileManagementUiHandler extends UiHandlers {
	//
	void createNewProfile( String profileName, String classId );
	//
	void loadProfessorList( String subjectId, String classId );
	//
	void addSubjectToProfile( String profileId, String subjectId, String professorId, String subjectCoef );
	void removeSubject( ProfileSubjectProxy ps );
	//
	void addBrancheToProfile( String profileSubjectId, String brancheId, String brancheCoef, Integer subjectLastPosition );
	void removeBranche( ProfileBrancheProxy bp, String profileSubjectId, Integer subjectLastPosition );
	//
	void onProfileChanged( String profileId );
	void onClassChanged( String classId );
	//
	void updateProfileSubject( ProfileSubjectProxy ps, String coef, Boolean isActive, Integer lastPosition );
	void updateProfileBranche( ProfileBrancheProxy pb, String coef, String profileSubjectId, Integer lastPosition );
	//
	void onSubjectSelected( String profileSubjectId );
}
