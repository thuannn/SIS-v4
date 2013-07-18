package com.lemania.sis.client.view;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.presenter.LogTypesAddPresenter;
import com.lemania.sis.client.uihandler.HourAddUiHandler;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.Button;

public class LogTypesAddView extends ViewWithUiHandlers<HourAddUiHandler> implements LogTypesAddPresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, LogTypesAddView> {
	}

	@Inject
	public LogTypesAddView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField TextBox txtHourName;
	@UiField CheckBox txtHourActive;
	@UiField Button cmdCancel;
	@UiField Button cmdAdd;
	
	@UiHandler("cmdCancel")
	public void onCmdCancelClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().hourAddCancel();
	}
	
	@UiHandler("cmdAdd")
	public void onCmdAddClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().hourAdd(txtHourName.getText().trim(), txtHourActive.getValue());
	}		
}
