package com.lemania.sis.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;

public interface FrmBulletinViewDetailUiHandler extends UiHandlers {
	//
	void onStudentSelected();
	//
	void onClassChange(String classId);
	//
	void onBulletinChange(String bulletinId);
}
