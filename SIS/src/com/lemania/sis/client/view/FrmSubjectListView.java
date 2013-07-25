package com.lemania.sis.client.view;

import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.cell.client.CheckboxCell;
import com.google.gwt.cell.client.EditTextCell;
import com.google.gwt.cell.client.FieldUpdater;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.presenter.FrmSubjectListPresenter;
import com.lemania.sis.client.uihandler.FrmSubjectListUiHandler;
import com.lemania.sis.shared.SubjectProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.view.client.ListDataProvider;

public class FrmSubjectListView extends ViewWithUiHandlers<FrmSubjectListUiHandler> implements
		FrmSubjectListPresenter.MyView {

	private final Widget widget;
	
	// Thuan
	private int selectedSubject = -1;
	ListDataProvider<SubjectProxy> dataProvider = new ListDataProvider<SubjectProxy>();

	public interface Binder extends UiBinder<Widget, FrmSubjectListView> {
	}

	@Inject
	public FrmSubjectListView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	@UiField(provided=true) DataGrid<SubjectProxy> tblSubjectList = new DataGrid<SubjectProxy>();

	@Override
	public void initializeSubjectTable() {
		//
		// Add a text column to show the name.
	    Column<SubjectProxy, String> colSubjectName = new Column<SubjectProxy, String>(new EditTextCell()) {
	      @Override
	      public String getValue(SubjectProxy object) {
	        return object.getSubjectName();
	      }
	    };
	    tblSubjectList.addColumn(colSubjectName, "Nom");
	    // Field updater
	    colSubjectName.setFieldUpdater(new FieldUpdater<SubjectProxy, String>(){
	    	@Override
	    	public void update(int index, SubjectProxy subject, String value){
	    		if (getUiHandlers() != null) {	    			
	    			selectedSubject = index;
	    			getUiHandlers().updateSubject( subject, value, subject.getDefaultCoef().toString(), subject.getIsActive() );
	    		}	    		
	    	}
	    });
	    
	    //
	    Column<SubjectProxy, String> colCoef = new Column<SubjectProxy, String>(new EditTextCell()) {
	      @Override
	      public String getValue(SubjectProxy object) {
	        return object.getDefaultCoef().toString();
	      } 
	    };
	    tblSubjectList.addColumn( colCoef, "Coefficient" );
	    // Field updater
	    colCoef.setFieldUpdater(new FieldUpdater<SubjectProxy, String>(){
	    	@Override
	    	public void update(int index, SubjectProxy subject, String value){
	    		if (getUiHandlers() != null) {	    			
	    			selectedSubject = index;
	    			getUiHandlers().updateSubject( subject, subject.getSubjectName(), value, subject.getIsActive() );
	    		}	    		
	    	}
	    });
	    
	    //
	    CheckboxCell cellActive = new CheckboxCell();
	    Column<SubjectProxy, Boolean> colActive = new Column<SubjectProxy, Boolean>(cellActive) {
	    	@Override
	    	public Boolean getValue(SubjectProxy subject){
	    		return subject.getIsActive();
	    	}	    	
	    };
	    tblSubjectList.addColumn(colActive, "Active");
	    // Field updater
	    colActive.setFieldUpdater(new FieldUpdater<SubjectProxy, Boolean>(){
	    	@Override
	    	public void update(int index, SubjectProxy subject, Boolean value){
	    		if (getUiHandlers() != null) {	    			
	    			selectedSubject = index;
	    			getUiHandlers().updateSubject( subject, subject.getSubjectName(), subject.getDefaultCoef().toString(), value );
	    		}	    		
	    	}
	    });
	    
	    dataProvider.addDataDisplay(tblSubjectList);		
	}

	@Override
	public void setSubjectListData(List<SubjectProxy> subjectList) {
		// 
		dataProvider.setList(subjectList);
	}

	@Override
	public void refreshUpdatedSubject(SubjectProxy subject) {
		// TODO Auto-generated method stub
		dataProvider.getList().remove( selectedSubject );
		dataProvider.getList().add( selectedSubject , subject );
		dataProvider.refresh();
	}
}
