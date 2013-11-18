package com.lemania.sis.client.view;

import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.presenter.FrmEvaluationReportListPresenter;
import com.lemania.sis.client.uihandler.FrmEvaluationReportListUiHandler;
import com.lemania.sis.shared.ClasseProxy;
import com.lemania.sis.shared.CoursProxy;
import com.lemania.sis.shared.EcoleProxy;
import com.lemania.sis.shared.ProfessorProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.datepicker.client.DateBox;
import com.google.gwt.user.client.ui.RichTextArea;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ClickEvent;

public class FrmEvaluationReportListView extends ViewWithUiHandlers<FrmEvaluationReportListUiHandler> implements
		FrmEvaluationReportListPresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, FrmEvaluationReportListView> {
	}

	@Inject
	public FrmEvaluationReportListView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	@UiField ListBox lstYears;
	@UiField ListBox lstProgrammes;
	@UiField ListBox lstClasses;
	@UiField ListBox lstClassMaster;
	@UiField(provided=true) DataGrid<Object> tblReports = new DataGrid<Object>();
	@UiField DateBox dateFrom;
	@UiField DateBox dateTo;
	@UiField RichTextArea txtObjective;
	@UiField Button cmdSave;
	@UiField ListBox lstEcoles;
	@UiField Button button;
		
	/*
	 * */
	public void initializeYearList(){
		lstYears.clear();
		lstYears.addItem("-","");
		lstYears.addItem("2013 - 2014","2013");
	}

	/*
	 * */
	@Override
	public void initializeUI() {
		//
		initializeYearList();
	}

	/*
	 * */
	@Override
	public void setEcoleList(List<EcoleProxy> ecoles) {		
		// First clear existing data
		lstEcoles.clear(); 
		
		//
		lstEcoles.addItem("-", "");
		for ( EcoleProxy ecole : ecoles )
			lstEcoles.addItem(ecole.getSchoolName(), ecole.getId().toString());
	}
	
	/*
	 * */
	@UiHandler("lstEcoles")
	void onLstEcolesChange(ChangeEvent event) {		
		// If user select the first item, which is null, clear the program list
		if (lstEcoles.getValue(lstEcoles.getSelectedIndex()).isEmpty()) {
			lstProgrammes.clear();
			lstClasses.clear();
			return;
		}
		
		// Otherwise, load the program list
		if (getUiHandlers() != null)
			getUiHandlers().onEcoleSelected( lstEcoles.getValue( lstEcoles.getSelectedIndex() ));
	}
	
	/*
	 * */
	@Override
	public void setCoursList(List<CoursProxy> programmes) {
		// First clear existing data
		lstProgrammes.clear();
		
		// 
		lstProgrammes.addItem("-", "");
		for ( CoursProxy cours : programmes )
			lstProgrammes.addItem( cours.getCoursNom(), cours.getId().toString() );
	}
	
	/*
	 * */
	@UiHandler("lstProgrammes")
	void onLstProgrammesChange(ChangeEvent event) {
		//
		if (lstProgrammes.getValue(lstProgrammes.getSelectedIndex()).isEmpty())			
			return;
		//
		if (getUiHandlers() != null)
			getUiHandlers().onProgrammeSelected( lstProgrammes.getValue( lstProgrammes.getSelectedIndex() ));
	}

	/*
	 * */
	@Override
	public void setClasseList(List<ClasseProxy> classes) {	
		// First clear existing data
		lstClasses.clear();
		
		// 
		lstClasses.addItem("-", "");
		for ( ClasseProxy cours : classes )
			lstClasses.addItem( cours.getClassName(), cours.getId().toString() );
	}
	
	/*
	 * */
	@UiHandler("button")
	void onButtonClick(ClickEvent event) {
		//
		resetEditForm();
	}

	/*
	 * */
	private void resetEditForm() {
		//
		dateFrom.getTextBox().setText("");
		dateTo.getTextBox().setText("");
		txtObjective.setText("");
		
		//
		getUiHandlers().loadClassMasterList();
	}
	
	/*
	 * */
	@UiHandler("cmdSave")
	void onCmdSaveClick(ClickEvent event) {
	}

	/*
	 * */
	@Override
	public void setProfListData(List<ProfessorProxy> profs) {
		//
		lstClassMaster.clear();
		lstClassMaster.addItem("-","");
		for (ProfessorProxy prof : profs)
			lstClassMaster.addItem(prof.getProfName(), prof.getId().toString());
	}
}
