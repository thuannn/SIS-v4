package com.lemania.sis.client.view;

import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.cell.client.CheckboxCell;
import com.google.gwt.cell.client.EditTextCell;
import com.google.gwt.cell.client.FieldUpdater;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.NotificationTypes;
import com.lemania.sis.client.presenter.StudentPresenter;
import com.lemania.sis.client.uihandler.StudentListUiHandler;
import com.lemania.sis.shared.student.StudentProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.view.client.ListDataProvider;

public class StudentView extends ViewWithUiHandlers<StudentListUiHandler> implements StudentPresenter.MyView {

	private final Widget widget;
	
	/* Thuan */
	private int selectedStudent = -1;
	ListDataProvider<StudentProxy> dataProvider = new ListDataProvider<StudentProxy>();

	
	@UiField(provided=true) DataGrid<StudentProxy> tblStudents = new DataGrid<StudentProxy>();
	
	
	public interface Binder extends UiBinder<Widget, StudentView> {
	}

	@Inject
	public StudentView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	
	/* Initialize Student table */
	@Override
	public void initializeTable(){
		// Add a text column to show the name.
	    Column<StudentProxy, String> colFirstName = new Column<StudentProxy, String>(new EditTextCell()) {
	      @Override
	      public String getValue(StudentProxy object) {
	        return object.getLastName();
	      }
	    };
	    tblStudents.addColumn(colFirstName, "Nom");
	    // Field updater
	    colFirstName.setFieldUpdater(new FieldUpdater<StudentProxy, String>(){
	    	@Override
	    	public void update(int index, StudentProxy student, String value){
	    		if (getUiHandlers() != null) {	    			
	    			selectedStudent = index;
	    			getUiHandlers().updateStudentLastName(student, value);
	    		}	    		
	    	}
	    });
	    
		//
	    Column<StudentProxy, String> colLastName = new Column<StudentProxy, String>(new EditTextCell()) {
	      @Override
	      public String getValue(StudentProxy object) {
	        return object.getFirstName();
	      } 
	    };
	    tblStudents.addColumn(colLastName, "Prénom");
	    // Field updater
	    colLastName.setFieldUpdater(new FieldUpdater<StudentProxy, String>(){
	    	@Override
	    	public void update(int index, StudentProxy student, String value){
	    		if (getUiHandlers() != null) {	    			
	    			selectedStudent = index;
	    			getUiHandlers().updateStudentFirstName(student, value);
	    		}	    		
	    	}
	    });
	    
	    //
	    Column<StudentProxy, String> colEmail = new Column<StudentProxy, String>(new EditTextCell()) {
	      @Override
	      public String getValue(StudentProxy object) {
	        return object.getEmail();
	      } 
	    };
	    tblStudents.addColumn(colEmail, "Email");
	    // Field updater
	    colEmail.setFieldUpdater(new FieldUpdater<StudentProxy, String>(){
	    	@Override
	    	public void update(int index, StudentProxy student, String value){
	    		if (getUiHandlers() != null) {	    			
	    			selectedStudent = index;
	    			getUiHandlers().updateStudentEmail(student, value);
	    		}	    		
	    	}
	    });
	    
	    //
	    CheckboxCell cellActive = new CheckboxCell();
	    Column<StudentProxy, Boolean> colActive = new Column<StudentProxy, Boolean>(cellActive) {
	    	@Override
	    	public Boolean getValue(StudentProxy student){
	    		return student.getIsActive();
	    	}	    	
	    };
	    tblStudents.addColumn(colActive, "Active");
	    // Field updater
	    colActive.setFieldUpdater(new FieldUpdater<StudentProxy, Boolean>(){
	    	@Override
	    	public void update(int index, StudentProxy student, Boolean value){
	    		if (getUiHandlers() != null) {	    			
	    			selectedStudent = index;
	    			getUiHandlers().updateStudentStatus(student, value);
	    		}	    		
	    	}
	    });
	    
	    //
	    dataProvider.addDataDisplay(tblStudents);
	    
	    //
	    tblStudents.setPageSize(1000);
	}

	@Override
	public void refreshTable() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void setTableData(List<StudentProxy> studentList) {
		//
		dataProvider.setList(studentList);
		//
		tblStudents.setHeight( Integer.toString( (studentList.size() * NotificationTypes.lineHeight) 
				+ NotificationTypes.headerHeight ) + "px");
	}

	@Override
	public void updateEditedStudent(StudentProxy student) {
		dataProvider.getList().remove(selectedStudent);
		dataProvider.getList().add(selectedStudent, student);
		dataProvider.refresh();
	}
}
