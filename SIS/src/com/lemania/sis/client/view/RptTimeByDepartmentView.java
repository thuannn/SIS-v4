package com.lemania.sis.client.view;

import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.presenter.RptTimeByDepartmentPresenter;
import com.lemania.sis.client.uihandler.RptTimeByDepartmentUiHandler;
import com.lemania.sis.shared.CoursProxy;
import com.lemania.sis.shared.ProfessorProxy;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.user.client.ui.FlexTable;

public class RptTimeByDepartmentView extends ViewWithUiHandlers<RptTimeByDepartmentUiHandler> implements
		RptTimeByDepartmentPresenter.MyView {

	private final Widget widget;
	@UiField ListBox lstDepartments;
	@UiField FlexTable tblProf;
	
	public interface Binder extends UiBinder<Widget, RptTimeByDepartmentView> {
	}

	@Inject
	public RptTimeByDepartmentView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	@UiHandler("lstDepartments")
	void onLstDepartmentsChange(ChangeEvent event) {
		clearLogTable();
		if (lstDepartments.getValue(lstDepartments.getSelectedIndex()).equals(""))
			return;
		if (getUiHandlers() != null)
			getUiHandlers().onDepartmentSelected( lstDepartments.getValue( lstDepartments.getSelectedIndex() ));
	}
	
	@Override
	public void clearLogTable() {
		// Clear Flextable
		tblProf.removeAllRows();
	}

	@Override
	public void initializeTable() {
		tblProf.setWidth("100%");
		tblProf.setText(0, 0, "Professeur");
		tblProf.setText(0, 1, "Jan");
		tblProf.setText(0, 2, "Fev");
		tblProf.setText(0, 3, "Mar");
		tblProf.setText(0, 4, "Avr");
		tblProf.setText(0, 5, "Mai");
		tblProf.setText(0, 6, "Jun");
		tblProf.setText(0, 7, "Jul");
		tblProf.setText(0, 8, "Aou");
		tblProf.setText(0, 9, "Sep");
		tblProf.setText(0, 10, "Oct");
		tblProf.setText(0, 11, "Nov");
		tblProf.setText(0, 12, "Dec");
		tblProf.setText(0, 13, "Total par Prof");
	}
	
	public void styleTable(){
		for (int j=0; j<tblProf.getRowCount(); j++){
			for (int k=0; k<tblProf.getCellCount(j); k++){
				tblProf.getCellFormatter().addStyleName(j,k,"FlexTable-Cell");
			}
		}
		// tblProf.setStyleName("FlexTable");
	}

	@Override
	public void setDepartmentList(List<CoursProxy> depts) {
		lstDepartments.clear();
		lstDepartments.addItem("-","");
		for (int i=0; i<depts.size(); i++)
			lstDepartments.addItem(depts.get(i).getSchoolName() + " - " +depts.get(i).getCoursNom(), depts.get(i).getId().toString());
	}

	@Override
	public void setData(List<ProfessorProxy> profs) {
		// Build table columns
		initializeTable();
		
		int currentRow = 1;
		double totalHour = 0;
		double totalFee = 0;
		
		double total01 = 0;
		double total02 = 0;
		double total03 = 0;
		double total04 = 0;
		double total05 = 0;
		double total06 = 0;
		double total07 = 0;
		double total08 = 0;
		double total09 = 0;
		double total10 = 0;
		double total11 = 0;
		double total12 = 0;
		
		for (int i=0; i<profs.size(); i++){
			totalHour = 0;
			totalFee = 0;
			
			total01 = total01 + profs.get(i).getTotal_01();
			total02 = total02 + profs.get(i).getTotal_02();
			total03 = total03 + profs.get(i).getTotal_03();
			total04 = total04 + profs.get(i).getTotal_04();
			total05 = total05 + profs.get(i).getTotal_05();
			total06 = total06 + profs.get(i).getTotal_06();
			total07 = total07 + profs.get(i).getTotal_07();
			total08 = total08 + profs.get(i).getTotal_08();
			total09 = total09 + profs.get(i).getTotal_09();
			total10 = total10 + profs.get(i).getTotal_10();
			total11 = total11 + profs.get(i).getTotal_11();
			total12 = total12 + profs.get(i).getTotal_12();
			
			tblProf.setText(currentRow, 0, profs.get(i).getProfName());
			
			tblProf.setText(currentRow, 1, (profs.get(i).getTotal_01()>0) ? String.valueOf(profs.get(i).getTotal_01()) : "");
			tblProf.setText(currentRow+1, 0, (profs.get(i).getFee_01()>0) ? "CHF " + String.valueOf(profs.get(i).getFee_01()) : "");
			totalHour = totalHour + profs.get(i).getTotal_01();
			totalFee = totalFee + profs.get(i).getFee_01();
			
			tblProf.setText(currentRow, 2, (profs.get(i).getTotal_02()>0) ? String.valueOf(profs.get(i).getTotal_02()) : "");
			tblProf.setText(currentRow+1, 1, (profs.get(i).getFee_02()>0) ? "CHF " + String.valueOf(profs.get(i).getFee_02()) : "");
			totalHour = totalHour + profs.get(i).getTotal_02();
			totalFee = totalFee + profs.get(i).getFee_02();
			
			tblProf.setText(currentRow, 3, (profs.get(i).getTotal_03()>0) ? String.valueOf(profs.get(i).getTotal_03()) : "");
			tblProf.setText(currentRow+1, 2, (profs.get(i).getFee_03()>0) ? "CHF " + String.valueOf(profs.get(i).getFee_03()) : "");
			totalHour = totalHour + profs.get(i).getTotal_03();
			totalFee = totalFee + profs.get(i).getFee_03();
			
			tblProf.setText(currentRow, 4, (profs.get(i).getTotal_04()>0) ? String.valueOf(profs.get(i).getTotal_04()) : "");
			tblProf.setText(currentRow+1, 3, (profs.get(i).getFee_04()>0) ? "CHF " + String.valueOf(profs.get(i).getFee_04()) : "");
			totalHour = totalHour + profs.get(i).getTotal_04();
			totalFee = totalFee + profs.get(i).getFee_04();
			
			tblProf.setText(currentRow, 5, (profs.get(i).getTotal_05()>0) ? String.valueOf(profs.get(i).getTotal_05()) : "");
			tblProf.setText(currentRow+1, 4, (profs.get(i).getFee_05()>0) ? "CHF " + String.valueOf(profs.get(i).getFee_05()) : "");
			totalHour = totalHour + profs.get(i).getTotal_05();
			totalFee = totalFee + profs.get(i).getFee_05();
			
			tblProf.setText(currentRow, 6, (profs.get(i).getTotal_06()>0) ? String.valueOf(profs.get(i).getTotal_06()) : "");
			tblProf.setText(currentRow+1, 5, (profs.get(i).getFee_06()>0) ? "CHF " + String.valueOf(profs.get(i).getFee_06()) : "");
			totalHour = totalHour + profs.get(i).getTotal_06();
			totalFee = totalFee + profs.get(i).getFee_06();
			
			tblProf.setText(currentRow, 7, (profs.get(i).getTotal_07()>0) ? String.valueOf(profs.get(i).getTotal_07()) : "");
			tblProf.setText(currentRow+1, 6, (profs.get(i).getFee_07()>0) ? "CHF " + String.valueOf(profs.get(i).getFee_07()) : "");
			totalHour = totalHour + profs.get(i).getTotal_07();
			totalFee = totalFee + profs.get(i).getFee_07();
			
			tblProf.setText(currentRow, 8, (profs.get(i).getTotal_08()>0) ? String.valueOf(profs.get(i).getTotal_08()) : "");
			tblProf.setText(currentRow+1, 7, (profs.get(i).getFee_08()>0) ? "CHF " + String.valueOf(profs.get(i).getFee_08()) : "");
			totalHour = totalHour + profs.get(i).getTotal_08();
			totalFee = totalFee + profs.get(i).getFee_08();
			
			tblProf.setText(currentRow, 9, (profs.get(i).getTotal_09()>0) ? String.valueOf(profs.get(i).getTotal_09()) : "");
			tblProf.setText(currentRow+1, 8, (profs.get(i).getFee_09()>0) ? "CHF " + String.valueOf(profs.get(i).getFee_09()) : "");
			totalHour = totalHour + profs.get(i).getTotal_09();
			totalFee = totalFee + profs.get(i).getFee_09();
			
			tblProf.setText(currentRow, 10, (profs.get(i).getTotal_10()>0) ? String.valueOf(profs.get(i).getTotal_10()) : "");
			tblProf.setText(currentRow+1, 9, (profs.get(i).getFee_10()>0) ? "CHF " + String.valueOf(profs.get(i).getFee_10()) : "");
			totalHour = totalHour + profs.get(i).getTotal_10();
			totalFee = totalFee + profs.get(i).getFee_10();
			
			tblProf.setText(currentRow, 11, (profs.get(i).getTotal_11()>0) ? String.valueOf(profs.get(i).getTotal_11()) : "");
			tblProf.setText(currentRow+1, 10, (profs.get(i).getFee_11()>0) ? "CHF " + String.valueOf(profs.get(i).getFee_11()) : "");
			totalHour = totalHour + profs.get(i).getTotal_11();
			totalFee = totalFee + profs.get(i).getFee_11();
			
			tblProf.setText(currentRow, 12, (profs.get(i).getTotal_12()>0) ? String.valueOf(profs.get(i).getTotal_12()) : "");
			tblProf.setText(currentRow+1, 11, (profs.get(i).getFee_12()>0) ? "CHF " + String.valueOf(profs.get(i).getFee_12()) : "");
			totalHour = totalHour + profs.get(i).getTotal_12();
			totalFee = totalFee + profs.get(i).getFee_12();
			
			tblProf.setText(currentRow, 13, (totalHour>0) ? String.valueOf(totalHour) : "");
			tblProf.setText(currentRow+1, 12, (totalFee>0) ? "CHF " + String.valueOf(totalFee) : "");
			
			tblProf.getFlexCellFormatter().setRowSpan(currentRow, 0, 2);
			currentRow = currentRow + 2;
		}
	
		tblProf.setText(currentRow + 1, 0, "Total mensuel");
		tblProf.setText(currentRow + 1, 1, (total01>0) ? String.valueOf(total01) : "");
		tblProf.setText(currentRow + 1, 2, (total02>0) ? String.valueOf(total02) : "");
		tblProf.setText(currentRow + 1, 3, (total03>0) ? String.valueOf(total03) : "");
		tblProf.setText(currentRow + 1, 4, (total04>0) ? String.valueOf(total04) : "");
		tblProf.setText(currentRow + 1, 5, (total05>0) ? String.valueOf(total05) : "");
		tblProf.setText(currentRow + 1, 6, (total06>0) ? String.valueOf(total06) : "");
		tblProf.setText(currentRow + 1, 7, (total07>0) ? String.valueOf(total07) : "");
		tblProf.setText(currentRow + 1, 8, (total08>0) ? String.valueOf(total08) : "");
		tblProf.setText(currentRow + 1, 9, (total09>0) ? String.valueOf(total09) : "");
		tblProf.setText(currentRow + 1, 10, (total10>0) ? String.valueOf(total10) : "");
		tblProf.setText(currentRow + 1, 11, (total11>0) ? String.valueOf(total11) : "");
		tblProf.setText(currentRow + 1, 12, (total12>0) ? String.valueOf(total12) : "");
		
		// Set the stylesheet
		styleTable();
	}
}
