package com.lemania.sis.client.gin;

import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;
import com.gwtplatform.mvp.client.gin.DefaultModule;
import com.lemania.sis.client.place.DefaultPlace;
import com.lemania.sis.client.place.NameTokens;
import com.lemania.sis.client.presenter.MainPagePresenter;
import com.lemania.sis.client.presenter.HomePresenter;
import com.lemania.sis.client.presenter.EcolePresenter;
import com.lemania.sis.client.view.ContactView;
import com.lemania.sis.client.view.EcoleAddView;
import com.lemania.sis.client.view.EcoleView;
import com.lemania.sis.client.view.FrmBrancheAddView;
import com.lemania.sis.client.view.FrmBrancheListView;
import com.lemania.sis.client.view.FrmPasswordView;
import com.lemania.sis.client.view.HomeView;
import com.lemania.sis.client.view.LogTypesAddView;
import com.lemania.sis.client.view.LogTypesView;
import com.lemania.sis.client.view.MainPageView;
import com.lemania.sis.client.view.ProfsAddView;
import com.lemania.sis.client.view.ProfsView;
import com.lemania.sis.client.view.SettingsView;
import com.lemania.sis.client.view.StudentAddView;
import com.lemania.sis.client.view.StudentView;
import com.lemania.sis.client.view.UserManagementView;
import com.lemania.sis.client.presenter.EcoleAddPresenter;
import com.lemania.sis.client.presenter.LogTypesAddPresenter;
import com.lemania.sis.client.presenter.LogTypesPresenter;
import com.lemania.sis.client.presenter.ProfsPresenter;
import com.lemania.sis.client.presenter.ProfsAddPresenter;
import com.lemania.sis.client.presenter.ContactPresenter;
import com.lemania.sis.client.presenter.UserManagementPresenter;
import com.lemania.sis.client.presenter.SettingsPresenter;
import com.lemania.sis.client.presenter.FrmPasswordPresenter;
import com.lemania.sis.client.place.SISPlaceManager;
import com.lemania.sis.client.presenter.StudentPresenter;
import com.lemania.sis.client.presenter.StudentAddPresenter;
import com.lemania.sis.client.presenter.FrmBrancheListPresenter;
import com.lemania.sis.client.presenter.FrmBrancheAddPresenter;

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

		bindPresenter(UserManagementPresenter.class,
				UserManagementPresenter.MyView.class, UserManagementView.class,
				UserManagementPresenter.MyProxy.class);

		bindPresenter(SettingsPresenter.class, SettingsPresenter.MyView.class,
				SettingsView.class, SettingsPresenter.MyProxy.class);

		bindPresenter(FrmPasswordPresenter.class,
				FrmPasswordPresenter.MyView.class, FrmPasswordView.class,
				FrmPasswordPresenter.MyProxy.class);

		bindPresenter(StudentPresenter.class, StudentPresenter.MyView.class,
				StudentView.class, StudentPresenter.MyProxy.class);

		bindPresenter(StudentAddPresenter.class,
				StudentAddPresenter.MyView.class, StudentAddView.class,
				StudentAddPresenter.MyProxy.class);

		bindPresenter(FrmBrancheListPresenter.class,
				FrmBrancheListPresenter.MyView.class, FrmBrancheListView.class,
				FrmBrancheListPresenter.MyProxy.class);

		bindPresenter(FrmBrancheAddPresenter.class,
				FrmBrancheAddPresenter.MyView.class, FrmBrancheAddView.class,
				FrmBrancheAddPresenter.MyProxy.class);
	}
}