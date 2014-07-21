package com.lemania.sis.client.popup.parentprofile;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.PopupViewWithUiHandlers;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ClickEvent;

public class ParentProfileView extends
		PopupViewWithUiHandlers<ParentProfileUiHandlers> implements
		ParentProfilePresenter.MyView {
	public interface Binder extends UiBinder<PopupPanel, ParentProfileView> {
	}

	@Inject
	ParentProfileView(Binder uiBinder, EventBus eventBus) {
		super(eventBus);

		initWidget(uiBinder.createAndBindUi(this));
	}
	
	
	@UiField Button cmdClose;
	
	
	/*
	 * */
	@UiHandler("cmdClose")
	void onCmdCloseClick(ClickEvent event) {
		//
		this.hide();
	}
}
