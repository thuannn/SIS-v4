package com.lemania.sis.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.lemania.sis.client.place.NameTokens;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.sis.client.AdminGateKeeper;
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
import com.lemania.sis.shared.ProfessorProxy;
import com.lemania.sis.shared.ProfileProxy;
import com.lemania.sis.shared.SubjectProxy;
import com.lemania.sis.shared.service.AssignmentRequestFactory;
import com.lemania.sis.shared.service.AssignmentRequestFactory.AssignmentRequestContext;
import com.lemania.sis.shared.service.BrancheRequestFactory;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.ProfessorRequestFactory;
import com.lemania.sis.shared.service.ProfileRequestFactory;
import com.lemania.sis.shared.service.SubjectRequestFactory;
import com.lemania.sis.shared.service.BrancheRequestFactory.BrancheRequestContext;
import com.lemania.sis.shared.service.ProfessorRequestFactory.ProfessorRequestContext;
import com.lemania.sis.shared.service.ProfileRequestFactory.ProfileRequestContext;
import com.lemania.sis.shared.service.SubjectRequestFactory.SubjectRequestContext;

public class ProfileManagementPresenter
		extends
		Presenter<ProfileManagementPresenter.MyView, ProfileManagementPresenter.MyProxy>
		implements
		ProfileManagementUiHandler {

	public interface MyView extends View, HasUiHandlers<ProfileManagementUiHandler> {
		//
		void resetForm();
		//
		void addNewProfileToList(ProfileProxy newProfile);
		void setProfileListData( List<ProfileProxy> profiles );
		void setProfessorListData( List<ProfessorProxy> profs );
		//
		void setSubjectListData(List<SubjectProxy> subjectList);
		void setBrancheListData(List<BrancheProxy> brancheList);
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
	}
	
	@Override
	protected void onReset(){
		super.onReset();
		
		// Thuan
		getView().resetForm();
		//
		loadProfileList();
		loadActiveSubjectList();
		loadActiveBrancheList();
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
	private void loadProfileList() {
		//
		ProfileRequestFactory rf = GWT.create(ProfileRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		
		ProfileRequestContext rc = rf.profileRequest();
		rc.listAll().fire(new Receiver<List<ProfileProxy>>(){
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
	public void createNewProfile(String profileName) {
		//
		if (profileName.isEmpty()){
			Window.alert( NotificationTypes.invalid_input + " - Nom du profil");
			return;
		}
		//
		ProfileRequestFactory rf = GWT.create(ProfileRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		
		ProfileRequestContext rc = rf.profileRequest();
		ProfileProxy profile = rc.create(ProfileProxy.class);
		profile.setProfileName(profileName);
		profile.setIsActive(true);
		
		rc.save(profile).fire(new Receiver<Void>(){
			@Override
			public void onSuccess(Void response){
				getView().resetForm();
				loadProfileList();
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
		//
	}

	@Override
	public void loadProfessorList(String subjectId) {
		//
		AssignmentRequestFactory rf = GWT.create(AssignmentRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		AssignmentRequestContext rc = rf.assignmentRequest();
		rc.listAllProfessorBySubject(subjectId).fire(new Receiver<List<ProfessorProxy>>(){
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

	@Override
	public void addSubjectToProfile(String profileId, String subjectId,
			String subjectCoef) {
		//
		if (profileId.isEmpty()) {
			Window.alert( NotificationTypes.invalid_input + " - Profil");
			return;
		}
		if (subjectId.isEmpty()) {
			Window.alert( NotificationTypes.invalid_input + " - Matière");
			return;
		}
		if (subjectCoef.isEmpty()) {
			Window.alert( NotificationTypes.invalid_input + " - Matière");
			return;
		}
		
		// TODO		
	}

	@Override
	public void addBrancheToProfile(String profileSubjectId, String brancheId,
			String brancheCoef) {
		//
		if (profileSubjectId.isEmpty()) {
			Window.alert( NotificationTypes.invalid_input + " - Profil");
			return;
		}
		if (brancheId.isEmpty()) {
			Window.alert( NotificationTypes.invalid_input + " - Matière");
			return;
		}
		if (brancheCoef.isEmpty()) {
			Window.alert( NotificationTypes.invalid_input + " - Matière");
			return;
		}
		
		// TODO		
	}
}
