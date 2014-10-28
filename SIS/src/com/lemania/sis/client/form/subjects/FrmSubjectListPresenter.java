package com.lemania.sis.client.form.subjects;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.lemania.sis.client.UI.FieldValidation;
import com.lemania.sis.client.event.LoginAuthenticatedEvent;
import com.lemania.sis.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.sis.client.form.mainpage.MainPagePresenter;
import com.lemania.sis.client.place.NameTokens;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.sis.client.AdminGateKeeper;
import com.lemania.sis.client.CurrentUser;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;
import com.lemania.sis.client.values.NotificationValues;
import com.lemania.sis.shared.SubjectProxy;
import com.lemania.sis.shared.service.SubjectRequestFactory;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.SubjectRequestFactory.SubjectRequestContext;

public class FrmSubjectListPresenter 
	extends	Presenter<FrmSubjectListPresenter.MyView, FrmSubjectListPresenter.MyProxy> 
	implements FrmSubjectListUiHandler, LoginAuthenticatedHandler {
	
	//
	private CurrentUser currentUser;
	

	public interface MyView extends View, HasUiHandlers<FrmSubjectListUiHandler> {
		void initializeSubjectTable();
		void setSubjectListData(List<SubjectProxy> subjectList);
		void refreshUpdatedSubject(SubjectProxy subject);
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.subjectlist)
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<FrmSubjectListPresenter> {
	}

	@Inject
	public FrmSubjectListPresenter(final EventBus eventBus, final MyView view, final MyProxy proxy) {
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
		getView().initializeSubjectTable();
	}
	
	@Override
	protected void onReset() {
		//
		super.onReset();
		// Thuan
		loadSubjectList();
	}

	
	/*
	 * 
	 * */
	@Override
	public void updateSubject(SubjectProxy subject, String subjectName, String subjectCoef, Boolean isActive) {
		// Validate data
		if ( subjectName.isEmpty() ){
			Window.alert( NotificationValues.invalid_input + " - Nom de la matière.");
			return;
		}
		if ( FieldValidation.isNumeric( subjectCoef) ) {
			if ( Double.parseDouble(subjectCoef) < 0 ) {
				Window.alert( NotificationValues.invalid_input + " - Coefficient");
				return;
			}
		} else {
			Window.alert( NotificationValues.invalid_input + " - Coefficient");
			return;
		}
		// Update
		SubjectRequestContext rc = getSubjectRequestContext();
		subject = rc.edit(subject);
		subject.setSubjectName(subjectName);
		subject.setDefaultCoef(Double.parseDouble(subjectCoef));
		subject.setIsActive(isActive);
		
		rc.saveAndReturn(subject).fire(new Receiver<SubjectProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(SubjectProxy response) {
				getView().refreshUpdatedSubject(response);
			}
		});
		//
	}
	
	/*
	 * 
	 * */
	public void loadSubjectList(){
		SubjectRequestContext rc = getSubjectRequestContext();
		rc.listAll().fire(new Receiver<List<SubjectProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<SubjectProxy> response) {
				getView().setSubjectListData(response);
			}
		});
	}
	
	
	/* Get the request context for SubjectRequestFactory
	 * Used in every function which call to Request Factory */
	public SubjectRequestContext getSubjectRequestContext() {
		SubjectRequestFactory rf = GWT.create(SubjectRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		return rf.subjectRequest();
	}

	
	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		//
		this.currentUser = event.getCurrentUser();
	}
}
