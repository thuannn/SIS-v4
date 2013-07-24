package com.lemania.sis.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.sis.client.CurrentUser;
import com.lemania.sis.client.LoggedInGatekeeper;
import com.lemania.sis.client.event.LoginAuthenticatedEvent;
import com.lemania.sis.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.sis.client.place.NameTokens;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;
import com.lemania.sis.client.presenter.MainPagePresenter;
import com.lemania.sis.client.uihandler.ProfessorListUiHandler;
import com.lemania.sis.shared.ProfessorProxy;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.ProfessorRequestFactory;
import com.lemania.sis.shared.service.ProfessorRequestFactory.ProfessorRequestContext;

public class ProfsPresenter 
	extends Presenter<ProfsPresenter.MyView, ProfsPresenter.MyProxy> 
	implements ProfessorListUiHandler, LoginAuthenticatedHandler {
	
	
	// keep the current logged in user
	private CurrentUser currentUser;

	
	public interface MyView extends View, HasUiHandlers<ProfessorListUiHandler> {
		void initializeTable();
		
		void setData(List<ProfessorProxy> profs);
		
		void refreshTable(ProfessorProxy prof);
	}

	
	@ProxyCodeSplit
	@NameToken(NameTokens.profs)
	@UseGatekeeper(LoggedInGatekeeper.class)
	public interface MyProxy extends ProxyPlace<ProfsPresenter> {
	}

	
	@Inject
	public ProfsPresenter(final EventBus eventBus, final MyView view, final MyProxy proxy) {
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
		getView().initializeTable();
	}
	
	
	@Override
	protected void onReset(){
		getProfessorsList();
	}
	
	
	private void getProfessorsList() {
		
		ProfessorRequestFactory rf = GWT.create(ProfessorRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ProfessorRequestContext rc = rf.professorRequest();
		rc.listAll().fire(new Receiver<List<ProfessorProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<ProfessorProxy> response) {
				getView().setData(response);
			}
		});
	}

	
	@Override
	public void updateProfessorStatus(ProfessorProxy prof, Boolean status) {
		
		if (!currentUser.isAdmin()) {
			Window.alert("Veuillez vous connecter avec le code d'accès de l'administrateur. La modification n'a pas été effectuée.");
			return;
		}
		
		ProfessorRequestFactory rf = GWT.create(ProfessorRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ProfessorRequestContext rc = rf.professorRequest();
		ProfessorProxy profForUpdate = rc.edit(prof);
		profForUpdate.setProfActive(status);
		rc.saveAndReturn(profForUpdate).fire(new Receiver<ProfessorProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(ProfessorProxy response) {
				getView().refreshTable(response);
			}
		});	
	}

	
	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		currentUser = event.getCurrentUser();
	}

	
	@Override
	public void updateProfessorName(ProfessorProxy prof, String name) {
		
		if (!currentUser.isAdmin()) {
			Window.alert("Veuillez vous connecter avec le code d'accès de l'administrateur. La modification n'a pas été effectuée.");
			return;
		}
		
		ProfessorRequestFactory rf = GWT.create(ProfessorRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ProfessorRequestContext rc = rf.professorRequest();
		ProfessorProxy profForUpdate = rc.edit(prof);
		profForUpdate.setProfName(name);
		rc.saveAndReturn(profForUpdate).fire(new Receiver<ProfessorProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(ProfessorProxy response) {
				getView().refreshTable(response);
			}
		});
	}


	@Override
	public void professorSelected(ProfessorProxy prof) {
		// TODO Auto-generated method stub
		
	}
}
