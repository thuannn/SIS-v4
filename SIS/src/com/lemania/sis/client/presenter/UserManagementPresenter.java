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
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;
import com.lemania.sis.client.presenter.MainPagePresenter;
import com.lemania.sis.client.uihandler.UserManagementUiHandler;
import com.lemania.sis.shared.CoursProxy;
import com.lemania.sis.shared.EcoleProxy;
import com.lemania.sis.shared.UserProxy;
import com.lemania.sis.shared.service.CoursRequestFactory;
import com.lemania.sis.shared.service.EcoleRequestFactory;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.UserRequestFactory;
import com.lemania.sis.shared.service.CoursRequestFactory.CoursRequestContext;
import com.lemania.sis.shared.service.EcoleRequestFactory.EcoleRequestContext;
import com.lemania.sis.shared.service.UserRequestFactory.UserRequestContext;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;

public class UserManagementPresenter
		extends Presenter<UserManagementPresenter.MyView, UserManagementPresenter.MyProxy> 
		implements UserManagementUiHandler {

	public interface MyView extends View, HasUiHandlers<UserManagementUiHandler> {
		
		public void initializeTables();
		public void initializeDepartmentList();
		public void initializeDepartmentTable();
		
		public void populateSelectedUserInfo();
		
		public void setEcoleAddList(List<EcoleProxy> ecoles);
		public void setCourseAddList(List<CoursProxy> courses);
		
		public void refreshTable(UserProxy updatedUser);
		public void refreshDepartmentTable(List<CoursProxy> depts);
		
		public void addNewUser(UserProxy newUser);
		public void setUserData(List<UserProxy> list);
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.usermanagement)
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<UserManagementPresenter> {
	}

	@Inject
	public UserManagementPresenter(final EventBus eventBus, final MyView view,
			final MyProxy proxy) {
		super(eventBus, view, proxy);
		
		// Thuan
		getView().setUiHandlers(this);
	}

	@Override
	protected void revealInParent() {
		RevealContentEvent.fire(this, MainPagePresenter.TYPE_SetMainContent, this);
	}

	@Override
	protected void onBind() {
		super.onBind();
		
		// Thuan
		getView().initializeTables();
		getView().initializeDepartmentTable();
	}
	
	@Override
	protected void onReset() {
		loadUsers();
		getEcoleList();
	}

	private void loadUsers() {
		UserRequestFactory rf = GWT.create(UserRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		UserRequestContext rc = rf.userRequest();
		rc.listAll().fire(new Receiver<List<UserProxy>>() {
			@Override
			public void onFailure(ServerFailure error) {
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<UserProxy> response) {
				getView().setUserData(response);
			}
		});
	}

	@Override
	public void addNewUser(String fullName, String userName, String password, String email) {
		UserRequestFactory rf = GWT.create(UserRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		UserRequestContext rc = rf.userRequest();
		
		final UserProxy newUser = rc.create(UserProxy.class);
		newUser.setFullName(fullName);
		newUser.setUserName(userName);
		newUser.setPassword(password);
		newUser.setEmail(email);
		newUser.setActive(true);
		
		rc.save(newUser).fire(new Receiver<Void>() {
			@Override
			public void onFailure(ServerFailure error) {
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Void response) {
				getView().addNewUser(newUser);
			}
		});
	}

	@Override
	public void updateUserStatus(UserProxy user, Boolean active, Boolean admin, String password) {
		UserRequestFactory rf = GWT.create(UserRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		UserRequestContext rc = rf.userRequest();
		final UserProxy updatedUser = rc.edit(user);
		updatedUser.setActive(active);
		updatedUser.setAdmin(admin);
		if (!password.equals(""))
			updatedUser.setPassword(password);
		rc.save(updatedUser).fire( new Receiver<Void>(){
			@Override
			public void onFailure(ServerFailure error) {
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(Void response) {
				getView().refreshTable(updatedUser);
			}
		} );	
	}
	
	private void getEcoleList(){
		EcoleRequestFactory rf = GWT.create(EcoleRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		EcoleRequestContext rc = rf.ecoleRequest();
		rc.listAllActive().fire(new Receiver<List<EcoleProxy>>(){
			@Override
			public void onSuccess(List<EcoleProxy> response){
				getView().setEcoleAddList(response);
			}
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
		});
	}

	@Override
	public void addSchoolSelected(String ecoleId) {
		if (ecoleId.equals("")){
			Window.alert("Veuillez choisir l'école.");
		}
		
		CoursRequestFactory rf = GWT.create(CoursRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		CoursRequestContext rc = rf.coursRequest();
		rc.listAll(ecoleId).fire(new Receiver<List<CoursProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<CoursProxy> response) {
				getView().setCourseAddList(response);
			}
		});
	}

	@Override
	public void addDepartment(String courseId, UserProxy user) {
		UserRequestFactory rf = GWT.create(UserRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		UserRequestContext rc = rf.userRequest();
		final UserProxy updatedUser = rc.edit(user);
		rc.addDepartment(updatedUser, courseId).fire( new Receiver<List<CoursProxy>>(){
			@Override
			public void onFailure(ServerFailure error) {
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess( List<CoursProxy> response ) {
				getView().refreshDepartmentTable( response );
			}
		} );
	}

	@Override
	public void userSelected(UserProxy user) {
		UserRequestFactory rf = GWT.create(UserRequestFactory.class);
		rf.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		UserRequestContext rc = rf.userRequest();
		final UserProxy updatedUser = rc.edit(user);
		rc.getDepartments(updatedUser).fire( new Receiver<List<CoursProxy>>(){
			@Override
			public void onFailure(ServerFailure error) {
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess( List<CoursProxy> response ) {
				getView().refreshDepartmentTable( response );
				getView().populateSelectedUserInfo();
			}
		} );
	}
}
