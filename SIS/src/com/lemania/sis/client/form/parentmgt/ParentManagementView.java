package com.lemania.sis.client.form.parentmgt;

import java.util.Arrays;
import java.util.List;

import javax.inject.Inject;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.SimplePager;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.view.client.ListDataProvider;
import com.google.gwt.view.client.SelectionChangeEvent;
import com.google.gwt.view.client.SingleSelectionModel;
import com.google.gwt.cell.client.ButtonCell;
import com.google.gwt.cell.client.CheckboxCell;
import com.google.gwt.cell.client.ClickableTextCell;
import com.google.gwt.cell.client.FieldUpdater;
import com.google.gwt.event.dom.client.ClickEvent;
import com.lemania.sis.client.UI.GridButtonCell;
import com.lemania.sis.shared.EvaluationSubjectProxy;
import com.lemania.sis.shared.parent.ParentProxy;
import com.google.gwt.cell.client.Cell.Context;
import com.google.gwt.safehtml.shared.*;

public class ParentManagementView extends
		ViewWithUiHandlers<ParentManagementUiHandlers> implements
		ParentManagementPresenter.MyView {
	interface Binder extends UiBinder<Widget, ParentManagementView> {
	}

	@UiField(provided=true) DataGrid<ParentProxy> tblParents = new DataGrid<ParentProxy>();
	@UiField SimplePager pagerParents;
	@UiField Button cmdAdd;
	
	
	//
	ListDataProvider<ParentProxy> providerParents = new ListDataProvider<ParentProxy>();
	ParentProxy selectedParent;
	int selectedParentIndex = -1;
	
	

	@Inject
	ParentManagementView(Binder uiBinder) {
		initWidget(uiBinder.createAndBindUi(this));
	}
	
	/*
	 * */
	@UiHandler("cmdAdd")
	void onCmdAddClick(ClickEvent event) {
		//
		getUiHandlers().showParentProfilePopup();
	}

	
	/*
	 * */
	@Override
	public void initializeUI() {
		//
		initializeTable();
	}
	
	
	/*
	 * */
	public void initializeTable() {
		//
		// Title
	    TextColumn<ParentProxy> colTitle = new TextColumn<ParentProxy>() {
	      @Override
	      public String getValue(ParentProxy object) {
	        return object.getTitle();
	      } 
	    };
	    tblParents.addColumn(colTitle, "Civilité");
	    
		// Nom
	    TextColumn<ParentProxy> colLastName = new TextColumn<ParentProxy>() {
	      @Override
	      public String getValue(ParentProxy object) {
	        return object.getLastName();
	      } 
	    };
	    tblParents.addColumn(colLastName, "Nom");
	    
		// Prénom
		TextColumn<ParentProxy> colFirstName = new TextColumn<ParentProxy>() {
	      @Override
	      public String getValue(ParentProxy object) {
	        return object.getFirstName();
	      }
	    };
	    tblParents.addColumn(colFirstName, "Prénom");
	    
		// Email
		TextColumn<ParentProxy> colEmail = new TextColumn<ParentProxy>() {
			@Override
			public String getValue(ParentProxy object) {
				return object.geteMail();
			}
		};
		tblParents.addColumn(colEmail, "Email");
		
		// Mobile
		TextColumn<ParentProxy> colMobile = new TextColumn<ParentProxy>() {
			@Override
			public String getValue(ParentProxy object) {
				return object.getPhoneMobile();
			}
		};
		tblParents.addColumn(colMobile, "Mobile");
		
		// Mobile
		TextColumn<ParentProxy> colHomePhone = new TextColumn<ParentProxy>() {
			@Override
			public String getValue(ParentProxy object) {
				return object.getPhoneHome();
			}
		};
		tblParents.addColumn(colHomePhone, "Tél. Domicile");
		
		
		// Mobile
		TextColumn<ParentProxy> colWorkPhone = new TextColumn<ParentProxy>() {
			@Override
			public String getValue(ParentProxy object) {
				return object.getPhoneWork();
			}
		};
		tblParents.addColumn(colWorkPhone, "Tél. Travail");
		
		// Email
		TextColumn<ParentProxy> colAcceptEmail = new TextColumn<ParentProxy>() {
			@Override
			public String getValue(ParentProxy object) {
				return object.isAcceptEmail() ? "Oui" : "Non";
			}
		};
		tblParents.addColumn(colAcceptEmail, "Notif. Email");
		
		// SMS
	    TextColumn<ParentProxy> colSMS = new TextColumn<ParentProxy>() {
	    	@Override
	    	public String getValue(ParentProxy object){
	    		return object.isAcceptSMS() ? "Oui" : "Non";
	    	}	    	
	    };
	    tblParents.addColumn(colSMS, "Notif. SMS");
	    
		// Edit button
		GridButtonCell cellEdit = new GridButtonCell();
		Column<ParentProxy, String> colEdit = new Column<ParentProxy, String>(cellEdit) {
			
			//
			@Override
			public String getValue(ParentProxy object) {
				return "Editer";
			}
		};
		colEdit.setFieldUpdater(new FieldUpdater<ParentProxy, String>(){
	    	@Override
	    	public void update(int index, ParentProxy object, String value){
	    		selectedParentIndex = index;
	    		getUiHandlers().editParent(object);
	    	}
	    });
		tblParents.addColumn(colEdit, "");
	    
		
		// Add a selection model to handle user selection.
		final SingleSelectionModel<ParentProxy> selectionModel = new SingleSelectionModel<ParentProxy>();
		tblParents.setSelectionModel(selectionModel);
		selectionModel
				.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
					public void onSelectionChange(SelectionChangeEvent event) {
						selectedParent = selectionModel.getSelectedObject();
						selectedParentIndex = providerParents.getList().indexOf(selectedParent);
					}
				});
	    
		//
		
		providerParents.addDataDisplay( tblParents );
		pagerParents.setDisplay( tblParents );
	}

	
	/*
	 * */
	@Override
	public void setParentData(List<ParentProxy> parents) {
		//
		providerParents.getList().clear();
		providerParents.getList().addAll(parents);
		providerParents.flush();
	}

	
	/*
	 * */
	@Override
	public void addNewParent(ParentProxy newParent) {
		//
		providerParents.getList().add(newParent);
		providerParents.flush();
	}

	
	/*
	 * */
	@Override
	public void updateParent(ParentProxy updatedParent) {
		//
		providerParents.getList().set(selectedParentIndex, updatedParent);	// Replace the current selected Parent with the updated one
		providerParents.flush();
	}
}
