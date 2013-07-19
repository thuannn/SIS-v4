package com.lemania.sis.client.presenter;

import java.util.List;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.sis.client.event.ActionCompletedEvent;
import com.lemania.sis.client.event.ActionCompletedEvent.ActionCompletedHandler;
import com.lemania.sis.client.event.LoginAuthenticatedEvent;
import com.lemania.sis.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.sis.client.event.UpdateTimeLogEvent;
import com.lemania.sis.client.event.UpdateTimeLogEvent.UpdateTimeLogHandler;
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
import com.lemania.sis.client.uihandler.TimeInputUiHandler;
import com.lemania.sis.shared.CoursProxy;
import com.lemania.sis.shared.EcoleProxy;
import com.lemania.sis.shared.LogProxy;
import com.lemania.sis.shared.ProfessorProxy;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.LogRequestFactory;
import com.lemania.sis.shared.service.UserRequestFactory;
import com.lemania.sis.shared.service.LogRequestFactory.LogRequestContext;
import com.lemania.sis.shared.service.ProfessorRequestFactory;
import com.lemania.sis.shared.service.ProfessorRequestFactory.ProfessorRequestContext;
import com.lemania.sis.shared.service.UserRequestFactory.UserRequestContext;
import com.lemania.sis.client.CurrentUser;
import com.lemania.sis.client.LoggedInGatekeeper;

public class TimeInputPresenter 
		extends Presenter<TimeInputPresenter.MyView, TimeInputPresenter.MyProxy> 
		implements TimeInputUiHandler, UpdateTimeLogHandler, LoginAuthenticatedHandler, ActionCompletedHandler {
	
//	private List<LogTypeProxy> logTypes;
	private CurrentUser currentUser;

	public interface MyView extends View, HasUiHandlers<TimeInputUiHandler> {
		
		void setProfData(List<ProfessorProxy> profs);
		void setLogData(List<LogProxy> logs, Boolean logUpdated);
		
		void setEcoleList(List<EcoleProxy> ecoles);
		void setCourseList(List<CoursProxy> cours);
		
		// Initialize values
		void initializeValues(int currentMonth, int currentYear, boolean isAdmin);
		void initializeUI(boolean isAdmin);
		void initializeProfTable();
		void initializeLogTable();
		
		// 
		void setNotification(String code);
		void clearLogTable();
		void clearProfTable();
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.timeinput)
	@UseGatekeeper(LoggedInGatekeeper.class)
	public interface MyProxy extends ProxyPlace<TimeInputPresenter> {
	}

	@Inject
	public TimeInputPresenter(final EventBus eventBus, final MyView view,
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
		
		/* Thuan */
		getView().setUiHandlers(this);
		
		// Initalize table structure
		getView().initializeProfTable();
		getView().initializeLogTable();
	}
	
	@Override
	protected void onReset(){
		// Initialize values
		getView().initializeValues(currentUser.getCurrentMonth(), currentUser.getCurrentYear(), currentUser.isAdmin());
		
	}
	


	public void loadProfessorsByCourse(String courseId, String year, String month) {
		ProfessorRequestFactory rf = GWT.create(ProfessorRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ProfessorRequestContext rc = rf.professorRequest();
		rc.listAllActiveByCourse(courseId, year, month).fire(new Receiver<List<ProfessorProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<ProfessorProxy> response) {
				getView().setProfData(response);
			}
		});
	}
	

	@Override
	public void loadCoursesBySchool(String ecoleId) {
		// empty
	}
	

	@ProxyEvent
	@Override
	public void onUpdateTimeLog(UpdateTimeLogEvent event) {		
		loadLogData(event.getProf(), event.getCourseId(), event.getYear(), event.getMonth());
	}
	
	
	public void loadLogData(final ProfessorProxy prof, final String courseId, final String year, final String month) {
		// Load log list
		LogRequestFactory rfl = GWT.create(LogRequestFactory.class);
		rfl.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		LogRequestContext rcl = rfl.logRequest();
		rcl.listAll(prof.getId().toString(), courseId, year, month).fire(new Receiver<List<LogProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<LogProxy> response) {
				getView().setLogData(response, false);
			}
		});
	}
	
	
	@Override
	public void professorSelected(ProfessorProxy prof, String courseId, String year, String month) {
		getEventBus().fireEvent(new UpdateTimeLogEvent(prof, courseId, year, month));
	}

	@Override
	public void updateLogTime(LogProxy log, String value) {
		LogRequestFactory rfl = GWT.create(LogRequestFactory.class);
		rfl.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		LogRequestContext rcl = rfl.logRequest();

		LogProxy logUpdate = rcl.edit(log);
		logUpdate.setHour(Double.parseDouble(value));
		
		rcl.save(logUpdate).fire(new Receiver<Void>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Void response) {
				getView().setNotification("log-updated");
			}
		});		
	}

	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		this.currentUser = event.getCurrentUser();
	}

	@Override
	public void updateLogMemo(LogProxy log, String value) {
		LogRequestFactory rfl = GWT.create(LogRequestFactory.class);
		rfl.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		LogRequestContext rcl = rfl.logRequest();

		LogProxy logUpdate = rcl.edit(log);
		logUpdate.setMemo(value);
		
		rcl.save(logUpdate).fire(new Receiver<Void>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Void response) {
				getView().setNotification("log-updated");
			}
		});
	}

	@Override
	public void updateLogTime(
			ProfessorProxy prof, String courseId, String year, String month,
			String coursTime, String coursNote,
			String maladieTime, String maladieNote, String ferieTime,
			String ferieNote, String priveTime, String priveNote,
			String supervisionTime, String supervisionNote, String fraisAmount,
			String fraisNote) {
		
		LogRequestFactory rfl = GWT.create(LogRequestFactory.class);
		rfl.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		LogRequestContext rcl = rfl.logRequest();
		
		// If no professor is beling selected, show message and quit
		if (prof == null){
			Window.alert("Merci de choisir un professeur à introduire les heures.");
			return;
		}
		
		rcl.batchUpdate(
				prof.getId().toString(), courseId, year, month, 
				coursTime, coursNote,
				maladieTime, maladieNote, 
				ferieTime, ferieNote, 
				priveTime, priveNote,
				supervisionTime, supervisionNote, 
				fraisAmount, fraisNote)
				.fire(new Receiver<List<LogProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<LogProxy> response) {
				getView().setLogData(response, true);
			}
		});
	}

	@ProxyEvent
	@Override
	public void onActionCompleted(ActionCompletedEvent event) {
		if (this.currentUser != null)
			getView().initializeUI(this.currentUser.isAdmin());
	}
}
