package com.lemania.sis.client.presenter;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.lemania.sis.client.place.NameTokens;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.sis.client.AdminGateKeeper;
import com.lemania.sis.client.FieldValidation;
import com.lemania.sis.client.NotificationTypes;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;
import com.lemania.sis.client.presenter.MainPagePresenter;
import com.lemania.sis.client.uihandler.FrmSubjectAddUiHandler;
import com.lemania.sis.shared.SubjectProxy;
import com.lemania.sis.shared.service.SubjectRequestFactory;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.SubjectRequestFactory.SubjectRequestContext;

public class FrmSubjectAddPresenter
		extends Presenter<FrmSubjectAddPresenter.MyView, FrmSubjectAddPresenter.MyProxy> 
		implements FrmSubjectAddUiHandler {

	public interface MyView extends View, HasUiHandlers<FrmSubjectAddUiHandler> {
		void resetForm();
		void showStatus(String msg);
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.subjectadd)
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<FrmSubjectAddPresenter> {
	}

	@Inject
	public FrmSubjectAddPresenter(final EventBus eventBus, final MyView view,
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
	protected void onReset(){
		super.onReset();
		
		// Thuan
		getView().resetForm();
	}

	@Override
	public void addNewSubject(String subjectName, String defaultCoef, Boolean isActive) {
		// Validate data
		if ( subjectName.isEmpty() ){
			Window.alert( NotificationTypes.invalid_input + " - Nom de la matière.");
			return;
		}
		if ( FieldValidation.isNumeric( defaultCoef) ) {
			if ( Double.parseDouble( defaultCoef ) < 0 ) {
				Window.alert( NotificationTypes.invalid_input + " - Coefficient");
				return;
			}
		} else {
			Window.alert( NotificationTypes.invalid_input + " - Coefficient");
			return;
		}
		// Save
		SubjectRequestFactory rf = GWT.create(SubjectRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		SubjectRequestContext rc = rf.subjectRequest();
		
		SubjectProxy ep = rc.create(SubjectProxy.class);
		ep.setSubjectName( subjectName );
		ep.setDefaultCoef( Double.parseDouble( defaultCoef ) );
		ep.setIsActive( isActive );
		rc.save(ep).fire( new Receiver<Void>() {
			@Override
			public void onSuccess(Void response){
				getView().showStatus( NotificationTypes.subject_create_good );
				getView().resetForm();
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		} );
		//
	}
}
