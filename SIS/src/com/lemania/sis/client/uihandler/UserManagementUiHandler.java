package com.lemania.sis.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.sis.shared.UserProxy;

public interface UserManagementUiHandler extends UiHandlers {
	//
	public void addNewUser(String fullName, String userName, String password, String email);
	//
	public void updateUserStatus(UserProxy user, Boolean active, Boolean admin, Boolean isProf, Boolean isStudent, String password);
	//
	public void loadUsersByType(String type);
}
