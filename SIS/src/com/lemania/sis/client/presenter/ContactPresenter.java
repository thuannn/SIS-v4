package com.lemania.sis.client.presenter;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.lemania.sis.client.event.PageAfterSelectEvent;
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
import com.lemania.sis.client.uihandler.ContactUiHandler;
import com.lemania.sis.shared.service.ContactRequestFactory;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.ContactRequestFactory.ContactRequestContext;


public class ContactPresenter extends
		Presenter<ContactPresenter.MyView, ContactPresenter.MyProxy> 
		implements ContactUiHandler {

	public interface MyView extends View, HasUiHandlers<ContactUiHandler> {
		//
		void resetForm();
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.contact)
	public interface MyProxy extends ProxyPlace<ContactPresenter> {
	}

	@Inject
	public ContactPresenter(final EventBus eventBus, final MyView view,
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
	}
	
	@Override
	protected void onReset() {
		super.onReset();
		
		//
		this.getEventBus().fireEvent( new PageAfterSelectEvent(NameTokens.contact));
	}

	@Override
	public void sendMessage(String lastName, String firstName, String message) {
		//
		ContactRequestFactory rf = GWT.create(ContactRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ContactRequestContext rc = rf.contactRequest();
		rc.sendEmail(lastName, firstName, message).fire(new Receiver<Void>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Void response) {
				getView().resetForm();
			}
		});
	}
}