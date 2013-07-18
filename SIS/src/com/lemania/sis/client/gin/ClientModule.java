package com.lemania.sis.client.gin;

import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;
import com.gwtplatform.mvp.client.gin.DefaultModule;
import com.lemania.sis.client.place.DefaultPlace;
import com.lemania.sis.client.place.NameTokens;
import com.lemania.sis.client.presenter.MainPagePresenter;
import com.lemania.sis.client.presenter.HomePresenter;
import com.lemania.sis.client.presenter.EcolePresenter;
import com.lemania.sis.client.view.ContactView;
import com.lemania.sis.client.view.CoursAddView;
import com.lemania.sis.client.view.CoursView;
import com.lemania.sis.client.view.EcoleAddView;
import com.lemania.sis.client.view.EcoleView;
import com.lemania.sis.client.view.FrmPasswordView;
import com.lemania.sis.client.view.HomeView;
import com.lemania.sis.client.view.LogTypesAddView;
import com.lemania.sis.client.view.LogTypesView;
import com.lemania.sis.client.view.MainPageView;
import com.lemania.sis.client.view.ProfsAddView;
import com.lemania.sis.client.view.ProfsView;
import com.lemania.sis.client.view.RptTimeByDepartmentView;
import com.lemania.sis.client.view.RptTimeByMonthView;
import com.lemania.sis.client.view.RptTimeByProfView;
import com.lemania.sis.client.view.RptTimeBySchoolView;
import com.lemania.sis.client.view.SettingsView;
import com.lemania.sis.client.view.TimeInputView;
import com.lemania.sis.client.view.UserManagementView;
import com.lemania.sis.client.presenter.EcoleAddPresenter;
import com.lemania.sis.client.presenter.LogTypesAddPresenter;
import com.lemania.sis.client.presenter.LogTypesPresenter;
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
import com.lemania.sis.client.place.SISPlaceManager;

public class ClientModule extends AbstractPresenterModule {

	@Override
	protected void configure() {
		// Singletons
		install(new DefaultModule(SISPlaceManager.class));
		
		// Set DefaultPlace to homepage
		bindConstant().annotatedWith(DefaultPlace.class).to(
				NameTokens.homepage);
		
		bindPresenter(MainPagePresenter.class, MainPagePresenter.MyView.class,
				MainPageView.class, MainPagePresenter.MyProxy.class);

		bindPresenter(HomePresenter.class, HomePresenter.MyView.class,
				HomeView.class, HomePresenter.MyProxy.class);

		bindPresenter(EcolePresenter.class, EcolePresenter.MyView.class,
				EcoleView.class, EcolePresenter.MyProxy.class);

		bindPresenter(EcoleAddPresenter.class, EcoleAddPresenter.MyView.class,
				EcoleAddView.class, EcoleAddPresenter.MyProxy.class);

		bindPresenter(TimeInputPresenter.class,
				TimeInputPresenter.MyView.class, TimeInputView.class,
				TimeInputPresenter.MyProxy.class);

		bindPresenter(CoursPresenter.class, CoursPresenter.MyView.class,
				CoursView.class, CoursPresenter.MyProxy.class);

		bindPresenter(CoursAddPresenter.class, CoursAddPresenter.MyView.class,
				CoursAddView.class, CoursAddPresenter.MyProxy.class);

		bindPresenter(LogTypesPresenter.class, LogTypesPresenter.MyView.class,
				LogTypesView.class, LogTypesPresenter.MyProxy.class);

		bindPresenter(LogTypesAddPresenter.class, LogTypesAddPresenter.MyView.class,
				LogTypesAddView.class, LogTypesAddPresenter.MyProxy.class);

		bindPresenter(ProfsPresenter.class, ProfsPresenter.MyView.class,
				ProfsView.class, ProfsPresenter.MyProxy.class);

		bindPresenter(ProfsAddPresenter.class, ProfsAddPresenter.MyView.class,
				ProfsAddView.class, ProfsAddPresenter.MyProxy.class);

		bindPresenter(ContactPresenter.class, ContactPresenter.MyView.class,
				ContactView.class, ContactPresenter.MyProxy.class);

		bindPresenter(RptTimeByProfPresenter.class,
				RptTimeByProfPresenter.MyView.class, RptTimeByProfView.class,
				RptTimeByProfPresenter.MyProxy.class);

		bindPresenter(UserManagementPresenter.class,
				UserManagementPresenter.MyView.class, UserManagementView.class,
				UserManagementPresenter.MyProxy.class);

		bindPresenter(RptTimeByDepartmentPresenter.class,
				RptTimeByDepartmentPresenter.MyView.class,
				RptTimeByDepartmentView.class,
				RptTimeByDepartmentPresenter.MyProxy.class);

		bindPresenter(RptTimeBySchoolPresenter.class,
				RptTimeBySchoolPresenter.MyView.class,
				RptTimeBySchoolView.class,
				RptTimeBySchoolPresenter.MyProxy.class);

		bindPresenter(RptTimeByMonthPresenter.class,
				RptTimeByMonthPresenter.MyView.class, RptTimeByMonthView.class,
				RptTimeByMonthPresenter.MyProxy.class);

		bindPresenter(SettingsPresenter.class, SettingsPresenter.MyView.class,
				SettingsView.class, SettingsPresenter.MyProxy.class);

		bindPresenter(FrmPasswordPresenter.class,
				FrmPasswordPresenter.MyView.class, FrmPasswordView.class,
				FrmPasswordPresenter.MyProxy.class);
	}
}