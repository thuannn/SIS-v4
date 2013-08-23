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
import com.lemania.sis.client.place.NameTokens;
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
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.HTML;

public class MainPageView extends ViewWithUiHandlers<MainPageUiHandler> implements MainPagePresenter.MyView {
	
	interface MainPageViewUiBinder extends UiBinder<Widget, MainPageView>{}
	private static MainPageViewUiBinder uiBinder = GWT.create(MainPageViewUiBinder.class);

	private final Widget widget;

	@UiField FlowPanel mainContentPanel;
	@UiField Hyperlink cmdLogout;
	@UiField Label txtWelcome;
	@UiField Label lblCurrentMonth;
	@UiField Button cmdMenuToggle;
	@UiField Tree treeMenuAdmin;
	@UiField DockPanel dockPanel;
	@UiField Tree treeMenuProf;
	@UiField Tree treeMenuEleve;
	@UiField VerticalPanel leftPanel;
	@UiField HTML htmlProgressBar;
	@UiField Hyperlink cmdProfileManagement;
	@UiField Hyperlink cmdAttribution;
	@UiField Hyperlink cmdAttributionPerson;
	@UiField Hyperlink cmdHome;
	@UiField Hyperlink cmdMarkInput;
	@UiField Hyperlink cmdMarkView;
	@UiField Hyperlink cmdStudentList;
	@UiField Hyperlink cmdStudentAdd;
	@UiField Hyperlink cmdProfList;
	@UiField Hyperlink cmdProfAdd;
	@UiField Hyperlink cmdBrancheList;
	@UiField Hyperlink cmdBrancheAdd;
	@UiField Hyperlink cmdSubjectList;
	@UiField Hyperlink cmdSubjectAdd;
	@UiField Hyperlink cmdClassList;
	@UiField Hyperlink cmdClassAdd;
	@UiField Hyperlink cmdProgrammeList;
	@UiField Hyperlink cmdProgrammeAdd;
	@UiField Hyperlink cmdSchoolList;
	@UiField Hyperlink cmdSchoolAdd;
	@UiField Hyperlink cmdUserManagement;
	@UiField Hyperlink cmdSettings;
	@UiField Hyperlink cmdPassword;
	@UiField Hyperlink cmdHelp;
	
	//
	private Hyperlink lastPage;
	
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
	
	@UiHandler("cmdLogout")
	void onCmdLogoutClicked(ClickEvent event){
		if (getUiHandlers() != null) {			
			getUiHandlers().logOut();
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
	}
	
	/**/
	void showMenu(){
		//
		dockPanel.add( leftPanel, DockPanel.WEST );
		dockPanel.setCellWidth( leftPanel, "250px" );
		//
		leftPanel.setVisible(true);
		treeMenuAdmin.setVisible( true );
		treeMenuEleve.setVisible( false );
		treeMenuProf.setVisible( false );
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
		htmlProgressBar.setVisible(visible);
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

	@Override
	public void showCurrentPageOnMenu(String tokenName) {
		//
		if (tokenName.equals(NameTokens.homepage)) switchStyle(this.cmdHome);
		if (tokenName.equals(NameTokens.profilemgt)) switchStyle(this.cmdProfileManagement);
		if (tokenName.equals(NameTokens.bulletincreation)) switchStyle(this.cmdAttribution);
		if (tokenName.equals(NameTokens.bulletinmanagement)) switchStyle(this.cmdAttributionPerson);
		if (tokenName.equals(NameTokens.bulletindetail)) switchStyle(this.cmdMarkView);
		if (tokenName.equals(NameTokens.markinput)) switchStyle(this.cmdMarkInput);
		if (tokenName.equals(NameTokens.students)) switchStyle(this.cmdStudentList);
		if (tokenName.equals(NameTokens.studentadd)) switchStyle(this.cmdStudentAdd);
		if (tokenName.equals(NameTokens.profs)) switchStyle(this.cmdProfList);
		if (tokenName.equals(NameTokens.profsadd)) switchStyle(this.cmdProfAdd);
		if (tokenName.equals(NameTokens.branchelist)) switchStyle(this.cmdBrancheList);
		if (tokenName.equals(NameTokens.brancheadd)) switchStyle(this.cmdBrancheAdd);
		if (tokenName.equals(NameTokens.subjectlist)) switchStyle(this.cmdSubjectList);
		if (tokenName.equals(NameTokens.subjectadd)) switchStyle(this.cmdSubjectAdd);
		if (tokenName.equals(NameTokens.classlist)) switchStyle(this.cmdClassList);
		if (tokenName.equals(NameTokens.classeadd)) switchStyle(this.cmdClassAdd);
		if (tokenName.equals(NameTokens.cours)) switchStyle(this.cmdProgrammeList);
		if (tokenName.equals(NameTokens.coursadd)) switchStyle(this.cmdProgrammeAdd);
		if (tokenName.equals(NameTokens.ecolepage)) switchStyle(this.cmdSchoolList);
		if (tokenName.equals(NameTokens.addecole)) switchStyle(this.cmdSchoolAdd);
		if (tokenName.equals(NameTokens.usermanagement)) switchStyle(this.cmdUserManagement);
		if (tokenName.equals(NameTokens.settings)) switchStyle(this.cmdSettings);
		if (tokenName.equals(NameTokens.password)) switchStyle(this.cmdPassword);
		if (tokenName.equals(NameTokens.contact)) switchStyle(this.cmdHelp);
	}
	
	private void switchStyle( Hyperlink link){
		if (lastPage != null) lastPage.setStyleName("");
		link.setStyleName("currentPage");
		lastPage = link;
	}
}
