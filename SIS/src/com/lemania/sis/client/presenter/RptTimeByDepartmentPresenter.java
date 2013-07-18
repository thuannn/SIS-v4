package com.lemania.sis.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.lemania.sis.client.event.LoginAuthenticatedEvent;
import com.lemania.sis.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.sis.client.place.NameTokens;
import com.lemania.sis.client.uihandler.RptTimeByDepartmentUiHandler;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.sis.client.CurrentUser;
import com.lemania.sis.client.LoggedInGatekeeper;
import com.lemania.sis.shared.CoursProxy;
import com.lemania.sis.shared.ProfessorProxy;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.ProfessorRequestFactory;
import com.lemania.sis.shared.service.UserRequestFactory;
import com.lemania.sis.shared.service.ProfessorRequestFactory.ProfessorRequestContext;
import com.lemania.sis.shared.service.UserRequestFactory.UserRequestContext;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;

public class RptTimeByDepartmentPresenter
		extends Presenter<RptTimeByDepartmentPresenter.MyView, RptTimeByDepartmentPresenter.MyProxy>
		implements RptTimeByDepartmentUiHandler, LoginAuthenticatedHandler {
	
	private CurrentUser currentUser;

	public interface MyView extends View, HasUiHandlers<RptTimeByDepartmentUiHandler> {
		public void initializeTable();
		public void clearLogTable();
		
		public void setDepartmentList(List<CoursProxy> depts);
		public void setData(List<ProfessorProxy> profs);
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.rptbydept)
	@UseGatekeeper(LoggedInGatekeeper.class)
	public interface MyProxy extends ProxyPlace<RptTimeByDepartmentPresenter> {
	}

	@Inject
	public RptTimeByDepartmentPresenter(final EventBus eventBus, final MyView view,
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
		
		// Set this as UiHandler
		getView().setUiHandlers(this);
		
		// Prepare the table structure
		getView().initializeTable();
	}
	
	@Override
	protected void onReset(){
		super.onReset();
		
		// Clear UI
		getView().clearLogTable();
		
		// Thuan
		loadDepartmentList();
		
		
	}
	
	public void loadDepartmentList(){
		UserRequestFactory rf = GWT.create(UserRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		UserRequestContext rc = rf.userRequest();
		rc.getDepartments(currentUser.getUserId()).fire( new Receiver<List<CoursProxy>>(){
			@Override
			public void onFailure(ServerFailure error) {
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess( List<CoursProxy> response ) {
				getView().setDepartmentList(response);
			}
		} );
	}

	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		this.currentUser = event.getCurrentUser();	
	}

	@Override
	public void onDepartmentSelected(String deptId) {
		ProfessorRequestFactory rf = GWT.create(ProfessorRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ProfessorRequestContext rc = rf.professorRequest();
		rc.listAllByCourseWithTime(deptId, currentUser.getCurrentYear()).fire(new Receiver<List<ProfessorProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<ProfessorProxy> response) {
				getView().setData(response);
			}
		});
	}
}
