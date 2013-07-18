package com.lemania.sis.client.view;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.presenter.ProfsAddPresenter;
import com.lemania.sis.client.uihandler.ProfessorAddUiHandler;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.CheckBox;

public class ProfsAddView extends ViewWithUiHandlers<ProfessorAddUiHandler> implements ProfsAddPresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, ProfsAddView> {
	}

	@Inject
	public ProfsAddView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField Button cmdCancel;
	@UiField Button cmdAdd;
	@UiField TextBox txtProfName;
	@UiField CheckBox chkProfStatus;
	
	@UiHandler("cmdCancel")
	public void onCmdCancelClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().professorAddCancelled();
	}
	
	@UiHandler("cmdAdd")
	public void onCmdAddClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().professorAdd(txtProfName.getText().trim(), chkProfStatus.getValue());
	}

	@Override
	public void disableUiAfterAdd() {
		cmdAdd.setEnabled(false);
	}

	@Override
	public void initializeUi() {
		// TODO Clear prof name and enable Add button
		txtProfName.setText("");
		cmdAdd.setEnabled(true);
	}
}
