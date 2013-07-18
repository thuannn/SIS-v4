package com.lemania.sis.client.presenter;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.sis.client.AdminGateKeeper;
import com.lemania.sis.client.event.LogTypeAddedEvent;
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
import com.lemania.sis.client.uihandler.HourAddUiHandler;
import com.lemania.sis.shared.LogTypeProxy;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.LogTypeRequestFactory;
import com.lemania.sis.shared.service.LogTypeRequestFactory.LogTypeRequestContext;

public class LogTypesAddPresenter 
		extends Presenter<LogTypesAddPresenter.MyView, LogTypesAddPresenter.MyProxy>
		implements HourAddUiHandler {

	public interface MyView extends View, HasUiHandlers<HourAddUiHandler> {
	}
	
	private LogTypeProxy hp;

	@ProxyCodeSplit
	@NameToken(NameTokens.typesadd)
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<LogTypesAddPresenter> {
	}

	@Inject
	public LogTypesAddPresenter(final EventBus eventBus, final MyView view,
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
	public void hourAdd(String nom, Boolean active) {
		if (nom.isEmpty()){
			Window.alert("Veuillez sassir le nom de type d'heure.");
			return;
		}
		
		LogTypeRequestFactory rf = GWT.create(LogTypeRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		LogTypeRequestContext rc = rf.typeRequest();
		hp = rc.create(LogTypeProxy.class);
		hp.setLogTypeName(nom);
		hp.setLogTypeActive(active);
		rc.save(hp).fire(new Receiver<Void>(){
			@Override
			public void onSuccess(Void response){
				returnToHourListSuccess();
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
	}
	
	private void returnToHourListSuccess(){
		getEventBus().fireEvent(new LogTypeAddedEvent(hp));
	}

	@Override
	public void hourAddCancel() {
		History.newItem(NameTokens.types);		
	}
}
