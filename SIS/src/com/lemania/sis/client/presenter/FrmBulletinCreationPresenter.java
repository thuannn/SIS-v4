package com.lemania.sis.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.lemania.sis.client.place.NameTokens;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.sis.client.AdminGateKeeper;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;
import com.lemania.sis.client.presenter.MainPagePresenter;
import com.lemania.sis.client.uihandler.FrmBulletinCreationUiHandler;
import com.lemania.sis.shared.ProfileProxy;
import com.lemania.sis.shared.StudentProxy;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.ProfileRequestFactory;
import com.lemania.sis.shared.service.StudentRequestFactory;
import com.lemania.sis.shared.service.ProfileRequestFactory.ProfileRequestContext;
import com.lemania.sis.shared.service.StudentRequestFactory.StudentRequestContext;

public class FrmBulletinCreationPresenter
		extends
		Presenter<FrmBulletinCreationPresenter.MyView, FrmBulletinCreationPresenter.MyProxy> 
		implements 
		FrmBulletinCreationUiHandler {

	public interface MyView extends View, HasUiHandlers<FrmBulletinCreationUiHandler> {
		//
		void resetForm();
		//
		void initializeTables();
		//
		void setStudentTableData(List<StudentProxy> students);
		//
		void setProfileListData(List<ProfileProxy> profiles);
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.bulletincreation)
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<FrmBulletinCreationPresenter> {
	}

	@Inject
	public FrmBulletinCreationPresenter(final EventBus eventBus, final MyView view,
			final MyProxy proxy) {
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
		getView().initializeTables();
	}
	
	@Override
	protected void onReset() {
		super.onReset();
		
		// Thuan
		getView().resetForm();
		//
		loadActiveStudentList();
		//
		loadActiveClassList();
		//
		loadActiveProfileList();
	}
	
	
	/**/
	private void loadActiveProfileList() {
		//
		ProfileRequestFactory rf = GWT.create(ProfileRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		
		ProfileRequestContext rc = rf.profileRequest();
		rc.listAllActive().fire(new Receiver<List<ProfileProxy>>(){
			@Override
			public void onSuccess(List<ProfileProxy> response){
				getView().setProfileListData( response );
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
		//		
	}

	
	/**/
	private void loadActiveClassList() {
		// TODO Auto-generated method stub
		
	}
	

	/*
	 * Load active student list
	 * */
	public void loadActiveStudentList(){
		StudentRequestContext rc = getStudentRequestContext();
		rc.listAllActive().fire(new Receiver<List<StudentProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<StudentProxy> response) {
				getView().setStudentTableData(response);
			}
		});
	}
	
	/* Get the request context for StudenProxy.
	 * Used in every function which call to Request Factory */
	public StudentRequestContext getStudentRequestContext() {
		StudentRequestFactory rf = GWT.create(StudentRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		return rf.studentRequest();
	}
}
