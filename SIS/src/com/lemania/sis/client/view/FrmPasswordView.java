package com.lemania.sis.client.view;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.presenter.FrmPasswordPresenter;
import com.lemania.sis.client.uihandler.FrmPasswordUiHandler;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ClickEvent;

public class FrmPasswordView extends ViewWithUiHandlers<FrmPasswordUiHandler> 
		implements FrmPasswordPresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, FrmPasswordView> {
	}

	@Inject
	public FrmPasswordView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField Button cmdSave;
	@UiField TextBox txtCurrentPassword;
	@UiField TextBox txtNewPassword1;
	@UiField TextBox txtNewPassword2;
	
	@UiHandler("cmdSave")
	void onCmdSaveClick(ClickEvent event) {
		if (this.getUiHandlers() != null) {
			this.getUiHandlers().changePassword(txtCurrentPassword.getText(), txtNewPassword1.getText(), txtNewPassword2.getText());
		}
	}
}
