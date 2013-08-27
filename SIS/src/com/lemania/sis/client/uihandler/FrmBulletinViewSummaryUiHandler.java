package com.lemania.sis.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;

public interface FrmBulletinViewSummaryUiHandler extends UiHandlers {
	//
	void onClassChange(String classId);
	//
	void onBulletinChange( String bulletinId );
}
