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
import com.lemania.sis.client.uihandler.FrmBrancheListUiHandler;
import com.lemania.sis.shared.BrancheProxy;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.BrancheRequestFactory;
import com.lemania.sis.shared.service.BrancheRequestFactory.BrancheRequestContext;

public class FrmBrancheListPresenter
		extends Presenter<FrmBrancheListPresenter.MyView, FrmBrancheListPresenter.MyProxy>
		implements FrmBrancheListUiHandler {

	public interface MyView extends View, HasUiHandlers<FrmBrancheListUiHandler> {
		//
		public void initializeBrancheTable();
		public void setBrancheTableData(List<BrancheProxy> branches);
		public void refreshUpdatedBranche( BrancheProxy branche );
	}
	

	@ProxyCodeSplit
	@NameToken(NameTokens.branchelist)
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<FrmBrancheListPresenter> {
	}
	

	@Inject
	public FrmBrancheListPresenter(final EventBus eventBus, final MyView view,
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
		getView().initializeBrancheTable();
	}
	
	
	@Override
	protected void onReset() {
		//
		super.onReset();
		//
		this.getEventBus().fireEvent( new PageAfterSelectEvent(NameTokens.branchelist));
		// Thuan
		loadBrancheList();
	}
	
	
	/* 
	 * Load branche list when form is opened 
	 * */
	public void loadBrancheList(){
		BrancheRequestContext rc = getBrancheRequestContext();
		rc.listAll().fire(new Receiver<List<BrancheProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<BrancheProxy> response) {
				getView().setBrancheTableData(response);
			}
		});
	}
	
	
	/* Get the request context for BrancheRequestFactory
	 * Used in every function which call to Request Factory */
	public BrancheRequestContext getBrancheRequestContext() {
		BrancheRequestFactory rf = GWT.create(BrancheRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		return rf.brancheRequest();
	}


	// Update a branche, then update the datagrid
	@Override
	public void updateBranche(BrancheProxy branche, String brancheName, String brancheCoef, Boolean isActive) {
		// Validate data
		if ( brancheName.isEmpty() ){
			Window.alert( NotificationTypes.invalid_input + " - Nom de la branche.");
			return;
		}
		if ( FieldValidation.isNumeric( brancheCoef) ) {
			if ( Double.parseDouble(brancheCoef) < 0 ) {
				Window.alert( NotificationTypes.invalid_input + " - Coefficient");
				return;
			}
		} else {
			Window.alert( NotificationTypes.invalid_input + " - Coefficient");
			return;
		}
		// Update
		BrancheRequestContext rc = getBrancheRequestContext();
		branche = rc.edit(branche);
		branche.setBrancheName(brancheName);
		branche.setDefaultCoef(Double.parseDouble(brancheCoef));
		branche.setIsActive(isActive);
		
		rc.saveAndReturn(branche).fire(new Receiver<BrancheProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(BrancheProxy response) {
				getView().refreshUpdatedBranche(response);
			}
		});
		//
	}
}
