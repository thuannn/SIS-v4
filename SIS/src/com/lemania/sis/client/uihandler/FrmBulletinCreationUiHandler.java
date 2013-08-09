package com.lemania.sis.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;

public interface FrmBulletinCreationUiHandler extends UiHandlers {
	//
	void onEcoleSelected(String ecoleId);
	//
	void onProgrammeSelected(String coursId);
	void onClassChanged(String classId);
	//
	void createBulletin(String studentId, String classId, String year, String profileId);
}
