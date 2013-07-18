package com.lemania.sis.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;

public interface FrmPasswordUiHandler extends UiHandlers {
	void changePassword(String current, String new1, String new2);
}
