package com.lemania.sis.client.form.classroom;

import com.google.gwt.event.shared.GwtEvent.Type;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ContentSlot;
import com.gwtplatform.mvp.client.annotations.ProxyStandard;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.gwtplatform.mvp.client.proxy.Proxy;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.gwtplatform.mvp.client.proxy.RevealContentHandler;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.proxy.PlaceRequest;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.lemania.sis.client.AdminGateKeeper;
import com.lemania.sis.client.presenter.MainPagePresenter;
import com.lemania.sis.client.place.NameTokens;

public class ClassroomPresenter extends
		Presenter<ClassroomPresenter.MyView, ClassroomPresenter.MyProxy>
		implements ClassroomUiHandlers {
	interface MyView extends View, HasUiHandlers<ClassroomUiHandlers> {
	}

	@ContentSlot
	public static final Type<RevealContentHandler<?>> SLOT_Classroom = new Type<RevealContentHandler<?>>();

	@NameToken(NameTokens.classroom)
	@UseGatekeeper(AdminGateKeeper.class)
	@ProxyCodeSplit
	public interface MyProxy extends ProxyPlace<ClassroomPresenter> {
	}

	@Inject
	public ClassroomPresenter(EventBus eventBus, MyView view, MyProxy proxy) {
		super(eventBus, view, proxy, MainPagePresenter.TYPE_SetMainContent);

		getView().setUiHandlers(this);
	}

	protected void onBind() {
		super.onBind();
	}

	protected void onReset() {
		super.onReset();
	}

}
