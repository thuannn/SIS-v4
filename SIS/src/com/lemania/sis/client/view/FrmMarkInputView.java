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
import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.DoubleBox;

public class FrmMarkInputView extends ViewWithUiHandlers<FrmMarkInputUiHandler> implements
		FrmMarkInputPresenter.MyView {

	private final Widget widget;
	
	// Thuan
	private ListDataProvider<BulletinSubjectProxy> bulletinSubjectDataProvider = new ListDataProvider<BulletinSubjectProxy>();
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
	@UiField Grid tblNotesInput;
	@UiField Grid tblRemarksInput;
	@UiField TextBox txtRemarque1;
	@UiField TextBox txtRemarque2;
	@UiField TextBox txtRemarque3;
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
		if (getUiHandlers() != null)
			getUiHandlers().onProfessorSelected(lstProfs.getValue(lstProfs.getSelectedIndex()));
	}

	
	/**/
	@Override
	public void resetForm() {
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
	}

	/**/
	@Override
	public void setAssignmentTableData(List<AssignmentProxy> assignments) {
		// 		
		lstAssignments.clear();
		lstAssignments.addItem("-","");
		for (AssignmentProxy assignment : assignments){
			lstAssignments.addItem( 
							assignment.getClasseName() + " - " 
							+ assignment.getProgrammeName() + " - " 
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
	}
	
	
	/**/
	private void initializeBulletinBrancheTable() {
		// Add a text column to show the name.
		TextColumn<BulletinBrancheProxy> colSubjectName = new TextColumn<BulletinBrancheProxy>() {
 	      @Override
 	      public String getValue(BulletinBrancheProxy object) {
 	        return object.getBulletinBrancheName();
 	      }
 	    };
 	    tblBranches.addColumn(colSubjectName, "Branches");
	    
	    // Add a text column to show the name.
 		TextColumn<BulletinBrancheProxy> colCoef = new TextColumn<BulletinBrancheProxy>() {
 	      @Override
 	      public String getValue(BulletinBrancheProxy object) {
 	        return object.getBrancheCoef().toString();
 	      }
 	    };
 	    tblBranches.addColumn(colCoef, "Coef");
 	   	tblBranches.setColumnWidth( colCoef, 10, Unit.PCT);
 	   
 	   
 	   	// Add a text column to show the name.	
 		TextColumn<BulletinBrancheProxy> colT1 = new TextColumn<BulletinBrancheProxy>() {
 	      @Override
 	      public String getValue(BulletinBrancheProxy object) {
 	        return object.getT1();
 	      }
 	    };
 	    tblBranches.addColumn(colT1, "T1");
 	   	tblBranches.setColumnWidth( colT1, 10, Unit.PCT);
 	   
 	    // Add a text column to show the name.	
 		TextColumn<BulletinBrancheProxy> colT2 = new TextColumn<BulletinBrancheProxy>() {
 	      @Override
 	      public String getValue(BulletinBrancheProxy object) {
 	        return object.getT2();
 	      }
 	    };
 	    tblBranches.addColumn(colT2, "T2");
 	   	tblBranches.setColumnWidth( colT2, 10, Unit.PCT);
 	 	    
 	 	// Add a text column to show the name.	
 		TextColumn<BulletinBrancheProxy> colT3 = new TextColumn<BulletinBrancheProxy>() {
 	      @Override
 	      public String getValue(BulletinBrancheProxy object) {
 	        return object.getT3();
 	      }
 	    };
 	    tblBranches.addColumn(colT3, "T3");
 	   	tblBranches.setColumnWidth( colT3, 10, Unit.PCT);
 	  
 	   	
 	    // Add a selection model to handle user selection.
	    final SingleSelectionModel<BulletinBrancheProxy> selectionModel = new SingleSelectionModel<BulletinBrancheProxy>();
	    tblBranches.setSelectionModel(selectionModel);
	    selectionModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
	      public void onSelectionChange(SelectionChangeEvent event) {
	        selectedBulletinBranche = selectionModel.getSelectedObject();
	        if (selectedBulletinBranche != null) {
	        	// TODO
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
	    
	    // Add a text column to show the name.	
 		TextColumn<BulletinSubjectProxy> colCoef = new TextColumn<BulletinSubjectProxy>() {
 	      @Override
 	      public String getValue(BulletinSubjectProxy object) {
 	        return object.getSubjectCoef().toString();
 	      }
 	    };
 	    tblBulletinSubjects.addColumn(colCoef, "Coef");
 	    tblBulletinSubjects.setColumnWidth( colCoef, 10, Unit.PCT);
 	   
 	    
    	// Add a text column to show the name.	
 		TextColumn<BulletinSubjectProxy> colT1 = new TextColumn<BulletinSubjectProxy>() {
 	      @Override
 	      public String getValue(BulletinSubjectProxy object) {
 	        return object.getT1();
 	      }
 	    };
 	    tblBulletinSubjects.addColumn(colT1, "T1");
 	    tblBulletinSubjects.setColumnWidth( colT1, 10, Unit.PCT);
 	    
 	    // Add a text column to show the name.	
 		TextColumn<BulletinSubjectProxy> colT2 = new TextColumn<BulletinSubjectProxy>() {
 	      @Override
 	      public String getValue(BulletinSubjectProxy object) {
 	        return object.getT2();
 	      }
 	    };
 	    tblBulletinSubjects.addColumn(colT2, "T2");
 	    tblBulletinSubjects.setColumnWidth( colT2, 10, Unit.PCT);
 	    
 	 	// Add a text column to show the name.	
 		TextColumn<BulletinSubjectProxy> colT3 = new TextColumn<BulletinSubjectProxy>() {
 	      @Override
 	      public String getValue(BulletinSubjectProxy object) {
 	        return object.getT3();
 	      }
 	    };
 	    tblBulletinSubjects.addColumn(colT3, "T3");
 	    tblBulletinSubjects.setColumnWidth( colT3, 10, Unit.PCT);
 	    
    	// Add a text column to show the name.	
 		TextColumn<BulletinSubjectProxy> colAn = new TextColumn<BulletinSubjectProxy>() {
 	      @Override
 	      public String getValue(BulletinSubjectProxy object) {
 	        return object.getAn();
 	      }
 	    };
 	    tblBulletinSubjects.addColumn(colAn, "An");
 	    tblBulletinSubjects.setColumnWidth( colAn, 10, Unit.PCT);
   
 	    
 	    // Add a selection model to handle user selection.
	    final SingleSelectionModel<BulletinSubjectProxy> selectionModel = new SingleSelectionModel<BulletinSubjectProxy>();
	    tblBulletinSubjects.setSelectionModel(selectionModel);
	    selectionModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
	      public void onSelectionChange(SelectionChangeEvent event) {
	        selectedBulletinSubject = selectionModel.getSelectedObject();
	        if (selectedBulletinSubject != null) {
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
		txtRemarque1.setText( selectedBulletinSubject.getRemarqueT1() );
		txtRemarque2.setText( selectedBulletinSubject.getRemarqueT2() );
		txtRemarque3.setText( selectedBulletinSubject.getRemarqueT3() );
	}
}
