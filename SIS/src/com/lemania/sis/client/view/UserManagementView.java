package com.lemania.sis.client.view;

import java.util.ArrayList;
import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.cell.client.CheckboxCell;
import com.google.gwt.cell.client.FieldUpdater;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.FieldValidation;
import com.lemania.sis.client.NotificationTypes;
import com.lemania.sis.client.presenter.UserManagementPresenter;
import com.lemania.sis.client.uihandler.UserManagementUiHandler;
import com.lemania.sis.shared.UserProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.user.client.ui.HorizontalPanel;

public class UserManagementView extends ViewWithUiHandlers<UserManagementUiHandler> implements
		UserManagementPresenter.MyView {

	//
	private final Widget widget;
	private UserProxy selectedUser;
	private int selectedUserIndex;

	public interface Binder extends UiBinder<Widget, UserManagementView> {
	}

	@Inject
	public UserManagementView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	@UiField(provided=true) DataGrid<UserProxy> tblUser = new DataGrid<UserProxy>();
	@UiField TextBox txtFullName;
	@UiField TextBox txtUserName;
	@UiField TextBox txtPassword;
	@UiField Button cmdAdd;
	@UiField TextBox txtEmail;
	@UiField ListBox lstUserTypes;
	@UiField HorizontalPanel pnlAdd;
	
	@UiHandler("cmdAdd")
	public void onCmdAddClicked(ClickEvent event) {
		if ( !FieldValidation.isValidUserName(txtUserName.getText()) ){
			Window.alert("Le nom d'utilisateur n'est pas valable.");
			return;
		}
		
		if ( !FieldValidation.isValidUserName(txtPassword.getText()) ){
			Window.alert("Le mot de passe n'est pas valable.");
			return;
		}		
		
		if (this.getUiHandlers() != null) {
			getUiHandlers().addNewUser(
					txtFullName.getText(),
					txtUserName.getText(),
					txtPassword.getText(),
					txtEmail.getText());
		}
	}

	@Override
	public void addNewUser(UserProxy newUser) {
		List<UserProxy> list = new ArrayList<UserProxy>();
		list.add(newUser);
		tblUser.setRowData(tblUser.getRowCount() + 1, list);
		tblUser.setRowCount(tblUser.getRowCount() + list.size());
	}

	/*
	 * */
	@Override
	public void initializeTables() {
		//
		TextColumn<UserProxy> colFullName = new TextColumn<UserProxy>() {
			@Override
			public String getValue(UserProxy object) {
				return object.getFullName();
			}
	    };
	    tblUser.addColumn(colFullName, "Nom & Prénom");
	    
	    //
	    TextColumn<UserProxy> colUserName = new TextColumn<UserProxy>() {
			@Override
			public String getValue(UserProxy object) {
				return object.getUserName();
			}
	    };
	    tblUser.addColumn(colUserName, "Nom d'utilisateur");
	    
	 	// Password
 		TextColumn<UserProxy> passCol = new TextColumn<UserProxy>() {
 	      @Override
 	      public String getValue(UserProxy object) {
 	        return object.getPassword();
 	      }
 	    };
 	    tblUser.addColumn(passCol, "Password");
	    
     	// Active
	    CheckboxCell cellActive = new CheckboxCell();
	    Column<UserProxy, Boolean> colActive = new Column<UserProxy, Boolean>(cellActive) {
	    	@Override
	    	public Boolean getValue(UserProxy ecole){
	    		return ecole.getActive();
	    	}	    	
	    };
	    tblUser.addColumn(colActive, "Actif");
	    tblUser.setColumnWidth(colActive, 5, Unit.PCT);
	    
	    colActive.setFieldUpdater(new FieldUpdater<UserProxy, Boolean>(){
	    	@Override
	    	public void update(int index, UserProxy user, Boolean value){
	    		if (getUiHandlers() != null) {	    			
	    			selectedUserIndex = index;
	    			getUiHandlers().updateUserStatus(user, value, user.getAdmin(), user.getIsProf(), user.getIsStudent(), "");
	    		}	    		
	    	}
	    });
	    
	    // Admin
	    CheckboxCell cellAdmin = new CheckboxCell();
	    Column<UserProxy, Boolean> colAdmin = new Column<UserProxy, Boolean>(cellAdmin) {
	    	@Override
	    	public Boolean getValue(UserProxy user){
	    		return user.getAdmin();
	    	}	    	
	    };
	    tblUser.addColumn(colAdmin, "Admin");	
	    tblUser.setColumnWidth(colAdmin, 5, Unit.PCT);
	    
	    colAdmin.setFieldUpdater(new FieldUpdater<UserProxy, Boolean>(){
	    	@Override
	    	public void update(int index, UserProxy user, Boolean value){
	    		if (getUiHandlers() != null) {	    			
	    			selectedUserIndex = index;
	    			getUiHandlers().updateUserStatus(user, user.getActive(), value, user.getIsProf(), user.getIsStudent(), "");
	    		}	    		
	    	}
	    });
	    
	    // Read only
	    CheckboxCell cellReadOnly = new CheckboxCell();
	    Column<UserProxy, Boolean> colReadOnly = new Column<UserProxy, Boolean>(cellReadOnly) {
	    	@Override
	    	public Boolean getValue(UserProxy user){
	    		return user.getIsReadOnly();
	    	}	    	
	    };
	    tblUser.addColumn(colReadOnly, "Lecture seule");	
	    tblUser.setColumnWidth(colReadOnly, 5, Unit.PCT);
	    
	    
	    // Prof
	    CheckboxCell cellProf = new CheckboxCell();
	    Column<UserProxy, Boolean> colProf = new Column<UserProxy, Boolean>(cellProf) {
	    	@Override
	    	public Boolean getValue(UserProxy user){
	    		return user.getIsProf();
	    	}
	    };
	    tblUser.addColumn(colProf, "Professeur");
	    tblUser.setColumnWidth(colProf, 5, Unit.PCT);
	    
	    colProf.setFieldUpdater(new FieldUpdater<UserProxy, Boolean>(){
	    	@Override
	    	public void update(int index, UserProxy user, Boolean value){
	    		if (getUiHandlers() != null) {	    			
	    			selectedUserIndex = index;
	    			getUiHandlers().updateUserStatus(user, user.getActive(), user.getAdmin(), value, user.getIsStudent(), "");
	    		}
	    	}
	    });
	    
	    // Student
	    CheckboxCell cellStudent = new CheckboxCell();
	    Column<UserProxy, Boolean> colStudent = new Column<UserProxy, Boolean>(cellStudent) {
	    	@Override
	    	public Boolean getValue(UserProxy user){
	    		return user.getIsStudent();
	    	}
	    };
	    tblUser.addColumn(colStudent, "Eleve");
	    tblUser.setColumnWidth(colStudent, 5, Unit.PCT);
	    
	    colStudent.setFieldUpdater(new FieldUpdater<UserProxy, Boolean>(){
	    	@Override
	    	public void update(int index, UserProxy user, Boolean value){
	    		if (getUiHandlers() != null) {
	    			selectedUserIndex = index;
	    			getUiHandlers().updateUserStatus(user, user.getActive(), user.getAdmin(), user.getIsProf(), value, "");
	    		}
	    	}
	    });
	    
	    //
		TextColumn<UserProxy> colLastLogin = new TextColumn<UserProxy>() {
			@Override
			public String getValue(UserProxy object) {
				return object.getCurrentLoggedInTime();
			}
	    };
	    tblUser.addColumn(colLastLogin, "Dernière login");
	    
	    //
	    initializeUserTypeList();
	}

	
	/*
	 * */
	private void initializeUserTypeList() {
		//
		lstUserTypes.addItem("-", "");
		lstUserTypes.addItem("Professeurs", "professeures");
		lstUserTypes.addItem("Elèves", "eleves");
		lstUserTypes.addItem("Tout", "tout");
	}

	/*
	 * */
	@Override
	public void setUserData(List<UserProxy> list) {
		//
		tblUser.setRowData(list);
		//
		tblUser.setHeight( Integer.toString((list.size()+1) * NotificationTypes.lineHeightShortList) + "px");
	}

	/*
	 * */
	@Override
	public void refreshTable(UserProxy updatedUser) {
		List<UserProxy> users = new ArrayList<UserProxy>();
		users.add(updatedUser);
        tblUser.setRowData(selectedUserIndex, users);
		tblUser.redraw();
	}
	

	/*
	 * */
	@Override
	public void populateSelectedUserInfo() {
		if (selectedUser != null) {
			txtFullName.setText( selectedUser.getFullName() );
			txtUserName.setText( selectedUser.getUserName() );
			txtEmail.setText( selectedUser.getEmail() );
		}		
	}
	
	
	/* 
	 *
	 * */
	@UiHandler("lstUserTypes")
	void onLstUserTypesChange(ChangeEvent event) {
		if (getUiHandlers() != null) {			
			getUiHandlers().loadUsersByType( lstUserTypes.getValue( lstUserTypes.getSelectedIndex() ));
		}
	}
	

	/*
	 * 
	 * */
	@Override
	public void showAddPanel() {
		//
		pnlAdd.setVisible(true);
	}
	

	/*
	 * 
	 * */
	@Override
	public void hideCodesAcces(boolean hide) {
		//
		tblUser.setVisible(!hide);
	}
}