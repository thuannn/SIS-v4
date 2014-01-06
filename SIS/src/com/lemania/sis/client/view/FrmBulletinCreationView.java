package com.lemania.sis.client.view;

import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.NotificationTypes;
import com.lemania.sis.client.presenter.FrmBulletinCreationPresenter;
import com.lemania.sis.client.uihandler.FrmBulletinCreationUiHandler;
import com.lemania.sis.shared.BulletinProxy;
import com.lemania.sis.shared.ClasseProxy;
import com.lemania.sis.shared.CoursProxy;
import com.lemania.sis.shared.EcoleProxy;
import com.lemania.sis.shared.ProfileProxy;
import com.lemania.sis.shared.StudentProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.view.client.ListDataProvider;
import com.google.gwt.view.client.SelectionChangeEvent;
import com.google.gwt.view.client.SingleSelectionModel;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.cell.client.ButtonCell;
import com.google.gwt.cell.client.CheckboxCell;
import com.google.gwt.cell.client.FieldUpdater;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.user.client.ui.Label;

public class FrmBulletinCreationView extends ViewWithUiHandlers<FrmBulletinCreationUiHandler> implements
		FrmBulletinCreationPresenter.MyView {

	private final Widget widget;
	
	// Thuan
	private ListDataProvider<StudentProxy> studentDataProvider = new ListDataProvider<StudentProxy>();
	private ListDataProvider<BulletinProxy> bulletinDataProvider = new ListDataProvider<BulletinProxy>();
	//
	private StudentProxy selectedStudent;
	private int selectedStudentIndex;
	//
	private int selectedBulletinIndex;
	private BulletinProxy selectedBulletin;
	

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
	@UiField(provided=true) DataGrid<BulletinProxy> tblBulletins = new DataGrid<BulletinProxy>();
	@UiField ListBox lstClasses;
	@UiField ListBox lstYear;
	@UiField ListBox lstProfiles;
	@UiField ListBox lstEcoles;
	@UiField ListBox lstProgrammes;
	@UiField Button cmdCreateBulletin;
	@UiField Label lblSelectedStudentName;
	
	
	/**/
	@Override
	public void resetForm() {
		// Initialize years list
		initializeYearList();
		//
		lstEcoles.setSelectedIndex(0);
		lstProfiles.clear();
		lstProgrammes.clear();
		lstClasses.clear();
		//
		bulletinDataProvider.getList().clear();
	}
	
	
	public void initializeYearList(){
		lstYear.clear();
		lstYear.addItem("-","");
		lstYear.addItem("2013 - 2014","2013");
	}
	

	/**/
	@Override
	public void initializeTables() {
		//
		initializeStudentTable();
		//
		initializeBulletinTable();
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
	    tblBulletins.setColumnWidth(colFirstName, 45, Unit.PCT);
	    tblBulletins.addColumn(colFirstName, "Eleve");
	    //
	    TextColumn<BulletinProxy> colLastName = new TextColumn<BulletinProxy>() {
	      @Override
	      public String getValue(BulletinProxy object) {
	        return object.getClasseName();
	      } 
	    };
	    tblBulletins.setColumnWidth(colLastName, 25, Unit.PCT);
	    tblBulletins.addColumn(colLastName, "Classe");
	    //
	    TextColumn<BulletinProxy> colYear = new TextColumn<BulletinProxy>() {
	      @Override
	      public String getValue(BulletinProxy object) {
	        return object.getYear();
	      } 
	    };
	    tblBulletins.addColumn(colYear, "Year");
	    tblBulletins.setColumnWidth(colYear, 10, Unit.PCT);
	    
	    // Finished bulletin
	    CheckboxCell cellFinished = new CheckboxCell();
	    Column<BulletinProxy, Boolean> colFinished = new Column<BulletinProxy, Boolean>(cellFinished) {
	    	@Override
	    	public Boolean getValue(BulletinProxy bulletin){
	    		return bulletin.getIsFinished();
	    	}	    	
	    };	    
	    // Field updater
	    colFinished.setFieldUpdater(new FieldUpdater<BulletinProxy, Boolean>(){
	    	@Override
	    	public void update(int index, BulletinProxy bp, Boolean value){
	    		if (getUiHandlers() != null) {	    			
	    			selectedBulletinIndex = index;
	    			selectedBulletin = bp;
	    			getUiHandlers().updateBulletinFinishedStatus(bp, value);
	    		}	    		
	    	}
	    });
	    tblBulletins.setColumnWidth(colFinished, 10, Unit.PCT);
	    tblBulletins.addColumn(colFinished, "Terminé");
	    
	    //
	    Column<BulletinProxy, String> colDelete = new Column<BulletinProxy, String> (new ButtonCell()){
	    	@Override
	    	public String getValue(BulletinProxy bp){
	    		return "X";
	    	}
	    };
	    colDelete.setFieldUpdater(new FieldUpdater<BulletinProxy, String>(){
	    	@Override
	    	public void update(int index, BulletinProxy bp, String value){
	    		Boolean confirm = Window.confirm("Etes-vous sur de vouloir enlever "+ bp.getStudentName() +" de la classe " + bp.getClasseName() + " ? TOUTES LES NOTES ACTUELLES SERONT SUPPRIMEES");
	    		selectedBulletinIndex = index;
	    		selectedBulletin = bp;
	    		if (confirm)	    		
	    			getUiHandlers().removeBulletin( bp );
	    	}
	    });
	    tblBulletins.setColumnWidth(colDelete, 10, Unit.PCT);
	    tblBulletins.addColumn(colDelete, "");
	    
	    //
	    bulletinDataProvider.addDataDisplay(tblBulletins);
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
	    // Selection model
	    final SingleSelectionModel<StudentProxy> selectionModel = new SingleSelectionModel<StudentProxy>();
	    tblStudents.setSelectionModel(selectionModel);
	    selectionModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
	      public void onSelectionChange(SelectionChangeEvent event) {
	        selectedStudent = selectionModel.getSelectedObject();
	        if ( selectedStudent != null ) {
	        	selectedStudentIndex = studentDataProvider.getList().indexOf(selectedStudent);
	        	lblSelectedStudentName.setText( selectedStudent.getFirstName() + " " + selectedStudent.getLastName() );
	        }
	      }
	    });
	    //
	    studentDataProvider.addDataDisplay(tblStudents);
	    //
	    tblStudents.setPageSize( NotificationTypes.pageSize );
	}
	

	/**/
	@Override
	public void setStudentTableData(List<StudentProxy> students) {
		// 
		studentDataProvider.setList( students );
	}

	
	/**/
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
	
	
	/**/
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
	
	
	/**/
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
	
	
	/**/
	@UiHandler("cmdCreateBulletin")
	void onCmdCreateBulletinClick(ClickEvent event) {
		//
		if (getUiHandlers() != null)
			getUiHandlers().createBulletin( 
					selectedStudent.getId().toString(),
					lstClasses.getValue(lstClasses.getSelectedIndex()), 
					lstYear.getValue(lstYear.getSelectedIndex()), 
					lstProfiles.getValue(lstProfiles.getSelectedIndex()));
	}

	
	/**/
	@Override
	public void addNewBulletinToTable(BulletinProxy bulletin) {
		// 
		bulletinDataProvider.getList().add(bulletin);
		bulletinDataProvider.refresh();
	}
	
	
	/**/
	@UiHandler("lstClasses")
	void onLstClassesChange(ChangeEvent event) {
		//
		if (getUiHandlers() != null)
			getUiHandlers().onClassChanged(lstClasses.getValue(lstClasses.getSelectedIndex()));
	}

	
	/**/
	@Override
	public void setBulletinTableData(List<BulletinProxy> bulletins) {
		//
		bulletinDataProvider.getList().clear();
		bulletinDataProvider.setList(bulletins);
	}

	@Override
	public void removeStudentWithBulletin() {
		//
		tblStudents.getSelectionModel().setSelected( selectedStudent, false);
		studentDataProvider.getList().remove(selectedStudentIndex);
		studentDataProvider.refresh();
	}

	/**/
	@Override
	public void removeDeletedBulletinFromTable() {
		// Remove from bulletin table
		bulletinDataProvider.getList().remove(selectedBulletinIndex);
		bulletinDataProvider.flush();
	}
}
