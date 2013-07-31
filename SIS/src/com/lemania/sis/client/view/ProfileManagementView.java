package com.lemania.sis.client.view;

import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.NotificationTypes;
import com.lemania.sis.client.presenter.ProfileManagementPresenter;
import com.lemania.sis.client.uihandler.ProfileManagementUiHandler;
import com.lemania.sis.shared.BrancheProxy;
import com.lemania.sis.shared.ProfessorProxy;
import com.lemania.sis.shared.ProfileBrancheProxy;
import com.lemania.sis.shared.ProfileProxy;
import com.lemania.sis.shared.ProfileSubjectProxy;
import com.lemania.sis.shared.SubjectProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.view.client.ListDataProvider;
import com.google.gwt.view.client.SelectionChangeEvent;
import com.google.gwt.view.client.SingleSelectionModel;
import com.google.gwt.cell.client.ButtonCell;
import com.google.gwt.cell.client.CheckboxCell;
import com.google.gwt.cell.client.EditTextCell;
import com.google.gwt.cell.client.FieldUpdater;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.user.client.ui.DoubleBox;
import com.google.gwt.user.client.ui.Label;

public class ProfileManagementView extends ViewWithUiHandlers<ProfileManagementUiHandler> implements
		ProfileManagementPresenter.MyView {

	private final Widget widget;
	
	// Thuan
	ListDataProvider<ProfileSubjectProxy> subjectDataProvider = new ListDataProvider<ProfileSubjectProxy>();
	ListDataProvider<ProfileBrancheProxy> brancheDataProvider = new ListDataProvider<ProfileBrancheProxy>();
	//
	private int selectedSubjectIndex;
	private ProfileSubjectProxy selectedSubject;
	//
	private int selectedBrancheIndex;
	private ProfileBrancheProxy selectedBranche;
	
	
	public interface Binder extends UiBinder<Widget, ProfileManagementView> {
	}

	@Inject
	public ProfileManagementView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField ListBox lstProfiles;
	@UiField TextBox txtNewProfileName;
	@UiField Button cmdSaveNewProfile;
	@UiField Button cmdCreateNewProfile;
	@UiField ListBox lstSubjects;
	@UiField ListBox lstBranches;
	@UiField FlowPanel pnlAddNewProfile;
	@UiField ListBox lstProfessors;
	@UiField DoubleBox txtSubjectCoef;
	@UiField DoubleBox txtBrancheCoef;
	@UiField Button cmdAddSubject;
	@UiField Button cmdAddBranche;
	
	@UiField(provided=true) DataGrid<ProfileSubjectProxy> tblSubjects = new DataGrid<ProfileSubjectProxy>();
	@UiField(provided=true) DataGrid<ProfileBrancheProxy> tblBranches = new DataGrid<ProfileBrancheProxy>();
	@UiField Label lblSelectedSubject;
	
	/*
	 * 
	 * */
	@UiHandler("cmdCreateNewProfile")
	void onCmdCreateNewProfileClick(ClickEvent event) {
		// show the text box to create a new profile
		txtNewProfileName.setText("");
		pnlAddNewProfile.setVisible(true);
	}
	
	
	/*
	 * 
	 * */
	@UiHandler("cmdSaveNewProfile")
	void onCmdSaveNewProfileClick(ClickEvent event) {
		//
		if (getUiHandlers() != null)
			getUiHandlers().createNewProfile( txtNewProfileName.getText() );
	}
	

	/*
	 * 
	 * */
	@Override
	public void resetForm() {
		//
		pnlAddNewProfile.setVisible(false);
		//
		subjectDataProvider.getList().clear();
		brancheDataProvider.getList().clear();
		//
		lstProfiles.clear();
		lstSubjects.clear();
		lstProfessors.clear();
		lstBranches.clear();
		//
		txtSubjectCoef.setText("");
		txtBrancheCoef.setText("");
		//
	}
	

	/*
	 * Add new profile to list after successfully added
	 * */
	@Override
	public void addNewProfileToList(ProfileProxy newProfile) {
		//
		lstProfiles.addItem( newProfile.getProfileName(), newProfile.getId().toString() );
	}
	

	/*
	 * 
	 * */
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
	

	/*
	 * 
	 * */
	@Override
	public void setSubjectListData(List<SubjectProxy> subjectList) {
		//
		lstSubjects.clear();
		lstSubjects.addItem("-","");
		
		for (SubjectProxy subject : subjectList){
			lstSubjects.addItem( subject.getSubjectName(), subject.getId().toString() );
		}
		lstSubjects.setSelectedIndex(0);
	}
	

	/*
	 * 
	 * */
	@Override
	public void setBrancheListData(List<BrancheProxy> brancheList) {
		//
		lstBranches.clear();
		lstBranches.addItem("-","");
		
		for (BrancheProxy branche : brancheList){
			lstBranches.addItem( branche.getBrancheName(), branche.getId().toString() );
		}
		lstBranches.setSelectedIndex(0);
	}
	
	
	/*
	 * Load list of professeurs that are responsible for the selected subject
	 * */
	@UiHandler("lstSubjects")
	void onLstSubjectsChange(ChangeEvent event) {
		if (getUiHandlers() != null)
			getUiHandlers().loadProfessorList( lstSubjects.getValue( lstSubjects.getSelectedIndex() ));
	}
	

	/*
	 * 
	 * */
	@Override
	public void setProfessorListData(List<ProfessorProxy> profs) {
		//
		lstProfessors.clear();
		lstProfessors.addItem("-","");
		
		for ( ProfessorProxy prof : profs ){
			lstProfessors.addItem( prof.getProfName(), prof.getId().toString() );
		}
		lstProfessors.setSelectedIndex(0);
	}
	
	
	/*
	 * 
	 * */
	@UiHandler("cmdAddSubject")
	void onCmdAddSubjectClick(ClickEvent event) {
		if (getUiHandlers() != null)
			getUiHandlers().addSubjectToProfile( lstProfiles.getValue( lstProfiles.getSelectedIndex()), 
					lstSubjects.getValue( lstSubjects.getSelectedIndex()), 
					txtSubjectCoef.getText());
	}
	
	
	/*
	 * 
	 * */
	@UiHandler("cmdAddBranche")
	void onCmdAddBrancheClick(ClickEvent event) {
		if (selectedSubject == null) {
			Window.alert( NotificationTypes.subject_not_selected );
			return;
		}
		if ( (getUiHandlers() != null) && (selectedSubject != null) )
			getUiHandlers().addBrancheToProfile( 
					selectedSubject.getId().toString(), 
					lstBranches.getValue(lstBranches.getSelectedIndex()), 
					txtBrancheCoef.getText());
	}
	

	/*
	 * 
	 * */
	@Override
	public void addNewProfileSubjectToTable(ProfileSubjectProxy profileSubject) {
		//
		subjectDataProvider.getList().add( profileSubject );
		subjectDataProvider.refresh();
	}
	

	/*
	 * 
	 * */
	@Override
	public void initializeTables() {
		//
		initializeSubjectTable();
		initializeBrancheTable();
	}
	

	/*
	 * 
	 * */
	private void initializeSubjectTable() {
		//
		// Add a text column to show the name.
	    TextColumn<ProfileSubjectProxy> colSubjectName = new TextColumn<ProfileSubjectProxy>() {
	      @Override
	      public String getValue(ProfileSubjectProxy object) {
	        return object.getSubjectName();
	      }
	    };
	    tblSubjects.addColumn(colSubjectName, "Matière");
	    
	    //
	    Column<ProfileSubjectProxy, String> colCoef = new Column<ProfileSubjectProxy, String>(new EditTextCell()) {
	      @Override
	      public String getValue(ProfileSubjectProxy object) {
	        return object.getSubjectCoef().toString();
	      } 
	    };
	    tblSubjects.addColumn( colCoef, "Coefficient" );
	    // Field updater
	    colCoef.setFieldUpdater(new FieldUpdater<ProfileSubjectProxy, String>(){
	    	@Override
	    	public void update(int index, ProfileSubjectProxy subject, String value){
	    		if (getUiHandlers() != null) {	    			
	    			selectedSubjectIndex = index;
	    			getUiHandlers().updateProfileSubject( subject, value, subject.getIsActive() );
	    		}	    		
	    	}
	    });
	    
	    //
	    CheckboxCell cellActive = new CheckboxCell();
	    Column<ProfileSubjectProxy, Boolean> colActive = new Column<ProfileSubjectProxy, Boolean>(cellActive) {
	    	@Override
	    	public Boolean getValue(ProfileSubjectProxy subject){
	    		return subject.getIsActive();
	    	}	    	
	    };
	    tblSubjects.addColumn(colActive, "Active");
	    // Field updater
	    colActive.setFieldUpdater(new FieldUpdater<ProfileSubjectProxy, Boolean>(){
	    	@Override
	    	public void update(int index, ProfileSubjectProxy subject, Boolean value){
	    		if (getUiHandlers() != null) {	    			
	    			selectedSubjectIndex = index;
	    			getUiHandlers().updateProfileSubject( subject, subject.getSubjectCoef().toString(), value );
	    		}	    		
	    	}
	    });
	    
	    
	    //
	    TextColumn<ProfileSubjectProxy> colTotalBrancheCoef = new TextColumn<ProfileSubjectProxy>() {
	      @Override
	      public String getValue(ProfileSubjectProxy object) {
	        return object.getTotalBrancheCoef().toString();
	      } 
	    };
	    tblSubjects.addColumn( colTotalBrancheCoef, "Branche Coefs" );
	    
	    
	    //
	    Column<ProfileSubjectProxy, String> colDelete = new Column<ProfileSubjectProxy, String> (new ButtonCell()){
	    	@Override
	    	public String getValue(ProfileSubjectProxy bp){
	    		return "Suprimmer";
	    	}
	    };
	    tblSubjects.addColumn(colDelete, "");
	    colDelete.setFieldUpdater(new FieldUpdater<ProfileSubjectProxy, String>(){
	    	@Override
	    	public void update(int index, ProfileSubjectProxy ps, String value){
	    		selectedSubjectIndex = index;
	    		getUiHandlers().removeSubject( ps );
	    	}
	    });
	    
	    
	    //
	    subjectDataProvider.addDataDisplay(tblSubjects);
	    
	    
	    // Selection model
	    // Add a selection model to handle user selection.
	    final SingleSelectionModel<ProfileSubjectProxy> selectionModel = new SingleSelectionModel<ProfileSubjectProxy>();
	    tblSubjects.setSelectionModel(selectionModel);
	    selectionModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
	      public void onSelectionChange(SelectionChangeEvent event) {
	        selectedSubject = selectionModel.getSelectedObject();
	        if (selectedSubject != null) {
	        	selectedSubjectIndex = subjectDataProvider.getList().indexOf( selectedSubject );
	        	lblSelectedSubject.setText( selectedSubject.getSubjectName() );
	        	getUiHandlers().onSubjectSelected( selectedSubject.getId().toString() );
	        }
	      }
	    });
	}
	
	
	/*
	 * 
	 * */
	private void initializeBrancheTable() {
		//
	    TextColumn<ProfileBrancheProxy> colBrancheName = new TextColumn<ProfileBrancheProxy>() {
	      @Override
	      public String getValue(ProfileBrancheProxy object) {
	        return object.getProfileBrancheName();
	      }
	    };
	    tblBranches.addColumn(colBrancheName, "Branche");
	    
	    //
	    Column<ProfileBrancheProxy, String> colCoef = new Column<ProfileBrancheProxy, String>(new EditTextCell()) {
	      @Override
	      public String getValue(ProfileBrancheProxy object) {
	        return object.getBrancheCoef().toString();
	      } 
	    };
	    tblBranches.addColumn( colCoef, "Coefficient" );
	    // Field updater
	    colCoef.setFieldUpdater(new FieldUpdater<ProfileBrancheProxy, String>(){
	    	@Override
	    	public void update(int index, ProfileBrancheProxy subject, String value){
	    		if (getUiHandlers() != null) {	    			
	    			selectedBrancheIndex = index;
	    			// TODO getUiHandlers().updateProfileSubject( subject, value, subject.getIsActive() );
	    		}	    		
	    	}
	    });
	    
	    //
	    Column<ProfileBrancheProxy, String> colDelete = new Column<ProfileBrancheProxy, String> (new ButtonCell()){
	    	@Override
	    	public String getValue(ProfileBrancheProxy bp){
	    		return "Suprimmer";
	    	}
	    };
	    tblBranches.addColumn(colDelete, "");
	    colDelete.setFieldUpdater(new FieldUpdater<ProfileBrancheProxy, String>(){
	    	@Override
	    	public void update(int index, ProfileBrancheProxy bp, String value){
	    		selectedBrancheIndex = index;
	    		getUiHandlers().removeBranche(bp, selectedSubject.getId().toString());
	    	}
	    });
	    
	    //
	    brancheDataProvider.addDataDisplay(tblBranches);
	}
	
	
	/*
	 * Load subjects and branches list when a profile is chosen
	 * */
	@UiHandler("lstProfiles")
	void onLstProfilesChange(ChangeEvent event) {
		//
		subjectDataProvider.getList().clear();
		brancheDataProvider.getList().clear();
		//
		if (getUiHandlers() != null)
			getUiHandlers().onProfileChanged( lstProfiles.getValue( lstProfiles.getSelectedIndex()) );
	}
	

	/*
	 * 
	 * */
	@Override
	public void setSubjectTableData(List<ProfileSubjectProxy> subjects) {
		//
		subjectDataProvider.getList().clear();
		subjectDataProvider.setList(subjects);
	}
	

	/*
	 * Show the updated data after successfully saved
	 * */
	@Override
	public void showUpdatedProfileSubject(ProfileSubjectProxy ps) {
		//
		subjectDataProvider.getList().remove( selectedSubjectIndex );
		subjectDataProvider.getList().add( selectedSubjectIndex, ps );
		subjectDataProvider.refresh();
	}
	

	/*
	 * 
	 * */
	@Override
	public void setBrancheTableData( List<ProfileBrancheProxy> branches ) {
		//
		brancheDataProvider.getList().clear();
		brancheDataProvider.setList(branches);
	}
	

	/*
	 * 
	 * */
	@Override
	public void addNewProfileBrancheToTable( ProfileBrancheProxy branche ) {
		//
		brancheDataProvider.getList().add(branche);
		brancheDataProvider.refresh();
	}
	

	/*
	 * 
	 * */
	@Override
	public void removeProfileBrancheFromTable() {
		//
		brancheDataProvider.getList().remove(selectedBrancheIndex);
		brancheDataProvider.refresh();
	}
	

	/*
	 * 
	 * */
	@Override
	public void removeProfileSubjectFromTable() {
		//
		subjectDataProvider.getList().remove(selectedSubjectIndex);
		subjectDataProvider.refresh();
	}
}
