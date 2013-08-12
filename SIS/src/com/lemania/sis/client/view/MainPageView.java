package com.lemania.sis.client.view;

import java.util.Iterator;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.Widget;
import com.lemania.sis.client.presenter.MainPagePresenter;
import com.lemania.sis.client.uihandler.MainPageUiHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.FocusWidget;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.Hyperlink;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.Label;
import com.lemania.sis.client.CurrentUser;
import com.google.gwt.user.client.ui.Tree;
import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.VerticalPanel;

public class MainPageView extends ViewWithUiHandlers<MainPageUiHandler> implements MainPagePresenter.MyView {
	
	interface MainPageViewUiBinder extends UiBinder<Widget, MainPageView>{}
	private static MainPageViewUiBinder uiBinder = GWT.create(MainPageViewUiBinder.class);

	private final Widget widget;

	@UiField FlowPanel mainContentPanel;
	@UiField Button cmdEcolePage;
	@UiField Button cmdEcoleAdd;
	@UiField Button cmdHomepage;
	@UiField Button cmdClasseList;
	@UiField Button cmdClasseAdd;
	@UiField Button cmdSubjectList;
	@UiField Button cmdSubjectAdd;
	@UiField Button cmdProfs;
	@UiField Button cmdProfsAdd;
	@UiField Button cmdContact;
	@UiField Hyperlink cmdLogout;
	@UiField Label txtWelcome;
	@UiField Button cmdUserMgt;
	@UiField Label lblCurrentMonth;
	@UiField Button cmdMenuToggle;
	@UiField Tree treeMenuAdmin;
	@UiField Image imgProgressBar;
	@UiField Button cmdSettings;
	@UiField DockPanel dockPanel;
	@UiField Button cmdPassword;
	@UiField Button cmdStudents;
	@UiField Button cmdCreateStudent;
	@UiField Button cmdBrancheList;
	@UiField Button cmdBrancheAdd;
	@UiField Button cmdProgramList;
	@UiField Button cmdProgramAdd;
	@UiField Button cmdProfileManagement;
	@UiField Tree treeMenuProf;
	@UiField Tree treeMenuEleve;
	@UiField VerticalPanel leftPanel;
	@UiField Button cmdCreateBulletins;
	@UiField Button cmdMarkInput;
	@UiField Button cmdPasswordProf;
	@UiField Button cmdPasswordStudent;
	
	public MainPageView() {		
		widget = uiBinder.createAndBindUi(this);
	}
	
	public interface Binder extends UiBinder<Widget, MainPageView> {
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	@Override
	public void setInSlot(Object slot, IsWidget content){
		if (slot == MainPagePresenter.TYPE_SetMainContent) {
			setMainContent(content);
		} else {
			super.setInSlot(slot, content);
		}
	}
	
	private void setMainContent(IsWidget content) {
	    mainContentPanel.clear();
	    
	    if (content != null) {
	      mainContentPanel.add(content);
	    }
	}
	
	@UiHandler("cmdHomepage")
	void onCmdHomepageClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().showHomepage();
	}
	
	@UiHandler("cmdEcolePage")
	void onCmdEcolePageClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().showEcoleList();
	}
	
	@UiHandler("cmdEcoleAdd")
	void onCmdEcoleAddClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().showEcoleAdd();
	}
	
	@UiHandler("cmdClasseList")
	void onCmdClasseListClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().showClasseList();
	}
	
	@UiHandler("cmdClasseAdd")
	void onCmdClasseAddClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().showClasseAdd();
	}
	
	@UiHandler("cmdSubjectList")
	void onCmdSubjectListClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().showFrmSubjectList();
	}
	
	@UiHandler("cmdSubjectAdd")
	void onCmdSubjectAddClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().showFrmSubjectAdd();
	}
	
	@UiHandler("cmdProfs")
	void onCmdProfsClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().showProfessorList();
	}
	
	@UiHandler("cmdProfsAdd")
	void onCmdProfsAddClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().showProfessorAdd();
	}
	
	@UiHandler("cmdContact")
	void onCmdContactClicked(ClickEvent event){
		if (getUiHandlers() != null)
			getUiHandlers().showContact();
	}
	
	@UiHandler("cmdLogout")
	void onCmdLogoutClicked(ClickEvent event){
		if (getUiHandlers() != null) {			
			getUiHandlers().logOut();
		}
	}
	
	@UiHandler("cmdUserMgt")
	void onCmdUserMgtClicked(ClickEvent event) {
		if (getUiHandlers() != null) {
			getUiHandlers().showUserManagement();
		}
	}
	
	@UiHandler("cmdSettings")
	void onCmdSettingsClicked(ClickEvent event){
		if (getUiHandlers() != null) {
			getUiHandlers().showSettingsScreen();
		}
	}

	@Override
	public void showUserInfo(CurrentUser currentUser) {
		txtWelcome.setText("Vous êtes connecté(e), " + currentUser.getFullName() + " !");
		cmdLogout.setText("Déconnexion");
		lblCurrentMonth.setText( "Le mois actuel: " + " " + Integer.toString(currentUser.getCurrentMonth()) + "/" + 
									Integer.toString(currentUser.getCurrentYear()) );
	}

	@Override
	public void initializeUi(CurrentUser currentUser) {
		//
		if ( currentUser!=null && currentUser.isLoggedIn() ) {
			showUserInfo(currentUser);
			//		
			if (currentUser.isAdmin())
				showMenu();
			if (currentUser.isProf())
				showProfMenu();
			if (currentUser.isStudent())
				showStudentMenu();
		}
		else {
			txtWelcome.setText("");
			cmdLogout.setText("");
			lblCurrentMonth.setText("");
			//
			hideMenu();
		}
		
		imgProgressBar.setVisible(false);
	}
	
	/**/
	void showMenu(){
		//
		dockPanel.add( leftPanel, DockPanel.WEST );
		dockPanel.setCellWidth( leftPanel, "250px" );
		//
		leftPanel.setVisible(true);
		treeMenuAdmin.setVisible( true );
		treeMenuEleve.setVisible( true );
		treeMenuProf.setVisible( true );
	}
	
	/**/
	void showProfMenu(){
		//
		dockPanel.add( leftPanel, DockPanel.WEST );
		dockPanel.setCellWidth( leftPanel, "250px" );
		//
		leftPanel.setVisible(true);
		treeMenuProf.setVisible( true );
	}
	
	
	/**/
	void showStudentMenu(){
		//
		dockPanel.add( leftPanel, DockPanel.WEST );
		dockPanel.setCellWidth( leftPanel, "250px" );
		//
		leftPanel.setVisible(true);
		treeMenuEleve.setVisible( true );
	}
	
	
	/**/
	void hideMenu(){
		//
		dockPanel.remove( leftPanel );
		//
		leftPanel.setVisible(false);
		treeMenuProf.setVisible( false );
		treeMenuEleve.setVisible( false );
		treeMenuAdmin.setVisible( false );
	}
	
	/**/
	@UiHandler("cmdMenuToggle")
	void onCmdMenuToggleClick(ClickEvent event) {
		if (leftPanel.isVisible())
			hidePanel();
		else
			showPanel();
	}

	private void showPanel() {
		//
		dockPanel.add( leftPanel, DockPanel.WEST );
		dockPanel.setCellWidth( leftPanel, "250px" );
		leftPanel.setVisible(true);
	}

	private void hidePanel() {
		//
		leftPanel.setVisible(false);
		dockPanel.remove( leftPanel );
	}

	/**/
	@Override
	public void showProgressBar(boolean visible) {
		imgProgressBar.setVisible(visible);
	}

	/**/
	@Override
	public void enableMainPanel(Boolean enabled) {
		enableAllChildren(enabled, mainContentPanel);
	}
	
	/**/
	private void enableAllChildren(boolean enable, Widget widget)
	{
	    if (widget instanceof HasWidgets)
	    {
	        Iterator<Widget> iter = ((HasWidgets)widget).iterator();
	        while (iter.hasNext())
	        {
	            Widget nextWidget = iter.next();
	            enableAllChildren(enable, nextWidget);
	            if (nextWidget instanceof FocusWidget)
	            {
	                ((FocusWidget)nextWidget).setEnabled(enable);
	            }
	        }
	    }
	}
	
	/**/
	@UiHandler("cmdPassword")
	void onCmdPasswordClick(ClickEvent event) {
		if (getUiHandlers() != null) {
			getUiHandlers().showFrmPassword();
		}
	}
	
	/**/
	@UiHandler("cmdStudents")
	void onCmdStudentsClick(ClickEvent event) {
		if (getUiHandlers() != null) {
			getUiHandlers().showFrmStudents();
		}
	}
	
	/**/
	@UiHandler("cmdCreateStudent")
	void onCmdCreateStudentClick(ClickEvent event) {
		if (getUiHandlers() != null) {
			getUiHandlers().showFrmCreateStudents();
		}
	}
	
	/**/
	@UiHandler("cmdBrancheList")
	void onCmdBrancheListClick(ClickEvent event) {
		if (getUiHandlers() != null) {
			getUiHandlers().showBrancheList();
		}
	}
	
	/**/
	@UiHandler("cmdBrancheAdd")
	void onCmdBrancheAddClick(ClickEvent event) {
		if (getUiHandlers() != null) {
			getUiHandlers().showBrancheAdd();
		}
	}
	
	/**/
	@UiHandler("cmdProgramList")
	void onCmdProgramListClick(ClickEvent event) {
		if (getUiHandlers() != null) {
			getUiHandlers().showCoursList();
		}
	}
	
	/**/
	@UiHandler("cmdProgramAdd")
	void onCmdProgramAddClick(ClickEvent event) {
		if (getUiHandlers() != null) {
			getUiHandlers().showCoursAdd();
		}
	}
	
	/**/
	@UiHandler("cmdProfileManagement")
	void onCmdProfileManagementClick(ClickEvent event) {
		if (getUiHandlers() != null) {
			getUiHandlers().showProfileManagement();
		}
	}
	
	@UiHandler("cmdCreateBulletins")
	void onCmdCreateBulletinsClick(ClickEvent event) {
		if (getUiHandlers() != null) {
			getUiHandlers().showCreateBulletins();
		}
	}
	
	
	@UiHandler("cmdMarkInput")
	void onCmdMarkInputClick(ClickEvent event) {
		if (getUiHandlers() != null) {
			getUiHandlers().showFrmMarkInput();
		}
	}
	
	
	@UiHandler("cmdPasswordStudent")
	void onCmdPasswordStudentClick(ClickEvent event) {
		if (getUiHandlers() != null) {
			getUiHandlers().showFrmPassword();
		}
	}
	
	
	@UiHandler("cmdPasswordProf")
	void onCmdPasswordProfClick(ClickEvent event) {
		if (getUiHandlers() != null) {
			getUiHandlers().showFrmPassword();
		}
	}
}
