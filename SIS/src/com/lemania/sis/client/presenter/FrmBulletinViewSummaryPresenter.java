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
import com.lemania.sis.client.uihandler.FrmBulletinViewSummaryUiHandler;
import com.lemania.sis.shared.BulletinProxy;
import com.lemania.sis.shared.BulletinSubjectProxy;
import com.lemania.sis.shared.ClasseProxy;
import com.lemania.sis.shared.service.BulletinRequestFactory;
import com.lemania.sis.shared.service.BulletinSubjectRequestFactory;
import com.lemania.sis.shared.service.ClasseRequestFactory;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.BulletinRequestFactory.BulletinRequestContext;
import com.lemania.sis.shared.service.BulletinSubjectRequestFactory.BulletinSubjectRequestContext;
import com.lemania.sis.shared.service.ClasseRequestFactory.ClasseRequestContext;

public class FrmBulletinViewSummaryPresenter
		extends
		Presenter<FrmBulletinViewSummaryPresenter.MyView, FrmBulletinViewSummaryPresenter.MyProxy>
		implements FrmBulletinViewSummaryUiHandler {

	public interface MyView extends View, HasUiHandlers<FrmBulletinViewSummaryUiHandler> {
		//
		void resetForm();
		//
		void setClasseList(List<ClasseProxy> classes);
		//
		void setStudentListData(List<BulletinProxy> bulletins);
		//
		void drawBulletinSubjectList( List<BulletinSubjectProxy> subjects );
		//
		void saveRemarqueDirection( BulletinProxy bp );
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.bulletin)
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<FrmBulletinViewSummaryPresenter> {
	}

	@Inject
	public FrmBulletinViewSummaryPresenter(final EventBus eventBus,
			final MyView view, final MyProxy proxy) {
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
		//
		this.getEventBus().fireEvent( new PageAfterSelectEvent(NameTokens.bulletin));
		// Thuan
		getView().resetForm();
		loadClassList();
	}

	
	/**/
	private void loadClassList() {
		//
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
				getView().setClasseList(response);
			}
		});
	}

	
	/**/
	@Override
	public void onClassChange(String classId) {
		// 
		BulletinRequestFactory rf = GWT.create(BulletinRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinRequestContext rc = rf.bulletinRequest();
		rc.listAllActiveByClass( classId ).fire(new Receiver<List<BulletinProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<BulletinProxy> response) {
				getView().setStudentListData(response);
			}
		});
	}

	
	/**/
	@Override
	public void onBulletinChange(String bulletinId) {
		//
		BulletinSubjectRequestFactory rf = GWT.create(BulletinSubjectRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinSubjectRequestContext rc = rf.bulletinSubjectRequest();
		rc.listAll( bulletinId ).fire(new Receiver<List<BulletinSubjectProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<BulletinSubjectProxy> response) {
				getView().drawBulletinSubjectList(response);
			}
		});
	}

	
	/*
	 * */
	@Override
	public void saveBulletinRemarques(String bulletinId, final String remarqueDirection) {
		//
		BulletinRequestFactory rf = GWT.create(BulletinRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinRequestContext rc = rf.bulletinRequest();
		rc.saveBulletinRemarqueDirection( bulletinId, remarqueDirection ).fire(new Receiver<BulletinProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(BulletinProxy response) {
				getView().saveRemarqueDirection( response );
			}
		});
	}
}
