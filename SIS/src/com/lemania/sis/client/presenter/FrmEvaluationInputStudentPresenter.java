package com.lemania.sis.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.lemania.sis.client.event.PageAfterSelectEvent;
import com.lemania.sis.client.place.NameTokens;
import com.lemania.sis.client.uihandler.FrmEvaluationInputStudentUiHandler;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.sis.client.LoggedInGatekeeper;
import com.lemania.sis.client.NotificationTypes;
import com.lemania.sis.shared.BulletinProxy;
import com.lemania.sis.shared.ClasseProxy;
import com.lemania.sis.shared.CoursProxy;
import com.lemania.sis.shared.EcoleProxy;
import com.lemania.sis.shared.EvaluationHeaderProxy;
import com.lemania.sis.shared.EvaluationSubjectProxy;
import com.lemania.sis.shared.service.BulletinRequestFactory;
import com.lemania.sis.shared.service.ClasseRequestFactory;
import com.lemania.sis.shared.service.CoursRequestFactory;
import com.lemania.sis.shared.service.EcoleRequestFactory;
import com.lemania.sis.shared.service.EvaluationHeaderRequestFactory;
import com.lemania.sis.shared.service.EvaluationSubjectRequestFactory;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.BulletinRequestFactory.BulletinRequestContext;
import com.lemania.sis.shared.service.ClasseRequestFactory.ClasseRequestContext;
import com.lemania.sis.shared.service.CoursRequestFactory.CoursRequestContext;
import com.lemania.sis.shared.service.EcoleRequestFactory.EcoleRequestContext;
import com.lemania.sis.shared.service.EvaluationHeaderRequestFactory.EvaluationHeaderRequestContext;
import com.lemania.sis.shared.service.EvaluationSubjectRequestFactory.EvaluationSubjectRequestContext;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;

public class FrmEvaluationInputStudentPresenter
		extends
		Presenter<FrmEvaluationInputStudentPresenter.MyView, FrmEvaluationInputStudentPresenter.MyProxy> 
		implements FrmEvaluationInputStudentUiHandler {

	public interface MyView extends View, HasUiHandlers<FrmEvaluationInputStudentUiHandler> {
		//
		public void initializeUI();		
		public void resetForm();
		//
		void setEcoleList(List<EcoleProxy> ecoles);
		//
		void setCoursList(List<CoursProxy> programmes);
		//
		void setClasseList(List<ClasseProxy> classes);
		//
		void setStudentListData(List<BulletinProxy> students);
		//
		void setEvaluationHeaderListData(List<EvaluationHeaderProxy> headers);
		//		
		void setEvaluationSubjectTableData( List<EvaluationSubjectProxy> evaluationSubject );
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.evaluationinputstudent)
	@UseGatekeeper(LoggedInGatekeeper.class)
	public interface MyProxy extends ProxyPlace<FrmEvaluationInputStudentPresenter> {
	}

	@Inject
	public FrmEvaluationInputStudentPresenter(final EventBus eventBus,
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
		//
		getView().setUiHandlers(this);		
		// UI
		getView().initializeUI();
	}

	@Override
	protected void onReset() {
		super.onReset();		
		//
		this.getEventBus().fireEvent( new PageAfterSelectEvent(NameTokens.evaluationinputstudent));	
		// Thuan
		getView().resetForm();
		loadEcoleList();
	}

	/*
	 * */
	private void loadEcoleList() {
		// 
		EcoleRequestFactory rf = GWT.create(EcoleRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		EcoleRequestContext rc = rf.ecoleRequest();
		rc.listAll().fire(new Receiver<List<EcoleProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<EcoleProxy> response) {
				getView().setEcoleList(response);
			}
		});
	}
	
	/*
	 * */
	@Override
	public void onEcoleSelected(String ecoleId) {
		//
		if (ecoleId.isEmpty()){
			return;
		}
		
		CoursRequestFactory rf = GWT.create(CoursRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		CoursRequestContext rc = rf.coursRequest();
		rc.listAllActive(ecoleId).fire(new Receiver<List<CoursProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<CoursProxy> response) {
				getView().setCoursList(response);
			}
		});
	}
	
	/*
	 * */
	@Override
	public void onProgrammeSelected(String programmeId) {		
		//
		ClasseRequestFactory rf = GWT.create(ClasseRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ClasseRequestContext rc = rf.classeRequest();
		rc.listAllActive(programmeId).fire(new Receiver<List<ClasseProxy>>(){
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

	@Override
	public void onClassSelected(String classId) {		
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

	/*
	 * */
	@Override
	public void onBulletinSelected(String classId) {		
		//
		EvaluationHeaderRequestFactory rf = GWT.create(EvaluationHeaderRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		EvaluationHeaderRequestContext rc = rf.evaluationHeaderRequest();				
		rc.listAllByClass(classId).fire(new Receiver<List<EvaluationHeaderProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<EvaluationHeaderProxy> response) {
				getView().setEvaluationHeaderListData(response);
			}
		});
	}

	/*
	 * */
	@Override
	public void onEvaluationHeaderSelected(String classId, String bulletinId,
			String evaluationHeaderId) {
		//
		if (classId.isEmpty()){
			Window.alert(NotificationTypes.invalid_input + " - Classe");
			return;
		}
		if (bulletinId.isEmpty()){
			Window.alert(NotificationTypes.invalid_input + " - Elève");
			return;
		}
		if (evaluationHeaderId.isEmpty()){
			Window.alert(NotificationTypes.invalid_input + " - Evaluation");
			return;
		}
		//
		EvaluationSubjectRequestFactory rf = GWT.create(EvaluationSubjectRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		EvaluationSubjectRequestContext rc = rf.evaluationSubjectRequest();				
		rc.listAllByStudent(classId, bulletinId, evaluationHeaderId).fire(new Receiver<List<EvaluationSubjectProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<EvaluationSubjectProxy> response) {
				getView().setEvaluationSubjectTableData(response);
			}
		});
	}
}
