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
import com.lemania.sis.client.event.PageAfterSelectEvent;
import com.lemania.sis.client.event.StudentAfterStatusChangeEvent;
import com.lemania.sis.client.event.StudentAfterStatusChangeEvent.StudentAfterStatusChangeHandler;
import com.lemania.sis.client.place.NameTokens;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.sis.client.AdminGateKeeper;
import com.lemania.sis.client.CurrentUser;
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
import com.lemania.sis.client.uihandler.FrmBulletinManagementUiHandler;
import com.lemania.sis.shared.BrancheProxy;
import com.lemania.sis.shared.BulletinBrancheProxy;
import com.lemania.sis.shared.BulletinProxy;
import com.lemania.sis.shared.BulletinSubjectProxy;
import com.lemania.sis.shared.ClasseProxy;
import com.lemania.sis.shared.CoursProxy;
import com.lemania.sis.shared.EcoleProxy;
import com.lemania.sis.shared.ProfessorProxy;
import com.lemania.sis.shared.SubjectProxy;
import com.lemania.sis.shared.service.AssignmentRequestFactory;
import com.lemania.sis.shared.service.BrancheRequestFactory;
import com.lemania.sis.shared.service.BulletinBrancheRequestFactory;
import com.lemania.sis.shared.service.BulletinRequestFactory;
import com.lemania.sis.shared.service.BulletinSubjectRequestFactory;
import com.lemania.sis.shared.service.ClasseRequestFactory;
import com.lemania.sis.shared.service.CoursRequestFactory;
import com.lemania.sis.shared.service.EcoleRequestFactory;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.SubjectRequestFactory;
import com.lemania.sis.shared.service.AssignmentRequestFactory.AssignmentRequestContext;
import com.lemania.sis.shared.service.BrancheRequestFactory.BrancheRequestContext;
import com.lemania.sis.shared.service.BulletinBrancheRequestFactory.BulletinBrancheRequestContext;
import com.lemania.sis.shared.service.BulletinRequestFactory.BulletinRequestContext;
import com.lemania.sis.shared.service.BulletinSubjectRequestFactory.BulletinSubjectRequestContext;
import com.lemania.sis.shared.service.ClasseRequestFactory.ClasseRequestContext;
import com.lemania.sis.shared.service.CoursRequestFactory.CoursRequestContext;
import com.lemania.sis.shared.service.EcoleRequestFactory.EcoleRequestContext;
import com.lemania.sis.shared.service.SubjectRequestFactory.SubjectRequestContext;

public class FrmBulletinManagementPresenter
		extends
		Presenter<FrmBulletinManagementPresenter.MyView, FrmBulletinManagementPresenter.MyProxy> 
		implements FrmBulletinManagementUiHandler, StudentAfterStatusChangeHandler, LoginAuthenticatedHandler {
	
	//
	private CurrentUser currentUser;
	

	public interface MyView extends View, HasUiHandlers<FrmBulletinManagementUiHandler> {
		//
		void resetForm();
		//
		void setEcoleList(List<EcoleProxy> ecoles);
		void setCoursList(List<CoursProxy> programmes);
		void setClasseList(List<ClasseProxy> classes);
		//
		void setStudentTableData(List<BulletinProxy> bulletins);
		void setBulletinSubjectTableData(List<BulletinSubjectProxy> subjects);
		void setBulletinBrancheTableData(List<BulletinBrancheProxy> branches);
		//
		void initializeTables();
		//
		void showUpdatedBranche( BulletinBrancheProxy branche );
		void showUpdatedSubject( BulletinSubjectProxy subject, Integer lastSubjectIndex );
		//
		void showAddedSubject( BulletinSubjectProxy subject);
		void showAddedBranche( BulletinBrancheProxy branche);
		//
		void removeDeletedBrancheFromTable();
		void removeDeletedSubjectFromTable();
		//
		void setBrancheListData( List<BrancheProxy> branches);
		void setSubjectListData( List<SubjectProxy> subjects);
		//
		void setProfessorListData( List<ProfessorProxy> profs);
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.bulletinmanagement)
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<FrmBulletinManagementPresenter> {
	}

	@Inject
	public FrmBulletinManagementPresenter(final EventBus eventBus,
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
		getView().initializeTables();
	}
	
	
	@Override
	protected void onReset(){
		//
		super.onReset();
		//
		this.getEventBus().fireEvent( new PageAfterSelectEvent(NameTokens.bulletinmanagement));
		// Thuan
		getView().resetForm();
		//
		loadEcoleList();		
		loadBrancheList();
	}
	
	/**/
	private void loadBrancheList() {
		//
		BrancheRequestFactory rf = GWT.create(BrancheRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BrancheRequestContext rc = rf.brancheRequest();
		rc.listAll().fire(new Receiver<List<BrancheProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<BrancheProxy> response) {
				getView().setBrancheListData(response);
			}
		});
	}
	

	/*
	 * */
	private void loadSubjectListByProfile(BulletinProxy bulletin) {
		//
		SubjectRequestFactory rf = GWT.create(SubjectRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		SubjectRequestContext rc = rf.subjectRequest();
		rc.listAllActiveByProfile(bulletin).fire(new Receiver<List<SubjectProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<SubjectProxy> response) {
				getView().setSubjectListData(response);
			}
		});
	}
	

	/**/
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
	
	
	/**/
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
	
	
	/**/
	@Override
	public void onProgrammeSelected(String coursId) {
		//
		ClasseRequestFactory rf = GWT.create(ClasseRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ClasseRequestContext rc = rf.classeRequest();
		rc.listAllActive(coursId).fire(new Receiver<List<ClasseProxy>>(){
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
		if (classId.isEmpty()){
			Window.alert(NotificationTypes.invalid_input + " - Classe choisie");
			return;
		}
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
				getView().setStudentTableData(response);
			}
		});
	}

	@Override
	public void onBulletinSelected(final BulletinProxy bulletin) {
		//
		BulletinSubjectRequestFactory rf = GWT.create(BulletinSubjectRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinSubjectRequestContext rc = rf.bulletinSubjectRequest();
		rc.listAll( bulletin.getId().toString() ).fire(new Receiver<List<BulletinSubjectProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<BulletinSubjectProxy> response) {
				getView().setBulletinSubjectTableData(response);
				loadSubjectListByProfile( bulletin );
			}
		});		
	}

	@Override
	public void removeSubject(BulletinSubjectProxy subject) {
		//
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		
		//
		BulletinSubjectRequestFactory rf = GWT.create(BulletinSubjectRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinSubjectRequestContext rc = rf.bulletinSubjectRequest();
		rc.removeProfileSubject(subject).fire(new Receiver<Boolean>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Boolean response) {
				if (response)
					getView().removeDeletedSubjectFromTable();
				else
					Window.alert( NotificationTypes.branche_list_not_empty );
			}
		});	
	}

	@Override
	public void onSubjectSelected(BulletinSubjectProxy subject) {
		//
		BulletinBrancheRequestFactory rf = GWT.create(BulletinBrancheRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinBrancheRequestContext rc = rf.bulletinBrancheRequest();
		rc.listAll( subject.getId().toString() ).fire(new Receiver<List<BulletinBrancheProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<BulletinBrancheProxy> response) {
				getView().setBulletinBrancheTableData(response);
			}
		});
	}

	
	/*
	 * */
	@Override
	public void updateBrancheCoef(BulletinBrancheProxy branche, String coef) {
		//
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		
		//
		if (!FieldValidation.isNumeric(coef)){
			Window.alert(NotificationTypes.invalid_input + " - Coefficient");
			return;
		}
		//
		BulletinBrancheRequestFactory rf = GWT.create(BulletinBrancheRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinBrancheRequestContext rc = rf.bulletinBrancheRequest();
		branche = rc.edit(branche);
		branche.setBrancheCoef( Double.parseDouble(coef) );
		rc.saveAndReturn( branche ).fire(new Receiver<BulletinBrancheProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(BulletinBrancheProxy response) {
				getView().showUpdatedBranche(response);
			}
		});
	}

	
	/*
	 * */
	@Override
	public void removeBranche(BulletinBrancheProxy branche) {
		//
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		
		//
		BulletinBrancheRequestFactory rf = GWT.create(BulletinBrancheRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinBrancheRequestContext rc = rf.bulletinBrancheRequest();
		rc.removeBulletinBranche( branche ).fire(new Receiver<Void>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Void response) {
				getView().removeDeletedBrancheFromTable();
			}
		});
	}

	
	/*
	 * */
	@Override
	public void updateSubjectCoef(BulletinSubjectProxy subject, String coef, final Integer lastSubjectIndex) {
		//
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		
		//
		BulletinSubjectRequestFactory rf = GWT.create(BulletinSubjectRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinSubjectRequestContext rc = rf.bulletinSubjectRequest();
		subject = rc.edit( subject );
		subject.setSubjectCoef( Double.parseDouble(coef) );
		rc.saveAndReturn( subject ).fire(new Receiver<BulletinSubjectProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(BulletinSubjectProxy response) {
				getView().showUpdatedSubject(response, lastSubjectIndex);
			}
		});		
	}

	
	/*
	 * */
	@Override
	public void addSubject(String bulletinId, String subjectId, String profId, String coef) {
		//
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		
		//
		BulletinSubjectRequestFactory rf = GWT.create(BulletinSubjectRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinSubjectRequestContext rc = rf.bulletinSubjectRequest();
		rc.saveAndReturn( bulletinId, subjectId, profId, coef ).fire(new Receiver<BulletinSubjectProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(BulletinSubjectProxy response) {
				getView().showAddedSubject(response);
			}			
		});		
	}
	

	/*
	 * */
	@Override
	public void addBranche(String bulletinSubjectId, String brancheId, String coef) {
		//
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		
		//
		BulletinBrancheRequestFactory rf = GWT.create(BulletinBrancheRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinBrancheRequestContext rc = rf.bulletinBrancheRequest();
		rc.saveAndReturn(bulletinSubjectId, brancheId, coef).fire(new Receiver<BulletinBrancheProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(BulletinBrancheProxy response) {
				getView().showAddedBranche(response);
			}
		});
	}
	

	/*
	 * */
	@ProxyEvent
	@Override
	public void onStudentAfterDesactivate(StudentAfterStatusChangeEvent event) {
		//
		if (this.currentUser.isReadOnly()){
			Window.alert(NotificationTypes.readOnly);
			return;
		}
		
		//
		BulletinRequestFactory rf = GWT.create(BulletinRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		BulletinRequestContext rc = rf.bulletinRequest();
		rc.updateBulletinStatus( event.getStudentId(), event.getStudentStatus() ).fire(new Receiver<Void>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess( Void response ) {
				//
			}
		});
	}

	
	/*
	 * */
	@Override
	public void loadProfessorList(String subjectId, String classId) {
		//
		AssignmentRequestFactory rf = GWT.create(AssignmentRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		AssignmentRequestContext rc = rf.assignmentRequest();
		rc.listAllProfessorBySubject(subjectId, classId).fire(new Receiver<List<ProfessorProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<ProfessorProxy> response) {
				getView().setProfessorListData(response);
			}
		});		
	}

	
	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		//
		this.currentUser = event.getCurrentUser();
	}
}
