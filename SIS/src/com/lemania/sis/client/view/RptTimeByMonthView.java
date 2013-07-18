package com.lemania.sis.client.view;

import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.presenter.RptTimeByMonthPresenter;
import com.lemania.sis.client.uihandler.RptTimeByMonthUiHandler;
import com.lemania.sis.shared.LogProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.FlexTable;

public class RptTimeByMonthView extends ViewWithUiHandlers<RptTimeByMonthUiHandler> implements
		RptTimeByMonthPresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, RptTimeByMonthView> {
	}

	@Inject
	public RptTimeByMonthView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField ListBox lstYear;
	@UiField ListBox lstMonth;
	@UiField FlexTable tblProfs;
	
	@UiHandler("lstYear")
	public void onLstYearChanged(ChangeEvent event){
		clearTable();
		lstMonth.setSelectedIndex(0);
	}
	
	@UiHandler("lstMonth")
	public void onLstMonthChanged(ChangeEvent event){
		clearTable();
		if (lstMonth.getValue(lstMonth.getSelectedIndex()).equals(""))
			return;
		if (getUiHandlers() != null){
			getUiHandlers().onMonthChanged(
					Integer.parseInt(lstYear.getValue(lstYear.getSelectedIndex())), 
					Integer.parseInt(lstMonth.getValue(lstMonth.getSelectedIndex())));
		}
	}
	
	public void styleTable(){
		for (int j=0; j<tblProfs.getRowCount(); j++){
			for (int k=0; k<tblProfs.getCellCount(j); k++){
				if (tblProfs.getCellFormatter().getStyleName(j,k).equals(""))
					tblProfs.getCellFormatter().addStyleName(j,k,"FlexTable-Cell");
			}
		}
		// tblProfs.setStyleName("FlexTable");
	}
	
	public void clearTable(){
		tblProfs.removeAllRows();
	}
	
	@Override
	public void initializeValues(int currentMonth, int currentYear) {
		// List of month, auto-select current month
		lstMonth.clear();
		lstMonth.addItem("");
		for (int i=0; i<12; i++) {
			lstMonth.addItem( Integer.toString(i + 1), Integer.toString(i + 1));
		}
		
		// List of year, auto-select current year
		lstYear.clear();
		for (int i=0; i<3; i++) {
			lstYear.addItem( Integer.toString(i -1 + currentYear), Integer.toString(i -1 + currentYear));
			if ((i -1 + currentYear)== currentYear)
				lstYear.setSelectedIndex(i);
		}
	}

	@Override
	public void initializeTable() {
		clearTable();
		
		// Draw the table structure
		tblProfs.setWidth("100%");
		tblProfs.setText(0, 0, "Professeur");
		tblProfs.setText(0, 1, "Département");
		tblProfs.setText(0, 2, "Cours");
		tblProfs.setText(0, 3, "Maladie");
		tblProfs.setText(0, 4, "Fériés");
		tblProfs.setText(0, 5, "Privé");
		tblProfs.setText(0, 6, "Supervision");
		tblProfs.setText(0, 7, "Total");
		tblProfs.setText(0, 8, "Frais");
		tblProfs.setText(0, 9, "Remarque");
		
		styleTable();
	}

	@Override
	public void setLogData(List<LogProxy> logs) {
		// Draw data to the table
		initializeTable();
		
		String prevProf = "";
		String prevDept = "";
		String currentMemo = "";
		int currentRow = 0; 	// keep the current row to write time details
		int currentCol = 0;
		double totalHour = 0;
		double totalProf = 0;
		double totalCash = 0;
		double totalProfCash = 0;
		// Set the data
		for (int i=0; i<logs.size(); i++){
			// if it's the same professor, does not need to display the name again 
			// otherwise, add a blank line and show the new name
			if (!prevProf.equals(logs.get(i).getProfName())) {				
				currentRow = i+1;
				if (currentRow > 1) {
					totalProf = totalProf + totalHour;
					totalProfCash = totalProfCash + totalCash;
					tblProfs.setText(currentRow, 7, Double.toString(totalProf));					
					tblProfs.setText(currentRow, 8, "CHF " + Double.toString(totalProfCash));
					tblProfs.getCellFormatter().addStyleName(currentRow,7,"FlexTable-Cell-Total");
					tblProfs.getCellFormatter().addStyleName(currentRow,8,"FlexTable-Cell-Total");
					
					totalHour = 0;
					totalProf = 0;
					totalCash = 0;
					totalProfCash = 0;
					
					currentRow = currentRow + 1;					
					for (int k=0; k<10; k++){
						tblProfs.setText(currentRow, 0, "");					
						tblProfs.getCellFormatter().addStyleName(currentRow,k,"FlexTable-Cell-Divider");
					}		
					currentRow = currentRow + 1;	
				}
				currentMemo = "";
				tblProfs.setText(currentRow, 0, logs.get(i).getProfName());	
				tblProfs.setText(currentRow, 1, logs.get(i).getCourseName());
			}
			
			// if the name of department changes, check if prof name changes too,
			// if yes, add a blank line
			if ((!prevDept.equals(logs.get(i).getCourseName()))){						
				currentRow = i+1;
				
				if (prevProf.equals(logs.get(i).getProfName())) {
					totalProf = totalProf + totalHour;
					totalProfCash = totalProfCash + totalCash;
				}
				
				if (!prevProf.equals(logs.get(i).getProfName()) && (currentRow > 1)) {					
					currentRow = currentRow + 1;
					for (int k=0; k<10; k++){
						tblProfs.setText(currentRow, 0, "");
						tblProfs.getCellFormatter().addStyleName(currentRow,k,"FlexTable-Cell-Divider");
					}
					currentRow = currentRow + 1;
				}
				
				tblProfs.setText(currentRow, 1, logs.get(i).getCourseName());
				currentMemo = "";
				totalHour = 0;
				totalCash = 0;
			}
			
			// choose the column number base on the log type
			if (logs.get(i).getTypeName().equals("1.Cours"))
				currentCol = 2;				
			if (logs.get(i).getTypeName().equals("2.Maladie/ACC"))
				currentCol = 3;
			if (logs.get(i).getTypeName().equals("3.Fériés"))
				currentCol = 4;
			if (logs.get(i).getTypeName().equals("4.Privé"))
				currentCol = 5;
			if (logs.get(i).getTypeName().equals("5.Supervision"))
				currentCol = 6;
			if (logs.get(i).getTypeName().equals("6.Frais"))
				currentCol = 8;
			
			// calculate the total hour
			if (!logs.get(i).getTypeName().equals("6.Frais"))
				totalHour = totalHour + logs.get(i).getHour();
			
			// calculate the total cash
			if (logs.get(i).getTypeName().equals("6.Frais"))
				totalCash = totalCash + logs.get(i).getHour();
			
			// draw the data
			if (logs.get(i).getTypeName().equals("6.Frais"))
				tblProfs.setText(currentRow, currentCol, (logs.get(i).getHour() > 0) ? "CHF " + Double.toString(logs.get(i).getHour()) : "");
			else
				tblProfs.setText(currentRow, currentCol, (logs.get(i).getHour() > 0) ? Double.toString(logs.get(i).getHour()) : "");
			
			// show the total hour of previous department
			tblProfs.setText(currentRow, 7, Double.toString(totalHour));			
			
			// show the notes
			if (!logs.get(i).getMemo().equals(""))
				currentMemo = logs.get(i).getMemo() + ". " + currentMemo;
			tblProfs.setText(currentRow, 9, currentMemo);
			
			// keep the current data to compare with the following row
			prevProf = logs.get(i).getProfName();
			prevDept = logs.get(i).getCourseName();
			
			if (i==logs.size()-1) {
				currentRow = i+2;
				totalProf = totalProf + totalHour;
				totalProfCash = totalProfCash + totalCash;
				tblProfs.setText(currentRow, 7, Double.toString(totalProf));					
				tblProfs.setText(currentRow, 8, "CHF " + Double.toString(totalProfCash));
				tblProfs.getCellFormatter().addStyleName(currentRow,7,"FlexTable-Cell-Total");
				tblProfs.getCellFormatter().addStyleName(currentRow,8,"FlexTable-Cell-Total");
			}
		}
		
		// Set the stylesheet
		styleTable();
	}
}
