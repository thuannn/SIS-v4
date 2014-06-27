package com.lemania.sis.client.form.masteragenda;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import javax.inject.Inject;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.event.logical.shared.CloseEvent;
import com.google.gwt.event.logical.shared.CloseHandler;
import com.google.gwt.thirdparty.javascript.jscomp.graph.GraphColoring.Color;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.Event.NativePreviewEvent;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.PopupPanel;
import com.lemania.sis.client.AgendaVerticalPanel;
import com.lemania.sis.client.ClassPeriod;
import com.lemania.sis.client.FieldValidation;
import com.lemania.sis.client.NotificationTypes;
import com.lemania.sis.shared.ClasseProxy;
import com.lemania.sis.shared.ProfileProxy;
import com.lemania.sis.shared.ProfileSubjectProxy;
import com.lemania.sis.shared.classroom.ClassroomProxy;
import com.lemania.sis.shared.masteragendaitem.MasterAgendaItemProxy;
import com.lemania.sis.shared.period.PeriodProxy;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ChangeEvent;

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
	@UiField ListBox lstDuration;
	@UiField ListBox lstSubject;
	@UiField ListBox lstProfiles;
	@UiField ListBox lstClassrooms;
	@UiField Button cmdDelete;
	@UiField Label txtPeriodId;
	
	//
	int clickedCellIndex;
	int clickedRowIndex;
	int colorIndex = 0;
	List<PeriodProxy> periods = new ArrayList<PeriodProxy>();
	List<ProfileSubjectProxy> subjects = new ArrayList<ProfileSubjectProxy>();
	String deletedMaiId;
	MasterAgendaItemProxy selectedMai;
	boolean clickEventFired = false;
	
/*	
	 * 
	@Override
	public void drawTable(List<PeriodProxy> periods) {
		//
		tblAgenda.removeAllRows();
		//
		tblAgenda.setText(0, 0, "");
		tblAgenda.setText(1, 0, ClassPeriod.getDayName(ClassPeriod.d2_code));
		tblAgenda.setText(2, 0, ClassPeriod.getDayName(ClassPeriod.d3_code));
		tblAgenda.setText(3, 0, ClassPeriod.getDayName(ClassPeriod.d4_code));
		tblAgenda.setText(4, 0, ClassPeriod.getDayName(ClassPeriod.d5_code));
		tblAgenda.setText(5, 0, ClassPeriod.getDayName(ClassPeriod.d6_code));
		//
		tblAgenda.setText(0, 1, "");
		tblAgenda.setText(1, 1, "+");
		tblAgenda.setText(2, 1, "+");
		tblAgenda.setText(3, 1, "+");
		tblAgenda.setText(4, 1, "+");
		tblAgenda.setText(5, 1, "+");
		//
		for (int i=0; i<periods.size(); i++) {
			tblAgenda.setText( 0, i+ 2, periods.get(i).getDescription() );
		}
		//
		for (int i=1; i<tblAgenda.getRowCount(); i++) {
			for (int j=2; j<tblAgenda.getCellCount(0); j++) {
				tblAgenda.setText(i, j, "");
			}
		}
		//
		int i = tblAgenda.getCellCount(0);
		tblAgenda.setText(0, i, "");
		tblAgenda.setText(1, i, ClassPeriod.d2_code);
		tblAgenda.setText(2, i, ClassPeriod.d3_code);
		tblAgenda.setText(3, i, ClassPeriod.d4_code);
		tblAgenda.setText(4, i, ClassPeriod.d5_code);
		tblAgenda.setText(5, i, ClassPeriod.d6_code);
		//
		i = tblAgenda.getRowCount();
		for (int j=0; j < periods.size(); j++) {
			tblAgenda.setText( i , j + 2, periods.get(j).getId().toString() );
		}
		//
		styleTable();
	}*/
	
	
	/*
	 * */
	@Override
	public void drawTable(List<PeriodProxy> periods) {
		//
		tblAgenda.removeAllRows();
		//
		tblAgenda.setText(0, 0, "");
		tblAgenda.setText(0, 1, ClassPeriod.getDayName(ClassPeriod.d2_code));
		tblAgenda.setText(0, 2, ClassPeriod.getDayName(ClassPeriod.d3_code));
		tblAgenda.setText(0, 3, ClassPeriod.getDayName(ClassPeriod.d4_code));
		tblAgenda.setText(0, 4, ClassPeriod.getDayName(ClassPeriod.d5_code));
		tblAgenda.setText(0, 5, ClassPeriod.getDayName(ClassPeriod.d6_code));
		//
		for (int i=0; i<periods.size(); i++) {
			tblAgenda.setText( i+ 1, 0, periods.get(i).getDescription() );
		}
		//
		for (int i=1; i<tblAgenda.getRowCount(); i++) {
			for (int j=2; j<tblAgenda.getCellCount(0); j++) {
				tblAgenda.setText(i, j, "");
			}
		}
		//
		int i = tblAgenda.getRowCount();
		tblAgenda.setText(i, 0, "");
		tblAgenda.setText(i, 1, ClassPeriod.d2_code);
		tblAgenda.setText(i, 2, ClassPeriod.d3_code);
		tblAgenda.setText(i, 3, ClassPeriod.d4_code);
		tblAgenda.setText(i, 4, ClassPeriod.d5_code);
		tblAgenda.setText(i, 5, ClassPeriod.d6_code);
		//
		i = tblAgenda.getCellCount(0);
		for (int j=0; j < periods.size(); j++) {
			tblAgenda.setText( j+1 , i, periods.get(j).getId().toString() );
		}
		//
		styleTable();
	}
	
	
/*	 Period on top
	 * 
	public void addRow( int rowIndex ) {
		//
		int lastCellIndex = tblAgenda.getCellCount(0)-1;
		
		//
		tblAgenda.insertRow(rowIndex);
		
		//
		for (int j=0; j< this.periods.size() + 3; j++) {
			tblAgenda.insertCell(rowIndex, j);
			tblAgenda.getCellFormatter().setStyleName(rowIndex, j, "agendaNormal");
		}
		// Copy title
		tblAgenda.setText(rowIndex, 0, tblAgenda.getText(rowIndex + 1, 0));
		tblAgenda.getCellFormatter().setStyleName(rowIndex, 0, "agendaTitle");
		
		// Hide date
		tblAgenda.getCellFormatter().setStyleName(rowIndex + 1, 0, "agendaHidden");
		
		// Copy plus sign
		tblAgenda.setText(rowIndex, 1, tblAgenda.getText(rowIndex + 1, 1));
		
		// Hide plus sign
		tblAgenda.setText(rowIndex + 1, 1, "");
		tblAgenda.getCellFormatter().setStyleName(rowIndex + 1, 1, "agendaHidden");
		
		// Copy and hide day code
		tblAgenda.setText(rowIndex, lastCellIndex, tblAgenda.getText(rowIndex + 1, lastCellIndex ));
		tblAgenda.getCellFormatter().setStyleName(rowIndex, lastCellIndex, "agendaHidden");
	}*/
	
	/*
	 * */
	public void addCol( int colIndex ) {
		//
		int lastRowIndex = tblAgenda.getRowCount()-1;
		
		//
		for (int j=0; j< this.periods.size() + 2; j++) {
			tblAgenda.insertCell( j, colIndex );
			tblAgenda.getCellFormatter().setStyleName( j, colIndex, "agendaNormal");
		}
		// Copy title
		tblAgenda.setText( 0, colIndex, tblAgenda.getText( 0, colIndex -1));
		tblAgenda.getCellFormatter().setStyleName( 0, colIndex, "agendaTitle");
		
		// Hide date
		tblAgenda.getCellFormatter().setStyleName( 0, colIndex, "agendaHidden");
		
		// Copy and hide day code
		tblAgenda.setText( lastRowIndex, colIndex, tblAgenda.getText( lastRowIndex, colIndex - 1 ));
		tblAgenda.getCellFormatter().setStyleName( lastRowIndex, colIndex, "agendaHidden");
	}
	
	
	/*
	 * */
	public void showPopup(MasterAgendaItemProxy mai, String jour, String period) {
		//
		if (clickEventFired)
			return;
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
				clickEventFired = false;
			}
		});
		//
		prepareDialogBox(popup, mai, jour, period);
		//
		popup.show();
	}
	
	
/*	 Period on top
	 * 
	void prepareDialogBox(DialogBox popup, String jour, String period) {
		//
		MasterAgendaItemProxy mai = null;
		if ( tblAgenda.getWidget(clickedRowIndex, clickedCellIndex) != null)
			mai = ((AgendaVerticalPanel) tblAgenda.getWidget(clickedRowIndex, clickedCellIndex)).getMai();
		//
		pnlAdd.setVisible(true);
		popup.add(pnlAdd);
		popup.setAnimationEnabled(true);
		popup.setHeight( pnlAdd.getOffsetHeight() + "px" );
		popup.setWidth( pnlAdd.getOffsetWidth() + "px");
		popup.setText( NotificationTypes.popupPeriodDetailTitle );
		popup.center();
		//
		lstDuration.clear();
		for (int i=0; i< periods.size() - clickedCellIndex + 2; i++) {
			lstDuration.addItem( Integer.toString(i+1), Integer.toString(i+1) );
		}
		//
		if ( mai == null) {
			txtJour.setText( jour );
			txtPeriod.setText( period );
			txtPeriodId.setText("");
			lstSubject.setSelectedIndex(0);
			cmdSave.setEnabled(true);
			cmdDelete.setEnabled(false);
		} else {
			txtJour.setText( ClassPeriod.getDayName( mai.getJourCode() ) );
			txtPeriod.setText( mai.getPeriodDescription() );
			txtPeriodId.setText( mai.getId().toString() );
			
			FieldValidation.selectItemByText(lstSubject, mai.getSubjectName());
			FieldValidation.selectItemByText(lstDuration, Integer.toString(mai.getDuration()));
			FieldValidation.selectItemByText(lstClassrooms, mai.getClassroomName());
			
			cmdSave.setEnabled(false);
			cmdDelete.setEnabled(true);
		}
	}*/
	
	/*
	 * */
	void prepareDialogBox(DialogBox popup, MasterAgendaItemProxy mai, String jour, String period) {
		//
		pnlAdd.setVisible(true);
		popup.add(pnlAdd);
		popup.setAnimationEnabled(true);
		popup.setHeight( pnlAdd.getOffsetHeight() + "px" );
		popup.setWidth( pnlAdd.getOffsetWidth() + "px");
		popup.setText( NotificationTypes.popupPeriodDetailTitle );
		popup.center();
		//
		lstDuration.clear();
		if ( mai == null) {
			//
			for (int i=0; i< periods.size() - clickedRowIndex + 1; i++) {
				lstDuration.addItem( Integer.toString(i+1), Integer.toString(i+1) );
			}
			//
			txtJour.setText( jour );
			txtPeriod.setText( period );
			txtPeriodId.setText("");
			lstSubject.setSelectedIndex(0);
			cmdSave.setEnabled(true);
			cmdDelete.setEnabled(false);
		} else {
			//
			for (int i=0; i< mai.getDuration(); i++) {
				lstDuration.addItem( Integer.toString(i+1), Integer.toString(i+1) );
			}
			//
			txtJour.setText( ClassPeriod.getDayName( mai.getJourCode() ) );
			txtPeriod.setText( mai.getPeriodDescription() );
			txtPeriodId.setText( mai.getId().toString() );
			
			FieldValidation.selectItemByText(lstSubject, mai.getSubjectName() + " - " + mai.getProfName());
			FieldValidation.selectItemByText(lstDuration, Integer.toString(mai.getDuration()));
			FieldValidation.selectItemByText(lstClassrooms, mai.getClassroomName());
			
			cmdSave.setEnabled(false);
			cmdDelete.setEnabled(true);
		}
		//
		clickEventFired = true;
	}
	
	
	/*
	 * */
	public void styleTable(){
		// All cells
		for (int i=0; i<tblAgenda.getRowCount(); i++) {
			for (int j=0; j<tblAgenda.getCellCount(0); j++) {
				if (tblAgenda.isCellPresent(i, j))
					tblAgenda.getCellFormatter().setStyleName(i, j, "agendaNormal");
			}
		}
		// Hidden data
		for (int j=0; j<tblAgenda.getCellCount(0); j++) {
			if (tblAgenda.isCellPresent( tblAgenda.getRowCount() - 1, j))
				tblAgenda.getCellFormatter().setStyleName( tblAgenda.getRowCount() - 1, j, "agendaHidden");
		}
		//
		for (int i=0; i<tblAgenda.getRowCount(); i++)
			if (tblAgenda.isCellPresent(i, tblAgenda.getCellCount(0)))
				tblAgenda.getCellFormatter().setStyleName(i, tblAgenda.getCellCount(0), "agendaHidden");
		// Titles
		for (int j=0; j<tblAgenda.getCellCount(0); j++) {
			if (tblAgenda.isCellPresent( 0, j))
				tblAgenda.getCellFormatter().setStyleName( 0, j, "agendaTitle");
		}
		//
		for (int i=0; i<tblAgenda.getRowCount()-1; i++)
			if (tblAgenda.isCellPresent(i, 0))
				tblAgenda.getCellFormatter().setStyleName(i, 0, "agendaTitle");
	}
	
	
	/*	 Period on top
	 * 
	@UiHandler("cmdSave")
	void onCmdSaveClick(ClickEvent event) {
		//
		getUiHandlers().addMasterAgendaItem(
				tblAgenda.getText( clickedRowIndex, tblAgenda.getCellCount(0) - 1 ), 
				tblAgenda.getText( tblAgenda.getRowCount() - 1, clickedCellIndex ), 
				lstProfiles.getValue(lstProfiles.getSelectedIndex()), 
				lstSubject.getValue(lstSubject.getSelectedIndex()),
				lstClassrooms.getValue( lstClassrooms.getSelectedIndex() ), 
				Integer.parseInt( lstDuration.getValue( lstDuration.getSelectedIndex())) );
	}*/
	
	/* Day on top
	 * */
	@UiHandler("cmdSave")
	void onCmdSaveClick(ClickEvent event) {
		//
		getUiHandlers().addMasterAgendaItem(
				tblAgenda.getText( tblAgenda.getRowCount() - 1, clickedCellIndex ), 
				tblAgenda.getText( clickedRowIndex, tblAgenda.getCellCount(clickedRowIndex) - 1 ), 
				lstProfiles.getValue(lstProfiles.getSelectedIndex()), 
				lstSubject.getValue(lstSubject.getSelectedIndex()),
				lstClassrooms.getValue( lstClassrooms.getSelectedIndex() ), 
				Integer.parseInt( lstDuration.getValue( lstDuration.getSelectedIndex())) );
	}


	/*
	 * */
	@Override
	public void showAddedMasterAgendaItem(MasterAgendaItemProxy mai) {
		//
		showMasterAgendaItem( mai, clickedRowIndex, clickedCellIndex );
	}
	
	
/*	
	 * 
	public void showMasterAgendaItem( MasterAgendaItemProxy mai, int rowIndex, int cellIndex ) {
		//
		boolean newRowNeeded = false;
		int duration = mai.getDuration();
		int currentColspan = tblAgenda.getFlexCellFormatter().getColSpan(rowIndex , cellIndex);
		
		// Add more row in 2 cases : the current cell is invisible, or the current cell has widget
		for (int k=0; k<duration; k++) {
			if ( (tblAgenda.getWidget(rowIndex, cellIndex + k) != null) || (!tblAgenda.getCellFormatter().isVisible(rowIndex, cellIndex + k)) ) {
				newRowNeeded = true;
				break;
			}
		}
		if (newRowNeeded)
			addRow( rowIndex );
		
		//
		if ( currentColspan > 1) {
			for (int i=0; i < currentColspan; i++)
				tblAgenda.getCellFormatter().setVisible(rowIndex , cellIndex + i, true);
		}
		//
		for (int j=1; j<duration; j++)
			tblAgenda.getCellFormatter().setVisible(rowIndex , cellIndex + j, false);
		//
		tblAgenda.getFlexCellFormatter().setColSpan(rowIndex , cellIndex, duration);
		tblAgenda.getFlexCellFormatter().setStyleName(rowIndex , cellIndex, "agendaSelected");
		
		// show the plan
		AgendaVerticalPanel avp = new AgendaVerticalPanel();
		avp.setMai(mai);
		Label lblSubject = new Label( mai.getSubjectName() );
			lblSubject.setStyleName("agendaSubjectText");
		avp.add( lblSubject );
		avp.add(new Label( mai.getProfName() ));
		avp.add(new Label( mai.getClassroomName() ));
		tblAgenda.setWidget(rowIndex , cellIndex, avp);
	}*/
	
	
	
	/*
	 * No colspan or rowspan, display in each cell to simplify
	 * */
	public void showMasterAgendaItem( final MasterAgendaItemProxy mai, final int rowIndex, final int cellIndex ) {
		//
		if (colorIndex>1) colorIndex = 0; else colorIndex++;
		//
		int duration = mai.getDuration();
		VerticalPanel vp;
		for (int i=0; i<duration; i++) {
			// 
			final AgendaVerticalPanel avp = new AgendaVerticalPanel();
			avp.setStyleName("agendaSelected");
			avp.getElement().getStyle().setBackgroundColor( ClassPeriod.colors.get( colorIndex ));
			//
			avp.addDomHandler( new ClickHandler() {

				@Override
				public void onClick(ClickEvent arg0) {
					//
					selectedMai = mai;
					showPopup( avp.getMai(), tblAgenda.getText( 0, avp.getCellIndex() ), tblAgenda.getText( avp.getRowIndex(), 0) );
				}
				
			} , ClickEvent.getType());
			//
			avp.setMai(mai);
			avp.setCellIndex(cellIndex);
			avp.setRowIndex(rowIndex);
			//
			Label lblSubject = new Label( mai.getSubjectName() );
			lblSubject.setStyleName("agendaSubjectText");
			avp.add( lblSubject );
			//
			Label lblNormal = new Label( mai.getProfName() + " - " + mai.getClassroomName());
			lblNormal.setStyleName("agendaNormalText");
			avp.add( lblNormal);
			//
			if ( tblAgenda.getWidget(rowIndex + i, cellIndex) == null) {
				vp = new VerticalPanel();
				vp.setStyleName("agendaItemContainer");
				tblAgenda.setWidget(rowIndex + i , cellIndex, vp );
			}
			((VerticalPanel) tblAgenda.getWidget(rowIndex + i, cellIndex)).add(avp);
		}
	}

	
	/*
	 * */
	@Override
	public void setClassList(List<ClasseProxy> classes) {
		//
		lstClasses.clear();
		lstClasses.addItem("-","");
		for (ClasseProxy clazz : classes) {
			lstClasses.addItem( clazz.getClassName(), clazz.getId().toString());
		}
	}
	
	/*
	 * */
	@UiHandler("lstClasses")
	void onLstClassesChange(ChangeEvent event) {
		//
		if (getUiHandlers() != null)
			getUiHandlers().onClassChanged( lstClasses.getValue(lstClasses.getSelectedIndex()) );
	}

	/*
	 * */
	@Override
	public void setProfileListData(List<ProfileProxy> profiles) {
		//
		lstProfiles.clear();
		lstProfiles.addItem("-","");
		//
		for (ProfileProxy profile : profiles){
			lstProfiles.addItem( profile.getProfileName(), profile.getId().toString() );
		}
		lstProfiles.setSelectedIndex(0);
	}
	
	/*
	 * */
	@UiHandler("lstProfiles")
	void onLstProfilesChange(ChangeEvent event) {
		//
		if (getUiHandlers() != null)
			getUiHandlers().onProfileChanged( lstProfiles.getValue( lstProfiles.getSelectedIndex()) );
	}
	

	/*
	 * */
	@Override
	public void setSubjectListData(List<ProfileSubjectProxy> subjects) {
		//
		this.subjects = subjects;
		prepareSubjectList( this.subjects );
	}
	
	/*
	 * */
	public void prepareSubjectList( List<ProfileSubjectProxy> subjects ){
		//
		lstSubject.clear();
		lstSubject.addItem("-","");
		for (ProfileSubjectProxy subject : subjects){
			lstSubject.addItem( subject.getSubjectName() + " - " + subject.getProfName(), subject.getId().toString() );
		}
		lstSubject.setSelectedIndex(0);
	}

	/*
	 * */
	@Override
	public void setClassroomList(List<ClassroomProxy> rooms) {
		//
		lstClassrooms.clear();
		lstClassrooms.addItem("-","");
		for ( ClassroomProxy cp : rooms ) {
			lstClassrooms.addItem( cp.getRoomName(), cp.getId().toString() );
		}
	}
	
	/*
	 * */
	@UiHandler("cmdDelete")
	void onCmdDeleteClick(ClickEvent event) {
		//
		if ( selectedMai != null) {
			deletedMaiId =  selectedMai.getId().toString();
			getUiHandlers().removeMasterAgendaItem( selectedMai );
		}
	}
	
	
	/*
	 * 
	@Override
	public void clearSelectedMasterAgendaItem() {
		//
		((VerticalPanel)tblAgenda.getWidget(clickedRowIndex, clickedCellIndex)).removeFromParent();
		//
		for (int i=0; i < tblAgenda.getFlexCellFormatter().getColSpan(clickedRowIndex, clickedCellIndex); i++) {
			tblAgenda.getCellFormatter().setVisible(clickedRowIndex, clickedCellIndex + i, true);
			tblAgenda.getFlexCellFormatter().setStyleName(clickedRowIndex, clickedCellIndex + i, "agendaNormal");
		}
		//
		tblAgenda.getFlexCellFormatter().setColSpan(clickedRowIndex, clickedCellIndex, 1);
	}*/

	
	
	/*
	 * */
	@Override
	public void clearSelectedMasterAgendaItem() {
		//
		VerticalPanel vp;
		for (int i=0; i<tblAgenda.getRowCount(); i++) {
			vp = ((VerticalPanel)tblAgenda.getWidget(i,  clickedCellIndex));
			if (vp == null)
				continue;
			for (int j=0; j<vp.getWidgetCount(); j++) {
				if (((AgendaVerticalPanel) vp.getWidget(j)).getMai().getId().toString().equals(deletedMaiId))
					((AgendaVerticalPanel) vp.getWidget(j)).removeFromParent();
			}
		}
	}
	

	
	/*
	 * */
	@Override
	public void initializeUI(List<PeriodProxy> periods) {
		//
		this.periods.clear();
		this.periods.addAll(periods);
		drawTable(periods);
	}


	/*
	 * */
	@Override
	public void setEventHandlers() {
		//
		tblAgenda.addClickHandler(new ClickHandler(){

			@Override
			public void onClick(ClickEvent event) {
				//
				clickedCellIndex = tblAgenda.getCellForEvent(event).getCellIndex();
				clickedRowIndex = tblAgenda.getCellForEvent(event).getRowIndex();
                //
				if (clickedCellIndex > 0)
					showPopup( null, tblAgenda.getText( 0, clickedCellIndex ), tblAgenda.getText( clickedRowIndex, 0) );
			}
			
		});
	}


	/*
	 * */
	private int getRowIndexById(String periodId) {
		//
		for ( int i=0; i < tblAgenda.getRowCount(); i++ ) {
			if ( tblAgenda.getText(i, tblAgenda.getCellCount(i)-1).equals(periodId) )
				return i;
		}
		return -1;
	}
	
	
	/*
	 * */
	private int getCellIndexById(String jourCode) {
		//
		for ( int i=0; i < tblAgenda.getCellCount(0); i++ ) {
			if ( tblAgenda.getText( tblAgenda.getRowCount()-1, i).equals(jourCode) )
				return i;
		}
		return -1;
	}
	
	
	/*
	 * */
	@Override
	public void showMasterAgendaItemData(List<MasterAgendaItemProxy> mais) {
		//
		int rowIndex;
		int cellIndex;
		for ( MasterAgendaItemProxy mai : mais ) {
			rowIndex = getRowIndexById( mai.getPeriodId() );
			cellIndex = getCellIndexById( mai.getJourCode() );
			if ( (rowIndex != -1) && (cellIndex != -1)) {
				showMasterAgendaItem( mai, rowIndex, cellIndex );
			}
		}
	}


	/*
	 * */
	@Override
	public void initializeUI() {
		//
		tblAgenda.removeAllRows();
		lstProfiles.clear();
	}
}
