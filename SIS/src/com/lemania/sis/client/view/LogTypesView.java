package com.lemania.sis.client.view;

import java.util.ArrayList;
import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.cell.client.CheckboxCell;
import com.google.gwt.cell.client.EditTextCell;
import com.google.gwt.cell.client.FieldUpdater;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.uihandler.LogTypeListUiHandler;
import com.lemania.sis.shared.LogTypeProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.DataGrid;
import com.lemania.sis.client.presenter.LogTypesPresenter;

public class LogTypesView extends ViewWithUiHandlers<LogTypeListUiHandler> implements LogTypesPresenter.MyView {

	private final Widget widget;
	private int selectedHour;

	public interface Binder extends UiBinder<Widget, LogTypesView> {
	}

	@Inject
	public LogTypesView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	
	@UiField(provided=true) DataGrid<LogTypeProxy> tblHours = new DataGrid<LogTypeProxy>();
	
	@Override
	public void initializeTable() {
		
		// Order Number
 		EditTextCell orderCell = new EditTextCell();
 		Column<LogTypeProxy, String> orderCol = new Column<LogTypeProxy, String>(orderCell) {
 	      @Override
 	      public String getValue(LogTypeProxy object) {
 	        return Integer.toString(object.getOrderNumber());
 	      }
 	    };
 	    tblHours.addColumn(orderCol, "Ordre");
 	    tblHours.setColumnWidth(orderCol, 20, Unit.PCT);
 	    orderCol.setFieldUpdater(new FieldUpdater<LogTypeProxy, String>(){
 	    	@Override
 	    	public void update(int index, LogTypeProxy type, String value){
 	    		if (getUiHandlers() != null) {
 	    			selectedHour = index;
 	    			getUiHandlers().updateLogTypeOrder(type, value);
 	    		}	    		
 	    	}
 	    });
		
		// Type name
 	    EditTextCell cellName = new EditTextCell();
	    Column<LogTypeProxy, String> colName = new Column<LogTypeProxy, String>(cellName) {
	      @Override
	      public String getValue(LogTypeProxy object) {
	        return object.getLogTypeName();
	      }
	    };
	    tblHours.addColumn(colName, "Nom");
	    colName.setFieldUpdater(new FieldUpdater<LogTypeProxy, String>(){
	    	@Override
 	    	public void update(int index, LogTypeProxy type, String value){
 	    		if (getUiHandlers() != null) {
 	    			selectedHour = index;
 	    			getUiHandlers().updateLogTypeName(type, value);
 	    		}	    		
 	    	}
	    });
	    
	    
	    // Active
	    CheckboxCell cellActive = new CheckboxCell();
	    Column<LogTypeProxy, Boolean> colActive = new Column<LogTypeProxy, Boolean>(cellActive) {
	    	@Override
	    	public Boolean getValue(LogTypeProxy type){
	    		return type.getLogTypeActive();
	    	}	    	
	    };
	    tblHours.addColumn(colActive, "Actif");
	    
	    colActive.setFieldUpdater(new FieldUpdater<LogTypeProxy, Boolean>(){
	    	@Override
	    	public void update(int index, LogTypeProxy type, Boolean value){
	    		if (getUiHandlers() != null) {
	    			selectedHour = index;
	    			getUiHandlers().updateLogTypeStatus(type, value);
	    		}	    		
	    	}
	    });
	}

	@Override
	public void addHour(LogTypeProxy type) {
		// TODO Auto-generated method stub
		List<LogTypeProxy> newHours = new ArrayList<LogTypeProxy>();
		newHours.add(type);
		tblHours.setRowData(tblHours.getRowCount()+1, newHours);
	}

	@Override
	public void refreshTable(LogTypeProxy updatedHour) {
		// TODO Auto-generated method stub
		List<LogTypeProxy> types = new ArrayList<LogTypeProxy>();
		types.add(updatedHour);
        tblHours.setRowData(selectedHour, types);
		tblHours.redraw();
	}

	@Override
	public void setData(List<LogTypeProxy> types) {
		tblHours.setRowData(0, types);
	}
}
