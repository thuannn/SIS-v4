package com.lemania.sis.client.form.parentmgt;

import javax.inject.Inject;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.SimplePager;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ClickEvent;

public class ParentManagementView extends
		ViewWithUiHandlers<ParentManagementUiHandlers> implements
		ParentManagementPresenter.MyView {
	interface Binder extends UiBinder<Widget, ParentManagementView> {
	}

	@UiField(provided=true) DataGrid<Object> tblParents = new DataGrid<Object>();
	@UiField SimplePager pagerParent;
	@UiField Button cmdAdd;

	@Inject
	ParentManagementView(Binder uiBinder) {
		initWidget(uiBinder.createAndBindUi(this));
	}
	
	/*
	 * */
	@UiHandler("cmdAdd")
	void onCmdAddClick(ClickEvent event) {
		//
		getUiHandlers().showParentProfilePopup();
	}
}
