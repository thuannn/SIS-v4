package com.lemania.sis.client.form.parentmgt;

import com.google.gwt.event.shared.GwtEvent.Type;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ContentSlot;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.gwtplatform.mvp.client.proxy.RevealContentHandler;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.lemania.sis.client.event.PageAfterSelectEvent;
import com.lemania.sis.client.form.mainpage.MainPagePresenter;
import com.lemania.sis.client.place.NameTokens;
import com.lemania.sis.client.popup.parentprofile.ParentProfilePresenter;

public class ParentManagementPresenter
		extends
		Presenter<ParentManagementPresenter.MyView, ParentManagementPresenter.MyProxy>
		implements ParentManagementUiHandlers {
	interface MyView extends View,
			HasUiHandlers<ParentManagementUiHandlers> {
	}
	
	//
	private ParentProfilePresenter popupParentProfile;
	

	@ContentSlot
	public static final Type<RevealContentHandler<?>> SLOT_ParentManagementPresenter = new Type<RevealContentHandler<?>>();

	@NameToken(NameTokens.parentmgt)
	@ProxyCodeSplit
	public interface MyProxy extends
			ProxyPlace<ParentManagementPresenter> {
	}

	@Inject
	public ParentManagementPresenter(EventBus eventBus, MyView view,
			MyProxy proxy, ParentProfilePresenter pp ) {
		super(eventBus, view, proxy, MainPagePresenter.TYPE_SetMainContent);

		getView().setUiHandlers(this);

		this.popupParentProfile = pp;
	}

	protected void onBind() {
		super.onBind();
	}

	protected void onReset() {
		super.onReset();
		//
		this.getEventBus().fireEvent( new PageAfterSelectEvent(NameTokens.parentmgt) );
	}

	
	/*
	 * */
	@Override
	public void showParentProfilePopup() {
		//
		addToPopupSlot(popupParentProfile, true);
	}

}
