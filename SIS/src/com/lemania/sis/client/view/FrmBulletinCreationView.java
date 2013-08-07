package com.lemania.sis.client.view;

import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.presenter.FrmBulletinCreationPresenter;
import com.lemania.sis.client.uihandler.FrmBulletinCreationUiHandler;
import com.lemania.sis.shared.ProfileProxy;
import com.lemania.sis.shared.StudentProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.view.client.ListDataProvider;

public class FrmBulletinCreationView extends ViewWithUiHandlers<FrmBulletinCreationUiHandler> implements
		FrmBulletinCreationPresenter.MyView {

	private final Widget widget;
	
	// Thuan
	ListDataProvider<StudentProxy> studentDataProvider = new ListDataProvider<StudentProxy>();

	public interface Binder extends UiBinder<Widget, FrmBulletinCreationView> {
	}

	@Inject
	public FrmBulletinCreationView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField(provided=true) DataGrid<StudentProxy> tblStudents = new DataGrid<StudentProxy>();
	@UiField(provided=true) DataGrid<Object> tblBulletins = new DataGrid<Object>();
	@UiField ListBox lstClasse;
	@UiField ListBox lstYear;
	@UiField ListBox lstProfiles;
	
	@Override
	public void resetForm() {
		// TODO
	}

	@Override
	public void initializeTables() {
		//
		initializeStudentTable();
		//
		initializeBulletinTable();
	}

	
	/**/
	private void initializeBulletinTable() {
		// TODO Auto-generated method stub
		
	}

	
	/**/
	private void initializeStudentTable() {
		//
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
	    studentDataProvider.addDataDisplay(tblStudents);
	}
	

	/**/
	@Override
	public void setStudentTableData(List<StudentProxy> students) {
		// 
		studentDataProvider.setList( students );
	}

	@Override
	public void setProfileListData(List<ProfileProxy> profiles) {
		//
		lstProfiles.clear();
		lstProfiles.addItem("-","");
		
		for (ProfileProxy profile : profiles){
			lstProfiles.addItem( profile.getProfileName(), profile.getId().toString() );
		}
		lstProfiles.setSelectedIndex(0);
	}
}
