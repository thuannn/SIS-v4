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
import com.lemania.sis.client.uihandler.FrmClasseListUiHandler;
import com.lemania.sis.shared.ClasseProxy;
import com.lemania.sis.shared.service.ClasseRequestFactory;
import com.lemania.sis.shared.service.ClasseRequestFactory.ClasseRequestContext;
import com.lemania.sis.shared.service.EventSourceRequestTransport;

public class FrmClasseListPresenter
		extends Presenter<FrmClasseListPresenter.MyView, FrmClasseListPresenter.MyProxy> 
		implements FrmClasseListUiHandler {

	public interface MyView extends View, HasUiHandlers<FrmClasseListUiHandler> {
		//
		void initializeTable();
		void setClasseListData(List<ClasseProxy> classeList);
		void refreshUpdatedClasse(ClasseProxy classe);
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.classlist)
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<FrmClasseListPresenter> {
	}

	@Inject
	public FrmClasseListPresenter(final EventBus eventBus, final MyView view, final MyProxy proxy) {
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
		super.onReset();
		
		// Thuan
		loadClasseList();
	}

	/*
	 * Load classe list when the form is opened.
	 * */
	private void loadClasseList() {
		// TODO
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
				getView().setClasseListData(response);
			}
		});
	}

	@Override
	public void updateClasse(ClasseProxy classe, String classeName, Boolean isActive) {
		//
		ClasseRequestFactory rf = GWT.create(ClasseRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ClasseRequestContext rc = rf.classeRequest();
		
		ClasseProxy classeForUpdate = rc.edit(classe);
		classeForUpdate.setClassName(classeName);
		classeForUpdate.setIsActive(isActive);
		
		rc.saveAndReturn(classeForUpdate).fire(new Receiver<ClasseProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(ClasseProxy response) {
				getView().refreshUpdatedClasse(response);
			}
		});
	}
}
