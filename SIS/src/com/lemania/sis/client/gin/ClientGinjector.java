package com.lemania.sis.client.gin;

import com.google.web.bindery.event.shared.EventBus;
import com.google.gwt.inject.client.AsyncProvider;
import com.google.gwt.inject.client.GinModules;
import com.google.gwt.inject.client.Ginjector;
import com.google.inject.Provider;
import com.gwtplatform.mvp.client.proxy.PlaceManager;

import com.lemania.sis.client.AdminGateKeeper;
import com.lemania.sis.client.LoggedInGatekeeper;
import com.lemania.sis.client.presenter.HomePresenter;
import com.lemania.sis.client.presenter.LogTypesAddPresenter;
import com.lemania.sis.client.presenter.LogTypesPresenter;
import com.lemania.sis.client.presenter.MainPagePresenter;
import com.lemania.sis.client.presenter.EcolePresenter;
import com.lemania.sis.client.presenter.EcoleAddPresenter;
import com.lemania.sis.client.presenter.ProfsPresenter;
import com.lemania.sis.client.presenter.ProfsAddPresenter;
import com.lemania.sis.client.presenter.ContactPresenter;
import com.lemania.sis.client.presenter.UserManagementPresenter;
import com.lemania.sis.client.presenter.SettingsPresenter;
import com.lemania.sis.client.presenter.FrmPasswordPresenter;
import com.lemania.sis.client.presenter.StudentPresenter;
import com.lemania.sis.client.presenter.StudentAddPresenter;
import com.lemania.sis.client.presenter.FrmBrancheListPresenter;
import com.lemania.sis.client.presenter.FrmBrancheAddPresenter;

@GinModules({ ClientModule.class })
public interface ClientGinjector extends Ginjector {
	
	EventBus getEventBus();
	
	Provider<MainPagePresenter> getMainPagePresenter();
	
	AsyncProvider<HomePresenter> getHomePresenter();
	
	PlaceManager getPlaceManager();

	AsyncProvider<EcolePresenter> getEcolePresenter();

	AsyncProvider<EcoleAddPresenter> getEcoleAddPresenter();

	AsyncProvider<LogTypesPresenter> getTypesPresenter();

	AsyncProvider<LogTypesAddPresenter> getTypesAddPresenter();

	AsyncProvider<ProfsPresenter> getProfsPresenter();

	AsyncProvider<ProfsAddPresenter> getProfsAddPresenter();

	AsyncProvider<ContactPresenter> getContactPresenter();	
	
	// Thuan
	LoggedInGatekeeper getLoggedInGatekeeper();
	AdminGateKeeper getAdminGateKeeper();

	AsyncProvider<UserManagementPresenter> getUserManagementPresenter();

	AsyncProvider<SettingsPresenter> getSettingsPresenter();

	AsyncProvider<FrmPasswordPresenter> getFrmPasswordPresenter();

	AsyncProvider<StudentPresenter> getStudentPresenter();

	AsyncProvider<StudentAddPresenter> getStudentAddPresenter();

	AsyncProvider<FrmBrancheListPresenter> getFrmBrancheListPresenter();

	AsyncProvider<FrmBrancheAddPresenter> getFrmBrancheAddPresenter();
}
