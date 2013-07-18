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
import com.lemania.sis.client.presenter.RptTimeByDepartmentPresenter;
import com.lemania.sis.client.presenter.RptTimeByProfPresenter;
import com.lemania.sis.client.presenter.TimeInputPresenter;
import com.lemania.sis.client.presenter.CoursPresenter;
import com.lemania.sis.client.presenter.CoursAddPresenter;
import com.lemania.sis.client.presenter.ProfsPresenter;
import com.lemania.sis.client.presenter.ProfsAddPresenter;
import com.lemania.sis.client.presenter.ContactPresenter;
import com.lemania.sis.client.presenter.UserManagementPresenter;
import com.lemania.sis.client.presenter.RptTimeBySchoolPresenter;
import com.lemania.sis.client.presenter.RptTimeByMonthPresenter;
import com.lemania.sis.client.presenter.SettingsPresenter;
import com.lemania.sis.client.presenter.FrmPasswordPresenter;

@GinModules({ ClientModule.class })
public interface ClientGinjector extends Ginjector {
	
	EventBus getEventBus();
	
	Provider<MainPagePresenter> getMainPagePresenter();
	
	AsyncProvider<HomePresenter> getHomePresenter();
	
	PlaceManager getPlaceManager();

	AsyncProvider<EcolePresenter> getEcolePresenter();

	AsyncProvider<EcoleAddPresenter> getEcoleAddPresenter();

	AsyncProvider<TimeInputPresenter> getTimeInputPresenter();

	AsyncProvider<CoursPresenter> getCoursPresenter();

	AsyncProvider<CoursAddPresenter> getCoursAddPresenter();

	AsyncProvider<LogTypesPresenter> getTypesPresenter();

	AsyncProvider<LogTypesAddPresenter> getTypesAddPresenter();

	AsyncProvider<ProfsPresenter> getProfsPresenter();

	AsyncProvider<ProfsAddPresenter> getProfsAddPresenter();

	AsyncProvider<ContactPresenter> getContactPresenter();	
	
	// Thuan
	LoggedInGatekeeper getLoggedInGatekeeper();
	AdminGateKeeper getAdminGateKeeper();

	AsyncProvider<RptTimeByProfPresenter> getExtractDataPresenter();

	AsyncProvider<UserManagementPresenter> getUserManagementPresenter();

	AsyncProvider<RptTimeByDepartmentPresenter> getRptTimeByDepartmentPresenter();

	AsyncProvider<RptTimeBySchoolPresenter> getRptTimeBySchoolPresenter();

	AsyncProvider<RptTimeByMonthPresenter> getRptTimeByMonthPresenter();

	AsyncProvider<SettingsPresenter> getSettingsPresenter();

	AsyncProvider<FrmPasswordPresenter> getFrmPasswordPresenter();
}
