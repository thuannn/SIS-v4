package com.lemania.sis.client.view;

import java.util.ArrayList;
import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.cell.client.CheckboxCell;
import com.google.gwt.cell.client.EditTextCell;
import com.google.gwt.cell.client.FieldUpdater;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.presenter.ProfsPresenter;
import com.lemania.sis.client.uihandler.ProfessorListUiHandler;
import com.lemania.sis.shared.ProfessorProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.view.client.SelectionChangeEvent;
import com.google.gwt.view.client.SingleSelectionModel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Button;

public class ProfsView extends ViewWithUiHandlers<ProfessorListUiHandler> implements ProfsPresenter.MyView {

	private final Widget widget;
	private int selectedProf;
	private int selectedIndexAssignment;
	private ProfessorProxy selectedProfessor;

	public interface Binder extends UiBinder<Widget, ProfsView> {
	}

	@Inject
	public ProfsView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	@UiField(provided=true) DataGrid<ProfessorProxy> tblProfessors = new DataGrid<ProfessorProxy>();
	@UiField Label lblProfNameAssign;
	@UiField Button cmdAddCourse;
	@UiField ListBox lstAddEcole;
	@UiField ListBox lstAddCourse;

	@Override
	public void initializeTable() {
		
		// Add a text column to show the name.
		EditTextCell nomCell = new EditTextCell();
		Column<ProfessorProxy, String> colName = new Column<ProfessorProxy, String>(nomCell) {
	      @Override
	      public String getValue(ProfessorProxy object) {
	        return object.getProfName();
	      }
	    };
	    tblProfessors.addColumn(colName, "Nom");
	    // If user is Admin, he can edit the names of the profs
    	colName.setFieldUpdater(new FieldUpdater<ProfessorProxy, String>(){
	    	@Override
	    	public void update(int index, ProfessorProxy prof, String value){
	    		if (getUiHandlers() != null) {	    			
	    			selectedProf = index;
	    			if (!prof.getProfName().equals(value))
	    				getUiHandlers().updateProfessorName(prof, value);
	    		}	    		
	    	}
	    });
	    
	    CheckboxCell cellActive = new CheckboxCell();
	    Column<ProfessorProxy, Boolean> colActive = new Column<ProfessorProxy, Boolean>(cellActive) {
	    	@Override
	    	public Boolean getValue(ProfessorProxy ecole){
	    		return ecole.getProfActive();
	    	}	    	
	    };
	    tblProfessors.addColumn(colActive, "Active");
	    
	    colActive.setFieldUpdater(new FieldUpdater<ProfessorProxy, Boolean>(){
	    	@Override
	    	public void update(int index, ProfessorProxy prof, Boolean value){
	    		if (getUiHandlers() != null) {	    			
	    			selectedProf = index;
	    			getUiHandlers().updateProfessorStatus(prof, value);
	    		}	    		
	    	}
	    });
	    
	    // Add a selection model to handle user selection.
	    final SingleSelectionModel<ProfessorProxy> selectionModel = new SingleSelectionModel<ProfessorProxy>();
	    tblProfessors.setSelectionModel(selectionModel);
	    selectionModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
	      public void onSelectionChange(SelectionChangeEvent event) {
	        selectedProfessor = selectionModel.getSelectedObject();
	        if (selectedProfessor != null) {
	        	lblProfNameAssign.setText(selectedProfessor.getProfName());
	        	getUiHandlers().professorSelected(selectedProfessor);
	        }
	      }
	    });
	}

	@Override
	public void setData(List<ProfessorProxy> profs) {
		tblProfessors.setRowCount(profs.size(), true);
		tblProfessors.setRowData(0, profs);
	}

	@Override
	public void refreshTable(ProfessorProxy prof) {
		List<ProfessorProxy> profs = new ArrayList<ProfessorProxy>();
		profs.add(prof);
        tblProfessors.setRowData(selectedProf, profs);
		tblProfessors.redraw();
	}
}