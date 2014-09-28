package com.lemania.sis.client.view;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.FocusEvent;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.event.dom.client.KeyPressEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.UI.FieldValidation;
import com.lemania.sis.client.presenter.HomePresenter;
import com.lemania.sis.client.uihandler.HomeUiHandler;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.Grid;

public class HomeView extends ViewWithUiHandlers<HomeUiHandler> implements HomePresenter.MyView {
	
	private static HomeViewUiBinder uiBinder = GWT.create(HomeViewUiBinder.class);
	@UiField TextBox txtUserName;
	@UiField Button cmdLogin;
	@UiField PasswordTextBox txtPassword;
	@UiField Grid panelLogin;
	interface HomeViewUiBinder extends UiBinder<Widget, HomeView> {}

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, HomeView> {
	}

	@Inject
	public HomeView(final Binder binder) {
		widget = uiBinder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	@UiHandler("txtPassword")
	public void onTxtPasswordKeypress(KeyPressEvent event) {
		if (event.getCharCode() == KeyCodes.KEY_ENTER) {
			authenticateUser();
		}
	}
	
	@UiHandler("cmdLogin")
	public void onCmdLoginClicked(ClickEvent event){
		authenticateUser();
	}
	
	private void authenticateUser() {
		if ( !FieldValidation.isValidUserName(txtUserName.getText()) ){
			Window.alert("Le nom d'utilisateur n'est pas valable.");
			return;
		}
		if ( !FieldValidation.isValidUserName(txtPassword.getText()) ){
			Window.alert("Le mot de passe n'est pas valable.");
			return;
		}		
		if (this.getUiHandlers() != null) {
			this.getUiHandlers().authenticateUser(txtUserName.getText(), txtPassword.getText());
		}
	}
	
	@UiHandler("txtPassword")
	public void onTxtPasswordFocus(FocusEvent event){
		txtPassword.setSelectionRange(0, txtPassword.getText().length());
	}

	@Override
	public void toggleLoginPanel(Boolean visible) {
		panelLogin.setVisible(visible);		
	}
}
