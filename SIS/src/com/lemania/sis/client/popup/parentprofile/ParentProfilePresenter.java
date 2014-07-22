package com.lemania.sis.client.popup.parentprofile;

import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.PopupView;
import com.gwtplatform.mvp.client.PresenterWidget;
import com.lemania.sis.shared.parent.ParentProxy;
import com.lemania.sis.shared.parent.ParentRequestFactory;
import com.lemania.sis.shared.parent.ParentRequestFactory.ParentRequestContext;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.student.StudentProxy;
import com.lemania.sis.shared.student.StudentRequestFactory;
import com.lemania.sis.shared.student.StudentRequestFactory.StudentRequestContext;

public class ParentProfilePresenter extends
		PresenterWidget<ParentProfilePresenter.MyView> implements
		ParentProfileUiHandlers {
	
	public interface MyView extends PopupView,
			HasUiHandlers<ParentProfileUiHandlers> {
		//
		void initializeUI();
		void setStudentsData(List<StudentProxy> studenets);
	}

	@Inject
	ParentProfilePresenter(final EventBus eventBus, final MyView view) {
		super(eventBus, view);

		getView().setUiHandlers(this);
	}

	protected void onBind() {
		super.onBind();
		//
		initializeUI();
	}

	protected void onReset() {
		super.onReset();
	}
	
	/*
	 * */
	public void loadActiveStudents() {
		//
		StudentRequestContext rc = getStudentRequestContext();
		rc.listAll().fire(new Receiver<List<StudentProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<StudentProxy> response) {
				getView().setStudentsData(response);
			}
		});
	}
	
	
	/* Get the request context for StudenProxy.
	 * Used in every function which call to Request Factory */
	public StudentRequestContext getStudentRequestContext() {
		//
		StudentRequestFactory rf = GWT.create(StudentRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		return rf.studentRequest();
	}
	
	
	/*
	 * */
	public void initializeUI() {
		//
		getView().initializeUI();
	}

	/*
	 * */
	@Override
	public void saveParent(String title, String firstName, String lastName,
			String eMail, String phoneMobile, String phoneHome,
			String phoneWork, boolean acceptSMS, boolean acceptEmail) {
		//
		ParentRequestFactory rf = GWT.create(ParentRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ParentRequestContext rc = rf.parentRequestContext();
		//
		ParentProxy pp = rc.create(ParentProxy.class);
		pp.setTitle(title);
		pp.setFirstName(firstName);
		pp.setLastName(lastName);
		pp.seteMail(eMail);
		pp.setPhoneHome(phoneHome);
		pp.setPhoneMobile(phoneMobile);
		pp.setPhoneWork(phoneWork);
		pp.setAcceptEmail(acceptEmail);
		pp.setAcceptSMS(acceptSMS);
		//
		rc.saveAndReturn(pp).fire(new Receiver<ParentProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(ParentProxy response) {
				//
			}
		});
	}
}