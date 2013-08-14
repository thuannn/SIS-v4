package com.lemania.sis.client.view;

import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.presenter.FrmBulletinViewDetailPresenter;
import com.lemania.sis.client.uihandler.FrmBulletinViewDetailUiHandler;
import com.lemania.sis.shared.BulletinProxy;
import com.lemania.sis.shared.ClasseProxy;
import com.lemania.sis.shared.StudentProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.user.client.ui.HorizontalPanel;

public class FrmBulletinViewDetailView extends ViewWithUiHandlers<FrmBulletinViewDetailUiHandler> implements
		FrmBulletinViewDetailPresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, FrmBulletinViewDetailView> {
	}

	@Inject
	public FrmBulletinViewDetailView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	@UiField FlexTable tblBulletin;
	@UiField ListBox lstBulletins;
	@UiField ListBox lstClasses;
	@UiField HorizontalPanel pnlAdmin;
	
	@Override
	public void resetForm() {
		//
		lstBulletins.setSelectedIndex(0);
		tblBulletin.clear();
	}

	@Override
	public void setStudentListData(List<BulletinProxy> bulletins) {
		//
		lstBulletins.clear();
		lstBulletins.addItem("-","");
		for (BulletinProxy bulletin : bulletins) {
			lstBulletins.addItem( bulletin.getStudentName() + " - " + bulletin.getClasseName() + " - " + bulletin.getYear(), 
					bulletin.getId().toString());
		}
	}

	@Override
	public void setClasseList(List<ClasseProxy> classes) {
		//
		lstClasses.clear();
		lstClasses.addItem("-","");
		for (ClasseProxy clazz : classes) {
			lstClasses.addItem( clazz.getClassName(), clazz.getId().toString());
		}
	}
	
	@UiHandler("lstClasses")
	void onLstClassesChange(ChangeEvent event) {
		if (getUiHandlers() != null)
			getUiHandlers().onClassChange(lstClasses.getValue(lstClasses.getSelectedIndex()));
	}

	@Override
	public void showAdminPanel(Boolean show) {
		//
		pnlAdmin.setVisible(show);
	}
}
