package com.lemania.sis.client.presenter;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.sis.client.AdminGateKeeper;
import com.lemania.sis.client.place.NameTokens;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.History;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;
import com.lemania.sis.client.presenter.MainPagePresenter;
import com.lemania.sis.client.uihandler.ProfessorAddUiHandler;
import com.lemania.sis.shared.ProfessorProxy;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.ProfessorRequestFactory;
import com.lemania.sis.shared.service.ProfessorRequestFactory.ProfessorRequestContext;

public class ProfsAddPresenter 
	extends Presenter<ProfsAddPresenter.MyView, ProfsAddPresenter.MyProxy> 
	implements ProfessorAddUiHandler {
	
	private ProfessorProxy prof;

	public interface MyView extends View, HasUiHandlers<ProfessorAddUiHandler> {
		void disableUiAfterAdd();
		void initializeUi();
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.profsadd)
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<ProfsAddPresenter> {
	}

	@Inject
	public ProfsAddPresenter(final EventBus eventBus, final MyView view,
			final MyProxy proxy) {
		super(eventBus, view, proxy);
		
		// Thuan
		getView().setUiHandlers(this);
	}

	@Override
	protected void revealInParent() {
		RevealContentEvent.fire(this, MainPagePresenter.TYPE_SetMainContent, this);
	}

	@Override
	protected void onBind() {
		super.onBind();
	}
	
	@Override
	protected void onReset(){
		getView().initializeUi();
	}

	@Override
	public void professorAddCancelled() {
		
		History.newItem(NameTokens.profs);
	}

	@Override
	public void professorAdd(String profName, Boolean profStatus) {
		
		if (profName.isEmpty()){
			Window.alert("Veuillez saissir le nom du professeur !");
			return;
		}
		
		ProfessorRequestFactory rf = GWT.create(ProfessorRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ProfessorRequestContext rc = rf.professorRequest();
		prof = rc.create(ProfessorProxy.class);
		prof.setProfName(profName);
		prof.setProfActive(profStatus);
		rc.save(prof).fire(new Receiver<Void>(){
			@Override
			public void onSuccess(Void response){
				// Disable button Add so that user cannot add a duplication
				getView().disableUiAfterAdd();
				
				// Let user choose the courses that the professor is in charge
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
	}
}
