package com.lemania.sis.client.gin;

import com.google.web.bindery.event.shared.EventBus;
import com.google.gwt.inject.client.AsyncProvider;
import com.google.gwt.inject.client.GinModules;
import com.google.gwt.inject.client.Ginjector;
import com.google.inject.Provider;
import com.gwtplatform.mvp.client.proxy.PlaceManager;
import com.lemania.sis.client.AdminGateKeeper;
import com.lemania.sis.client.LoggedInGatekeeper;
import com.lemania.sis.client.form.attendancelist.AttendanceListPresenter;
import com.lemania.sis.client.form.bulletincreation.FrmBulletinCreationPresenter;
import com.lemania.sis.client.form.classroom.ClassroomPresenter;
import com.lemania.sis.client.form.mainpage.MainPagePresenter;
import com.lemania.sis.client.form.markinput.FrmMarkInputPresenter;
import com.lemania.sis.client.form.masteragenda.MasterAgendaPresenter;
import com.lemania.sis.client.form.motifabsence.MotifAbsencePresenter;
import com.lemania.sis.client.form.parentmgt.ParentManagementPresenter;
import com.lemania.sis.client.form.periodmanagement.PeriodManagementPresenter;
import com.lemania.sis.client.form.profagenda.ProfessorAgendaPresenter;
import com.lemania.sis.client.form.studentagenda.StudentAgendaPresenter;
import com.lemania.sis.client.form.studentmgt.StudentPresenter;
import com.lemania.sis.client.form.usermgt.UserManagementPresenter;
import com.lemania.sis.client.presenter.FrmEvaluationInputPresenter;
import com.lemania.sis.client.presenter.FrmEvaluationInputStudentPresenter;
import com.lemania.sis.client.presenter.FrmEvaluationReportListPresenter;
import com.lemania.sis.client.presenter.FrmSubjectListPresenter;
import com.lemania.sis.client.presenter.HomePresenter;
import com.lemania.sis.client.presenter.EcolePresenter;
import com.lemania.sis.client.presenter.EcoleAddPresenter;
import com.lemania.sis.client.presenter.ProfsPresenter;
import com.lemania.sis.client.presenter.ProfsAddPresenter;
import com.lemania.sis.client.presenter.ContactPresenter;
import com.lemania.sis.client.presenter.SettingsPresenter;
import com.lemania.sis.client.presenter.FrmPasswordPresenter;
import com.lemania.sis.client.presenter.StudentAddPresenter;
import com.lemania.sis.client.presenter.FrmBrancheListPresenter;
import com.lemania.sis.client.presenter.FrmBrancheAddPresenter;
import com.lemania.sis.client.presenter.FrmSubjectAddPresenter;
import com.lemania.sis.client.presenter.CoursAddPresenter;
import com.lemania.sis.client.presenter.CoursPresenter;
import com.lemania.sis.client.presenter.FrmClasseListPresenter;
import com.lemania.sis.client.presenter.FrmClasseAddPresenter;
import com.lemania.sis.client.presenter.ProfileManagementPresenter;
import com.lemania.sis.client.presenter.FrmBulletinViewDetailPresenter;
import com.lemania.sis.client.presenter.FrmBulletinManagementPresenter;
import com.lemania.sis.client.presenter.FrmBulletinViewSummaryPresenter;

@GinModules({ ClientModule.class })
public interface ClientGinjector extends Ginjector {
	
	EventBus getEventBus();
	
	Provider<MainPagePresenter> getMainPagePresenter();
	
	AsyncProvider<HomePresenter> getHomePresenter();
	
	PlaceManager getPlaceManager();

	AsyncProvider<EcolePresenter> getEcolePresenter();

	AsyncProvider<EcoleAddPresenter> getEcoleAddPresenter();

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

	AsyncProvider<FrmSubjectListPresenter> getSubjectListPresenter();

	AsyncProvider<FrmSubjectAddPresenter> getFrmSubjectAddPresenter();

	AsyncProvider<CoursAddPresenter> getCoursAddPresenter();

	AsyncProvider<CoursPresenter> getCoursPresenter();

	AsyncProvider<FrmClasseListPresenter> getFrmClasseListPresenter();

	AsyncProvider<FrmClasseAddPresenter> getFrmClasseAddPresenter();

	AsyncProvider<ProfileManagementPresenter> getProfileManagementPresenter();

	AsyncProvider<FrmBulletinCreationPresenter> getFrmBulletinCreationPresenter();

	AsyncProvider<FrmMarkInputPresenter> getFrmMarkInputPresenter();

	AsyncProvider<FrmBulletinViewDetailPresenter> getFrmBulletinViewDetailPresenter();

	AsyncProvider<FrmBulletinManagementPresenter> getFrmBulletinManagementPresenter();

	AsyncProvider<FrmBulletinViewSummaryPresenter> getFrmBulletinViewSummaryPresenter();

	AsyncProvider<FrmEvaluationReportListPresenter> getFrmEvaluationReportListPresenter();

	AsyncProvider<FrmEvaluationInputPresenter> getFrmEvaluationInputPresenter();

	AsyncProvider<FrmEvaluationInputStudentPresenter> getFrmEvaluationInputStudentPresenter();
	
	AsyncProvider<ClassroomPresenter> getClassroomPresenter();
	
	AsyncProvider<MasterAgendaPresenter> getFrmMasterAgenda();
	
	AsyncProvider<PeriodManagementPresenter> getPeriodManagementPresenter();
	
	AsyncProvider<StudentAgendaPresenter> getStudentAgendaPresenter();
	
	AsyncProvider<ProfessorAgendaPresenter> getProfessorAgendaPresenter();
	
	AsyncProvider<ParentManagementPresenter> getParentManagementPresenter();
	
	AsyncProvider<MotifAbsencePresenter> getMotifAbsencePresenter();
	
	AsyncProvider<AttendanceListPresenter> getAttendanceListPresenter();
}
