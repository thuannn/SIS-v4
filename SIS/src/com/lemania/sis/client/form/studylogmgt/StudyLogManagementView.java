package com.lemania.sis.client.form.studylogmgt;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.inject.Inject;

import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.logical.shared.CloseEvent;
import com.google.gwt.event.logical.shared.CloseHandler;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HasVerticalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.ScrollPanel;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.datepicker.client.DateBox;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.lemania.sis.client.UI.FieldValidation;
import com.lemania.sis.client.values.DataValues;
import com.lemania.sis.client.values.NotificationValues;
import com.lemania.sis.shared.ClasseProxy;
import com.lemania.sis.shared.ProfessorProxy;
import com.lemania.sis.shared.SubjectProxy;
import com.lemania.sis.shared.bulletin.BulletinProxy;
import com.lemania.sis.shared.studylog.StudyLogProxy;

class StudyLogManagementView extends ViewWithUiHandlers<StudyLogManagementUiHandlers> implements StudyLogManagementPresenter.MyView {
   
	private final Widget widget;
	
	interface Binder extends UiBinder<Widget, StudyLogManagementView> {
    }

    @Inject
    public StudyLogManagementView(final Binder binder) {
    	widget = binder.createAndBindUi(this);
    }
    
    @Override
	public Widget asWidget() {
		return widget;
	}

	@UiField ListBox lstProfs;
	@UiField ListBox lstAssignments;
	@UiField ListBox lstClasses;
	@UiField FlexTable tblStudents;
	@UiField Button cmdShow;
	@UiField Button cmdSave;
	@UiField Button cmdAdd;
	@UiField DateBox dateFrom;
	@UiField DateBox dateTo;
	@UiField ScrollPanel pnlStudents;
	@UiField ScrollPanel pnlLogs;
	@UiField Label lblStudentQty;
	@UiField VerticalPanel pnlAdd;
	@UiField TextArea txtContent;
	@UiField TextBox txtTitle;
	@UiField FlexTable tblLogs;
	@UiField Label lblSubject;
	@UiField Label lblClass;
	@UiField Label lblEditLogId;
	@UiField Button cmdClose;
	
	private DialogBox pp ;
	
	
	@UiHandler("cmdShow")
	void onCmdShow(ClickEvent event) {
		//
		Window.alert("here");
	}
	
	/*
	 * 
	 * */
	@UiHandler("lstProfs")
	void onLstProfsChange( ChangeEvent event) {
		//
		clearStudentList();
		//
		clearLogList();
		//
		if (getUiHandlers() != null)
			getUiHandlers().onProfessorSelected(lstProfs.getValue(lstProfs.getSelectedIndex()));
	}
	
	
	
	

	/*
	 * 
	 * */
	@Override
	public void setProfListData(List<ProfessorProxy> profs) {
		//
		lstProfs.clear();
		lstProfs.addItem("-","");
		for (ProfessorProxy prof : profs)
			lstProfs.addItem(prof.getProfName(), prof.getId().toString());
	}
	
	/*
	 * 
	 * */
	@Override
	public void setSubjectsData(List<SubjectProxy> subjects) {
		// 		
		lstAssignments.clear();
		lstAssignments.addItem("-","");
		for (SubjectProxy sub : subjects){
			lstAssignments.addItem( 
					sub.getSubjectName(), sub.getId().toString());
		}
	}

	/*
	 * 
	 * */
	@Override
	public void resetForm() {
		//
		lstProfs.clear();
		lstAssignments.clear();
		lstClasses.clear();
		//
		tblStudents.removeAllRows();
		//
		tblLogs.removeAllRows();
		//
		// Set the height of the Student scroll panel
		pnlStudents.setHeight( Window.getClientHeight() - pnlStudents.getAbsoluteTop() - NotificationValues.footerHeight + "px");
		//
		// Set the height of the log table
		pnlLogs.setHeight( Window.getClientHeight() - pnlLogs.getAbsoluteTop() - NotificationValues.footerHeight + "px");
	}
	
	
	

	/************************* Data Population ****************************************/
	
	/*
	 * */
	@Override
	public void setClassListData(List<ClasseProxy> classes) {
		//	
		lstClasses.clear();
		lstClasses.addItem("* Toutes les classes", DataValues.optionAll );
		for (ClasseProxy cl : classes){
			lstClasses.addItem( 
					cl.getClassName(), cl.getId().toString() );
		}
	}

	/*
	 * */
	@Override
	public void setStudentListData(List<BulletinProxy> bulletins) {
		//
		tblStudents.removeAllRows();
		int row = 0;
		int col = 0;
		for ( BulletinProxy sp : bulletins ) {
			tblStudents.setText( row, col + 1, sp.getClasseName() );
			tblStudents.setText( row, col + 2, sp.getStudentName() );
			row++;
		}
		//
		lblStudentQty.setText( Integer.toString( bulletins.size() ) );
	}
	
	
	/*
	 * */
	@Override
	public void showAddedLog(StudyLogProxy studyLog) {
		//
		List<StudyLogProxy> logs = new ArrayList<StudyLogProxy>();
		logs.add( studyLog );
		showAddedLogs( logs );
		//
		if ( pp != null )
			pp.hide();
	}
	
	
	/*
	 * Show the logs and populate UI automatically
	 * */
	@Override
	public void showAddedLogs(List<StudyLogProxy> studyLogs) {
		// 
		VerticalPanel vp;
		HorizontalPanel pnlLogTitle, pnlButton, pnlDate;
		Button cmdEdit, cmdDelete;
		String prevDate = "";
		Label logContent, logTitle, logId;
		//
		for ( final StudyLogProxy studyLog : studyLogs ) {
			//
			if ( !prevDate.equals(studyLog.getLogDate()) ) {
				pnlDate = new HorizontalPanel();
				pnlDate.setStyleName("slDateLine");
				pnlDate.add( new Label( FieldValidation.swissDateFormat( studyLog.getLogDate() ) ));
				tblLogs.setWidget( tblLogs.getRowCount(), 0, pnlDate );
				prevDate = studyLog.getLogDate();
			}
			//
			vp = new VerticalPanel();
			vp.setWidth("100%");
			//
			logId = new Label( studyLog.getId().toString() );
			logId.setVisible(false);
			vp.add( logId );
			//
			pnlLogTitle = new HorizontalPanel();
			pnlLogTitle.setStyleName("slTitleLine");
			pnlLogTitle.setVerticalAlignment( HasVerticalAlignment.ALIGN_MIDDLE );
			//
			pnlLogTitle.add( new Label( studyLog.getSubjectName() ));
			pnlLogTitle.add( new Label( studyLog.getClasseName() ));
			//
			logTitle = new Label( studyLog.getLogTitle());
			pnlLogTitle.add( logTitle );
			pnlLogTitle.setCellWidth( logTitle, "60%");
			//
			// Edit and Delete buttons
			pnlButton = new HorizontalPanel();
			pnlButton.setWidth("100%");
			pnlButton.setHorizontalAlignment( HasHorizontalAlignment.ALIGN_RIGHT );
			//
			cmdEdit = new Button("Editer");
			cmdEdit.setStyleName("darkBlueButton");
			cmdEdit.addClickHandler( new ClickHandler() {

				@Override
				public void onClick(ClickEvent event) {
					//
					if ( pp != null ) {
						lblSubject.setText( studyLog.getSubjectName() ); 
						lblClass.setText( studyLog.getClasseName() );
						txtTitle.setText( studyLog.getLogTitle() );
						txtContent.setText( studyLog.getLogContent() );
						lblEditLogId.setText( studyLog.getId().toString() );
						pnlAdd.setVisible(true);
						pp.center();
					}
				}
				
			});
			pnlButton.add( cmdEdit );
			//
			cmdDelete = new Button("Supprimer");
			cmdDelete.setStyleName("redButton");
			cmdDelete.addClickHandler( new ClickHandler() {

				@Override
				public void onClick(ClickEvent event) {
					//
					if ( Window.confirm("Etes-vous sûr de vouloir supprimer ce texte ?"))
						getUiHandlers().deleteLog( studyLog );
				}
				
			});
			pnlButton.add( cmdDelete );
			//
			pnlLogTitle.add( pnlButton );
			pnlLogTitle.setCellWidth( pnlButton, "20%");
			//
			vp.add( pnlLogTitle );
			//
			logContent = new Label( studyLog.getLogContent() );
			logContent.setStyleName("slLogLine");
			vp.add( logContent );
			//
			tblLogs.setWidget( tblLogs.getRowCount(), 0, vp);
		}
	}
	
	
	/*
	 * */
	@Override
	public void showLogs(List<StudyLogProxy> studyLogs) {
		//
		tblLogs.removeAllRows();
		showAddedLogs( studyLogs );
	}
	
	
	/*
	 * */
	@Override
	public void removeDeletedLog(String logId) {
		//
		VerticalPanel vp;
		for (int i=0; i<tblLogs.getRowCount(); i++) {
			if (tblLogs.getWidget(i, 0) instanceof VerticalPanel ) {
				vp = (VerticalPanel) tblLogs.getWidget(i, 0);
				if ( ((Label) vp.getWidget(0)).getText().equals( logId ) ) {
					tblLogs.remove( vp );
				}
			}
		}
	}
	
	
	/*
	 * */
	@Override
	public void showUpdatedLog(String editLogId, String logTitle, String logContent) {
		//
		VerticalPanel vp;
		for (int i=0; i<tblLogs.getRowCount(); i++) {
			if (tblLogs.getWidget(i, 0) instanceof VerticalPanel ) {
				vp = (VerticalPanel) tblLogs.getWidget(i, 0);
				if ( ((Label) vp.getWidget(0)).getText().equals( editLogId ) ) {
					((Label)((HorizontalPanel) vp.getWidget(1)).getWidget(2)).setText( logTitle );
					((Label) vp.getWidget(2)).setText( logContent );
				}
			}
		}
		//
		if ( pp != null )
			pp.hide();
	}
	
	
	/************************* Controls Events ****************************************/
	
	/*
	 * */
	@UiHandler("lstClasses")
	public void onLstClassesChange( ChangeEvent event ) {
		//
		if (getUiHandlers() != null)
			getUiHandlers().onLstClassChange( 
					lstAssignments.getValue( lstAssignments.getSelectedIndex() ),
					lstClasses.getValue( lstClasses.getSelectedIndex()) );
	}
	
	/*
	 * When user select a subject, load the class list and student list
	 * */
	@UiHandler("lstAssignments")
	void onLstAssignmentsChange( ChangeEvent event ){
		//
		clearStudentList();
		clearLogList();
		//
		if (getUiHandlers() != null)
			getUiHandlers().onLstAssignmentsChange( 
					lstProfs.getValue(lstProfs.getSelectedIndex()), 
					lstAssignments.getValue( lstAssignments.getSelectedIndex() ));
	}
	
	/*
	 * If for saving an existing log, do not put class Id in the call
	 * */
	@UiHandler("cmdSave")
	void onCmdSaveClicked( ClickEvent event ) {
		//
		if (getUiHandlers() != null) {
			if ( lblEditLogId.getText().equals("") ) {
				getUiHandlers().onStudyLogAdd(
						lstProfs.getValue( lstProfs.getSelectedIndex() ),
						lstAssignments.getValue( lstAssignments.getSelectedIndex() ),
						lstClasses.getValue( lstClasses.getSelectedIndex() ),
						txtTitle.getText(),
						txtContent.getText(),
						"" );
			} else {
				getUiHandlers().onStudyLogAdd(
						lstProfs.getValue( lstProfs.getSelectedIndex() ),
						lstAssignments.getValue( lstAssignments.getSelectedIndex() ),
						"",
						txtTitle.getText(),
						txtContent.getText(),
						lblEditLogId.getText() );
			}
		}
		
	}
	
	
	/*
	 * */
	@UiHandler("cmdAdd") 
	void onCmdAddClicked( ClickEvent event ) {
		//
		if ( pp != null ) {
			lblSubject.setText( lstAssignments.getItemText( lstAssignments.getSelectedIndex() )); 
			lblClass.setText( lstClasses.getItemText( lstClasses.getSelectedIndex() ));
			pnlAdd.setVisible(true);
			pp.center();
		}
	}
	
	/*
	 * */
	@UiHandler("cmdClose") 
	void onCmdCloseClicked( ClickEvent event ) {
		//
		if ( pp != null ) {
			if (txtTitle.getText().equals("") && txtContent.getText().equals("")) {
				pp.hide();
				return;
			}
			if (Window.confirm("Etes-vous sûr de vouloir fermer cette fenêtre sans sauvegarder les données ?"))
				pp.hide();
		}
	}
	
	
	/************************* UI Manipulation ****************************************/
	
	/*
	 * */
	public void clearStudentList() {
		//
		// Clear student list
		tblStudents.removeAllRows();
		lblStudentQty.setText("");
	}
	
	/*
	 * */
	public void clearLogList() {
		//
		tblLogs.removeAllRows();
	}
	
	/************************* UI Preparation ****************************************/
	
	/*
	 * */
	@Override
	public void initializeUI() {
		//
		pnlAdd.setVisible(false);
		//
		initializeDateFields();
		//
		initializeRichTextArea();
		//
		initializeAddPopup();
	}
	
	/*
	 * */
	private void initializeAddPopup() {
		//
		pp = new DialogBox();
		pp.setGlassEnabled(true);
		pp.setText("Cahier de textes");
		pp.add( pnlAdd );
		//
		pp.addCloseHandler( new CloseHandler<PopupPanel>() {

			@Override
			public void onClose(CloseEvent<PopupPanel> event) {
				//
				pp.hide();
				txtTitle.setText("");
				txtContent.setText("");
				lblEditLogId.setText("");
				pnlAdd.setVisible( false );
			}
			
		});
	}

	/*
	 * */
	private void initializeRichTextArea() {
		// TODO : For future use, in case of using Rich Text Editor
	}
	
	/*
	 * */
	private void initializeDateFields() {
		//
		dateFrom.setFormat(new DateBox.DefaultFormat(DateTimeFormat.getFormat("dd.MM.yyyy")));
		dateFrom.addValueChangeHandler( new ValueChangeHandler<Date>(){
			int pog = 0;
			@Override
			public void onValueChange(ValueChangeEvent<Date> event) {
				//
				if (pog == 0) {
					pog++;
				} else {
					pog = 0;
				}
			}
		});
		dateFrom.setValue(new Date());
		//
		dateTo.setFormat(new DateBox.DefaultFormat(DateTimeFormat.getFormat("dd.MM.yyyy")));
		dateTo.addValueChangeHandler( new ValueChangeHandler<Date>(){
			int pog = 0;
			@Override
			public void onValueChange(ValueChangeEvent<Date> event) {
				//
				if (pog == 0) {
					pog++;
				} else {
					pog = 0;
				}
			}
		});
		dateTo.setValue(new Date());
	}	

}