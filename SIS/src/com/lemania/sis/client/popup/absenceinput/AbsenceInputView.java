package com.lemania.sis.client.popup.absenceinput;

import java.util.Date;
import java.util.List;

import com.gwtplatform.mvp.client.PopupViewImpl;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Widget;
import com.google.web.bindery.event.shared.EventBus;
import com.google.inject.Inject;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.dom.client.Style.VerticalAlign;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.RadioButton;
import com.google.gwt.view.client.ListDataProvider;
import com.lemania.sis.shared.bulletinsubject.BulletinSubjectProxy;
import com.lemania.sis.shared.period.PeriodProxy;
import com.lemania.sis.shared.student.StudentProxy;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.datepicker.client.DateBox;

public class AbsenceInputView extends PopupViewImpl implements
		AbsenceInputPresenter.MyView {

	private final Widget widget;
	
	//
	ListDataProvider<BulletinSubjectProxy> providerBulletins = new ListDataProvider<BulletinSubjectProxy>();
	ListDataProvider<PeriodProxy> providerPeriods = new ListDataProvider<PeriodProxy>();
	
	//
	int constantStudentNameCol = 0;
	int constantStudentNameRowStart = 1;
	
	int constantPeriodsColStart = 2;
	int constantPeriodRow = 0;
	
	int clickedCellIndex;
	int clickedRowIndex;
	

	public interface Binder extends UiBinder<Widget, AbsenceInputView> {
	}

	@Inject
	public AbsenceInputView(final EventBus eventBus, final Binder binder) {
		super(eventBus);
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	
	/*
	 * */
	@UiHandler("cmdClose")
	void onCmdCloseClick(ClickEvent event) {
		//
		this.hide();
	}
	@UiField FlexTable tblAbsences;
	@UiField RadioButton optAbsent;
	@UiField RadioButton optExclude;
	@UiField RadioButton optLate;
	@UiField RadioButton optHealth;
	@UiField Label lblStudentName;
	@UiField DateBox dateAbsence;
	
	
	/*
	 * */
	@Override
	public void setStudentListData(List<BulletinSubjectProxy> bulletinSubjects) {
		//
		providerBulletins.getList().clear();
		providerBulletins.getList().addAll(bulletinSubjects);
		//
		BulletinSubjectProxy bsp;
		tblAbsences.setText(0, 0, "");
		for ( int row = 0; row < bulletinSubjects.size(); row++ ) {
			bsp = bulletinSubjects.get( row );
			tblAbsences.setText( row + this.constantStudentNameRowStart, 0, bsp.getSubjectName() );
			tblAbsences.setText( row + this.constantStudentNameRowStart, 1, bsp.getProfName() );
		}
	}
	
	
	/*
	 * */
	@Override
	public void setPeriodListData(List<PeriodProxy> periods) {
		//
		providerPeriods.getList().clear();
		providerPeriods.getList().addAll(periods);
		//
		for (int i=0; i < providerPeriods.getList().size(); i++) {
			tblAbsences.setText( this.constantPeriodRow, this.constantPeriodsColStart + i, providerPeriods.getList().get(i).getDescription() );
		}
		//
		styleTable();
	}
	
	
	/*
	 * */
	public void styleTable(){
		// Add empty cells
		for (int i= this.constantStudentNameRowStart; i<tblAbsences.getRowCount(); i++) {
			for (int j= this.constantPeriodsColStart; j<tblAbsences.getCellCount(0); j++) {
				tblAbsences.setText(i, j, "");
			}
		}
		
		// Format normal cells
		for (int i=0; i<tblAbsences.getRowCount(); i++) {
			for (int j=0; j<tblAbsences.getCellCount(0); j++) {
				if (tblAbsences.isCellPresent(i, j))
					tblAbsences.getCellFormatter().setStyleName(i, j, "agendaNormal");
			}
		}
		
		// Period cells
		for (int j=0; j<tblAbsences.getCellCount(0); j++) {
			if (tblAbsences.isCellPresent( 0, j))
				tblAbsences.getCellFormatter().setStyleName( 0, j, "agendaTitle");
		}
		
		// Student name cells
		for (int i=0; i<tblAbsences.getRowCount(); i++)
			if (tblAbsences.isCellPresent(i, 0))
				tblAbsences.getCellFormatter().setStyleName(i, 0, "agendaTitle");
		
	}

	
	/*
	 * */
	@Override
	public void resetUI(StudentProxy student) {
		//
		lblStudentName.setText( student.getFirstName() + " " + student.getLastName() );
		//
		dateAbsence.setFormat(new DateBox.DefaultFormat(DateTimeFormat.getFormat("dd.MM.yyyy")));
		dateAbsence.setValue( new Date() );
	}
}
