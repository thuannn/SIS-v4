package com.lemania.sis.client.popup.absenceinput;

import java.util.List;

import com.gwtplatform.mvp.client.PresenterWidget;
import com.gwtplatform.mvp.client.PopupView;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.lemania.sis.shared.bulletinsubject.BulletinSubjectProxy;
import com.lemania.sis.shared.bulletinsubject.BulletinSubjectRequestFactory;
import com.lemania.sis.shared.bulletinsubject.BulletinSubjectRequestFactory.BulletinSubjectRequestContext;
import com.lemania.sis.shared.period.PeriodProxy;
import com.lemania.sis.shared.period.PeriodRequestFactory;
import com.lemania.sis.shared.period.PeriodRequestFactory.PeriodRequestContext;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.student.StudentProxy;

public class AbsenceInputPresenter extends PresenterWidget<AbsenceInputPresenter.MyView> {
	
	
	//
	private StudentProxy student;
	private String classId = "";

	public interface MyView extends PopupView {
		//
		void setStudentListData( List<BulletinSubjectProxy> bulletinSubjects );
		//
		void setPeriodListData(List<PeriodProxy> periods);
		//
		void resetUI(StudentProxy student);
	}

	@Inject
	public AbsenceInputPresenter(final EventBus eventBus, final MyView view) {
		super(eventBus, view);
	}

	@Override
	protected void onBind() {
		super.onBind();
	}

	@Override
	protected void onReset() {
		super.onReset();
	}
	
	
	/*
	 * Load the 
	 * */
	public void onPopupStart(StudentProxy student) {
		//
		this.student = student;
		//
		getView().resetUI(student);
		//
		loadStudentCourses();
	}
	
	
	/* 
	 * Load list of subjects and profs
	 * When finish laoding the subjects and profs, load the periods by event
	 * */
	private void loadStudentCourses() {
		//
		BulletinSubjectRequestFactory rf = GWT.create(BulletinSubjectRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinSubjectRequestContext rc = rf.bulletinSubjectRequest();
		rc.listAllByStudent( this.student.getId().toString() ).fire(new Receiver<List<BulletinSubjectProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				//
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<BulletinSubjectProxy> response) {				
				//
				classId = response.get(0).getClassId();			// Keep the class ID to load the periods
				//
				getView().setStudentListData(response);
				//
				loadPeriods();
			}
		});
	}

	
	/*
	 * */
	public void loadPeriods() {
		//
		PeriodRequestFactory rf = GWT.create(PeriodRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		PeriodRequestContext rc = rf.periodRequestContext();
		rc.listAllByClass( classId ).fire(new Receiver<List<PeriodProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<PeriodProxy> response) {
				//
				getView().setPeriodListData(response);
			}
		});
	}
	
}
