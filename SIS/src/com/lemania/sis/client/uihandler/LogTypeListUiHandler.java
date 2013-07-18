package com.lemania.sis.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.sis.shared.LogTypeProxy;

public interface LogTypeListUiHandler extends UiHandlers {

	void updateLogTypeStatus(LogTypeProxy hp, Boolean status);
	void updateLogTypeOrder(LogTypeProxy hp, String orderNumber);
	void updateLogTypeName(LogTypeProxy hp, String typeName);
}
