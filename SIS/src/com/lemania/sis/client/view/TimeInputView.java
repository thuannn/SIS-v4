package com.lemania.sis.client.view;


import java.util.ArrayList;
import java.util.List;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.TimeTypeNames;
import com.lemania.sis.client.presenter.TimeInputPresenter;
import com.lemania.sis.client.uihandler.TimeInputUiHandler;
import com.lemania.sis.shared.CoursProxy;
import com.lemania.sis.shared.EcoleProxy;
import com.lemania.sis.shared.LogProxy;
import com.lemania.sis.shared.ProfessorProxy;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.ProfessorRequestFactory;
import com.lemania.sis.shared.service.ProfessorRequestFactory.ProfessorRequestContext;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.view.client.ListDataProvider;
import com.google.gwt.view.client.SelectionChangeEvent;
import com.google.gwt.view.client.SingleSelectionModel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.event.dom.client.ClickEvent;

public class TimeInputView extends ViewWithUiHandlers<TimeInputUiHandler> implements TimeInputPresenter.MyView {

	private final Widget widget;
	private ProfessorProxy selectedProfessor;
	private int selectedProfessorIndex;
	
	private ListDataProvider<ProfessorProxy> professorProvider;
	private List<ProfessorProxy> currentProfList;

	public interface Binder extends UiBinder<Widget, TimeInputView> {
	}

	@Inject
	public TimeInputView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	@UiField(provided=true) DataGrid<ProfessorProxy> tblProfessors = new DataGrid<ProfessorProxy>();
	@UiField ListBox lstCourses;
	@UiField ListBox lstSchools;
	@UiField Label lblProfName;
	@UiField ListBox lstYear;
	@UiField ListBox lstMonth;
	@UiField Label txtNotification;
	@UiField TextBox txtCoursTime;
	@UiField TextBox txtCoursNote;
	@UiField TextBox txtMaladieNote;
	@UiField TextBox txtMaladieTime;
	@UiField TextBox txtFerieTime;
	@UiField TextBox txtFerieNote;
	@UiField TextBox txtPriveTime;
	@UiField TextBox txtPriveNote;
	@UiField TextBox txtSupervisionTime;
	@UiField TextBox txtSupervisionNote;
	@UiField TextBox txtFraisAmount;
	@UiField TextBox txtFraisNote;
	@UiField Button cmdSave;
	
	@Override
	public void setEcoleList(List<EcoleProxy> ecoles) {
		lstSchools.clear();
		lstSchools.addItem("-","");
		for (int i=0; i<ecoles.size(); i++)
			lstSchools.addItem(ecoles.get(i).getSchoolName(), ecoles.get(i).getId().toString());		
	}

	@Override
	public void setCourseList(List<CoursProxy> cours) {
		lstCourses.clear();
		lstCourses.addItem("-","");
		for (int i=0; i<cours.size(); i++)
			lstCourses.addItem(cours.get(i).getSchoolName() + " - " +cours.get(i).getCoursNom(), cours.get(i).getId().toString());				
	}
	
	@Override
	public void setProfData(List<ProfessorProxy> profs) {
		currentProfList = profs;
		tblProfessors.setRowData(currentProfList);
	}

	@Override
	public void initializeValues(int currentMonth, int currentYear, boolean isAdmin) {
		// Clear school list and course list
		lstSchools.clear();
		lstCourses.clear();
		
		clearProfTable();
		clearLogTable();
		
		// List of month, auto-select current month
		lstMonth.clear();
		for (int i=1; i <= 12; i++) {
			lstMonth.addItem( Integer.toString(i), Integer.toString(i));
			if (i == currentMonth)
				lstMonth.setSelectedIndex(i-1);
		}
		
		// List of year, auto-select current year
		lstYear.clear();
		for (int i=-2; i<2; i++) {
			lstYear.addItem( Integer.toString(i + currentYear), Integer.toString(i + currentYear));
			if ((i + currentYear) == currentYear)
				lstYear.setSelectedIndex(i+2);
		}
		
		// Set UI options
		initializeUI(isAdmin);
		
		// 
		lblProfName.setText("");
		
		// 
		clearValues();
	}
	
	private void clearValues() {
		// clear text fields
		txtCoursTime.setText("");
		txtCoursNote.setText("");
		// Maladie
		txtMaladieTime.setText("");
		txtMaladieNote.setText("");
		// Fériés
		txtFerieTime.setText("");
		txtFerieNote.setText("");
		// Privé
		txtPriveTime.setText("");
		txtPriveNote.setText("");
		// Supervision	
		txtSupervisionTime.setText("");
		txtSupervisionNote.setText("");
		// Frais
		txtFraisAmount.setText("");
		txtFraisNote.setText("");
	}
	
	/***/
	
	@UiHandler("lstSchools")
	public void onLstAddEcoleChanged(ChangeEvent event) {
		clearProfTable();
		clearLogTable();
		if ( !lstSchools.getItemText(lstSchools.getSelectedIndex()).equals("-") ) {
			if (getUiHandlers() != null)
				getUiHandlers().loadCoursesBySchool(lstSchools.getValue(lstSchools.getSelectedIndex()));
		}
	}
	
	@UiHandler("lstYear")
	public void onLstYearChanged(ChangeEvent event) {
		clearLogTable();
		getUiHandlers().professorSelected(
    			selectedProfessor, 
    			lstCourses.getValue(lstCourses.getSelectedIndex()),
    			lstYear.getItemText(lstYear.getSelectedIndex()),
    			lstMonth.getItemText(lstMonth.getSelectedIndex()));
	}
	
	@UiHandler("lstMonth")
	public void onLstMonthChanged(ChangeEvent event) {
		clearLogTable();
		getUiHandlers().professorSelected(
    			selectedProfessor, 
    			lstCourses.getValue(lstCourses.getSelectedIndex()),
    			lstYear.getItemText(lstYear.getSelectedIndex()),
    			lstMonth.getItemText(lstMonth.getSelectedIndex()));
	}
	
	@Override
	public void clearProfTable() {
		List<ProfessorProxy> temp = new ArrayList<ProfessorProxy>();
		professorProvider = new ListDataProvider<ProfessorProxy>();
		professorProvider.setList(temp);
		professorProvider.addDataDisplay(tblProfessors);
		
		tblProfessors.getSelectionModel().setSelected(selectedProfessor, false);
	}
	
	@Override
	public void clearLogTable() {
		//
		clearValues();
	}
	

	@UiHandler("lstCourses")
	public void onLstCoursesChanged(ChangeEvent event){
		clearProfTable();
		clearLogTable();
		clearValues();
		lblProfName.setText("");
		if ( !lstCourses.getItemText(lstCourses.getSelectedIndex()).equals("-") ) {
			if (getUiHandlers() != null)
				getUiHandlers().loadProfessorsByCourse(
						lstCourses.getValue(lstCourses.getSelectedIndex()),
						lstYear.getItemText(lstYear.getSelectedIndex()),
		    			lstMonth.getItemText(lstMonth.getSelectedIndex())
				);
		}
	}
	
	
	@Override
	public void initializeProfTable() {
		// Initialize table structure of Professor table
		TextColumn<ProfessorProxy> colName = new TextColumn<ProfessorProxy>() {
	      @Override
	      public String getValue(ProfessorProxy object) {
	        return object.getProfName();
	      }
	    };
	    tblProfessors.addColumn(colName, "Nom");
	    
	    // Initialize table structure of Professor table
 		TextColumn<ProfessorProxy> colDate = new TextColumn<ProfessorProxy>() {
 	      @Override
 	      public String getValue(ProfessorProxy object) {
 	        return object.getLogModifyDate();
 	      }
 	    };
 	    tblProfessors.addColumn(colDate, "Date de modification");
    
	    // Add a selection model to handle user selection.
	    final SingleSelectionModel<ProfessorProxy> selectionModel = new SingleSelectionModel<ProfessorProxy>() {
	    	@Override
	    	public void setSelected(ProfessorProxy object, boolean selected) {	    		
    	      	super.setSelected(object, selected);
	    	}
	    };
	    
	    selectionModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
	    	public void onSelectionChange(SelectionChangeEvent event) {
	    		selectedProfessor = selectionModel.getSelectedObject();
    			if (selectedProfessor != null) {
    				selectedProfessorIndex = currentProfList.indexOf(selectedProfessor);
    				lblProfName.setText(selectedProfessor.getProfName());
    				clearValues();
    				getUiHandlers().professorSelected(
						selectedProfessor, 
						lstCourses.getValue(lstCourses.getSelectedIndex()),
						lstYear.getItemText(lstYear.getSelectedIndex()),
						lstMonth.getItemText(lstMonth.getSelectedIndex()));
    			}
	      	}
	    });
	    tblProfessors.setSelectionModel(selectionModel);
	}
	

	@Override
	public void setLogData(List<LogProxy> logs, Boolean logUpdated) {
		for (LogProxy log : logs) {
			// Cours
			if (log.getTypeName().toLowerCase().equals(TimeTypeNames.cours)) {
				txtCoursTime.setText(Double.toString(log.getHour()));
				txtCoursNote.setText(log.getMemo());
			}
			// Maladie
			if (log.getTypeName().toLowerCase().equals(TimeTypeNames.maladie)) {
				txtMaladieTime.setText(Double.toString(log.getHour()));
				txtMaladieNote.setText(log.getMemo());
			}
			// Fériés
			if (log.getTypeName().toLowerCase().equals(TimeTypeNames.ferie)) {
				txtFerieTime.setText(Double.toString(log.getHour()));
				txtFerieNote.setText(log.getMemo());
			}
			// Privé
			if (log.getTypeName().toLowerCase().equals(TimeTypeNames.prive)) {
				txtPriveTime.setText(Double.toString(log.getHour()));
				txtPriveNote.setText(log.getMemo());
			}
			// Supervision
			if (log.getTypeName().toLowerCase().equals(TimeTypeNames.supervision)) {
				txtSupervisionTime.setText(Double.toString(log.getHour()));
				txtSupervisionNote.setText(log.getMemo());
			}
			// Frais
			if (log.getTypeName().toLowerCase().equals(TimeTypeNames.frais)) {
				txtFraisAmount.setText(Double.toString(log.getHour()));
				txtFraisNote.setText(log.getMemo());
			}
		}
		
		// Show date
		if (selectedProfessor != null && logUpdated) {
			ProfessorRequestFactory rf = GWT.create(ProfessorRequestFactory.class);
			ProfessorRequestContext rc = rf.professorRequest();
			ProfessorProxy prof = rc.edit(selectedProfessor);
			prof.setLogModifyDate(logs.get(0).getModifyDate());
			currentProfList.remove(selectedProfessorIndex);
			currentProfList.add(selectedProfessorIndex, prof);
			tblProfessors.setRowData(currentProfList);
			tblProfessors.getSelectionModel().setSelected(prof, true);
		}
	}
	

	@Override
	public void initializeLogTable() {
		// Datagrid removed, not being used	   
	}

	@Override
	public void setNotification(String code) {
		// This function is not being used
	}
	
	@UiHandler("cmdSave")
	void onCmdSaveClick(ClickEvent event) {
		
		// if there is nothing, set 0
		if (txtCoursTime.getText().equals("")) txtCoursTime.setText("0.0");
		if (txtMaladieTime.getText().equals("")) txtMaladieTime.setText("0.0");
		if (txtFerieTime.getText().equals("")) txtFerieTime.setText("0.0");
		if (txtPriveTime.getText().equals("")) txtPriveTime.setText("0.0");
		if (txtSupervisionTime.getText().equals("")) txtSupervisionTime.setText("0.0");
		if (txtFraisAmount.getText().equals("")) txtFraisAmount.setText("0.0");
		
		// validate numbers
		if (!txtCoursTime.getText().matches("^(([0-9]*)|(([0-9]*).([0-9]*)))$") ||
			!txtMaladieTime.getText().matches("^(([0-9]*)|(([0-9]*).([0-9]*)))$") || 
			!txtFerieTime.getText().matches("^(([0-9]*)|(([0-9]*).([0-9]*)))$") ||
			!txtPriveTime.getText().matches("^(([0-9]*)|(([0-9]*).([0-9]*)))$") ||
			!txtSupervisionTime.getText().matches("^(([0-9]*)|(([0-9]*).([0-9]*)))$") ||
			!txtFraisAmount.getText().matches("^(([0-9]*)|(([0-9]*).([0-9]*)))$") ) {
			Window.alert("Veuillez introduire des heures en chiffre.");
			return;
		}
		
		getUiHandlers().updateLogTime (
				selectedProfessor, 
				lstCourses.getValue(lstCourses.getSelectedIndex()),
    			lstYear.getItemText(lstYear.getSelectedIndex()),
    			lstMonth.getItemText(lstMonth.getSelectedIndex()),
				txtCoursTime.getText(), txtCoursNote.getText(), 
				txtMaladieTime.getText(), txtMaladieNote.getText(), 
				txtFerieTime.getText(), txtFerieNote.getText(), 
				txtPriveTime.getText(), txtPriveNote.getText(), 
				txtSupervisionTime.getText(), txtSupervisionNote.getText(), 
				txtFraisAmount.getText(), txtFraisNote.getText() );
	}

	@Override
	public void initializeUI(boolean isAdmin) {
		// let admin choose year and month
		lstMonth.setEnabled(isAdmin);
		lstYear.setEnabled(isAdmin);
	}
}
