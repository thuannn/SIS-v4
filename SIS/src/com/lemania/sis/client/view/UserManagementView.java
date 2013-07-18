package com.lemania.sis.client.view;

import java.util.ArrayList;
import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.cell.client.CheckboxCell;
import com.google.gwt.cell.client.EditTextCell;
import com.google.gwt.cell.client.FieldUpdater;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.FieldVerifier;
import com.lemania.sis.client.presenter.UserManagementPresenter;
import com.lemania.sis.client.uihandler.UserManagementUiHandler;
import com.lemania.sis.shared.CoursProxy;
import com.lemania.sis.shared.EcoleProxy;
import com.lemania.sis.shared.UserProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.view.client.SelectionChangeEvent;
import com.google.gwt.view.client.SingleSelectionModel;

public class UserManagementView extends ViewWithUiHandlers<UserManagementUiHandler> implements
		UserManagementPresenter.MyView {

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
	@UiField ListBox lstAddEcole;
	@UiField ListBox lstAddCourse;
	@UiField Button cmdAddCourse;
	@UiField(provided=true) DataGrid<CoursProxy> tblDepartment = new DataGrid<CoursProxy>();
	@UiField TextBox txtEmail;
	
	@UiHandler("cmdAdd")
	public void onCmdAddClicked(ClickEvent event) {
		if ( !FieldVerifier.isValidUserName(txtUserName.getText()) ){
			Window.alert("Le nom d'utilisateur n'est pas valable.");
			return;
		}
		
		if ( !FieldVerifier.isValidUserName(txtPassword.getText()) ){
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
	
	@UiHandler("lstAddEcole")
	public void onLstAddEcoleChanged(ChangeEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().addSchoolSelected( lstAddEcole.getValue(lstAddEcole.getSelectedIndex()) );
	}
	
	@UiHandler("cmdAddCourse")
	public void onCmdAddCourseClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().addDepartment(lstAddCourse.getValue(lstAddCourse.getSelectedIndex()), selectedUser);
	}

	@Override
	public void addNewUser(UserProxy newUser) {
		List<UserProxy> list = new ArrayList<UserProxy>();
		list.add(newUser);
		tblUser.setRowData(tblUser.getRowCount() + 1, list);
		tblUser.setRowCount(tblUser.getRowCount() + list.size());
	}

	@Override
	public void initializeTables() {
		TextColumn<UserProxy> colFullName = new TextColumn<UserProxy>() {
			@Override
			public String getValue(UserProxy object) {
				return object.getFullName();
			}
	    };
	    tblUser.addColumn(colFullName, "Nom & Prénom");
	    tblUser.setColumnWidth(colFullName, 40, Unit.PCT);
	    
	    TextColumn<UserProxy> colUserName = new TextColumn<UserProxy>() {
			@Override
			public String getValue(UserProxy object) {
				return object.getUserName();
			}
	    };
	    tblUser.addColumn(colUserName, "Nom d'utilisateur");
	    tblUser.setColumnWidth(colUserName, 20, Unit.PCT);
	    
	 	// Add a text column to show the name.
 		EditTextCell passCell = new EditTextCell();
 		Column<UserProxy, String> passCol = new Column<UserProxy, String>(passCell) {
 	      @Override
 	      public String getValue(UserProxy object) {
 	        return object.getPassword();
 	      }
 	    };
 	    tblUser.addColumn(passCol, "Password");
 	    tblUser.setColumnWidth(passCol, 20, Unit.PCT);
     	passCol.setFieldUpdater(new FieldUpdater<UserProxy, String>(){
 	    	@Override
 	    	public void update(int index, UserProxy user, String value){
 	    		if (getUiHandlers() != null) {	    			
 	    			selectedUserIndex = index;
 	    			getUiHandlers().updateUserStatus(user, user.getActive(), user.getAdmin(), value);
 	    		}	    		
 	    	}
 	    });
	    
	    CheckboxCell cellActive = new CheckboxCell();
	    Column<UserProxy, Boolean> colActive = new Column<UserProxy, Boolean>(cellActive) {
	    	@Override
	    	public Boolean getValue(UserProxy ecole){
	    		return ecole.getActive();
	    	}	    	
	    };
	    tblUser.addColumn(colActive, "Actif");
	    tblUser.setColumnWidth(colActive, 10, Unit.PCT);
	    colActive.setFieldUpdater(new FieldUpdater<UserProxy, Boolean>(){
	    	@Override
	    	public void update(int index, UserProxy user, Boolean value){
	    		if (getUiHandlers() != null) {	    			
	    			selectedUserIndex = index;
	    			getUiHandlers().updateUserStatus(user, value, user.getAdmin(), "");
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
	    tblUser.setColumnWidth(colAdmin, 10, Unit.PCT);	
	    
	    colAdmin.setFieldUpdater(new FieldUpdater<UserProxy, Boolean>(){
	    	@Override
	    	public void update(int index, UserProxy user, Boolean value){
	    		if (getUiHandlers() != null) {	    			
	    			selectedUserIndex = index;
	    			getUiHandlers().updateUserStatus(user, user.getActive(), value, "");
	    		}	    		
	    	}
	    });
	    
	    // Add a selection model to handle user selection.
	    final SingleSelectionModel<UserProxy> selectionModel = new SingleSelectionModel<UserProxy>();
	    tblUser.setSelectionModel(selectionModel);
	    selectionModel.addSelectionChangeHandler( new SelectionChangeEvent.Handler() {
	    	public void onSelectionChange(SelectionChangeEvent event) {
	    		selectedUser = selectionModel.getSelectedObject();
	    		getUiHandlers().userSelected(selectedUser);
	    	}
	    } );
	    
	    // clear the lists
	    lstAddEcole.clear();
	    lstAddCourse.clear();
	}

	@Override
	public void setUserData(List<UserProxy> list) {
		tblUser.setRowData(list);
	}

	@Override
	public void refreshTable(UserProxy updatedUser) {
		List<UserProxy> users = new ArrayList<UserProxy>();
		users.add(updatedUser);
        tblUser.setRowData(selectedUserIndex, users);
		tblUser.redraw();
	}

	@Override
	public void initializeDepartmentList() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void setEcoleAddList(List<EcoleProxy> ecoles) {
		lstAddEcole.clear();
		lstAddEcole.addItem("-","");
		for (int i=0; i<ecoles.size(); i++)
			lstAddEcole.addItem(ecoles.get(i).getSchoolName(), ecoles.get(i).getId().toString());
	}

	@Override
	public void setCourseAddList(List<CoursProxy> cours) {
		lstAddCourse.clear();
		lstAddCourse.addItem("-","");
		for (int i=0; i<cours.size(); i++)
			lstAddCourse.addItem(cours.get(i).getCoursNom(), cours.get(i).getId().toString());
	}

	@Override
	public void initializeDepartmentTable() {
		TextColumn<CoursProxy> colCourseName = new TextColumn<CoursProxy>() {
			@Override
			public String getValue(CoursProxy object) {
				return object.getCoursNom();
			}
	    };
	    tblDepartment.addColumn(colCourseName, "Département");
	}

	@Override
	public void refreshDepartmentTable(List<CoursProxy> depts) {
		tblDepartment.setRowData(depts);
	}

	@Override
	public void populateSelectedUserInfo() {
		if (selectedUser != null) {
			txtFullName.setText( selectedUser.getFullName() );
			txtUserName.setText( selectedUser.getUserName() );
			txtEmail.setText( selectedUser.getEmail() );
		}		
	}
}