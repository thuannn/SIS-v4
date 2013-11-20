package com.lemania.sis.client.view;

import java.util.ArrayList;
import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.EvaluationValues;
import com.lemania.sis.client.presenter.FrmEvaluationInputStudentPresenter;
import com.lemania.sis.client.uihandler.FrmEvaluationInputStudentUiHandler;
import com.lemania.sis.shared.BulletinProxy;
import com.lemania.sis.shared.ClasseProxy;
import com.lemania.sis.shared.CoursProxy;
import com.lemania.sis.shared.EcoleProxy;
import com.lemania.sis.shared.EvaluationHeaderProxy;
import com.lemania.sis.shared.EvaluationStudentReportProxy;
import com.lemania.sis.shared.EvaluationSubjectProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.view.client.ListDataProvider;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ClickEvent;

public class FrmEvaluationInputStudentView extends ViewWithUiHandlers<FrmEvaluationInputStudentUiHandler> implements
		FrmEvaluationInputStudentPresenter.MyView {

	private final Widget widget;
	
	//
	private List<BulletinProxy> bulletins = new ArrayList<BulletinProxy>();
	private List<EvaluationHeaderProxy> evaluationHeaders = new ArrayList<EvaluationHeaderProxy>(); 
	private ListDataProvider<EvaluationSubjectProxy> providerEvaluationSubject = new ListDataProvider<EvaluationSubjectProxy>();
	

	public interface Binder extends UiBinder<Widget, FrmEvaluationInputStudentView> {
	}

	@Inject
	public FrmEvaluationInputStudentView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField(provided=true) DataGrid<EvaluationSubjectProxy> tblEvaluations = new DataGrid<EvaluationSubjectProxy>();
	@UiField ListBox lstYears;
	@UiField ListBox lstEcoles;
	@UiField ListBox lstProgrammes;
	@UiField ListBox lstClasses;
	@UiField ListBox lstEvaluationHeaders;
	@UiField TextArea txtCommentaire;
	@UiField Button cmdSave;
	@UiField ListBox lstBulletins;
	
	/*
	 * */
	@Override
	public void initializeUI() {
		//
		initializeYearList();		
		
		//
		TextColumn<EvaluationSubjectProxy> colSubjectName = new TextColumn<EvaluationSubjectProxy>() {
 	      @Override
 	      public String getValue(EvaluationSubjectProxy object) {
 	        return object.getSubjectName();
 	      }
 	    };
 	    tblEvaluations.addColumn(colSubjectName, "Matière");
 	    
 	   //
		TextColumn<EvaluationSubjectProxy> colProfName = new TextColumn<EvaluationSubjectProxy>() {
 	      @Override
 	      public String getValue(EvaluationSubjectProxy object) {
 	        return object.getProfessorName();
 	      }
 	    };
 	    tblEvaluations.addColumn(colProfName, "Professeur");
 	    
 	    // 	    
		TextColumn<EvaluationSubjectProxy> colObjective1 = new TextColumn<EvaluationSubjectProxy>() {
 	      @Override
 	      public String getValue(EvaluationSubjectProxy object) {
 	        return object.getObjective1();
 	      }
 	    };
 	    tblEvaluations.addColumn(colObjective1, EvaluationValues.Objective1); 	    
 	     	    
 	    // 	     	    
		TextColumn<EvaluationSubjectProxy> colObjective2 = new TextColumn<EvaluationSubjectProxy>() {
 	      @Override
 	      public String getValue(EvaluationSubjectProxy object) {
 	        return object.getObjective2();
 	      }
 	    };
 	    tblEvaluations.addColumn(colObjective2, EvaluationValues.Objective2);
 	    
    	// 	    
 	    TextColumn<EvaluationSubjectProxy> colObjective3 = new TextColumn<EvaluationSubjectProxy>() {
 	      @Override
 	      public String getValue(EvaluationSubjectProxy object) {
 	        return object.getObjective3();
 	      }
 	    };
 	    tblEvaluations.addColumn(colObjective3, EvaluationValues.Objective3);
 	  
    	// 	    
 	    TextColumn<EvaluationSubjectProxy> colObjective4 = new TextColumn<EvaluationSubjectProxy>() {
 	      @Override
 	      public String getValue(EvaluationSubjectProxy object) {
 	        return object.getObjective4();
 	      }
 	    };
 	    tblEvaluations.addColumn(colObjective4, EvaluationValues.Objective4); 	    
 	    
 	    // 	   
 	    TextColumn<EvaluationSubjectProxy> colObjective5 = new TextColumn<EvaluationSubjectProxy>() {
 	      @Override
 	      public String getValue(EvaluationSubjectProxy object) {
 	        return object.getObjective5();
 	      }
 	    };
 	    tblEvaluations.addColumn(colObjective5, EvaluationValues.Objective5); 	   
 	    
 	    // 	    
 	    TextColumn<EvaluationSubjectProxy> colObjective6 = new TextColumn<EvaluationSubjectProxy>() {
 	      @Override
 	      public String getValue(EvaluationSubjectProxy object) {
 	        return object.getObjective6();
 	      }
 	    };
 	    tblEvaluations.addColumn(colObjective6, EvaluationValues.Objective6); 	    
 	    
 	    //
 	    providerEvaluationSubject.addDataDisplay(tblEvaluations); 
	}
	
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
	public void resetForm() {		
		//
		lstBulletins.setSelectedIndex(0);
		lstEvaluationHeaders.clear();
		//
		providerEvaluationSubject.getList().clear();
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
	@UiHandler("lstClasses")
	void onLstClassesChange(ChangeEvent event) {
		//
		getUiHandlers().onClassSelected(lstClasses.getValue(lstClasses.getSelectedIndex()));
	}
	

	/*
	 * */
	@Override
	public void setStudentListData(List<BulletinProxy> bulletins) {
		//
		if (this.bulletins != null)
			this.bulletins.clear();
		this.bulletins.addAll(bulletins);
		//
		lstBulletins.clear();
		lstBulletins.addItem("-","");
		for (BulletinProxy bulletin : bulletins) {
			lstBulletins.addItem( bulletin.getStudentName(), bulletin.getId().toString());
		}		
	}
	
	/*
	 * */
	@UiHandler("lstBulletins")
	void onLstBulletinsChange(ChangeEvent event) {
		//
		getUiHandlers().onBulletinSelected( lstClasses.getValue(lstClasses.getSelectedIndex()) );
	}
	
	/*
	 * */
	@Override
	public void setEvaluationHeaderListData(List<EvaluationHeaderProxy> headers) {
		//
		lstEvaluationHeaders.clear();
		lstEvaluationHeaders.addItem("-","");
		for (EvaluationHeaderProxy evh : headers)
			lstEvaluationHeaders.addItem( evh.getFromDate() + " - " + evh.getToDate(), evh.getId().toString() );
		//
		evaluationHeaders.clear();
		evaluationHeaders.addAll(headers);
	}
	
	/*
	 * */
	@UiHandler("lstEvaluationHeaders")
	void onLstEvaluationHeadersChange(ChangeEvent event) {
		//
		clearStudentReportUI();
		//
		if (lstEvaluationHeaders.getValue(lstEvaluationHeaders.getSelectedIndex()).equals(""))
			return;
		//
		getUiHandlers().onEvaluationHeaderSelected(
				lstClasses.getValue(lstClasses.getSelectedIndex()), 
				lstBulletins.getValue(lstBulletins.getSelectedIndex()), 
				lstEvaluationHeaders.getValue(lstEvaluationHeaders.getSelectedIndex()),
				evaluationHeaders.get(lstEvaluationHeaders.getSelectedIndex()-1).getClassMasterId() );
	}

	/*
	 * */
	private void clearStudentReportUI() {
		//
		txtCommentaire.setText("");		
	}

	/*
	 * */
	@Override
	public void setEvaluationSubjectTableData(
			List<EvaluationSubjectProxy> evaluationSubject) {
		//
		providerEvaluationSubject.getList().clear();
		providerEvaluationSubject.setList(evaluationSubject);
	}
	
	/*
	 * */
	@UiHandler("cmdSave")
	void onCmdSaveClick(ClickEvent event) {
		//
		getUiHandlers().saveEvaluationStudentReport( 
				lstBulletins.getValue(lstBulletins.getSelectedIndex()), 
				lstEvaluationHeaders.getValue(lstEvaluationHeaders.getSelectedIndex()),
				txtCommentaire.getText() );
	}

	/*
	 * */
	@Override
	public void enableCommentEditing(Boolean isClassMaster) {
		//
		cmdSave.setEnabled( isClassMaster );
	}

	/*
	 * */
	@Override
	public void setStudentReportData(EvaluationStudentReportProxy report) {
		//
		txtCommentaire.setText( report.getEvaluationNote() );
	}
}
