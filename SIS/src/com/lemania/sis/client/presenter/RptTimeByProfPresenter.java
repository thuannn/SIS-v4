package com.lemania.sis.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.lemania.sis.client.event.CoursesLoadedEvent;
import com.lemania.sis.client.event.CoursesLoadedEvent.CoursesLoadedHandler;
import com.lemania.sis.client.event.LoginAuthenticatedEvent;
import com.lemania.sis.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.sis.client.place.NameTokens;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.sis.client.CurrentUser;
import com.lemania.sis.client.LoggedInGatekeeper;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;
import com.lemania.sis.client.presenter.MainPagePresenter;
import com.lemania.sis.client.uihandler.ExtractDataUiHandler;
import com.lemania.sis.shared.CoursProxy;
import com.lemania.sis.shared.LogProxy;
import com.lemania.sis.shared.ProfessorProxy;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.LogRequestFactory;
import com.lemania.sis.shared.service.ProfessorRequestFactory;
import com.lemania.sis.shared.service.UserRequestFactory;
import com.lemania.sis.shared.service.LogRequestFactory.LogRequestContext;
import com.lemania.sis.shared.service.ProfessorRequestFactory.ProfessorRequestContext;
import com.lemania.sis.shared.service.UserRequestFactory.UserRequestContext;

public class RptTimeByProfPresenter 
		extends Presenter<RptTimeByProfPresenter.MyView, RptTimeByProfPresenter.MyProxy> 
		implements ExtractDataUiHandler, LoginAuthenticatedHandler, CoursesLoadedHandler {
		
	//
	private CurrentUser currentUser;
	private List<CoursProxy> courses;
	//	
	
	public interface MyView extends View, HasUiHandlers<ExtractDataUiHandler> {
		
		public void initializeTable();
		
		public void setLogData(List<LogProxy> logs);
		
		public void setDepartmentList(List<CoursProxy> depts);
		
		public void clearLogTable();
		public void clearProfList();
		
		public void setProfList(List<ProfessorProxy> profs);
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.extractdata)
	@UseGatekeeper(LoggedInGatekeeper.class)
	public interface MyProxy extends ProxyPlace<RptTimeByProfPresenter> {
	}

	@Inject
	public RptTimeByProfPresenter(final EventBus eventBus, final MyView view,
			final MyProxy proxy) {
		super(eventBus, view, proxy);
	}

	@Override
	protected void revealInParent() {
		RevealContentEvent.fire(this, MainPagePresenter.TYPE_SetMainContent, this);
	}

	/*
	 * 
	 * */
	@Override
	protected void onBind() {
		super.onBind();
		
		// Set this as UiHandler
		getView().setUiHandlers(this);
		
		// Prepare the table structure
		getView().initializeTable();
	}
	

	/*
	 * */
	@Override
	protected void onReset() {
		super.onReset();
		
		// Clear UI
		getView().clearLogTable();
		getView().clearProfList();
		
		// Thuan
		loadDepartmentList();
	}
	
	
	/*
	 * List of departments belong to this user
	 * On successful, load the list of professors accordingly
	 * */
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
				// getView().setDepartmentList(response);				
				// loadProfessorList(response);
				courses = response;
				getEventBus().fireEvent(new CoursesLoadedEvent());
			}
		} );
	}
	
	
	public void loadProfessorList(List<CoursProxy> courses){		
		ProfessorRequestFactory rf = GWT.create(ProfessorRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ProfessorRequestContext rc = rf.professorRequest();		
		rc.listAllByCourseList(courses).fire(new Receiver<List<ProfessorProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<ProfessorProxy> response) {
				getView().setProfList(response);
			}
		});
	}

	
	/*
	 * When user log in successfully, keep the current user info */
	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		this.currentUser = event.getCurrentUser();
	}

	
	/*
	 * OBSOLETE
	 * List of Professors need to be loaded at once for all departments
	 * */
	@Override
	public void onDepartmentSelected(String deptId) {
		ProfessorRequestFactory rf = GWT.create(ProfessorRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ProfessorRequestContext rc = rf.professorRequest();
		rc.listAllByCourse(deptId).fire(new Receiver<List<ProfessorProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<ProfessorProxy> response) {
				getView().setProfList(response);
			}
		});
	}

	/*
	 * Show time data
	 * */
	@Override
	public void onProfSelected(String profId) {
		LogRequestFactory rfl = GWT.create(LogRequestFactory.class);
		rfl.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		LogRequestContext rcl = rfl.logRequest();
		rcl.listAllFullDetailByProf(profId).fire(new Receiver<List<LogProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<LogProxy> response) {
				getView().setLogData(response);
			}
		});
	}

	@ProxyEvent
	@Override
	public void onCoursesLoaded(CoursesLoadedEvent event) {
		loadProfessorList(courses);		
	}
}
