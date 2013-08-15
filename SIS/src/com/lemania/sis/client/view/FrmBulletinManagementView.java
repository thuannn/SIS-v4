package com.lemania.sis.client.view;

import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.presenter.FrmBulletinManagementPresenter;
import com.lemania.sis.client.uihandler.FrmBulletinManagementUiHandler;
import com.lemania.sis.shared.BulletinBrancheProxy;
import com.lemania.sis.shared.BulletinProxy;
import com.lemania.sis.shared.BulletinSubjectProxy;
import com.lemania.sis.shared.ClasseProxy;
import com.lemania.sis.shared.CoursProxy;
import com.lemania.sis.shared.EcoleProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.view.client.ListDataProvider;
import com.google.gwt.view.client.SelectionChangeEvent;
import com.google.gwt.view.client.SingleSelectionModel;
import com.google.gwt.cell.client.ButtonCell;
import com.google.gwt.cell.client.Cell;
import com.google.gwt.cell.client.EditTextCell;
import com.google.gwt.cell.client.FieldUpdater;
import com.google.gwt.dom.client.Element;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.dom.client.Element;
import com.google.gwt.dom.client.NativeEvent;

public class FrmBulletinManagementView extends ViewWithUiHandlers<FrmBulletinManagementUiHandler> implements
		FrmBulletinManagementPresenter.MyView {

	private final Widget widget;
	
	
	// Thuan
	private ListDataProvider<BulletinProxy> bulletinDataProvider = new ListDataProvider<BulletinProxy>();
	private ListDataProvider<BulletinSubjectProxy> subjectDataProvider = new ListDataProvider<BulletinSubjectProxy>();
	private ListDataProvider<BulletinBrancheProxy> brancheDataProvider = new ListDataProvider<BulletinBrancheProxy>();
	//
	BulletinProxy selectedBulletin;
	Integer selectedBulletinIndex = -1;
	//
	BulletinSubjectProxy selectedSubject;
	Integer selectedSubjectIndex = -1;
	//
	BulletinBrancheProxy selectedBranche;
	Integer selectedBrancheIndex = -1;
	

	public interface Binder extends UiBinder<Widget, FrmBulletinManagementView> {
	}

	@Inject
	public FrmBulletinManagementView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField(provided=true) DataGrid<BulletinProxy> tblBulletins = new DataGrid<BulletinProxy>();
	@UiField(provided=true) DataGrid<BulletinSubjectProxy> tblSubjects = new DataGrid<BulletinSubjectProxy>();
	@UiField(provided=true) DataGrid<BulletinBrancheProxy> tblBranches = new DataGrid<BulletinBrancheProxy>();
	@UiField ListBox lstEcoles;
	@UiField ListBox lstProgrammes;
	@UiField ListBox lstClasses;
	@UiField Label lblSelectedStudentName;
	@UiField Label lblSelectedSubject;
	
	
	/**/
	@Override
	public void resetForm() {
		//
		lstEcoles.setSelectedIndex(0);
		lstProgrammes.clear();
		lstClasses.clear();
		//
		clearSubjectUi();
		clearBrancheUi();
		clearBulletinUi();
	}
		
	
	/**/
	void clearBulletinUi(){
		//
		if (selectedBulletin != null)
			tblBulletins.getSelectionModel().setSelected(selectedBulletin, false);
		selectedBulletinIndex = -1;
		bulletinDataProvider.getList().clear();
		lblSelectedStudentName.setText("-");
	}
	
	
	/**/
	private void clearSubjectUi() {
		// 
		if (selectedSubject != null) {
    		tblSubjects.getSelectionModel().setSelected(selectedSubject, false);
    		selectedSubjectIndex = -1;
    	}
		subjectDataProvider.getList().clear();
		lblSelectedSubject.setText("-");
	}
	

	/**/
	@Override
	public void setEcoleList(List<EcoleProxy> ecoles) {
		// First clear existing data
		lstEcoles.clear(); 
		
		//
		lstEcoles.addItem("-", "");
		for ( EcoleProxy ecole : ecoles )
			lstEcoles.addItem(ecole.getSchoolName(), ecole.getId().toString());
	}
	
	
	
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
	
	
	
	/**/
	@Override
	public void setCoursList(List<CoursProxy> programmes) {
		// First clear existing data
		lstProgrammes.clear();
		
		// 
		lstProgrammes.addItem("-", "");
		for ( CoursProxy cours : programmes )
			lstProgrammes.addItem( cours.getCoursNom(), cours.getId().toString() );
	}
	
	
	@UiHandler("lstProgrammes")
	void onLstProgrammesChange(ChangeEvent event) {
		//
		if (lstProgrammes.getValue(lstProgrammes.getSelectedIndex()).isEmpty()){
			lstClasses.clear();
			return;
		}
		//
		if (getUiHandlers() != null)
			getUiHandlers().onProgrammeSelected( lstProgrammes.getValue( lstProgrammes.getSelectedIndex() ));
	}
	
	
	
	/**/
	@Override
	public void setClasseList(List<ClasseProxy> classes) {
		// First clear existing data
		lstClasses.clear();
		
		// 
		lstClasses.addItem("-", "");
		for ( ClasseProxy cours : classes )
			lstClasses.addItem( cours.getClassName(), cours.getId().toString() );
	}
	
	
	@UiHandler("lstClasses")
	void onLstClassesChange(ChangeEvent event) {
		//
		clearBulletinUi();
		//
		if (getUiHandlers() != null)
			getUiHandlers().onClassChange(lstClasses.getValue(lstClasses.getSelectedIndex()));
	}

	
	@Override
	public void setStudentTableData(List<BulletinProxy> bulletins) {
		//
		bulletinDataProvider.getList().clear();
		bulletinDataProvider.setList(bulletins);
	}

	@Override
	public void initializeTables() {
		//
		initializeBulletinTable();
		initializeSubjectTable();
		initializeBrancheTable();
	}


	/**/
	private void initializeBrancheTable() {
		//
	    TextColumn<BulletinBrancheProxy> colBrancheName = new TextColumn<BulletinBrancheProxy>() {
	      @Override
	      public String getValue(BulletinBrancheProxy object) {
	        return object.getBulletinBrancheName();
	      }
	    };
	    tblBranches.setColumnWidth(colBrancheName, 60.0, Unit.PCT);
	    tblBranches.addColumn(colBrancheName, "Branche");
	    
	    //
	    Column<BulletinBrancheProxy, String> colCoef = new Column<BulletinBrancheProxy, String>(new EditTextCell()) {
	      @Override
	      public String getValue(BulletinBrancheProxy object) {
	        return object.getBrancheCoef().toString();
	      } 
	    };
	    // Field updater
	    colCoef.setFieldUpdater(new FieldUpdater<BulletinBrancheProxy, String>(){
	    	@Override
	    	public void update(int index, BulletinBrancheProxy branche, String value){
	    		selectedBrancheIndex = index;
	    		selectedBranche = branche;
	    		if (getUiHandlers() != null) {	    			
	    			getUiHandlers().updateBrancheCoef(branche, value);
	    		}	    		
	    	}
	    });
	    tblBranches.setColumnWidth(colCoef, 20.0, Unit.PCT);
	    tblBranches.addColumn( colCoef, "Coef" );
	    
	    //
	    Column<BulletinBrancheProxy, String> colDelete = new Column<BulletinBrancheProxy, String> (new ButtonCell()){
	    	@Override
	    	public String getValue(BulletinBrancheProxy bp){
	    		return "X";
	    	}
	    };
	    colDelete.setFieldUpdater(new FieldUpdater<BulletinBrancheProxy, String>(){
	    	@Override
	    	public void update(int index, BulletinBrancheProxy bp, String value){
	    		selectedBrancheIndex = index;
	    		selectedBranche = bp;
	    		getUiHandlers().removeBranche( bp );
	    	}
	    });
	    tblBranches.setColumnWidth(colDelete, 20.0, Unit.PCT);
	    tblBranches.addColumn(colDelete, "");
	    
	    //
	    brancheDataProvider.addDataDisplay(tblBranches);
	}
	

	/**/
	private void initializeSubjectTable() {
		//
	    TextColumn<BulletinSubjectProxy> colSubjectName = new TextColumn<BulletinSubjectProxy>() {
	      @Override
	      public String getValue(BulletinSubjectProxy object) {
	        return object.getSubjectName();
	      }
	    };	    
	    tblSubjects.setColumnWidth(colSubjectName, 30, Unit.PCT);
	    tblSubjects.addColumn(colSubjectName, "Matière");
	    
	    // --------------- Coef
	    Column<BulletinSubjectProxy, String> colSubjectCoef = new Column<BulletinSubjectProxy, String>(new EditTextCell()) {
	      @Override
	      public String getValue(BulletinSubjectProxy object) {
	        return object.getSubjectCoef().toString();
	      }
	    };
	    // Field updater
	    colSubjectCoef.setFieldUpdater(new FieldUpdater<BulletinSubjectProxy, String>(){
	    	@Override
	    	public void update(int index, BulletinSubjectProxy subject, String value){
	    		selectedSubjectIndex = index;
	    		selectedSubject = subject;
	    		if (getUiHandlers() != null) {
	    			if ( !subject.getSubjectCoef().toString().equals(value) )
	    				getUiHandlers().updateSubjectCoef(subject, value);
	    		}
	    	}
	    });
	    tblSubjects.setColumnWidth(colSubjectCoef, 15, Unit.PCT);
	    tblSubjects.addColumn(colSubjectCoef, "Coef");
	    
	    //
	    TextColumn<BulletinSubjectProxy> colProfName = new TextColumn<BulletinSubjectProxy>() {
	      @Override
	      public String getValue(BulletinSubjectProxy object) {
	        return object.getProfName();	        		
	      }
	    };	    
	    tblSubjects.addColumn(colProfName, "Prof");
	    //
	    Column<BulletinSubjectProxy, String> colDelete = new Column<BulletinSubjectProxy, String> (new ButtonCell()){
	    	@Override
	    	public String getValue(BulletinSubjectProxy bp){
	    		return "X";
	    	}
	    };
	    colDelete.setFieldUpdater(new FieldUpdater<BulletinSubjectProxy, String>(){
	    	@Override
	    	public void update(int index, BulletinSubjectProxy subject, String value){
	    		selectedSubjectIndex = index;
	    		selectedSubject = subject;
	    		getUiHandlers().removeSubject( subject );
	    	}
	    });
	    tblSubjects.setColumnWidth(colDelete, 15.0, Unit.PCT);
	    tblSubjects.addColumn(colDelete, "");
	    
		
	    // Selection model
	    final SingleSelectionModel<BulletinSubjectProxy> selectionModel = new SingleSelectionModel<BulletinSubjectProxy>();
	    tblSubjects.setSelectionModel(selectionModel);
	    selectionModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
	      public void onSelectionChange(SelectionChangeEvent event) {
	        selectedSubject = selectionModel.getSelectedObject();
	        if ( selectedSubject != null ) {
	        	//
	        	selectedSubjectIndex = subjectDataProvider.getList().indexOf(selectedSubject);
	        	lblSelectedSubject.setText( selectedSubject.getSubjectName() );
	        	getUiHandlers().onSubjectSelected(selectedSubject);
	        }
	      }
	    });
	    //
	    subjectDataProvider.addDataDisplay(tblSubjects);
	}

	/**/
	private void initializeBulletinTable() {
		//
	    TextColumn<BulletinProxy> colFirstName = new TextColumn<BulletinProxy>() {
	      @Override
	      public String getValue(BulletinProxy object) {
	        return object.getStudentName();
	      }
	    };
	    tblBulletins.setColumnWidth(colFirstName, 60, Unit.PCT);
	    tblBulletins.addColumn(colFirstName, "Eleve");
		
	    // Selection model
	    final SingleSelectionModel<BulletinProxy> selectionModel = new SingleSelectionModel<BulletinProxy>();
	    tblBulletins.setSelectionModel(selectionModel);
	    selectionModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
	      public void onSelectionChange(SelectionChangeEvent event) {
	        selectedBulletin = selectionModel.getSelectedObject();
	        if ( selectedBulletin != null ) {
	        	//
	        	clearSubjectUi();
	        	clearBrancheUi();
	        	//
	        	selectedBulletinIndex = bulletinDataProvider.getList().indexOf(selectedBulletin);
	        	lblSelectedStudentName.setText( selectedBulletin.getStudentName() );
	        	getUiHandlers().onBulletinSelected(selectedBulletin);
	        }
	      }
	    });
	    //
	    bulletinDataProvider.addDataDisplay(tblBulletins);
	}
	
	
	/**/
	void clearBrancheUi(){
		//
    	brancheDataProvider.getList().clear();
	}
	

	@Override
	public void setBulletinSubjectTableData(List<BulletinSubjectProxy> subjects) {
		//
		subjectDataProvider.getList().clear();
		subjectDataProvider.setList(subjects);
	}

	@Override
	public void setBulletinBrancheTableData(List<BulletinBrancheProxy> branches) {
		//
		brancheDataProvider.getList().clear();
		brancheDataProvider.setList(branches);
	}

	@Override
	public void showUpdatedBranche(BulletinBrancheProxy branche) {
		//
		brancheDataProvider.getList().set( selectedBrancheIndex, branche);
	}

	@Override
	public void removeDeletedBrancheFromTable() {
		//
		brancheDataProvider.getList().remove( selectedBranche );
		brancheDataProvider.refresh();
		selectedBrancheIndex = -1;
		selectedBranche = null;
	}

	@Override
	public void showUpdatedSubject(BulletinSubjectProxy subject) {
		// 
		subjectDataProvider.getList().set( selectedSubjectIndex, subject);
	}

	@Override
	public void removeDeletedSubjectFromTable() {
		//
		subjectDataProvider.getList().remove( selectedSubject );
		subjectDataProvider.refresh();
		selectedSubjectIndex = -1;
		selectedSubject = null;
	}
}
