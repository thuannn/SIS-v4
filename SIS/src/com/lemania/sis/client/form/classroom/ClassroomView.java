package com.lemania.sis.client.form.classroom;

import javax.inject.Inject;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.user.cellview.client.CellTable;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.IntegerBox;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.lemania.sis.client.NotificationTypes;

public class ClassroomView extends ViewWithUiHandlers<ClassroomUiHandlers>
		implements ClassroomPresenter.MyView {
	interface Binder extends UiBinder<Widget, ClassroomView> {
	}

	@UiField(provided=true) CellTable<Object> cellTable = new CellTable<Object>();
	@UiField Button cmdAdd;
	@UiField ListBox lstSchools;
	@UiField TextBox txtClassroomName;
	@UiField IntegerBox txtCapacity;
	@UiField TextBox txtNote;

	@Inject
	ClassroomView(Binder uiBinder) {
		initWidget(uiBinder.createAndBindUi(this));
	}
	
	/*
	 * */
	@UiHandler("cmdAdd")
	void onCmdAddClick(ClickEvent event) {
		//
		if (txtCapacity.getValue() == null) {
			Window.alert( NotificationTypes.invalid_input + " - Capacité");
			return;
		}
	}
}
