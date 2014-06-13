package com.lemania.sis.client.form.masteragenda;

import com.google.gwt.event.shared.GwtEvent.Type;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ContentSlot;
import com.gwtplatform.mvp.client.annotations.ProxyStandard;
import com.gwtplatform.mvp.client.proxy.Proxy;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.gwtplatform.mvp.client.proxy.RevealContentHandler;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.proxy.PlaceRequest;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.lemania.sis.client.presenter.MainPagePresenter;
import com.lemania.sis.client.place.NameTokens;

public class MasterAgendaPresenter extends
		Presenter<MasterAgendaPresenter.MyView, MasterAgendaPresenter.MyProxy>
		implements MasterAgendaUiHandlers {
	
	interface MyView extends View, HasUiHandlers<MasterAgendaUiHandlers> {
		//
		void drawTable();
	}

	@ContentSlot
	public static final Type<RevealContentHandler<?>> SLOT_MasterAgenda = new Type<RevealContentHandler<?>>();

	@NameToken(NameTokens.masteragenda)
	@ProxyCodeSplit
	public interface MyProxy extends ProxyPlace<MasterAgendaPresenter> {
	}

	@Inject
	public MasterAgendaPresenter(EventBus eventBus, MyView view, MyProxy proxy) {
		super(eventBus, view, proxy, MainPagePresenter.TYPE_SetMainContent);

		getView().setUiHandlers(this);
	}

	protected void onBind() {
		super.onBind();
		//
		getView().drawTable();
	}

	protected void onReset() {
		super.onReset();
	}

}
