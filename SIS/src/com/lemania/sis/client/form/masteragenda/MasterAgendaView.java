package com.lemania.sis.client.form.masteragenda;

import javax.inject.Inject;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.event.logical.shared.CloseEvent;
import com.google.gwt.event.logical.shared.CloseHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.Event.NativePreviewEvent;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.PopupPanel;
import com.lemania.sis.client.ClassPeriod;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Label;

public class MasterAgendaView extends
		ViewWithUiHandlers<MasterAgendaUiHandlers> implements
		MasterAgendaPresenter.MyView {
	interface Binder extends UiBinder<Widget, MasterAgendaView> {
	}

	@Inject
	MasterAgendaView(Binder uiBinder) {
		initWidget(uiBinder.createAndBindUi(this));
	}
	
	@UiField ListBox lstClasses;
	@UiField FlexTable tblAgenda;
	@UiField FlowPanel pnlAdd;
	@UiField Button cmdSave;
	@UiField VerticalPanel pnlPrincipal;
	@UiField Label txtJour;
	@UiField Label txtPeriod;
	
	/*
	 * */
	@Override
	public void drawTable() {
		//
		tblAgenda.setText(0, 0, "");
		tblAgenda.setText(0, 1, ClassPeriod.getDayName(ClassPeriod.d2_code));
		tblAgenda.setText(0, 2, ClassPeriod.getDayName(ClassPeriod.d3_code));
		tblAgenda.setText(0, 3, ClassPeriod.getDayName(ClassPeriod.d4_code));
		tblAgenda.setText(0, 4, ClassPeriod.getDayName(ClassPeriod.d5_code));
		tblAgenda.setText(0, 5, ClassPeriod.getDayName(ClassPeriod.d6_code));
		//
		tblAgenda.setText(0, 0, "");
		tblAgenda.setText(1, 0, ClassPeriod.getPeriodText( ClassPeriod.P1_Code));
		tblAgenda.setText(2, 0, ClassPeriod.getPeriodText( ClassPeriod.P2_Code));
		tblAgenda.setText(3, 0, ClassPeriod.getPeriodText( ClassPeriod.P3_Code));
		tblAgenda.setText(4, 0, ClassPeriod.getPeriodText( ClassPeriod.P4_Code));
		tblAgenda.setText(5, 0, ClassPeriod.getPeriodText( ClassPeriod.P5_Code));
		tblAgenda.setText(6, 0, ClassPeriod.getPeriodText( ClassPeriod.P6_Code));
		tblAgenda.setText(7, 0, ClassPeriod.getPeriodText( ClassPeriod.P7_Code));
		tblAgenda.setText(8, 0, ClassPeriod.getPeriodText( ClassPeriod.P8_Code));
		tblAgenda.setText(9, 0, ClassPeriod.getPeriodText( ClassPeriod.P9_Code));
		tblAgenda.setText(10, 0, ClassPeriod.getPeriodText( ClassPeriod.P10_Code));
		tblAgenda.setText(11, 0, ClassPeriod.getPeriodText( ClassPeriod.P11_Code));
		tblAgenda.setText(12, 0, ClassPeriod.getPeriodText( ClassPeriod.P12_Code));
		
		//
		clearTable();
		
		//
		styleTable();
		
		//
		tblAgenda.addClickHandler(new ClickHandler(){

			@Override
			public void onClick(ClickEvent event) {
				// 
				txtJour.setText( tblAgenda.getText(0, tblAgenda.getCellForEvent(event).getCellIndex()) );
                txtPeriod.setText( tblAgenda.getText( tblAgenda.getCellForEvent(event).getRowIndex(), 0));
                //
                showPopup();
			}
			
		});
	}
	
	
	/*
	 * */
	public void showPopup() {
		//
		DialogBox popup = new DialogBox(true) {
			@Override
			protected void onPreviewNativeEvent(final NativePreviewEvent event) {
			    super.onPreviewNativeEvent(event);
			    switch (event.getTypeInt()) {
			        case Event.ONKEYDOWN:
			            if (event.getNativeEvent().getKeyCode() == KeyCodes.KEY_ESCAPE) {
			                hide();
			            }
			            break;
			    }
			}
		};
		popup.addCloseHandler(new CloseHandler<PopupPanel>() {
			public void onClose(CloseEvent<PopupPanel> event) {
				pnlPrincipal.add(pnlAdd);
				pnlAdd.setVisible(false);
			}
		});
		//
		prepareDialogBox(popup);
		//
		popup.show();
	}
	
	
	/*
	 * */
	void prepareDialogBox(DialogBox popup) {
		//
		pnlAdd.setVisible(true);
		popup.add(pnlAdd);
		popup.setAnimationEnabled(true);
		popup.setHeight( pnlAdd.getOffsetHeight() + "px" );
		popup.setWidth( pnlAdd.getOffsetWidth() + "px");
		popup.center();
	}
	
	
	/*
	 * */
	public void clearTable() {
		for (int i=1; i<tblAgenda.getRowCount(); i++) {
			for (int j=1; j<tblAgenda.getCellCount(0); j++) {
				tblAgenda.setText(i, j, "");
			}
		}
	}
	
	
	/*
	 * */
	public void styleTable(){
		//
		for (int i=0; i<tblAgenda.getRowCount(); i++) {
			for (int j=0; j<tblAgenda.getCellCount(0); j++) {
				if (tblAgenda.isCellPresent(i, j))
					tblAgenda.getCellFormatter().setStyleName(i, j, "agendaNormal");
			}
		}
	}
}
