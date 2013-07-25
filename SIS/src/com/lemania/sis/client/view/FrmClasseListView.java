package com.lemania.sis.client.view;

import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.cell.client.CheckboxCell;
import com.google.gwt.cell.client.EditTextCell;
import com.google.gwt.cell.client.FieldUpdater;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.presenter.FrmClasseListPresenter;
import com.lemania.sis.client.uihandler.FrmClasseListUiHandler;
import com.lemania.sis.shared.ClasseProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.view.client.ListDataProvider;

public class FrmClasseListView extends ViewWithUiHandlers<FrmClasseListUiHandler> implements
		FrmClasseListPresenter.MyView {

	private final Widget widget;
	
	// Thuan
	private int selectedClasse = -1;
	ListDataProvider<ClasseProxy> dataProvider = new ListDataProvider<ClasseProxy>();

	public interface Binder extends UiBinder<Widget, FrmClasseListView> {
	}

	@Inject
	public FrmClasseListView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField(provided=true) DataGrid<ClasseProxy> tblClasseList = new DataGrid<ClasseProxy>();
	
	@Override
	public void initializeTable() {
		//
		// Add a text column to show the name.
	    Column<ClasseProxy, String> colName = new Column<ClasseProxy, String>(new EditTextCell()) {
	      @Override
	      public String getValue(ClasseProxy object) {
	        return object.getClassName();
	      }
	    };
	    tblClasseList.addColumn(colName, "Nom de la classe");
	    colName.setFieldUpdater(new FieldUpdater<ClasseProxy, String>(){
	    	@Override
	    	public void update(int index, ClasseProxy classe, String value){
	    		if (getUiHandlers() != null) {	    			
	    			selectedClasse = index;
	    			getUiHandlers().updateClasse(classe, value, classe.getIsActive());
	    		}	    		
	    	}
	    });
	    
	    // Active
	    CheckboxCell cellActive = new CheckboxCell();
	    Column<ClasseProxy, Boolean> colActive = new Column<ClasseProxy, Boolean>(cellActive) {
	    	@Override
	    	public Boolean getValue(ClasseProxy classe){
	    		return classe.getIsActive();
	    	}	    	
	    };
	    tblClasseList.addColumn(colActive, "Active");
	    colActive.setFieldUpdater(new FieldUpdater<ClasseProxy, Boolean>(){
	    	@Override
	    	public void update(int index, ClasseProxy classe, Boolean value){
	    		if (getUiHandlers() != null) {
	    			selectedClasse = index;
	    			getUiHandlers().updateClasse(classe, classe.getClassName(), value);
	    		}	    		
	    	}
	    });
	    //
	    
	    dataProvider.addDataDisplay(tblClasseList);
	}

	@Override
	public void setClasseListData(List<ClasseProxy> classeList) {
		//
		dataProvider.setList(classeList);
	}

	@Override
	public void refreshUpdatedClasse(ClasseProxy classe) {
		//
		dataProvider.getList().remove(selectedClasse);
		dataProvider.getList().add(selectedClasse, classe);
		dataProvider.refresh();
	}
}
