package com.lemania.sis.client.presenter;

import java.util.ArrayList;
import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.lemania.sis.client.event.LoginAuthenticatedEvent;
import com.lemania.sis.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.sis.client.place.NameTokens;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.sis.client.CurrentUser;
import com.lemania.sis.client.LoggedInGatekeeper;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;
import com.lemania.sis.client.presenter.MainPagePresenter;
import com.lemania.sis.client.uihandler.FrmBulletinViewDetailUiHandler;
import com.lemania.sis.shared.BulletinBrancheProxy;
import com.lemania.sis.shared.BulletinProxy;
import com.lemania.sis.shared.BulletinSubjectProxy;
import com.lemania.sis.shared.ClasseProxy;
import com.lemania.sis.shared.service.BulletinBrancheRequestFactory;
import com.lemania.sis.shared.service.BulletinRequestFactory;
import com.lemania.sis.shared.service.BulletinSubjectRequestFactory;
import com.lemania.sis.shared.service.ClasseRequestFactory;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.BulletinBrancheRequestFactory.BulletinBrancheRequestContext;
import com.lemania.sis.shared.service.BulletinRequestFactory.BulletinRequestContext;
import com.lemania.sis.shared.service.BulletinSubjectRequestFactory.BulletinSubjectRequestContext;
import com.lemania.sis.shared.service.ClasseRequestFactory.ClasseRequestContext;

public class FrmBulletinViewDetailPresenter
		extends
		Presenter<FrmBulletinViewDetailPresenter.MyView, FrmBulletinViewDetailPresenter.MyProxy> 
		implements 
		FrmBulletinViewDetailUiHandler, LoginAuthenticatedHandler {
	
	// Thuan
	private CurrentUser currentUser;
	private List<BulletinSubjectProxy> subjects = new ArrayList<BulletinSubjectProxy>();
	

	public interface MyView extends View, HasUiHandlers<FrmBulletinViewDetailUiHandler> {
		//
		void resetForm();
		void showAdminPanel(Boolean show);
		//
		void setStudentListData(List<BulletinProxy> students);
		//
		void setClasseList(List<ClasseProxy> classes);
		//
		void drawGradeTableMatu(List<BulletinSubjectProxy> subjects, List<BulletinBrancheProxy> branches, Boolean isStudent);
		void drawGradeTableNormal(List<BulletinSubjectProxy> subjects, List<BulletinBrancheProxy> branches, Boolean isStudent);
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.bulletindetail)
	@UseGatekeeper(LoggedInGatekeeper.class)
	public interface MyProxy extends ProxyPlace<FrmBulletinViewDetailPresenter> {
	}

	@Inject
	public FrmBulletinViewDetailPresenter(final EventBus eventBus,
			final MyView view, final MyProxy proxy) {
		super(eventBus, view, proxy);
	}

	@Override
	protected void revealInParent() {
		RevealContentEvent.fire(this, MainPagePresenter.TYPE_SetMainContent, this);
	}

	@Override
	protected void onBind() {
		super.onBind();
		
		// Thuan
		getView().setUiHandlers(this);
	}
	
	
	@Override
	protected void onReset() {
		super.onReset();
		
		// Thuan
		getView().resetForm();
		//
		if (currentUser.isAdmin())
			loadClassList();
		if (currentUser.isProf())
			loadClassListByProf();
		if (currentUser.isStudent())
			loadStudentList();
	}

	
	/**/
	private void loadClassListByProf() {
		//
		loadClassList();
	}

	/**/
	private void loadClassList() {
		//
		getView().showAdminPanel(true);
		//
		ClasseRequestFactory rf = GWT.create(ClasseRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ClasseRequestContext rc = rf.classeRequest();
		rc.listAll().fire(new Receiver<List<ClasseProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<ClasseProxy> response) {
				getView().setClasseList(response);
			}
		});
	}

	
	//
	private void loadStudentList() {
		//
		getView().showAdminPanel(false);
		//
		BulletinRequestFactory rf = GWT.create(BulletinRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinRequestContext rc = rf.bulletinRequest();
		rc.listAllByEmail( currentUser.getUserEmail() ).fire(new Receiver<List<BulletinProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<BulletinProxy> response) {
				getView().setStudentListData(response);
			}
		});
	}

	
	/**/
	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		this.currentUser = event.getCurrentUser();
	}

	
	/**/
	@Override
	public void onStudentSelected() {
		// TODO
	}

	
	/**/
	@Override
	public void onClassChange(String classId) {
		// 
		BulletinRequestFactory rf = GWT.create(BulletinRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinRequestContext rc = rf.bulletinRequest();
		rc.listAllByClass( classId ).fire(new Receiver<List<BulletinProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<BulletinProxy> response) {
				getView().setStudentListData(response);
			}
		});
	}

	/**/
	@Override
	public void onBulletinChange(final String bulletinId) {
		//
		BulletinSubjectRequestFactory rf = GWT.create(BulletinSubjectRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinSubjectRequestContext rc = rf.bulletinSubjectRequest();
		rc.listAll( bulletinId ).fire(new Receiver<List<BulletinSubjectProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<BulletinSubjectProxy> response) {
				subjects.clear();
				subjects.addAll(response);
				getBranches(bulletinId);
			}
		});
	}

	
	/**/
	protected void getBranches(final String bulletinId) {
		//
		BulletinBrancheRequestFactory rf = GWT.create(BulletinBrancheRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinBrancheRequestContext rc = rf.bulletinBrancheRequest();
		rc.listAllByBulletin( bulletinId ).fire(new Receiver<List<BulletinBrancheProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<BulletinBrancheProxy> response) {
				drawBulletin(bulletinId, subjects, response);
			}
		});
	}
	
	
	/**/
	protected void drawBulletin(String bulletinId, final List<BulletinSubjectProxy> subjects, final List<BulletinBrancheProxy> branches){
		//
		BulletinRequestFactory rf = GWT.create(BulletinRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinRequestContext rc = rf.bulletinRequest();
		rc.getBulletin( bulletinId ).fire(new Receiver<BulletinProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(BulletinProxy response) {
				if (response.getProgrammeName().toLowerCase().contains("matu"))
					getView().drawGradeTableMatu(subjects, branches, currentUser.isStudent());
				else
					getView().drawGradeTableNormal(subjects, branches, currentUser.isStudent());
			}
		});
	}
}
