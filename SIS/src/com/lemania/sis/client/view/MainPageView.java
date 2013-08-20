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
}
