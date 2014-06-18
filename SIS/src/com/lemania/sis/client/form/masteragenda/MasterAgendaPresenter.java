package com.lemania.sis.client.form.masteragenda;

import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.shared.GwtEvent.Type;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ContentSlot;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.gwtplatform.mvp.client.proxy.RevealContentHandler;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.sis.client.AdminGateKeeper;
import com.lemania.sis.client.NotificationTypes;
import com.lemania.sis.client.event.PageAfterSelectEvent;
import com.lemania.sis.client.presenter.MainPagePresenter;
import com.lemania.sis.client.place.NameTokens;
import com.lemania.sis.shared.ClasseProxy;
import com.lemania.sis.shared.ProfessorProxy;
import com.lemania.sis.shared.ProfileProxy;
import com.lemania.sis.shared.ProfileSubjectProxy;
import com.lemania.sis.shared.SubjectProxy;
import com.lemania.sis.shared.service.AssignmentRequestFactory;
import com.lemania.sis.shared.service.ClasseRequestFactory;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.ProfileRequestFactory;
import com.lemania.sis.shared.service.ProfileSubjectRequestFactory;
import com.lemania.sis.shared.service.SubjectRequestFactory;
import com.lemania.sis.shared.service.AssignmentRequestFactory.AssignmentRequestContext;
import com.lemania.sis.shared.service.ClasseRequestFactory.ClasseRequestContext;
import com.lemania.sis.shared.service.ProfileRequestFactory.ProfileRequestContext;
import com.lemania.sis.shared.service.ProfileSubjectRequestFactory.ProfileSubjectRequestContext;
import com.lemania.sis.shared.service.SubjectRequestFactory.SubjectRequestContext;

public class MasterAgendaPresenter extends
		Presenter<MasterAgendaPresenter.MyView, MasterAgendaPresenter.MyProxy>
		implements MasterAgendaUiHandlers {
	
	interface MyView extends View, HasUiHandlers<MasterAgendaUiHandlers> {
		//
		void initializeUI();
		void drawTable();
		//
		void showSavedPeriodSchedule();
		//
		void setClassList(List<ClasseProxy> classes);
		void setProfileListData( List<ProfileProxy> profiles );
		void setSubjectListData( List<SubjectProxy> response );
		void setProfessorListData( List<ProfessorProxy> profs );
	}

	@ContentSlot
	public static final Type<RevealContentHandler<?>> SLOT_MasterAgenda = new Type<RevealContentHandler<?>>();

	@NameToken(NameTokens.masteragenda)
	@ProxyCodeSplit
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<MasterAgendaPresenter> {
	}

	@Inject
	public MasterAgendaPresenter(EventBus eventBus, MyView view, MyProxy proxy) {
		super(eventBus, view, proxy, MainPagePresenter.TYPE_SetMainContent);

		getView().setUiHandlers(this);
	}

	protected void onBind() {
		super.onBind();
		//
		getView().drawTable();
	}

	protected void onReset() {
		super.onReset();
		//
		this.getEventBus().fireEvent( new PageAfterSelectEvent(NameTokens.masteragenda) );
		//
		getView().initializeUI();
		loadClassList();
	}

	/*
	 * */
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
	 * */
	@Override
	public void savePeriodSchedule() {
		//
		getView().showSavedPeriodSchedule();
	}

	/*
	 * */
	@Override
	public void onClassChanged(String classId) {
		//
		if (classId.isEmpty())			
			return;
		//
		loadProfileList(classId);
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
	 * */
	@Override
	public void onProfileChanged(String profileId) {
		//
		if (profileId.isEmpty()) {
			Window.alert( NotificationTypes.invalid_input + " - Profil");
			return;
		}
		//
		SubjectRequestFactory rf = GWT.create(SubjectRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		SubjectRequestContext rc = rf.subjectRequest();
		rc.listAllActiveByProfile( profileId ).fire(new Receiver<List<SubjectProxy>>(){
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

}
