package com.lemania.sis.client.form.absencemgt;

import java.util.ArrayList;
import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.cell.client.CheckboxCell;
import com.google.gwt.cell.client.EditTextCell;
import com.google.gwt.cell.client.FieldUpdater;
import com.google.gwt.cell.client.SelectionCell;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.SimplePager;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.view.client.ListDataProvider;
import com.google.gwt.view.client.SelectionChangeEvent;
import com.google.gwt.view.client.SingleSelectionModel;
import com.lemania.sis.shared.absenceitem.AbsenceItemProxy;
import com.lemania.sis.shared.motifabsence.MotifAbsenceProxy;
import com.lemania.sis.shared.student.StudentProxy;
import com.google.gwt.user.client.ui.Label;

public class AbsenceManagementView extends ViewWithUiHandlers<AbsenceManagementUiHandlers> implements
		AbsenceManagementPresenter.MyView {

	private final Widget widget;
	
	//
	private int selectedStudentIndex = -1;
	ListDataProvider<StudentProxy> providerStudents = new ListDataProvider<StudentProxy>();
	StudentProxy selectedStudent;
	
	ListDataProvider<AbsenceItemProxy> providerAbsences = new ListDataProvider<AbsenceItemProxy>();
	int selectedAbsenceItemIndex = -1;
	AbsenceItemProxy selectedAbsenceItem;
	
	ListDataProvider<MotifAbsenceProxy> providerMotifs = new ListDataProvider<MotifAbsenceProxy>();
	List<String> motifList = new ArrayList<String>();
	

	public interface Binder extends UiBinder<Widget, AbsenceManagementView> {
	}

	@Inject
	public AbsenceManagementView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField(provided=true) DataGrid<StudentProxy> tblStudents = new DataGrid<StudentProxy>();
	@UiField(provided=true) DataGrid<AbsenceItemProxy> tblAbsences = new DataGrid<AbsenceItemProxy>();
	@UiField SimplePager pagerStudents;
	@UiField SimplePager pagerAbsences;
	@UiField Label lblStudentName;
	
	/*
	 * */
	@Override
	public void setStudentTableData(List<StudentProxy> studentList) {
		//
		//
		providerStudents.getList().clear();
		providerStudents.setList(studentList);
		providerStudents.flush();
	}

	/*
	 * */
	@Override
	public void initializeUI() {
		//
		initializeStudentTable();
		//
		initializeAbsenceTable();
	}
	
	
	
	/*
	 * */
	private void initializeAbsenceTable() {
		//
	    TextColumn<AbsenceItemProxy> colLastName = new TextColumn<AbsenceItemProxy>() {
	      @Override
	      public String getValue(AbsenceItemProxy object) {
	    	  String date = object.getStrAbsenceDate();
	    	  return date.substring(6) + "." + date.substring(4,6) + "." + date.substring(0,4); 
	      } 
	    };
	    tblAbsences.addColumn(colLastName, "Date");
	    
	    // Add a text column to show the name.
	    TextColumn<AbsenceItemProxy> colFirstName = new TextColumn<AbsenceItemProxy>() {
	      @Override
	      public String getValue(AbsenceItemProxy object) {
	        return object.getCodeAbsenceType();
	      }
	    };
	    tblAbsences.addColumn(colFirstName, "Type");
	    
	    // Prof
	    TextColumn<AbsenceItemProxy> colProf = new TextColumn<AbsenceItemProxy>() {
	      @Override
	      public String getValue(AbsenceItemProxy object) {
	        return object.getProfName();
	      }
	    };
	    tblAbsences.addColumn(colProf, "Professeur");
	    
	    // Cours
	    TextColumn<AbsenceItemProxy> colSubject = new TextColumn<AbsenceItemProxy>() {
	      @Override
	      public String getValue(AbsenceItemProxy object) {
	        return object.getSubjectName();
	      }
	    };
	    tblAbsences.addColumn(colSubject, "Cours");
	    
	    // Remarque prof
	    TextColumn<AbsenceItemProxy> colRemarqueProf = new TextColumn<AbsenceItemProxy>() {
	      @Override
	      public String getValue(AbsenceItemProxy object) {
	        return object.getProfComment().substring(0,20) + "...";
	      }
	    };
	    tblAbsences.addColumn(colRemarqueProf, "Comment du prof");
	    
	    //
	    CheckboxCell cellJustify = new CheckboxCell();
	    Column<AbsenceItemProxy, Boolean> colJustify = new Column<AbsenceItemProxy, Boolean>( cellJustify ) {
	    	@Override
	    	public Boolean getValue(AbsenceItemProxy student){
	    		return student.isJusttified();
	    	}	    	
	    };
	    tblAbsences.addColumn(colJustify, "Excusée");
	    
	    //
	    CheckboxCell cellParent = new CheckboxCell();
	    Column<AbsenceItemProxy, Boolean> colParent = new Column<AbsenceItemProxy, Boolean>( cellParent ) {
	    	@Override
	    	public Boolean getValue(AbsenceItemProxy student){
	    		return student.isParentNotified();
	    	}	    	
	    };
	    tblAbsences.addColumn(colParent, "Parent notif.");
	    
	    //
	    SelectionCell cellMotifs = new SelectionCell( motifList );
	    Column<AbsenceItemProxy, String> colMotifs = new Column<AbsenceItemProxy, String>(cellMotifs) {

			@Override
			public String getValue(AbsenceItemProxy object) {
				//
				if ( !object.getMotifId().equals("") )
					return getMotifTextById( object.getMotifId() );
				else
					return "";
			}
	    	
	    };
	    tblAbsences.addColumn(colMotifs, "Motif");
	    
	    //
	    // Admin comment
	    Column<AbsenceItemProxy, String> colAdminComment = new Column<AbsenceItemProxy, String>(new EditTextCell()) {
	      @Override
	      public String getValue(AbsenceItemProxy object) {
	        return object.getAdminComment().substring(0,20) + "...";
	      } 
	    };
	    tblAbsences.addColumn(colAdminComment, "Note");
	    // Field updater
	    colLastName.setFieldUpdater(new FieldUpdater<AbsenceItemProxy, String>(){
	    	@Override
	    	public void update(int index, AbsenceItemProxy object, String value){
	    		if (getUiHandlers() != null) {	    	
	    			//
	    			selectedAbsenceItemIndex = index;
	    		}	    		
	    	}
	    });
	    
	    //
	    pagerAbsences.setDisplay(tblAbsences);
	    
	    //
	    providerAbsences.addDataDisplay(tblAbsences);
	}
	
	

	/* 
	 * Initialize Student table 
	 * */
	public void initializeStudentTable(){
		//
	    TextColumn<StudentProxy> colLastName = new TextColumn<StudentProxy>() {
	      @Override
	      public String getValue(StudentProxy object) {
	        return object.getFirstName();
	      } 
	    };
	    tblStudents.addColumn(colLastName, "Prénom");
	    
	    // Add a text column to show the name.
	    TextColumn<StudentProxy> colFirstName = new TextColumn<StudentProxy>() {
	      @Override
	      public String getValue(StudentProxy object) {
	        return object.getLastName();
	      }
	    };
	    tblStudents.addColumn(colFirstName, "Nom");
	    
	    // When user select a student, load his absence history
	    //	Selection model
	    final SingleSelectionModel<StudentProxy> selectionModel = new SingleSelectionModel<StudentProxy>();
	    tblStudents.setSelectionModel(selectionModel);
	    selectionModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
	      public void onSelectionChange(SelectionChangeEvent event) {
	    	  //
	    	  selectedStudent = selectionModel.getSelectedObject();
	    	  if (selectedStudent != null) {
	    		  //
	    		  lblStudentName.setText( selectedStudent.getFirstName() + " " + selectedStudent.getLastName());
	    		  //
	    		  getUiHandlers().onStudentSelected(selectedStudent);
	    	  }
	      }
	    });
	    
	    //
	    pagerStudents.setDisplay(tblStudents);
	    
	    //
	    providerStudents.addDataDisplay(tblStudents);
	    
	}

	
	/*
	 * */
	@Override
	public void setAbsenceItemTableData(List<AbsenceItemProxy> absenceItems) {
		//
		providerAbsences.getList().clear();
		providerAbsences.getList().addAll(absenceItems);
		providerAbsences.flush();
	}

	
	/*
	 * */
	@Override
	public void setMotifListData(List<MotifAbsenceProxy> motifs) {
		//
		providerMotifs.getList().clear();
		providerMotifs.getList().addAll(motifs);
		//
		motifList.clear();
		motifList.add("Choisir");
		for(MotifAbsenceProxy ma : motifs)
			motifList.add( ma.getMotifCode() + " - " + ma.getMotifLabel() );
	}
	
	
	/*
	 * */
	public String getMotifTextById( String motifId ){
		for (MotifAbsenceProxy ma : providerMotifs.getList() ) {
			if (ma.getId().toString().equals(motifId))
				return ma.getMotifCode() + " - " + ma.getMotifLabel();
		}
		return "";
	}
}
