package com.lemania.sis.client.popup.parentprofile;

import java.util.List;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.PopupViewWithUiHandlers;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.view.client.ListDataProvider;
import com.lemania.sis.client.Title;
import com.lemania.sis.shared.student.StudentProxy;
import com.google.gwt.user.cellview.client.SimplePager;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.CheckBox;

public class ParentProfileView extends
		PopupViewWithUiHandlers<ParentProfileUiHandlers> implements
		ParentProfilePresenter.MyView {
	public interface Binder extends UiBinder<PopupPanel, ParentProfileView> {
	}

	@Inject
	ParentProfileView(Binder uiBinder, EventBus eventBus) {
		super(eventBus);

		initWidget(uiBinder.createAndBindUi(this));
	}
	
	
	@UiField Button cmdClose;
	@UiField(provided=true) DataGrid<StudentProxy> tblStudents = new DataGrid<StudentProxy>();
	@UiField(provided=true) DataGrid<StudentProxy> tblChildren = new DataGrid<StudentProxy>();
	@UiField ListBox lstTitle;
	@UiField Button cmdSave;
	@UiField SimplePager pagerStudents;
	@UiField TextBox txtLastName;
	@UiField TextBox txtFirstName;
	@UiField TextBox txtEmail;
	@UiField TextBox txtMobile;
	@UiField TextBox txtPhoneHome;
	@UiField TextBox txtPhoneWork;
	@UiField CheckBox chkAcceptEmail;
	@UiField CheckBox chkAcceptSMS;
	@UiField Button cmdAdd;
	@UiField Button cmdRemove;
	
	
	//
	ListDataProvider<StudentProxy> providerStudents = new ListDataProvider<StudentProxy>(); 
	ListDataProvider<StudentProxy> providerChildren = new ListDataProvider<StudentProxy>();
	
	
	/*
	 * */
	@UiHandler("cmdClose")
	void onCmdCloseClick(ClickEvent event) {
		//
		this.hide();
	}


	/*
	 * */
	@Override
	public void setStudentsData(List<StudentProxy> students) {
		//
		providerStudents.getList().clear();
		providerStudents.getList().addAll(students);
		providerStudents.flush();
	}


	/*
	 * */
	@Override
	public void initializeUI() {
		//
		initializeStudentTable();
		initializeChildrenTable();
		initializeList();
	}
	
	
	/*
	 * */
	private void initializeList() {
		// 
		lstTitle.clear();
		lstTitle.addItem("Choisir");
		for (int i=0; i<Title.titles.size(); i++)
			lstTitle.addItem( Title.titles.get(i), Title.titles.get(i));
	}


	/*
	 * */
	public void initializeStudentTable() {
		//
		// Add a text column to show the name.
		TextColumn<StudentProxy> colFirstName = new TextColumn<StudentProxy>() {
	      @Override
	      public String getValue(StudentProxy object) {
	        return object.getLastName();
	      }
	    };
	    tblStudents.addColumn(colFirstName, "Nom");
	    
		//
	    TextColumn<StudentProxy> colLastName = new TextColumn<StudentProxy>() {
	      @Override
	      public String getValue(StudentProxy object) {
	        return object.getFirstName();
	      } 
	    };
	    tblStudents.addColumn(colLastName, "Prénom");
	    
		//
		providerStudents.addDataDisplay( tblStudents );
		pagerStudents.setDisplay( tblStudents );
	}
	
	
	/*
	 * */
	public void initializeChildrenTable() {
		//
		// Add a text column to show the name.
		TextColumn<StudentProxy> colFirstName = new TextColumn<StudentProxy>() {
	      @Override
	      public String getValue(StudentProxy object) {
	        return object.getLastName();
	      }
	    };
	    tblChildren.addColumn(colFirstName, "Nom");
	    
		//
	    TextColumn<StudentProxy> colLastName = new TextColumn<StudentProxy>() {
	      @Override
	      public String getValue(StudentProxy object) {
	        return object.getFirstName();
	      } 
	    };
	    tblChildren.addColumn(colLastName, "Prénom");
	    
		//
		providerChildren.addDataDisplay( tblChildren );
	}
	
	
	/*
	 * */
	@UiHandler("cmdSave")
	void onCmdSaveClick(ClickEvent event) {
		//
		getUiHandlers().saveParent(
				lstTitle.getItemText(lstTitle.getSelectedIndex()), 
				txtFirstName.getText(), 
				txtLastName.getText(), 
				txtEmail.getText(), 
				txtMobile.getText(), 
				txtPhoneHome.getText(), 
				txtPhoneWork.getText(), 
				chkAcceptSMS.getValue(), 
				chkAcceptEmail.getValue() );
	}
}
