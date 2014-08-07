package com.lemania.sis.client.form.absencemgt;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
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
import com.lemania.sis.client.event.PageAfterSelectEvent;
import com.lemania.sis.client.form.mainpage.MainPagePresenter;
import com.lemania.sis.shared.absenceitem.AbsenceItemProxy;
import com.lemania.sis.shared.absenceitem.AbsenceItemRequestFactory;
import com.lemania.sis.shared.absenceitem.AbsenceItemRequestFactory.AbsenceItemRequestContext;
import com.lemania.sis.shared.motifabsence.MotifAbsenceProxy;
import com.lemania.sis.shared.motifabsence.MotifAbsenceRequestFactory;
import com.lemania.sis.shared.motifabsence.MotifAbsenceRequestFactory.MotifAbsenceRequestContext;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.student.StudentProxy;
import com.lemania.sis.shared.student.StudentRequestFactory;
import com.lemania.sis.shared.student.StudentRequestFactory.StudentRequestContext;

public class AbsenceManagementPresenter
		extends Presenter<AbsenceManagementPresenter.MyView, AbsenceManagementPresenter.MyProxy>
		implements AbsenceManagementUiHandlers {

	public interface MyView extends View, HasUiHandlers<AbsenceManagementUiHandlers> {
		//
		public void setStudentTableData( List<StudentProxy> studentList );
		//
		public void setAbsenceItemTableData( List<AbsenceItemProxy> absenceItems );
		//
		void setMotifListData(List<MotifAbsenceProxy> motifs);
		//
		void initializeUI();
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.absencesmgt)
	@UseGatekeeper(AdminGateKeeper.class)
	
	public interface MyProxy extends ProxyPlace<AbsenceManagementPresenter> {
	}

	@Inject
	public AbsenceManagementPresenter(final EventBus eventBus, final MyView view,
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
		//
		getView().setUiHandlers(this);
		//
		getView().initializeUI();
	}

	@Override
	protected void onReset() {
		super.onReset();
		// Thuan
		loadStudentList();
		//
		loadMotifs();
		//
		this.getEventBus().fireEvent( new PageAfterSelectEvent( NameTokens.absencesmgt ));
	}
	
	
	/*
	 * */
	private void loadMotifs() {
		//
		MotifAbsenceRequestFactory rf = GWT.create(MotifAbsenceRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		MotifAbsenceRequestContext rc = rf.motifAbsenceRequestContext();
		rc.listAll().fire(new Receiver<List<MotifAbsenceProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<MotifAbsenceProxy> response) {
				getView().setMotifListData(response);
			}
		});
	}
	

	/* 
	 * Load student list when form is opened 
	 * */
	private void loadStudentList(){
		StudentRequestContext rc = getStudentRequestContext();
		rc.listAllActive().fire(new Receiver<List<StudentProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<StudentProxy> response) {
				getView().setStudentTableData(response);
			}
		});
	}
	
	
	/* Get the request context for StudenProxy.
	 * Used in every function which call to Request Factory */
	public StudentRequestContext getStudentRequestContext() {
		StudentRequestFactory rf = GWT.create(StudentRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		return rf.studentRequest();
	}

	
	/*
	 * When a student is selected, load his absences history
	 * */
	@Override
	public void onStudentSelected(StudentProxy student) {
		// 
		AbsenceItemRequestFactory rf = GWT.create(AbsenceItemRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		AbsenceItemRequestContext rc = rf.absenceItemRequestContext();
		rc.listAllByStudent( student.getId().toString() ).fire(new Receiver<List<AbsenceItemProxy>>(){
				@Override
				public void onFailure(ServerFailure error){
					//
					Window.alert(error.getMessage());
				}
				@Override
				public void onSuccess( List<AbsenceItemProxy> response ) {
					//
					getView().setAbsenceItemTableData( response );
				}
			});
	}
}
