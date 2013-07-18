package com.lemania.sis.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.sis.client.AdminGateKeeper;
import com.lemania.sis.client.event.LogTypeAddedEvent;
import com.lemania.sis.client.event.LogTypeAddedEvent.LogTypeAddedHandler;
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
import com.lemania.sis.client.uihandler.LogTypeListUiHandler;
import com.lemania.sis.shared.LogTypeProxy;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.LogTypeRequestFactory;
import com.lemania.sis.shared.service.LogTypeRequestFactory.LogTypeRequestContext;

public class LogTypesPresenter 
		extends Presenter<LogTypesPresenter.MyView, LogTypesPresenter.MyProxy> 
		implements LogTypeAddedHandler, LogTypeListUiHandler {

	public interface MyView extends View, HasUiHandlers<LogTypeListUiHandler> {
		void initializeTable();
		void addHour(LogTypeProxy hour);
		void refreshTable(LogTypeProxy updatedHour);
		void setData(List<LogTypeProxy> hours);
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.types)
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<LogTypesPresenter> {
	}

	@Inject
	public LogTypesPresenter(final EventBus eventBus, final MyView view,
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
		
		// Thuan
		getView().initializeTable();
	}
	
	@Override
	protected void onReset(){
		// Thuan
		initializeData();
	}
	
	private void initializeData(){
		getHourList();
	}
	
	private void getHourList() {
		LogTypeRequestFactory rf = GWT.create(LogTypeRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		LogTypeRequestContext rc = rf.typeRequest();
		rc.listAll().fire(new Receiver<List<LogTypeProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<LogTypeProxy> response) {
				getView().setData(response);
			}
		});
	}

	@ProxyEvent
	@Override
	public void onHourAdded(LogTypeAddedEvent event) {
		History.newItem(NameTokens.types, true);
	}

	@Override
	public void updateLogTypeStatus(LogTypeProxy hp, Boolean status) {
		LogTypeRequestFactory rf = GWT.create(LogTypeRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		LogTypeRequestContext rc = rf.typeRequest();
		LogTypeProxy hourForUpdate = rc.edit(hp);
		hourForUpdate.setLogTypeActive(status);
		rc.saveAndReturn(hourForUpdate).fire(new Receiver<LogTypeProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(LogTypeProxy response) {
				getView().refreshTable(response);
			}
		});
	}

	@Override
	public void updateLogTypeOrder(LogTypeProxy hp, String orderNumber) {
		LogTypeRequestFactory rf = GWT.create(LogTypeRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		LogTypeRequestContext rc = rf.typeRequest();
		LogTypeProxy hourForUpdate = rc.edit(hp);
		try {
			hourForUpdate.setOrderNumber(Integer.parseInt(orderNumber));
			rc.saveAndReturn(hourForUpdate).fire(new Receiver<LogTypeProxy>(){
				@Override
				public void onFailure(ServerFailure error){
					Window.alert(error.getMessage());
				}
				@Override
				public void onSuccess(LogTypeProxy response) {
					getView().refreshTable(response);
				}
			});
		} catch (Exception e) {
			Window.alert(e.getMessage());
		}
		
	}

	@Override
	public void updateLogTypeName(LogTypeProxy hp, String typeName) {
		LogTypeRequestFactory rf = GWT.create(LogTypeRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		LogTypeRequestContext rc = rf.typeRequest();
		LogTypeProxy hourForUpdate = rc.edit(hp);
		hourForUpdate.setLogTypeName(typeName);
		rc.saveAndReturn(hourForUpdate).fire(new Receiver<LogTypeProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(LogTypeProxy response) {
				getView().refreshTable(response);
			}
		});
	}
}
