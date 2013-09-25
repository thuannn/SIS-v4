package com.lemania.sis.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.lemania.sis.client.event.PageAfterSelectEvent;
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
import com.lemania.sis.client.uihandler.SettingOptionsUiHandler;
import com.lemania.sis.shared.SettingOptionProxy;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.SettingOptionRequestFactory;
import com.lemania.sis.shared.service.SettingOptionRequestFactory.SettingOptionRequestContext;

public class SettingsPresenter 
	extends Presenter<SettingsPresenter.MyView, SettingsPresenter.MyProxy> 
	implements SettingOptionsUiHandler {

	public interface MyView extends View, HasUiHandlers<SettingOptionsUiHandler>{
		void setUpdateStatus(String text);
		void initializeInterface();
		void populateCurrentSettings(List<SettingOptionProxy> settingOptions);
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.settings)
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<SettingsPresenter> {
	}

	@Inject
	public SettingsPresenter(final EventBus eventBus, final MyView view,
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
		
		// Set this presenter as UiHandler
		getView().setUiHandlers(this);		
	}

	@Override
	protected void onReset() {
		//
		super.onReset();
		//
		this.getEventBus().fireEvent( new PageAfterSelectEvent(NameTokens.settings));
		
		// Retrieve the current settings
		getView().initializeInterface();
		retrieveCurrentSettings();
	}

	@Override
	public void updateSettingOptionDeadline(String dayNumber) {
		SettingOptionRequestFactory rf = GWT.create(SettingOptionRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		SettingOptionRequestContext rc = rf.settingOptionRequest();
		rc.save("DEADLINE", dayNumber).fire(new Receiver<Void>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Void response) {
				updateSuccessNotice();
			}
		});
	}
	
	private void retrieveCurrentSettings(){
		SettingOptionRequestFactory rf = GWT.create(SettingOptionRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		SettingOptionRequestContext rc = rf.settingOptionRequest();
		rc.listAll().fire(new Receiver<List<SettingOptionProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<SettingOptionProxy> response) {
				getView().populateCurrentSettings(response);
			}
		});
	}

	
	/*
	 * */
	@Override
	public void updateSettingOptionManualBlock(Boolean blnBlock) {
		SettingOptionRequestFactory rf = GWT.create(SettingOptionRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		SettingOptionRequestContext rc = rf.settingOptionRequest();
		rc.save("BLOCK", blnBlock.toString()).fire(new Receiver<Void>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Void response) {
				updateSuccessNotice();
			}
		});
	}

	
	/*
	 * */
	protected void updateSuccessNotice() {
		getView().setUpdateStatus("Setting saved.");
	}

	
	/*
	 * */
	@Override
	public void updateCurrentEcole(String ecoleCode) {
		//
		SettingOptionRequestFactory rf = GWT.create(SettingOptionRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		SettingOptionRequestContext rc = rf.settingOptionRequest();
		rc.save("ECOLE", ecoleCode ).fire(new Receiver<Void>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Void response) {
				updateSuccessNotice();
			}
		});
	}
}
