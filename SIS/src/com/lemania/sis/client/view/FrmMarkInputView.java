package com.lemania.sis.client.view;

import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.presenter.FrmMarkInputPresenter;
import com.lemania.sis.client.uihandler.FrmMarkInputUiHandler;
import com.lemania.sis.shared.AssignmentProxy;
import com.lemania.sis.shared.BulletinBrancheProxy;
import com.lemania.sis.shared.BulletinSubjectProxy;
import com.lemania.sis.shared.ProfessorProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.view.client.ListDataProvider;
import com.google.gwt.view.client.SelectionChangeEvent;
import com.google.gwt.view.client.SingleSelectionModel;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.user.client.ui.DoubleBox;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.user.client.ui.TextArea;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.VerticalPanel;

public class FrmMarkInputView extends ViewWithUiHandlers<FrmMarkInputUiHandler> implements
		FrmMarkInputPresenter.MyView {

	private final Widget widget;
	
	// Thuan
	private ListDataProvider<BulletinSubjectProxy> bulletinSubjectDataProvider = new ListDataProvider<BulletinSubjectProxy>();
	private ListDataProvider<BulletinSubjectProxy> bulletinSubjectAverageDataProvider = new ListDataProvider<BulletinSubjectProxy>();
	private ListDataProvider<BulletinBrancheProxy> bulletinBrancheDataProvider = new ListDataProvider<BulletinBrancheProxy>();
	//
	private int selectedBulletinSubjectIndex = -1;
	private BulletinSubjectProxy selectedBulletinSubject;
	//
	private int selectedBulletinBrancheIndex = -1;
	private BulletinBrancheProxy selectedBulletinBranche;
	

	public interface Binder extends UiBinder<Widget, FrmMarkInputView> {
	}

	@Inject
	public FrmMarkInputView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField(provided=true) DataGrid<BulletinSubjectProxy> tblBulletinSubjects = new DataGrid<BulletinSubjectProxy>();
	@UiField(provided=true) DataGrid<BulletinBrancheProxy> tblBranches = new DataGrid<BulletinBrancheProxy>();
	@UiField ListBox lstProfs;
	@UiField ListBox lstAssignments;
	@UiField DoubleBox txt_t_1_1;
	@UiField DoubleBox txt_t_1_2;
	@UiField DoubleBox txt_t_1_3;
	@UiField DoubleBox txt_t_1_4;
	@UiField DoubleBox txt_t_1_5;
	@UiField DoubleBox txt_t_2_1;
	@UiField DoubleBox txt_t_2_2;
	@UiField DoubleBox txt_t_2_3;
	@UiField DoubleBox txt_t_2_4;
	@UiField DoubleBox txt_t_2_5;
	@UiField DoubleBox txt_t_3_1;
	@UiField DoubleBox txt_t_3_2;
	@UiField DoubleBox txt_t_3_3;
	@UiField DoubleBox txt_t_3_4;
	@UiField DoubleBox txt_t_3_5;
	@UiField Button cmdSave;
	@UiField TextArea txtRemarque1;
	@UiField TextArea txtRemarque2;
	@UiField TextArea txtRemarque3;
	@UiField Label lblStudentName;
	@UiField Label txtT1;
	@UiField Label txtT2;
	@UiField Label txtT3;
	@UiField VerticalPanel pnlT1;
	@UiField VerticalPanel pnlT2;
	@UiField VerticalPanel pnlT3;
	@UiField VerticalPanel pnlNoteInput;
	@UiField(provided=true) DataGrid<BulletinSubjectProxy> tblAverageGrade = new DataGrid<BulletinSubjectProxy>();
	
	
	@Override
	public void setProfListData(List<ProfessorProxy> profs) {
		//
		lstProfs.clear();
		lstProfs.addItem("-","");
		for (ProfessorProxy prof : profs)
			lstProfs.addItem(prof.getProfName(), prof.getId().toString());
	}
	
	
	/**/
	@UiHandler("lstProfs")
	void onLstProfsChange(ChangeEvent event) {
		//
		resetForm();
		//
		if (getUiHandlers() != null)
			getUiHandlers().onProfessorSelected(lstProfs.getValue(lstProfs.getSelectedIndex()));
	}

	
	/**/
	@Override
	public void resetForm() {
		//
		lstAssignments.clear();
		bulletinSubjectDataProvider.getList().clear();
		bulletinBrancheDataProvider.getList().clear();
		lblStudentName.setText("");
		//
		clearInputFields();
	}

	
	private void clearInputFields() {
		//
		txt_t_1_1.setText("");
		txt_t_1_2.setText("");
		txt_t_1_3.setText("");
		txt_t_1_4.setText("");
		txt_t_1_5.setText("");
		//
		txt_t_2_1.setText("");
		txt_t_2_2.setText("");
		txt_t_2_3.setText("");
		txt_t_2_4.setText("");
		txt_t_2_5.setText("");
		//
		txt_t_3_1.setText("");
		txt_t_3_2.setText("");
		txt_t_3_3.setText("");
		txt_t_3_4.setText("");
		txt_t_3_5.setText("");
		//
		txtRemarque1.setText("");
		txtRemarque2.setText("");
		txtRemarque3.setText("");
		//
		txtT1.setText("");
		txtT2.setText("");
		txtT3.setText("");
		//
		lblStudentName.setText("");
		//
		pnlT1.setVisible(false);
		pnlT2.setVisible(false);
		pnlT3.setVisible(false);
		cmdSave.setVisible(false);
	}
	

	/**/
	@Override
	public void setAssignmentTableData(List<AssignmentProxy> assignments) {
		// 		
		lstAssignments.clear();
		lstAssignments.addItem("-","");
		for (AssignmentProxy assignment : assignments){
			lstAssignments.addItem( 
					assignment.getProgrammeName() + " - "
							+ assignment.getClasseName() + " - "  
							+ assignment.getSubjectName(), 
				assignment.getId().toString());
		}
	}

	
	/**/
	@Override
	public void initializeUi() {
		//
		initializeBulletinSubjectTable();
		initializeBulletinBrancheTable();
		initializeAverageGrade();
	}
	
	
	/**/
	private void initializeAverageGrade() {
		//
		// Add a text column to show the name.	
 		TextColumn<BulletinSubjectProxy> colT1 = new TextColumn<BulletinSubjectProxy>() {
 	      @Override
 	      public String getValue(BulletinSubjectProxy object) {
 	        return object.getT1();
 	      }
 	    };
 	    tblAverageGrade.addColumn(colT1, "T1");
 	    
 	    // Add a text column to show the name.	
 		TextColumn<BulletinSubjectProxy> colExamT1 = new TextColumn<BulletinSubjectProxy>() {
 	      @Override
 	      public String getValue(BulletinSubjectProxy object) {
 	        return object.getExamT1();
 	      }
 	    };
 	    tblAverageGrade.addColumn(colExamT1, "E1");
 	    
 	    // Add a text column to show the name.	
 		TextColumn<BulletinSubjectProxy> colT2 = new TextColumn<BulletinSubjectProxy>() {
 	      @Override
 	      public String getValue(BulletinSubjectProxy object) {
 	        return object.getT2();
 	      }
 	    };
 	    tblAverageGrade.addColumn(colT2, "T2");
 	    
 	    // Add a text column to show the name.	
 		TextColumn<BulletinSubjectProxy> colExamT2 = new TextColumn<BulletinSubjectProxy>() {
 	      @Override
 	      public String getValue(BulletinSubjectProxy object) {
 	        return object.getExamT2();
 	      }
 	    };
 	    tblAverageGrade.addColumn(colExamT2, "E2");
 	    
 	 	// Add a text column to show the name.	
 		TextColumn<BulletinSubjectProxy> colT3 = new TextColumn<BulletinSubjectProxy>() {
 	      @Override
 	      public String getValue(BulletinSubjectProxy object) {
 	        return object.getT3();
 	      }
 	    };
 	    tblAverageGrade.addColumn(colT3, "T3");
 	    
 	   // Add a text column to show the name.	
 		TextColumn<BulletinSubjectProxy> colExamT3 = new TextColumn<BulletinSubjectProxy>() {
 	      @Override
 	      public String getValue(BulletinSubjectProxy object) {
 	        return object.getExamT3();
 	      }
 	    };
 	    tblAverageGrade.addColumn(colExamT3, "E3");
 	    
    	// Add a text column to show the name.	
 		TextColumn<BulletinSubjectProxy> colAn = new TextColumn<BulletinSubjectProxy>() {
 	      @Override
 	      public String getValue(BulletinSubjectProxy object) {
 	        return object.getAn();
 	      }
 	    };
 	    tblAverageGrade.addColumn(colAn, "Moyenne");
 	    
 	    //
 	    bulletinSubjectAverageDataProvider.addDataDisplay(tblAverageGrade);
	}
	

	/**/
	private void initializeBulletinBrancheTable() {
		// Add a text column to show the name.
		TextColumn<BulletinBrancheProxy> colBrancheName = new TextColumn<BulletinBrancheProxy>() {
 	      @Override
 	      public String getValue(BulletinBrancheProxy object) {
 	        return object.getBulletinBrancheName();
 	      }
 	    };
 	    tblBranches.addColumn(colBrancheName, "Branches");
 	    
 	   // Add a text column to show the name.	
 		TextColumn<BulletinBrancheProxy> colCoef = new TextColumn<BulletinBrancheProxy>() {
 	      @Override
 	      public String getValue(BulletinBrancheProxy object) {
 	        return object.getBrancheCoef().toString();
 	      }
 	    };
 	   tblBranches.addColumn(colCoef, "Coef");
 	   tblBranches.setColumnWidth(colCoef, 15, Unit.PCT);
 	    
 	    // Add a text column to show the name.	
 		TextColumn<BulletinBrancheProxy> colT1 = new TextColumn<BulletinBrancheProxy>() {
 	      @Override
 	      public String getValue(BulletinBrancheProxy object) {
 	        return object.getT1();
 	      }
 	    };
 	   tblBranches.addColumn(colT1, "T1");
 	   tblBranches.setColumnWidth(colT1, 15, Unit.PCT);
 	    
 	    // Add a text column to show the name.	
 		TextColumn<BulletinBrancheProxy> colT2 = new TextColumn<BulletinBrancheProxy>() {
 	      @Override
 	      public String getValue(BulletinBrancheProxy object) {
 	        return object.getT2();
 	      }
 	    };
 	   tblBranches.addColumn(colT2, "T2");
 	   tblBranches.setColumnWidth(colT2, 15, Unit.PCT);
 	    
 	 	// Add a text column to show the name.	
 		TextColumn<BulletinBrancheProxy> colT3 = new TextColumn<BulletinBrancheProxy>() {
 	      @Override
 	      public String getValue(BulletinBrancheProxy object) {
 	        return object.getT3();
 	      }
 	    };
 	   tblBranches.addColumn(colT3, "T3");
 	   tblBranches.setColumnWidth(colT3, 15, Unit.PCT);
 	 	    
 	   	
 	    // Add a selection model to handle user selection.
	    final SingleSelectionModel<BulletinBrancheProxy> selectionModel = new SingleSelectionModel<BulletinBrancheProxy>();
	    tblBranches.setSelectionModel(selectionModel);
	    selectionModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
	      public void onSelectionChange(SelectionChangeEvent event) {
	        selectedBulletinBranche = selectionModel.getSelectedObject();
	        if (selectedBulletinBranche != null) {
	        	//
	        	lblStudentName.setText( selectedBulletinSubject.getStudentName() + " - " + selectedBulletinBranche.getBulletinBrancheName());
	        	//
	        	selectedBulletinBrancheIndex = bulletinBrancheDataProvider.getList().indexOf(selectedBulletinBranche);
	        	getUiHandlers().onBulletinBrancheSelected(selectedBulletinBranche);
	        }
	      }
	    });
	    
	    // Set data provider
	    bulletinBrancheDataProvider.addDataDisplay( tblBranches );
	}
	

	/**/
	private void initializeBulletinSubjectTable() {
		// Add a text column to show the name.
		TextColumn<BulletinSubjectProxy> colSubjectName = new TextColumn<BulletinSubjectProxy>() {
 	      @Override
 	      public String getValue(BulletinSubjectProxy object) {
 	        return object.getStudentName();
 	      }
 	    };
 	    tblBulletinSubjects.addColumn(colSubjectName, "Elève");
   
 	    
 	    // Add a selection model to handle user selection.
	    final SingleSelectionModel<BulletinSubjectProxy> selectionModel = new SingleSelectionModel<BulletinSubjectProxy>();
	    tblBulletinSubjects.setSelectionModel(selectionModel);
	    selectionModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
	      public void onSelectionChange(SelectionChangeEvent event) {
	        selectedBulletinSubject = selectionModel.getSelectedObject();
	        if (selectedBulletinSubject != null) {
	        	//
	        	bulletinSubjectAverageDataProvider.getList().clear();
	        	bulletinSubjectAverageDataProvider.getList().add(selectedBulletinSubject);
	        	//
	        	selectedBulletinBrancheIndex = -1;
	        	tblBranches.getSelectionModel().setSelected(selectedBulletinBranche, false);
	        	selectedBulletinBranche = null;
	        	clearInputFields();
	        	//
	        	selectedBulletinSubjectIndex = bulletinSubjectDataProvider.getList().indexOf(selectedBulletinSubject);
	        	getUiHandlers().onBulletinSubjectSelected(selectedBulletinSubject);
	        }
	      }
	    });
	    
	    // Set data provider
	    bulletinSubjectDataProvider.addDataDisplay( tblBulletinSubjects );
	}
	

	/**/
	@Override
	public void setBulletinSubjectTableData(List<BulletinSubjectProxy> bulletinSubjects) {
		//
		bulletinSubjectDataProvider.getList().clear();
		bulletinSubjectDataProvider.setList(bulletinSubjects);
	}

	
	/**/
	@Override
	public void setBulletinBrancheTableData(List<BulletinBrancheProxy> bulletinBranches) {
		// 
		bulletinBrancheDataProvider.getList().clear();
		bulletinBrancheDataProvider.setList(bulletinBranches);
	}
	
	
	/**/
	@UiHandler("lstAssignments")
	void onLstAssignmentsChange(ChangeEvent event) {
		//
		bulletinSubjectDataProvider.getList().clear();
		bulletinBrancheDataProvider.getList().clear();
		//
		selectedBulletinBrancheIndex = -1;
    	tblBranches.getSelectionModel().setSelected(selectedBulletinBranche, false);
    	selectedBulletinBranche = null;
    	//
		selectedBulletinSubjectIndex = -1;
    	tblBulletinSubjects.getSelectionModel().setSelected(selectedBulletinSubject, false);
    	selectedBulletinSubject = null;
		//
		clearInputFields();
		//
		if (getUiHandlers() != null)
			getUiHandlers().onAssignmentSelected( lstAssignments.getValue(lstAssignments.getSelectedIndex()));
	}

	@Override
	public void showCurrentNotes() {
		//
		txt_t_1_1.setText( selectedBulletinBranche.getT1_1() );
		txt_t_1_2.setText( selectedBulletinBranche.getT1_2() );
		txt_t_1_3.setText( selectedBulletinBranche.getT1_3() );
		txt_t_1_4.setText( selectedBulletinBranche.getT1_4() );
		txt_t_1_5.setText( selectedBulletinBranche.getT1_5() );
		//
		txt_t_2_1.setText( selectedBulletinBranche.getT2_1() );
		txt_t_2_2.setText( selectedBulletinBranche.getT2_2() );
		txt_t_2_3.setText( selectedBulletinBranche.getT2_3() );
		txt_t_2_4.setText( selectedBulletinBranche.getT2_4() );
		txt_t_2_5.setText( selectedBulletinBranche.getT2_5() );
		//
		txt_t_3_1.setText( selectedBulletinBranche.getT3_1() );
		txt_t_3_2.setText( selectedBulletinBranche.getT3_2() );
		txt_t_3_3.setText( selectedBulletinBranche.getT3_3() );
		txt_t_3_4.setText( selectedBulletinBranche.getT3_4() );
		txt_t_3_5.setText( selectedBulletinBranche.getT3_5() );
		//
		txtT1.setText( selectedBulletinBranche.getT1() );
		txtT2.setText( selectedBulletinBranche.getT2() );
		txtT3.setText( selectedBulletinBranche.getT3() );
		//
		modifyUiByProgramme();
	}
	
	@Override
	public void showCurrentRemarques(){
		//
		txtRemarque1.setText( selectedBulletinSubject.getRemarqueT1() );
		txtRemarque2.setText( selectedBulletinSubject.getRemarqueT2() );
		txtRemarque3.setText( selectedBulletinSubject.getRemarqueT3() );
	}
	
	
	@UiHandler("cmdSave")
	void onCmdSaveClick(ClickEvent event) {
		if (getUiHandlers() != null)
			getUiHandlers().saveNotes(selectedBulletinBranche, selectedBulletinSubject, 
					txt_t_1_1.getText(), txt_t_1_2.getText(), txt_t_1_3.getText(), txt_t_1_4.getText(), txt_t_1_5.getText(), 
					txt_t_2_1.getText(), txt_t_2_2.getText(), txt_t_2_3.getText(), txt_t_2_4.getText(), txt_t_2_5.getText(), 
					txt_t_3_1.getText(), txt_t_3_2.getText(), txt_t_3_3.getText(), txt_t_3_4.getText(), txt_t_3_5.getText(), 
					txtRemarque1.getText(), txtRemarque2.getText(), txtRemarque3.getText());
	}

	@Override
	public void showUpdatedBulletinDetails(
			BulletinBrancheProxy bulletinBranche,
			BulletinSubjectProxy bulletinSubject) {
		//
		bulletinSubjectDataProvider.getList().set(selectedBulletinSubjectIndex, bulletinSubject);
		//
		bulletinBrancheDataProvider.getList().set(selectedBulletinBrancheIndex, bulletinBranche);
		//
		bulletinSubjectAverageDataProvider.getList().set(0, bulletinSubject);
		//
		txtT1.setText( bulletinBranche.getT1() );
		txtT2.setText( bulletinBranche.getT2() );
		txtT3.setText( bulletinBranche.getT3() );
	}

	@Override
	public void modifyUiByProgramme() {
		//
		if (selectedBulletinBrancheIndex > -1){
			pnlT1.setVisible(true);
			pnlT2.setVisible(true);
			cmdSave.setVisible(true);
		}
		//
		if (lstAssignments.getItemText( lstAssignments.getSelectedIndex() ).toLowerCase().contains("matu")){
			tblAverageGrade.setColumnWidth(4, "0px");
			tblAverageGrade.setColumnWidth(5, "0px");
			tblBranches.setColumnWidth(4, "0px");
			pnlT3.setVisible(false);
		} else {			
			tblAverageGrade.setColumnWidth(4, 15, Unit.PCT);
			tblAverageGrade.setColumnWidth(5, 15, Unit.PCT);
			tblBranches.setColumnWidth(4, 15, Unit.PCT);
			if (selectedBulletinBrancheIndex > -1)
				if ( !pnlT3.isVisible() ) pnlT3.setVisible(true);
		}
	}
}
