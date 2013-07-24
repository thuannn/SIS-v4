package com.lemania.sis.client.view;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.presenter.StudentAddPresenter;
import com.lemania.sis.client.uihandler.StudentAddUiHandler;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.user.client.ui.Label;

public class StudentAddView extends ViewWithUiHandlers<StudentAddUiHandler> implements
		StudentAddPresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, StudentAddView> {
	}

	@Inject
	public StudentAddView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField TextBox txtLastName;
	@UiField TextBox txtFirstName;
	@UiField TextBox txtEmail;
	@UiField CheckBox blnActive;
	@UiField Button cmdSave;
	@UiField Label lblStatus;
	
	@UiHandler("cmdSave")
	void onCmdSaveClick(ClickEvent event) {
		if (this.getUiHandlers() != null){
			this.getUiHandlers().createStudent(txtFirstName.getText(), txtLastName.getText(), txtEmail.getText(), blnActive.getValue());
		}
	}
	
	@Override
	public void statusMessage(String msg) {
		lblStatus.setText(msg);
		resetForm();
	}

	@Override
	public void resetForm() {
		txtLastName.setText("");
		txtFirstName.setText("");
		txtEmail.setText("");
		blnActive.setValue(true);
	}
}
