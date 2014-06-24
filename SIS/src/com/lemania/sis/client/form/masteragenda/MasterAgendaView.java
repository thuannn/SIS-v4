package com.lemania.sis.client.form.masteragenda;

import java.util.ArrayList;
import java.util.List;

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
import com.lemania.sis.client.AgendaVerticalPanel;
import com.lemania.sis.client.ClassPeriod;
import com.lemania.sis.client.NotificationTypes;
import com.lemania.sis.shared.ClasseProxy;
import com.lemania.sis.shared.ProfessorProxy;
import com.lemania.sis.shared.ProfileProxy;
import com.lemania.sis.shared.SubjectProxy;
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
	@UiField ListBox lstProfs;
	@UiField ListBox lstSubject;
	@UiField ListBox lstProfiles;
	@UiField ListBox lstClassrooms;
	@UiField Button cmdDelete;
	@UiField Label txtPeriodId;
	
	//
	int clickedCellIndex;
	int clickedRowIndex;
	List<PeriodProxy> periods = new ArrayList<PeriodProxy>();
	
	/*
	 * */
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
	}
	
	
	/*
	 * */
	public void addRow() {
		//
		tblAgenda.insertRow(clickedRowIndex);
		for (int j=0; j< this.periods.size() + 3; j++) {
			tblAgenda.insertCell(clickedRowIndex, j);
			tblAgenda.getCellFormatter().setStyleName(clickedRowIndex, j, "agendaNormal");
		}
		// hide date
		tblAgenda.setText(clickedRowIndex, 0, tblAgenda.getText(clickedRowIndex + 1, 0));
		tblAgenda.getCellFormatter().setStyleName(clickedRowIndex + 1, 0, "agendaHidden");
		// remove plus sign
		tblAgenda.setText(clickedRowIndex, 1, tblAgenda.getText(clickedRowIndex + 1, 1));
		tblAgenda.setText(clickedRowIndex + 1, 1, "");
		tblAgenda.getCellFormatter().setStyleName(clickedRowIndex + 1, 1, "agendaHidden");
		// Keep day code
		tblAgenda.setText(clickedRowIndex, tblAgenda.getCellCount(0)-1, tblAgenda.getText(clickedRowIndex + 1, tblAgenda.getCellCount(0)-1 ));
	}
	
	
	/*
	 * */
	public void showPopup(String jour, String period) {
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
		prepareDialogBox(popup, jour, period);
		//
		popup.show();
	}
	
	
	/*
	 * */
	void prepareDialogBox(DialogBox popup, String jour, String period) {
		//
		pnlAdd.setVisible(true);
		popup.add(pnlAdd);
		popup.setAnimationEnabled(true);
		popup.setHeight( pnlAdd.getOffsetHeight() + "px" );
		popup.setWidth( pnlAdd.getOffsetWidth() + "px");
		popup.setText( NotificationTypes.periodSchedule );
		popup.center();
		// 
		txtJour.setText( jour );
        txtPeriod.setText( period );
		//
		lstDuration.clear();
		for (int i=0; i<ClassPeriod.numberOfPeriod - clickedCellIndex + 1; i++) {
			lstDuration.addItem( Integer.toString(i+1), Integer.toString(i+1) );
		}
		//
		lstProfs.setSelectedIndex(0);
		//
		lstSubject.setSelectedIndex(0);
		//
		if ( tblAgenda.getWidget(clickedRowIndex, clickedCellIndex) != null)
			txtPeriodId.setText( ((AgendaVerticalPanel) tblAgenda.getWidget(clickedRowIndex, clickedCellIndex)).getMai().getId().toString() );
		else
			txtPeriodId.setText("");
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
	
	
	/*
	 * */
	@UiHandler("cmdSave")
	void onCmdSaveClick(ClickEvent event) {
		//
		getUiHandlers().addMasterAgendaItem(
				tblAgenda.getText( clickedRowIndex, tblAgenda.getCellCount(0) - 1 ), 
				tblAgenda.getText( tblAgenda.getRowCount() - 1, clickedCellIndex ), 
				lstProfiles.getValue(lstProfiles.getSelectedIndex()), 
				lstSubject.getValue(lstSubject.getSelectedIndex()), 
				lstProfs.getValue( lstProfs.getSelectedIndex() ), 
				lstClassrooms.getValue( lstClassrooms.getSelectedIndex() ), 
				Integer.parseInt( lstDuration.getValue( lstDuration.getSelectedIndex())) );
	}


	/*
	 * */
	@Override
	public void showAddedMasterAgendaItem(MasterAgendaItemProxy mai) {
		//
		// how many period user selected ?
		int duration = mai.getDuration();
		//
		// if it's less than the current saved periods, show the one available
		if ( tblAgenda.getFlexCellFormatter().getColSpan(clickedRowIndex , clickedCellIndex) > 1) {
			for (int i=0; i < tblAgenda.getFlexCellFormatter().getColSpan(clickedRowIndex , clickedCellIndex); i++)
				tblAgenda.getCellFormatter().setVisible(clickedRowIndex , clickedCellIndex + i, true);
		}
		//
		// fill the periods
		for (int j=1; j<duration; j++)
			tblAgenda.getCellFormatter().setVisible(clickedRowIndex , clickedCellIndex + j, false);
		//
		tblAgenda.getFlexCellFormatter().setColSpan(clickedRowIndex , clickedCellIndex, duration);
		tblAgenda.getFlexCellFormatter().setStyleName(clickedRowIndex , clickedCellIndex, "agendaSelected");
		// show the plan
		AgendaVerticalPanel avp = new AgendaVerticalPanel();
		avp.setMai(mai);
		avp.add(new Label( mai.getSubjectName() ));
		avp.add(new Label( mai.getProfName() ));
		avp.add(new Label( mai.getClassroomName() ));
		tblAgenda.setWidget(clickedRowIndex , clickedCellIndex, avp);
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
	@UiHandler("lstSubject")
	void onLstSubjectChange(ChangeEvent event) {
		//
		if (getUiHandlers() != null)
			getUiHandlers().loadProfessorList( lstSubject.getValue( lstSubject.getSelectedIndex()), lstClasses.getValue(lstClasses.getSelectedIndex()));
	}

	/*
	 * */
	@Override
	public void setProfessorListData(List<ProfessorProxy> profs) {
		//
		lstProfs.clear();
		lstProfs.addItem("-","");
		for ( ProfessorProxy prof : profs ){
			lstProfs.addItem( prof.getProfName(), prof.getId().toString() );
		}
		lstProfs.setSelectedIndex(0);
	}

	/*
	 * */
	@Override
	public void setSubjectListData(List<SubjectProxy> subjects) {
		//
		lstSubject.clear();
		lstSubject.addItem("-","");
		
		for (SubjectProxy subject : subjects){
			lstSubject.addItem( subject.getSubjectName(), subject.getId().toString() );
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
		((VerticalPanel)tblAgenda.getWidget(clickedRowIndex, clickedCellIndex)).removeFromParent();
		//
		for (int i=0; i < tblAgenda.getFlexCellFormatter().getColSpan(clickedRowIndex, clickedCellIndex); i++) {
			tblAgenda.getCellFormatter().setVisible(clickedRowIndex, clickedCellIndex + i, true);
			tblAgenda.getFlexCellFormatter().setStyleName(clickedRowIndex, clickedCellIndex + i, "agendaNormal");
		}
		//
		tblAgenda.getFlexCellFormatter().setColSpan(clickedRowIndex, clickedCellIndex, 1);
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
	public void initializeUI() {
		//
		tblAgenda.addClickHandler(new ClickHandler(){

			@Override
			public void onClick(ClickEvent event) {
				//
				clickedCellIndex = tblAgenda.getCellForEvent(event).getCellIndex();
				clickedRowIndex = tblAgenda.getCellForEvent(event).getRowIndex();
                //
				if (clickedCellIndex > 1)
					showPopup( tblAgenda.getText(clickedRowIndex, 0), tblAgenda.getText(0, clickedCellIndex) );
				if ( tblAgenda.getText(clickedRowIndex, clickedCellIndex).equals("+") )
					addRow();
			}
			
		});
	}
}
