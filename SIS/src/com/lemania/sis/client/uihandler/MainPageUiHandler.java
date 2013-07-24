/**
 * 
 */
package com.lemania.sis.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;

/**
 * @author Thuan
 *
 */
public interface MainPageUiHandler extends UiHandlers {
	void showHomepage();
	void showTimeInput();
	
	void showFrmPassword();
	
	void showFrmStudents();
	void showFrmCreateStudents();
	
	void showEcoleList();
	void showEcoleAdd();

	void showCoursList();
	void showCoursAdd();
	
	void showProfessorList();
	void showProfessorAdd();
	
	void showTypeList();
	void showTypeAdd();
	
	void showSettingsScreen();
	void showContact();
	
	void showBrancheList();
	void showBrancheAdd();
	
	void showExtractDataForm();
	
	void showUserManagement();
	
	void showRptByDept();
	void showRptBySchool();
	void showRptByMonth();
	
	void logOut();
}
