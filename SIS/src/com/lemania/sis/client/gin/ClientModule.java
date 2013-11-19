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
import com.lemania.sis.client.view.FrmBrancheAddView;
import com.lemania.sis.client.view.FrmBrancheListView;
import com.lemania.sis.client.view.FrmBulletinCreationView;
import com.lemania.sis.client.view.FrmBulletinManagementView;
import com.lemania.sis.client.view.FrmBulletinViewDetailView;
import com.lemania.sis.client.view.FrmBulletinViewSummaryView;
import com.lemania.sis.client.view.FrmClasseAddView;
import com.lemania.sis.client.view.FrmClasseListView;
import com.lemania.sis.client.view.FrmMarkInputView;
import com.lemania.sis.client.view.FrmPasswordView;
import com.lemania.sis.client.view.FrmSubjectAddView;
import com.lemania.sis.client.view.FrmSubjectListView;
import com.lemania.sis.client.view.HomeView;
import com.lemania.sis.client.view.MainPageView;
import com.lemania.sis.client.view.ProfileManagementView;
import com.lemania.sis.client.view.ProfsAddView;
import com.lemania.sis.client.view.ProfsView;
import com.lemania.sis.client.view.SettingsView;
import com.lemania.sis.client.view.StudentAddView;
import com.lemania.sis.client.view.StudentView;
import com.lemania.sis.client.view.UserManagementView;
import com.lemania.sis.client.presenter.EcoleAddPresenter;
import com.lemania.sis.client.presenter.FrmSubjectListPresenter;
import com.lemania.sis.client.presenter.ProfsPresenter;
import com.lemania.sis.client.presenter.ProfsAddPresenter;
import com.lemania.sis.client.presenter.ContactPresenter;
import com.lemania.sis.client.presenter.UserManagementPresenter;
import com.lemania.sis.client.presenter.SettingsPresenter;
import com.lemania.sis.client.presenter.FrmPasswordPresenter;
import com.lemania.sis.client.place.SISPlaceManager;
import com.lemania.sis.client.presenter.FrmEvaluationInputPresenter;
import com.lemania.sis.client.presenter.FrmEvaluationInputStudentPresenter;
import com.lemania.sis.client.presenter.FrmEvaluationReportListPresenter;
import com.lemania.sis.client.presenter.StudentPresenter;
import com.lemania.sis.client.presenter.StudentAddPresenter;
import com.lemania.sis.client.presenter.FrmBrancheListPresenter;
import com.lemania.sis.client.presenter.FrmBrancheAddPresenter;
import com.lemania.sis.client.presenter.FrmSubjectAddPresenter;
import com.lemania.sis.client.presenter.CoursAddPresenter;
import com.lemania.sis.client.presenter.CoursPresenter;
import com.lemania.sis.client.presenter.FrmClasseListPresenter;
import com.lemania.sis.client.presenter.FrmClasseAddPresenter;
import com.lemania.sis.client.presenter.ProfileManagementPresenter;
import com.lemania.sis.client.presenter.FrmBulletinCreationPresenter;
import com.lemania.sis.client.presenter.FrmMarkInputPresenter;
import com.lemania.sis.client.presenter.FrmBulletinViewDetailPresenter;
import com.lemania.sis.client.presenter.FrmBulletinManagementPresenter;
import com.lemania.sis.client.presenter.FrmBulletinViewSummaryPresenter;
import com.lemania.sis.client.view.FrmEvaluationReportListView;
import com.lemania.sis.client.view.FrmEvaluationInputView;
import com.lemania.sis.client.view.FrmEvaluationInputStudentView;

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

		bindPresenter(FrmSubjectListPresenter.class,
				FrmSubjectListPresenter.MyView.class, FrmSubjectListView.class,
				FrmSubjectListPresenter.MyProxy.class);

		bindPresenter(FrmSubjectAddPresenter.class,
				FrmSubjectAddPresenter.MyView.class, FrmSubjectAddView.class,
				FrmSubjectAddPresenter.MyProxy.class);

		bindPresenter(CoursAddPresenter.class, CoursAddPresenter.MyView.class,
				CoursAddView.class, CoursAddPresenter.MyProxy.class);

		bindPresenter(CoursPresenter.class, CoursPresenter.MyView.class,
				CoursView.class, CoursPresenter.MyProxy.class);

		bindPresenter(FrmClasseListPresenter.class,
				FrmClasseListPresenter.MyView.class, FrmClasseListView.class,
				FrmClasseListPresenter.MyProxy.class);

		bindPresenter(FrmClasseAddPresenter.class,
				FrmClasseAddPresenter.MyView.class, FrmClasseAddView.class,
				FrmClasseAddPresenter.MyProxy.class);

		bindPresenter(ProfileManagementPresenter.class,
				ProfileManagementPresenter.MyView.class,
				ProfileManagementView.class,
				ProfileManagementPresenter.MyProxy.class);

		bindPresenter(FrmBulletinCreationPresenter.class,
				FrmBulletinCreationPresenter.MyView.class,
				FrmBulletinCreationView.class,
				FrmBulletinCreationPresenter.MyProxy.class);

		bindPresenter(FrmMarkInputPresenter.class,
				FrmMarkInputPresenter.MyView.class, FrmMarkInputView.class,
				FrmMarkInputPresenter.MyProxy.class);

		bindPresenter(FrmBulletinViewDetailPresenter.class,
				FrmBulletinViewDetailPresenter.MyView.class,
				FrmBulletinViewDetailView.class,
				FrmBulletinViewDetailPresenter.MyProxy.class);

		bindPresenter(FrmBulletinManagementPresenter.class,
				FrmBulletinManagementPresenter.MyView.class,
				FrmBulletinManagementView.class,
				FrmBulletinManagementPresenter.MyProxy.class);

		bindPresenter(FrmBulletinViewSummaryPresenter.class,
				FrmBulletinViewSummaryPresenter.MyView.class,
				FrmBulletinViewSummaryView.class,
				FrmBulletinViewSummaryPresenter.MyProxy.class);

		bindPresenter(FrmEvaluationReportListPresenter.class,
				FrmEvaluationReportListPresenter.MyView.class,
				FrmEvaluationReportListView.class,
				FrmEvaluationReportListPresenter.MyProxy.class);

		bindPresenter(FrmEvaluationInputPresenter.class,
				FrmEvaluationInputPresenter.MyView.class,
				FrmEvaluationInputView.class,
				FrmEvaluationInputPresenter.MyProxy.class);

		bindPresenter(FrmEvaluationInputStudentPresenter.class,
				FrmEvaluationInputStudentPresenter.MyView.class,
				FrmEvaluationInputStudentView.class,
				FrmEvaluationInputStudentPresenter.MyProxy.class);
	}
}