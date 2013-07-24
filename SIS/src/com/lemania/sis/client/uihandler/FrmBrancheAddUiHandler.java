package com.lemania.sis.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;

public interface FrmBrancheAddUiHandler extends UiHandlers {
	public void addNewBranche(String brancheName, String brancheCoef, Boolean brancheActive);
}