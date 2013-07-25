package com.lemania.sis.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.sis.shared.ClasseProxy;

public interface FrmClasseListUiHandler extends UiHandlers {
	//
	void updateClasse( ClasseProxy classe, String classeName, Boolean value );
}
