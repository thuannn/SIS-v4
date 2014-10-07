package com.lemania.sis.client.form.parent.absencelist;

import java.util.List;

import javax.inject.Inject;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.user.client.ui.ListBox;
import com.lemania.sis.shared.absenceitem.AbsenceItemProxy;
import com.lemania.sis.shared.bulletin.BulletinProxy;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.user.client.ui.FlexTable;

class AbsenceListView extends ViewWithUiHandlers<AbsenceListUiHandlers> implements AbsenceListPresenter.MyView {
    interface Binder extends UiBinder<Widget, AbsenceListView> {
    }

    @UiField ListBox lstStudents;
    @UiField FlexTable tblAbsences;
    
    //
    private int rowHeader = 0;
    private int rowStart = 1;

    @Inject
    AbsenceListView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
    }
    
    /*
     * */
	@Override
	public void setStudentListData(List<BulletinProxy> students) {
		//
		lstStudents.clear();
		lstStudents.addItem("Choisir");
		for (BulletinProxy bp : students) {
			lstStudents.addItem( bp.getStudentName(), bp.getStudentId().toString() );
		}
	}
	
	
	/*
	 * */
	@UiHandler("lstStudents")
	void onLstStudentsChange(ChangeEvent event) {
		//
		if (lstStudents.getValue(lstStudents.getSelectedIndex()).equals(""))
			return;
		//
		getUiHandlers().loadAbsenceList( lstStudents.getValue(lstStudents.getSelectedIndex()) );
	}
	

	/*
	 * */
	@Override
	public void setStudentAbsenceListData(List<AbsenceItemProxy> absences) {
		//
		initializeTable();
		//
		int rowPos = rowStart;
		String date = "";
		for (AbsenceItemProxy ab : absences) {
			//
			date = ab.getStrAbsenceDate();
			tblAbsences.setText(rowPos, 0, date.substring(6) + "." + date.substring(4,6) + "." + date.substring(0,4) );
			//
			tblAbsences.setText(rowPos, 1, ab.getPeriodDesc() );
			tblAbsences.setText(rowPos, 2, ab.getCodeAbsenceType() );
			tblAbsences.setText(rowPos, 3, (ab.getLateMinutes() > 0) ? Integer.toString(ab.getLateMinutes()) : "" );
			tblAbsences.setText(rowPos, 4, ab.getProfName() );
			tblAbsences.setText(rowPos, 5, ab.getSubjectName() );
			tblAbsences.setText(rowPos, 6, (ab.isJusttified() ? "Oui" : "Non") );
		}
		styleTable();
	}
	
	
	/*
	 * */
	private void styleTable() {
		//
		tblAbsences.setCellSpacing(0);
		tblAbsences.setCellPadding(3);		
		//
		for (int i=0; i<tblAbsences.getCellCount( rowHeader ); i++)
			tblAbsences.getCellFormatter().setStyleName( rowHeader, i, "bulletinHeader");	
		//
		for (int i=0; i<tblAbsences.getCellCount(0); i++)
			for (int j=1; j<tblAbsences.getRowCount(); j++) {
				if (tblAbsences.isCellPresent(j, i)) {
					if (tblAbsences.getCellFormatter().getStyleName(j, i).equals(""))
						tblAbsences.getCellFormatter().setStyleName(j, i, "bulletinBrancheLine");
				}
			}
	}
	

	/*
	 * */
	private void initializeTable() {
		//
		tblAbsences.removeAllRows();
		//
		tblAbsences.setText(rowHeader, 0, "Date");
		tblAbsences.setText(rowHeader, 1, "Period");
		tblAbsences.setText(rowHeader, 2, "Type");
		tblAbsences.setText(rowHeader, 3, "Minutes");
		tblAbsences.setText(rowHeader, 4, "Professeur");
		tblAbsences.setText(rowHeader, 5, "Cours");
		tblAbsences.setText(rowHeader, 6, "Excusée");
	}

	
	/*
	 * */
	@Override
	public void resetUI() {
		//
		tblAbsences.removeAllRows();
		lstStudents.clear();
	}
}