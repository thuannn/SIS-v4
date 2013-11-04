package com.lemania.sis.client.view;

import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.NotificationTypes;
import com.lemania.sis.client.presenter.SettingsPresenter;
import com.lemania.sis.client.uihandler.SettingOptionsUiHandler;
import com.lemania.sis.shared.SettingOptionProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.user.client.ui.SimpleCheckBox;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.FlowPanel;

public class SettingsView 
	extends ViewWithUiHandlers<SettingOptionsUiHandler> 
	implements SettingsPresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, SettingsView> {
	}

	@Inject
	public SettingsView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField Button cmdSave;
	@UiField SimpleCheckBox blnBlock;
	@UiField ListBox lstDays;
	@UiField Label lblUpdateStatus;
	@UiField ListBox lstEcoles;
	@UiField Button cmdFixStudentName;
	@UiField FlowPanel pnlAdmin;
	@UiField Button cmdSaveDateMatu;
	@UiField Button cmdSaveDateES;
	@UiField ListBox dayMatuT1;
	@UiField ListBox dayMatuT2;
	@UiField ListBox dayEST3;
	@UiField ListBox monthMatuT1;
	@UiField ListBox monthMatuT2;
	@UiField ListBox monthEST3;
	@UiField ListBox yearMatuT1;
	@UiField ListBox yearMatuT2;
	@UiField ListBox yearEST3;
	@UiField ListBox dayEST1;
	@UiField ListBox dayEST2;
	@UiField ListBox monthEST1;
	@UiField ListBox monthEST2;
	@UiField ListBox yearEST1;
	@UiField ListBox yearEST2;
	
	/*
	 * 
	 * */
	@UiHandler("cmdSave")
	void onCmdSaveClick(ClickEvent event) {
		if (getUiHandlers() != null) {
			getUiHandlers().updateSettingOptionDeadline(lstDays.getItemText(lstDays.getSelectedIndex()));
			getUiHandlers().updateSettingOptionManualBlock(blnBlock.getValue());
			getUiHandlers().updateCurrentEcole( lstEcoles.getValue( lstEcoles.getSelectedIndex() ) );
		}
	}

	/*
	 * 
	 * */
	@Override
	public void setUpdateStatus(String text) {
		lblUpdateStatus.setText(text);		
	}

	/*
	 * 
	 * */
	@Override
	public void initializeInterface(boolean isAdmin) {
		// Days
		for (int i=0; i<31; i++)
			lstDays.addItem(Integer.toString(i+1), Integer.toString(i));
		lblUpdateStatus.setText("");
		
		// Ecoles
		lstEcoles.clear();
		lstEcoles.addItem("-", "");
		lstEcoles.addItem("Ecole Lemania", NotificationTypes.ecoleLemania);
		lstEcoles.addItem("Pierre Viret", NotificationTypes.pierreViret);
		
		//
		initializeDayList(dayMatuT1);
		initializeDayList(dayMatuT2);		
		
		initializeDayList(dayEST1);
		initializeDayList(dayEST2);
		initializeDayList(dayEST3);

		//
		initializeMonthList(monthMatuT1);
		initializeMonthList(monthMatuT2);		
		
		initializeMonthList(monthEST1);
		initializeMonthList(monthEST2);
		initializeMonthList(monthEST3);
		
		//
		initializeYearList(yearMatuT1);
		initializeYearList(yearMatuT2);		
		
		initializeYearList(yearEST1);
		initializeYearList(yearEST2);
		initializeYearList(yearEST3);

		// Show admin panel for thuannn@gmail.com
		if (isAdmin)
			pnlAdmin.setVisible(true);
		else
			pnlAdmin.setVisible(false);
	}

	/*
	 * 
	 * */
	private void initializeYearList(ListBox yearList) {
		// 
		for (int i=0; i<10; i++)
			yearList.addItem( Integer.toString(i+2013), Integer.toString(i+2013));
	}

	/*
	 * 
	 * */
	private void initializeMonthList(ListBox monthList) {
		// 		
		for (int i=0; i<12; i++)
			monthList.addItem( Integer.toString(i+1), (i+1 < 10 ? "0" + Integer.toString(i+1) : Integer.toString(i+1)) );
	}

	/*
	 * 
	 * */
	private void initializeDayList(ListBox dayList) {
		//
		for (int i=0; i<31; i++)
			dayList.addItem( Integer.toString(i+1), (i+1 < 10 ? "0" + Integer.toString(i+1) : Integer.toString(i+1)) );
	}

	/*
	 * 
	 * */
	@Override
	public void populateCurrentSettings(List<SettingOptionProxy> settingOptions) {
		for (SettingOptionProxy setting : settingOptions){
			//
			if (setting.getOptionName().equals("DEADLINE")) {
				lstDays.setSelectedIndex(Integer.parseInt(setting.getOptionValue())-1);
			}
			//
			if (setting.getOptionName().equals("BLOCK")) {
				blnBlock.setValue(Boolean.parseBoolean(setting.getOptionValue()));
			}
			//
			if (setting.getOptionName().equals("ECOLE")) {
				for (int i=0; i<lstEcoles.getItemCount(); i++)
					if (lstEcoles.getValue(i).equals(setting.getOptionValue()))
						lstEcoles.setSelectedIndex(i);
			}
			//
			if (setting.getOptionName().equals(NotificationTypes.deadline_matu_t1))
				setSelectedDate(setting.getOptionValue(), dayMatuT1, monthMatuT1, yearMatuT1);
			if (setting.getOptionName().equals(NotificationTypes.deadline_matu_t2))
				setSelectedDate(setting.getOptionValue(), dayMatuT2, monthMatuT2, yearMatuT2);			
			//
			if (setting.getOptionName().equals(NotificationTypes.deadline_es_t1))
				setSelectedDate(setting.getOptionValue(), dayEST1, monthEST1, yearEST1);
			if (setting.getOptionName().equals(NotificationTypes.deadline_es_t2))
				setSelectedDate(setting.getOptionValue(), dayEST2, monthEST2, yearEST2);
			if (setting.getOptionName().equals(NotificationTypes.deadline_es_t3))
				setSelectedDate(setting.getOptionValue(), dayEST3, monthEST3, yearEST3);
		}
	}
	
	/*
	 * 
	 * */
	private void setSelectedDate(String optionValue, ListBox dayList, ListBox monthList, ListBox yearList) {
		//
		if (optionValue.equals(""))
			return;
		dayList.setSelectedIndex( Integer.parseInt(optionValue.substring(6,8))-1 );
		monthList.setSelectedIndex( Integer.parseInt(optionValue.substring(4,6))-1 );
		yearList.setSelectedIndex( Integer.parseInt(optionValue.substring(0,4))-2013 );
	}

	/*
	 * 
	 * */
	@UiHandler("cmdFixStudentName")
	void onCmdFixStudentNameClick(ClickEvent event) {
		//
		getUiHandlers().fixStudentName();
	}
	
	/*
	 * 
	 * */
	@UiHandler("cmdSaveDateMatu")
	void onCmdSaveDateMatuClick(ClickEvent event) {		
		getUiHandlers().updateDeadlinesMatu(
				yearMatuT1.getValue(yearMatuT1.getSelectedIndex()) + monthMatuT1.getValue(monthMatuT1.getSelectedIndex()) + dayMatuT1.getValue(dayMatuT1.getSelectedIndex()), 
				yearMatuT2.getValue(yearMatuT2.getSelectedIndex()) + monthMatuT2.getValue(monthMatuT2.getSelectedIndex()) + dayMatuT2.getValue(dayMatuT2.getSelectedIndex()) );
	}
	
	/*
	 * 
	 * */
	@UiHandler("cmdSaveDateES")
	void onCmdSaveDateESClick(ClickEvent event) {
		getUiHandlers().updateDeadlinesES(
				yearEST1.getValue(yearEST1.getSelectedIndex()) + monthEST1.getValue(monthEST1.getSelectedIndex()) + dayEST1.getValue(dayEST1.getSelectedIndex()),
				yearEST2.getValue(yearEST2.getSelectedIndex()) + monthEST2.getValue(monthEST2.getSelectedIndex()) + dayEST2.getValue(dayEST2.getSelectedIndex()),
				yearEST3.getValue(yearEST3.getSelectedIndex()) + monthEST3.getValue(monthEST3.getSelectedIndex()) + dayEST3.getValue(dayEST3.getSelectedIndex()));
	}
}
