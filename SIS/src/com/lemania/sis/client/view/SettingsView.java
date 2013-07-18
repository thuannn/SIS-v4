package com.lemania.sis.client.view;

import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
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
	
	@UiHandler("cmdSave")
	void onCmdSaveClick(ClickEvent event) {
		if (getUiHandlers() != null) {
			getUiHandlers().updateSettingOptionDeadline(lstDays.getItemText(lstDays.getSelectedIndex()));
			getUiHandlers().updateSettingOptionManualBlock(blnBlock.getValue());
		}
	}

	@Override
	public void setUpdateStatus(String text) {
		lblUpdateStatus.setText(text);		
	}

	@Override
	public void initializeInterface() {
		for (int i=0; i<31; i++)
			lstDays.addItem(Integer.toString(i+1), Integer.toString(i));
		lblUpdateStatus.setText("");
	}

	@Override
	public void populateCurrentSettings(List<SettingOptionProxy> settingOptions) {
		for (SettingOptionProxy setting : settingOptions){
			if (setting.getOptionName().equals("DEADLINE")) {
				lstDays.setSelectedIndex(Integer.parseInt(setting.getOptionValue())-1);
			}
			if (setting.getOptionName().equals("BLOCK")) {
				blnBlock.setValue(Boolean.parseBoolean(setting.getOptionValue()));
			}
		}
	}
}
