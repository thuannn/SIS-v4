package com.lemania.sis.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.lemania.sis.client.event.PageAfterSelectEvent;
import com.lemania.sis.client.event.ProfileBrancheAfterAddEvent;
import com.lemania.sis.client.event.ProfileBrancheAfterAddEvent.ProfileBrancheAfterAddHandler;
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
import com.lemania.sis.client.uihandler.ProfileManagementUiHandler;
import com.lemania.sis.shared.BrancheProxy;
import com.lemania.sis.shared.ClasseProxy;
import com.lemania.sis.shared.ProfessorProxy;
import com.lemania.sis.shared.ProfileBrancheProxy;
import com.lemania.sis.shared.ProfileProxy;
import com.lemania.sis.shared.ProfileSubjectProxy;
import com.lemania.sis.shared.SubjectProxy;
import com.lemania.sis.shared.service.AssignmentRequestFactory;
import com.lemania.sis.shared.service.AssignmentRequestFactory.AssignmentRequestContext;
import com.lemania.sis.shared.service.BrancheRequestFactory;
import com.lemania.sis.shared.service.ClasseRequestFactory;
import com.lemania.sis.shared.service.ClasseRequestFactory.ClasseRequestContext;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.ProfileBrancheRequestFactory;
import com.lemania.sis.shared.service.ProfileBrancheRequestFactory.ProfileBrancheRequestContext;
import com.lemania.sis.shared.service.ProfileRequestFactory;
import com.lemania.sis.shared.service.ProfileSubjectRequestFactory;
import com.lemania.sis.shared.service.ProfileSubjectRequestFactory.ProfileSubjectRequestContext;
import com.lemania.sis.shared.service.SubjectRequestFactory;
import com.lemania.sis.shared.service.BrancheRequestFactory.BrancheRequestContext;
import com.lemania.sis.shared.service.ProfileRequestFactory.ProfileRequestContext;
import com.lemania.sis.shared.service.SubjectRequestFactory.SubjectRequestContext;

public class ProfileManagementPresenter
		extends
		Presenter<ProfileManagementPresenter.MyView, ProfileManagementPresenter.MyProxy>
		implements
		ProfileManagementUiHandler, ProfileBrancheAfterAddHandler {

	public interface MyView extends View, HasUiHandlers<ProfileManagementUiHandler> {
		//
		void initializeTables();
		void resetForm();
		//
		void addNewProfileToList(ProfileProxy newProfile);
		void setProfileListData( List<ProfileProxy> profiles );
		void setProfessorListData( List<ProfessorProxy> profs );
		//
		void setSubjectListData(List<SubjectProxy> subjectList);
		void setBrancheListData(List<BrancheProxy> brancheList);
		void setClassList(List<ClasseProxy> classes);
		//
		void addNewProfileSubjectToTable( ProfileSubjectProxy profileSubject );
		void setSubjectTableData( List<ProfileSubjectProxy> subjects );
		void showUpdatedProfileSubject( ProfileSubjectProxy ps, Integer lastPosition );
		void removeProfileSubjectFromTable();
		//
		void setBrancheTableData( List<ProfileBrancheProxy> branches);
		void addNewProfileBrancheToTable( ProfileBrancheProxy branche );
		void removeProfileBrancheFromTable();
		void showUpdatedProfileBranche(ProfileBrancheProxy pb);
	}
	

	@ProxyCodeSplit
	@NameToken(NameTokens.profilemgt)
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<ProfileManagementPresenter> {
	}
	

	@Inject
	public ProfileManagementPresenter(final EventBus eventBus, final MyView view,
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
		getView().setUiHandlers( this );
		getView().initializeTables();
	}
	
	
	@Override
	protected void onReset(){
		//
		super.onReset();
		
		// Thuan
		this.getEventBus().fireEvent( new PageAfterSelectEvent(NameTokens.profilemgt));
		//
		getView().resetForm();
		//
		loadClassList();
		loadActiveSubjectList();
		loadActiveBrancheList();
	}
	

	private void loadClassList() {
		//
		ClasseRequestFactory rf = GWT.create(ClasseRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ClasseRequestContext rc = rf.classeRequest();
		rc.listAllActive().fire(new Receiver<List<ClasseProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<ClasseProxy> response) {
				getView().setClassList(response);
			}
		});
	}


	/*
	 * Load active branch list when the form is opened
	 * */
	private void loadActiveBrancheList() {
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
	 * Load active subject list when the form is opened
	 * */
	private void loadActiveSubjectList() {
		//
		SubjectRequestFactory rf = GWT.create(SubjectRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		SubjectRequestContext rc = rf.subjectRequest();
		rc.listAllActive().fire(new Receiver<List<SubjectProxy>>(){
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
	

	/*
	 * Load profile list when form is opened
	 * */
	private void loadProfileList(String classId) {
		//
		ProfileRequestFactory rf = GWT.create(ProfileRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		
		ProfileRequestContext rc = rf.profileRequest();
		rc.listAllActiveByClass( classId ).fire(new Receiver<List<ProfileProxy>>(){
			@Override
			public void onSuccess(List<ProfileProxy> response){
				getView().setProfileListData( response );
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
		//
	}
	

	/*
	 * 
	 * */
	@Override
	public void createNewProfile(String profileName, final String classId) {
		//
		if (profileName.isEmpty()){
			Window.alert( NotificationTypes.invalid_input + " - Nom du profil");
			return;
		}
		if (classId.isEmpty()){
			Window.alert( NotificationTypes.invalid_input + " - Classe");
			return;
		}
		//
		ProfileRequestFactory rf = GWT.create(ProfileRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ProfileRequestContext rc = rf.profileRequest();	
		rc.saveAndReturn(profileName, classId).fire(new Receiver<ProfileProxy>(){
			@Override
			public void onSuccess(ProfileProxy response){
				getView().resetForm();
				loadProfileList(classId);
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
		//
	}
	

	/*
	 * 
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
	

	/*
	 * 
	 * */
	@Override
	public void addSubjectToProfile(String profileId, String subjectId, String professorId,	String subjectCoef) {
		//
		if (profileId.isEmpty()) {
			Window.alert( NotificationTypes.invalid_input + " - Profil");
			return;
		}
		if (subjectId.isEmpty()) {
			Window.alert( NotificationTypes.invalid_input + " - Matière");
			return;
		}
		if ( !FieldValidation.isNumeric( subjectCoef ) ) {
			Window.alert( NotificationTypes.invalid_input + " - Coefficient de la matière");
			return;
		}
		
		//
		ProfileSubjectRequestFactory rf = GWT.create(ProfileSubjectRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ProfileSubjectRequestContext rc = rf.profileSubjectRequest();		
		rc.saveAndReturn( profileId, subjectId, professorId, subjectCoef ).fire(new Receiver<ProfileSubjectProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(ProfileSubjectProxy response) {
				getView().addNewProfileSubjectToTable(response);
			}
		});	
	}
	

	/*
	 * 
	 * */
	@Override
	public void addBrancheToProfile(final String profileSubjectId, String brancheId,
			String brancheCoef, final Integer subjectLastPosition ) {
		//
		if (profileSubjectId.isEmpty()) {
			Window.alert( NotificationTypes.invalid_input + " - Matière");
			return;
		}
		if (brancheId.isEmpty()) {
			Window.alert( NotificationTypes.invalid_input + " - Branche");
			return;
		}
		if ( !FieldValidation.isNumeric(brancheCoef) ) {
			Window.alert( NotificationTypes.invalid_input + " - Coefficient de la branche");
			return;
		}
		
		//
		ProfileBrancheRequestFactory rf = GWT.create(ProfileBrancheRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ProfileBrancheRequestContext rc = rf.profileBrancheRequest();		
		rc.saveAndReturn(profileSubjectId, brancheId, brancheCoef).fire(new Receiver<ProfileBrancheProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(ProfileBrancheProxy response) {
				getEventBus().fireEvent( new ProfileBrancheAfterAddEvent( profileSubjectId, subjectLastPosition ) );
				getView().addNewProfileBrancheToTable( response );
			}
		});		
	}

	
	/*
	 * 
	 * */
	@Override
	public void onProfileChanged(String profileId) {
		//
		if (profileId.isEmpty()) {
			Window.alert( NotificationTypes.invalid_input + " - Profil");
			return;
		}
		//
		ProfileSubjectRequestFactory rf = GWT.create(ProfileSubjectRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ProfileSubjectRequestContext rc = rf.profileSubjectRequest();		
		rc.listAll( profileId ).fire(new Receiver<List<ProfileSubjectProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<ProfileSubjectProxy> response) {
				getView().setSubjectTableData( response );
			}
		});			
	}

	
	/*
	 * 
	 * */
	@Override
	public void updateProfileSubject(ProfileSubjectProxy ps, String coef, Boolean isActive, final Integer lastPosition) {
		//
		if ( !FieldValidation.isNumeric(coef)){
			Window.alert( NotificationTypes.invalid_input + " - Coefficient de la matière");
			return;
		}
		//
		if (ps.getSubjectCoef() == Double.parseDouble(coef))
			if (ps.getIsActive().equals(isActive))
				return;
		//
		ProfileSubjectRequestFactory rf = GWT.create(ProfileSubjectRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ProfileSubjectRequestContext rc = rf.profileSubjectRequest();
		ps = rc.edit( ps );
		ps.setSubjectCoef( Double.parseDouble(coef) );
		ps.setIsActive( isActive );
		rc.saveAndReturn( ps ).fire(new Receiver<ProfileSubjectProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(ProfileSubjectProxy response) {
				getView().showUpdatedProfileSubject(response, lastPosition);
			}
		});	
	}
	

	/*
	 * 
	 * */
	@Override
	public void onSubjectSelected(final String profileSubjectId) {
		//
		if (profileSubjectId.isEmpty()) {
			Window.alert( NotificationTypes.subject_not_selected );
			return;
		}
		//
		ProfileBrancheRequestFactory rf = GWT.create(ProfileBrancheRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ProfileBrancheRequestContext rc = rf.profileBrancheRequest();		
		rc.listAll( profileSubjectId ).fire(new Receiver<List<ProfileBrancheProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<ProfileBrancheProxy> response) {			
				getView().setBrancheTableData( response );
			}
		});
	}
	

	/*
	 * 
	 * */
	@ProxyEvent
	@Override
	public void onProfileBrancheAfterAdd(final ProfileBrancheAfterAddEvent event) {
		//
		ProfileSubjectRequestFactory rf = GWT.create(ProfileSubjectRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ProfileSubjectRequestContext rc = rf.profileSubjectRequest();		
		rc.calculateTotalBrancheCoef( event.getProfileSubjectId() ).fire(new Receiver<ProfileSubjectProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(ProfileSubjectProxy response) {
				getView().showUpdatedProfileSubject(response, event.getSubjectLastPosition());
			}
		});	
	}

	/*
	 * 
	 * */
	@Override
	public void removeBranche( ProfileBrancheProxy bp, final String profileSubjectId, final Integer subjectLastPosition ) {
		//
		ProfileBrancheRequestFactory rf = GWT.create(ProfileBrancheRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ProfileBrancheRequestContext rc = rf.profileBrancheRequest();
		rc.removeProfileBranche(bp).fire(new Receiver<Void>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Void response) {
				getEventBus().fireEvent( new ProfileBrancheAfterAddEvent( profileSubjectId, subjectLastPosition ) );
				getView().removeProfileBrancheFromTable();
			}
		});
	}


	@Override
	public void removeSubject(ProfileSubjectProxy ps) {
		//
		ProfileSubjectRequestFactory rf = GWT.create(ProfileSubjectRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ProfileSubjectRequestContext rc = rf.profileSubjectRequest();		
		rc.removeProfileSubject(ps).fire(new Receiver<Boolean>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Boolean deleted) {
				if (deleted)
					getView().removeProfileSubjectFromTable();
				else
					Window.alert( NotificationTypes.branche_list_not_empty );
			}
		});
	}


	@Override
	public void onClassChanged(String classId) {
		//
		if (classId.isEmpty())			
			return;
		//
		loadProfileList(classId);
		//
	}


	@Override
	public void updateProfileBranche(ProfileBrancheProxy pb, String coef, final String profileSubjectId, final Integer lastPosition) {
		//
		if (!FieldValidation.isNumeric(coef)){
			Window.alert( NotificationTypes.invalid_input + " - Coefficient de la branche");
			return;
		}
		//
		if ( pb.getBrancheCoef() == Double.parseDouble(coef) )
			return;
		//
		ProfileBrancheRequestFactory rf = GWT.create(ProfileBrancheRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		ProfileBrancheRequestContext rc = rf.profileBrancheRequest();
		pb = rc.edit(pb);
		pb.setBrancheCoef( Double.parseDouble(coef) );
		rc.saveAndReturn( pb ).fire(new Receiver<ProfileBrancheProxy>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(ProfileBrancheProxy response) {
				getEventBus().fireEvent( new ProfileBrancheAfterAddEvent( profileSubjectId, lastPosition ) );
				getView().showUpdatedProfileBranche(response);
			}
		});
	}
}
