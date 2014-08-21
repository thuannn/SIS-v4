package com.lemania.sis.client.form.absencemgt;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.cell.client.CheckboxCell;
import com.google.gwt.cell.client.EditTextCell;
import com.google.gwt.cell.client.FieldUpdater;
import com.google.gwt.dom.client.StyleInjector;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.logical.shared.CloseEvent;
import com.google.gwt.event.logical.shared.CloseHandler;
import com.google.gwt.event.logical.shared.SelectionEvent;
import com.google.gwt.event.logical.shared.SelectionHandler;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.Event.NativePreviewEvent;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.SimplePager;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.view.client.ListDataProvider;
import com.google.gwt.view.client.SelectionChangeEvent;
import com.google.gwt.view.client.SingleSelectionModel;
import com.lemania.sis.client.UI.DynamicSelectionCell;
import com.lemania.sis.client.values.AbsenceValues;
import com.lemania.sis.client.values.NotificationValues;
import com.lemania.sis.shared.absenceitem.AbsenceItemProxy;
import com.lemania.sis.shared.motifabsence.MotifAbsenceProxy;
import com.lemania.sis.shared.student.StudentProxy;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.datepicker.client.CalendarModel;
import com.google.gwt.user.datepicker.client.CalendarUtil;
import com.google.gwt.user.datepicker.client.DateBox;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.MultiWordSuggestOracle;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.SuggestOracle.Suggestion;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.user.client.ui.SuggestBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.AbsolutePanel;
import com.ibm.icu.util.Calendar;

public class AbsenceManagementView extends ViewWithUiHandlers<AbsenceManagementUiHandlers> implements
		AbsenceManagementPresenter.MyView {

	private final Widget widget;
	
	//
	int selectedStudentIndex = -1;
	ListDataProvider<StudentProxy> providerStudents = new ListDataProvider<StudentProxy>();
	StudentProxy selectedStudent;
	
	ListDataProvider<AbsenceItemProxy> providerAbsences = new ListDataProvider<AbsenceItemProxy>();
	int selectedAbsenceItemIndex = -1;
	AbsenceItemProxy selectedAbsenceItem;
	
	ListDataProvider<MotifAbsenceProxy> providerMotifs = new ListDataProvider<MotifAbsenceProxy>();
	List<String> motifList = new ArrayList<String>();
	
	DynamicSelectionCell cellMotifs;
	SuggestBox sgbStudents;
	private final MultiWordSuggestOracle mySuggestions = new MultiWordSuggestOracle();
	
	//
	

	public interface Binder extends UiBinder<Widget, AbsenceManagementView> {
	}

	@Inject
	public AbsenceManagementView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField(provided=true) DataGrid<AbsenceItemProxy> tblAbsences = new DataGrid<AbsenceItemProxy>();
	@UiField SimplePager pagerAbsences;
	@UiField Label lblStudentName;
	@UiField DateBox dateFrom;
	@UiField DateBox dateTo;
	@UiField Button cmdFilter;
	@UiField ListBox lstStudents;
	@UiField Button cmdAddAbsence;
	@UiField Button cmdPrint;
	@UiField HorizontalPanel pnlNames;
	@UiField VerticalPanel pnlBulletin;
	@UiField HTMLPanel lblDateTo;
	@UiField VerticalPanel pnlMainBulletin;
	@UiField VerticalPanel pnlMainAbsences;
	@UiField FlexTable tblFlexAbsences;
	@UiField Label lblBulletinStudentName;
	@UiField Label lblBulletinClasse;
	@UiField Label lblToDate;
	@UiField Label lblFromDate;
	@UiField AbsolutePanel pnlWhiteBackground;
	@UiField Label lblSpace;
	@UiField HorizontalPanel non;
	@UiField VerticalPanel pnlDirection;
	
	/*
	 * */
	@Override
	public void setStudentTableData(List<StudentProxy> studentList) {
		//
		providerStudents.getList().clear();
		providerStudents.setList(studentList);
		providerStudents.flush();
		//
		mySuggestions.clear();
		lstStudents.clear();
		lstStudents.addItem("Choisir");
		for (StudentProxy sp : studentList) {
			lstStudents.addItem( sp.getFirstName() + " " + sp.getLastName(), sp.getId().toString() );
			mySuggestions.add( sp.getFirstName() + " " + sp.getLastName() );
		}
	}

	/*
	 * */
	@Override
	public void initializeUI() {
		//
//		initializeStudentTable();
		//
		initializeAbsenceTable();
		//
		initializeDateFields();
		//
		initializeSuggestBox();
	}
	
	
	
	/*
	 * */
	private void initializeSuggestBox() {
		//
		sgbStudents = new SuggestBox( mySuggestions );
		sgbStudents.addSelectionHandler( new SelectionHandler<Suggestion>(){

			@Override
			public void onSelection(SelectionEvent<Suggestion> event) {
				//
				onStudentSuggestionSelected( event.getSelectedItem().getReplacementString() );
			}
			
		});
		
		pnlNames.insert(sgbStudents, 0);
	}
	
	
	
	/*
	 * */
	void onStudentSuggestionSelected( String typedName ) {
		//
		for( StudentProxy sp : providerStudents.getList() ) {
			if ( typedName.equals( sp.getFirstName() + " " + sp.getLastName()) ) {
				selectedStudent = sp;
				lstStudents.setSelectedIndex( providerStudents.getList().indexOf(sp) + 1);
				lblStudentName.setText( selectedStudent.getFirstName() + " " + selectedStudent.getLastName() );
				//
				loadAbsenceByDate();
				break;
			}
		}
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

	/*
	 * */
	private void initializeAbsenceTable() {
		//
	    TextColumn<AbsenceItemProxy> colLastName = new TextColumn<AbsenceItemProxy>() {
	      @Override
	      public String getValue(AbsenceItemProxy object) {
	    	  String date = object.getStrAbsenceDate();
	    	  return date.substring(6) + "." + date.substring(4,6) + "." + date.substring(0,4); 
	      } 
	    };
	    tblAbsences.addColumn(colLastName, "Date");
	    tblAbsences.setColumnWidth(colLastName, 80, Unit.PX);
	    
	    //
	    TextColumn<AbsenceItemProxy> colPeriod = new TextColumn<AbsenceItemProxy>() {
	      @Override
	      public String getValue(AbsenceItemProxy object) {
	    	  return object.getPeriodDesc();
	      } 
	    };
	    tblAbsences.addColumn(colPeriod, "Period");
	    tblAbsences.setColumnWidth(colPeriod, 110, Unit.PX);
	    
	    // Add a text column to show the name.
	    TextColumn<AbsenceItemProxy> colType = new TextColumn<AbsenceItemProxy>() {
	      @Override
	      public String getValue(AbsenceItemProxy object) {
	        return object.getCodeAbsenceType();
	      }
	    };
	    tblAbsences.addColumn(colType, "Type");
	    tblAbsences.setColumnWidth(colType, 5, Unit.PCT);
	    
	    // Add a text column to show the name.
	    TextColumn<AbsenceItemProxy> colMinutes = new TextColumn<AbsenceItemProxy>() {
	      @Override
	      public String getValue(AbsenceItemProxy object) {
	        return (object.getLateMinutes() > 0) ? Integer.toString(object.getLateMinutes()) : "";
	      }
	    };
	    tblAbsences.addColumn(colMinutes, "Minutes");
	    tblAbsences.setColumnWidth(colMinutes, 5, Unit.PCT);
	    
	    // Prof
	    TextColumn<AbsenceItemProxy> colProf = new TextColumn<AbsenceItemProxy>() {
	      @Override
	      public String getValue(AbsenceItemProxy object) {
	        return object.getProfName();
	      }
	    };
	    tblAbsences.addColumn(colProf, "Professeur");
	    tblAbsences.setColumnWidth(colProf, 15, Unit.PCT);
	    
	    // Cours
	    TextColumn<AbsenceItemProxy> colSubject = new TextColumn<AbsenceItemProxy>() {
	      @Override
	      public String getValue(AbsenceItemProxy object) {
	        return object.getSubjectName();
	      }
	    };
	    tblAbsences.addColumn(colSubject, "Cours");
	    
	    // Remarque prof
	    TextColumn<AbsenceItemProxy> colRemarqueProf = new TextColumn<AbsenceItemProxy>() {
	      @Override
	      public String getValue(AbsenceItemProxy object) {
	        return (object.getProfComment().length() > 21 )? (object.getProfComment().substring(0,20) + "...") : object.getProfComment();
	      }
	    };
	    tblAbsences.addColumn(colRemarqueProf, "Comment du prof");
	    
	    // ---
	    CheckboxCell cellJustify = new CheckboxCell();
	    Column<AbsenceItemProxy, Boolean> colJustify = new Column<AbsenceItemProxy, Boolean>( cellJustify ) {
	    	@Override
	    	public Boolean getValue(AbsenceItemProxy student){
	    		return student.isJusttified();
	    	}	    	
	    };
	    colJustify.setFieldUpdater( new FieldUpdater<AbsenceItemProxy, Boolean>() {

			@Override
			public void update(int index, AbsenceItemProxy object, Boolean value) {
				//
				getUiHandlers().updateJustifyStatus(object, value);
			}
	    	
	    });
	    tblAbsences.addColumn(colJustify, "Excusée");
	    tblAbsences.setColumnWidth(colJustify, 50, Unit.PX);
	    
	    
	    // ---
	    CheckboxCell cellParent = new CheckboxCell();
	    Column<AbsenceItemProxy, Boolean> colParent = new Column<AbsenceItemProxy, Boolean>( cellParent ) {
	    	@Override
	    	public Boolean getValue(AbsenceItemProxy student){
	    		return student.isParentNotified();
	    	}	    	
	    };
	    colParent.setFieldUpdater( new FieldUpdater<AbsenceItemProxy, Boolean>() {

			@Override
			public void update(int index, AbsenceItemProxy object, Boolean value) {
				//
				getUiHandlers().updateParentNotifiedStatus(object, value);
			}
	    	
	    });
	    tblAbsences.addColumn(colParent, "Parent notif.");
	    tblAbsences.setColumnWidth(colParent, 50, Unit.PX);
	    
	    
	    // ---
	    cellMotifs = new DynamicSelectionCell( motifList );
	    Column<AbsenceItemProxy, String> colMotifs = new Column<AbsenceItemProxy, String>(cellMotifs) {
			@Override
			public String getValue(AbsenceItemProxy object) {
				//
				if ( !object.getMotifId().equals("") )
					return getMotifTextById( object.getMotifId() );
				else
					return "";
			}
	    };
	    colMotifs.setFieldUpdater( new FieldUpdater<AbsenceItemProxy, String>(){

			@Override
			public void update(int index, AbsenceItemProxy object, String value) {
				//
				selectedAbsenceItemIndex = index;
				selectedAbsenceItem = object;
				for (MotifAbsenceProxy ma : providerMotifs.getList()) {
					if ( value.equals( ma.getMotifCode() + " - " + ma.getMotifLabel() )) {
						getUiHandlers().updateMotif( object, ma.getId().toString() );
						break;
					}
				}
			}
	    	
	    });
	    tblAbsences.addColumn(colMotifs, "Motif");
	    tblAbsences.setColumnWidth(colMotifs, 100, Unit.PX);
	    
	    //
	    // Admin comment
	    Column<AbsenceItemProxy, String> colAdminComment = new Column<AbsenceItemProxy, String>(new EditTextCell()) {
	      @Override
	      public String getValue(AbsenceItemProxy object) {
	        return (object.getAdminComment().length() > 21) ? (object.getAdminComment().substring(0,20) + "...") : object.getAdminComment();
	      } 
	    };
	    tblAbsences.addColumn(colAdminComment, "Note");
	    // Field updater
	    colAdminComment.setFieldUpdater(new FieldUpdater<AbsenceItemProxy, String>(){
	    	@Override
	    	public void update(int index, AbsenceItemProxy object, String value) {
	    		if ( !object.getAdminComment().equals(value) ) {
		    		if (getUiHandlers() != null) {	    	
		    			//
		    			selectedAbsenceItemIndex = index;
		    			getUiHandlers().updateAdminComment(object, value);
		    		}	    		
	    		}
	    	}
	    });
	    
	    // 
	    //	Selection model
	    final SingleSelectionModel<AbsenceItemProxy> selectionModel = new SingleSelectionModel<AbsenceItemProxy>();
	    tblAbsences.setSelectionModel(selectionModel);
	    selectionModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
	      public void onSelectionChange(SelectionChangeEvent event) {
	    	  //
	    	  selectedAbsenceItem = selectionModel.getSelectedObject();
	    	  selectedAbsenceItemIndex = providerAbsences.getList().indexOf(selectedAbsenceItem);
	      }
	    });
	    
	    //
	    pagerAbsences.setDisplay(tblAbsences);
	    
	    //
	    providerAbsences.addDataDisplay(tblAbsences);
	}
	
	

//	/* 
//	 * Initialize Student table 
//	 * */
//	public void initializeStudentTable(){
//		//
//	    TextColumn<StudentProxy> colLastName = new TextColumn<StudentProxy>() {
//	      @Override
//	      public String getValue(StudentProxy object) {
//	        return object.getFirstName();
//	      } 
//	    };
//	    tblStudents.addColumn(colLastName, "Prénom");
//	    
//	    // Add a text column to show the name.
//	    TextColumn<StudentProxy> colFirstName = new TextColumn<StudentProxy>() {
//	      @Override
//	      public String getValue(StudentProxy object) {
//	        return object.getLastName();
//	      }
//	    };
//	    tblStudents.addColumn(colFirstName, "Nom");
//	    
//	    // When user select a student, load his absence history
//	    //	Selection model
//	    final SingleSelectionModel<StudentProxy> selectionModel = new SingleSelectionModel<StudentProxy>();
//	    tblStudents.setSelectionModel(selectionModel);
//	    selectionModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
//	      public void onSelectionChange(SelectionChangeEvent event) {
//	    	  //
//	    	  selectedStudent = selectionModel.getSelectedObject();
//	    	  if (selectedStudent != null) {
//	    		  //
//	    		  lblStudentName.setText( selectedStudent.getFirstName() + " " + selectedStudent.getLastName());
//	    		  //
//	    		  getUiHandlers().onStudentSelected(selectedStudent);
//	    	  }
//	      }
//	    });
//	    
//	    //
//	    pagerStudents.setDisplay(tblStudents);
//	    
//	    //
//	    providerStudents.addDataDisplay(tblStudents);
//	    
//	}

	
	/*
	 * */
	@Override
	public void setAbsenceItemTableData(List<AbsenceItemProxy> absenceItems) {
		//
		providerAbsences.getList().clear();
		providerAbsences.getList().addAll(absenceItems);
		providerAbsences.flush();
	}

	
	/*
	 * */
	@Override
	public void setMotifListData(List<MotifAbsenceProxy> motifs) {
		//
		providerMotifs.getList().clear();
		providerMotifs.getList().addAll(motifs);
		//
		cellMotifs.clear();
		cellMotifs.addOption("Choisir");
		for(MotifAbsenceProxy ma : motifs)
			cellMotifs.addOption( ma.getMotifCode() + " - " + ma.getMotifLabel() );
	}
	
	
	/*
	 * */
	public String getMotifTextById( String motifId ){
		for (MotifAbsenceProxy ma : providerMotifs.getList() ) {
			if (ma.getId().toString().equals(motifId))
				return ma.getMotifCode() + " - " + ma.getMotifLabel();
		}
		return "";
	}

	
	/*
	 * */
	@Override
	public void resetUI() {
		// 
		// Clear absence items
		providerAbsences.getList().clear();
		providerAbsences.flush();
		//
		// Clear student selection
//		tblStudents.getSelectionModel().setSelected( selectedStudent, false);
		lstStudents.setSelectedIndex(0);
		//
		sgbStudents.setValue("");
		//
		setDaysOfTheMonth();
	}

	/*
	 * */
	private void setDaysOfTheMonth() {
		//
		Date date = new Date();
		
		CalendarUtil.setToFirstDayOfMonth(date);
		dateFrom.setValue(date);
		
		CalendarUtil.addMonthsToDate(date, 1);
		CalendarUtil.addDaysToDate(date, -1);
		dateTo.setValue(date);
	}

	/*
	 * */
	@Override
	public void setUpdatedAbsenceItem(AbsenceItemProxy aip) {
		//
		providerAbsences.getList().set( providerAbsences.getList().indexOf(selectedAbsenceItem), aip);
		providerAbsences.flush();
	}
	
	
	/*
	 * */
	@UiHandler("lstStudents")
	void onLstStudentsChange(ChangeEvent event) {
		//
		selectedStudent = providerStudents.getList().get( lstStudents.getSelectedIndex() - 1 );
		//
		lblStudentName.setText( selectedStudent.getFirstName() + " " + selectedStudent.getLastName() );
		sgbStudents.setValue( selectedStudent.getFirstName() + " " + selectedStudent.getLastName() );
		//
		loadAbsenceByDate();
	}
	
	
	
	/*
	 * */
	@UiHandler("cmdFilter")
	void onCmdFilterClick(ClickEvent event) {
		//
		if (selectedStudent == null)
			return;
		//
		loadAbsenceByDate();
	}
	
	
	/*
	 * */
	void loadAbsenceByDate() {
		//
		String fromDate = DateTimeFormat.getFormat("yyyyMMdd").format( dateFrom.getValue() );
		String toDate = DateTimeFormat.getFormat("yyyyMMdd").format( dateTo.getValue() );
		//
		getUiHandlers().filterDate(selectedStudent, fromDate, toDate);
	}
	
	
	
	/*
	 * */
	@UiHandler("cmdPrint")
	void onCmdPrintClick(ClickEvent event) {
		//
		PopupPanel popup = new PopupPanel(true) {
			@Override
			  protected void onPreviewNativeEvent(final NativePreviewEvent event) {
			    super.onPreviewNativeEvent(event);
			    switch (event.getTypeInt()) {
			        case Event.ONKEYDOWN:
			            if (event.getNativeEvent().getKeyCode() == KeyCodes.KEY_ESCAPE) {
			            	//
			                hide();
			            }
			            break;
			    }
			}
		};
		popup.setStyleName("whitePanel");
		popup.add( pnlBulletin );
		//
		drawAbsenceTable();
		//
		distributeLineHeight();
		//
		pnlWhiteBackground.setHeight( pnlBulletin.getOffsetHeight() + "px");
		pnlWhiteBackground.setVisible(true);
		//
		popup.addCloseHandler(new CloseHandler<PopupPanel>() {
			public void onClose(CloseEvent<PopupPanel> event) {
				//
				pnlMainBulletin.add(pnlBulletin);
				//
				pnlWhiteBackground.setVisible(false);
			}
		});
		//
		popup.show();
	}
	
	
	
	/*
	 * */
	private void distributeLineHeight() {
		//
//		int headerHeight = 80;
//		int directionSectionHeight = 80;
//		int rowHeight = 25;
//		int whiteSpace = 0;
//		//
//		pnlBulletin.setHeight( NotificationValues.bulletinPageHeight.toString() + "px" );
//		tblFlexAbsences.setHeight( (tblFlexAbsences.getRowCount() * rowHeight) + "px" );
//		whiteSpace = NotificationValues.bulletinPageHeight - (tblFlexAbsences.getRowCount() * rowHeight) - headerHeight - directionSectionHeight;
//		lblSpace.setHeight( whiteSpace + "px");
//		//
////		int lineMargin = Math.round( whiteSpace / (tblFlexAbsences.getRowCount() - 1 ) / 2 );
//// 		StyleInjector.inject(".bulletinCellMargin { padding:"+ lineMargin +"px 0px "+ lineMargin +"px 0px; font-size: 11px; border-top: 1px solid silver; border-right: 1px solid silver; }", true);
//		StyleInjector.inject(".bulletinCellMargin { height:"+ rowHeight +"px; font-size: 11px; border-top: 1px solid silver; border-right: 1px solid silver; }", true);
//		for (int i=0; i<tblFlexAbsences.getCellCount(0); i++)
//			for (int j=1; j<tblFlexAbsences.getRowCount(); j++) {
//				if (tblFlexAbsences.isCellPresent(j, i)) {
//					tblFlexAbsences.getCellFormatter().setStyleName(j, i, "bulletinCellMargin");
//				}
//			}

		double pageHeight = 25.7;
		double headerHeight = 3.6;
		double directionSectionHeight = 5.4;
		double rowHeight = 0.8;
		double whiteSpace = 0;
		//
		pnlBulletin.setHeight( pageHeight + "cm" );
		tblFlexAbsences.setHeight( (tblFlexAbsences.getRowCount() * rowHeight) + "cm" );
		whiteSpace = pageHeight - (tblFlexAbsences.getRowCount() * rowHeight) - headerHeight - directionSectionHeight;
		lblSpace.setHeight( whiteSpace + "cm");
		//
		StyleInjector.inject(".bulletinCellMargin { height:"+ rowHeight +"cm; font-size: 11px; border-top: 1px solid silver; border-right: 1px solid silver; }", true);
		for (int i=0; i<tblFlexAbsences.getCellCount(0); i++)
			for (int j=1; j<tblFlexAbsences.getRowCount(); j++) {
				if (tblFlexAbsences.isCellPresent(j, i)) {
					tblFlexAbsences.getCellFormatter().setStyleName(j, i, "bulletinCellMargin");
				}
			}
	}
	
	
	
	/*
	 * Show or hide columns to send to parents
	 * */
	void drawAbsenceTable() {
		//
		int headerRow = 1;
		//
		int indexColDate = 0;
		int indexColPeriod = 1;
		int indexColType = 2;
		int indexColMinute = 3;
		int indexColProf = 4;
		int indexColCourse = 5;
		int indexColJustify = 6;
		//
		lblBulletinStudentName.setText( lblStudentName.getText() );
		lblBulletinClasse.setText( "" );
		lblFromDate.setText( dateFrom.getTextBox().getText() );
		lblToDate.setText( dateTo.getTextBox().getText() );
		//
		tblFlexAbsences.removeAllRows();
		//
		tblFlexAbsences.setText( 0 , indexColDate, "Date" );
		tblFlexAbsences.setText( 0 , indexColPeriod, "Période" );
		tblFlexAbsences.setText( 0 , indexColType, "Type" );
		tblFlexAbsences.setText( 0 , indexColMinute, "Minutes" );
		tblFlexAbsences.setText( 0 , indexColProf, "Professeur" );
		tblFlexAbsences.setText( 0 , indexColCourse, "Cours" );
		tblFlexAbsences.setText( 0 , indexColJustify, "Excusée" );
		//
		AbsenceItemProxy ai;
		for ( int row = 0; row < providerAbsences.getList().size(); row++ ) {
			ai = providerAbsences.getList().get(row);
			tblFlexAbsences.setText( row + headerRow , indexColDate, ai.getStrAbsenceDate().substring(6) + "." + ai.getStrAbsenceDate().substring(4,6) + "." + ai.getStrAbsenceDate().substring(0,4)  );
			tblFlexAbsences.setText( row + headerRow , indexColPeriod, ai.getPeriodDesc() );
			tblFlexAbsences.setText( row + headerRow , indexColType, AbsenceValues.getCodeFR( ai.getCodeAbsenceType() ) );
			tblFlexAbsences.setText( row + headerRow , indexColMinute, (ai.getLateMinutes()>0) ? Integer.toString( ai.getLateMinutes() ) : "" );
			tblFlexAbsences.setText( row + headerRow , indexColProf, ai.getProfName() );
			tblFlexAbsences.setText( row + headerRow , indexColCourse, ai.getSubjectName() );
			tblFlexAbsences.setText( row + headerRow , indexColJustify, ai.isJusttified() ? "Oui" : " " );
		}
		//
		styleTable();
	}
	
	
	/**/
	private void styleTable() {
		//		
		tblFlexAbsences.setCellSpacing(0);
		tblFlexAbsences.setCellPadding(3);		
		//
		for (int i=0; i<tblFlexAbsences.getCellCount(0); i++)
			tblFlexAbsences.getCellFormatter().setStyleName(0, i, "bulletinHeader");	
		//
		for (int i=0; i<tblFlexAbsences.getCellCount(0); i++)
			for (int j=1; j<tblFlexAbsences.getRowCount(); j++) {
				if (tblFlexAbsences.isCellPresent(j, i)) {
					if (tblFlexAbsences.getCellFormatter().getStyleName(j, i).equals(""))
						tblFlexAbsences.getCellFormatter().setStyleName(j, i, "bulletinBrancheLine");
				}
			}
	}
}
