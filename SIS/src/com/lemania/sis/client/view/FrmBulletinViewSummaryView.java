package com.lemania.sis.client.view;

import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.Event.NativePreviewEvent;
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.Window.Navigator;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.NotificationTypes;
import com.lemania.sis.client.presenter.FrmBulletinViewSummaryPresenter;
import com.lemania.sis.client.uihandler.FrmBulletinViewSummaryUiHandler;
import com.lemania.sis.shared.BulletinProxy;
import com.lemania.sis.shared.BulletinSubjectProxy;
import com.lemania.sis.shared.ClasseProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.logical.shared.CloseEvent;
import com.google.gwt.event.logical.shared.CloseHandler;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.FlowPanel;

public class FrmBulletinViewSummaryView extends ViewWithUiHandlers<FrmBulletinViewSummaryUiHandler> implements
		FrmBulletinViewSummaryPresenter.MyView {

	private final Widget widget;
	
	
	// Thuan
	List<BulletinProxy> bulletins;
	List<ClasseProxy> classes;
	

	public interface Binder extends UiBinder<Widget, FrmBulletinViewSummaryView> {
	}

	@Inject
	public FrmBulletinViewSummaryView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField ListBox lstClasses;
	@UiField ListBox lstBulletins;
	@UiField FlexTable tblNotes;
	@UiField Label lblStudentName;
	@UiField Label lblClassName;
	@UiField VerticalPanel pnlBulletin;
	@UiField Button cmdPrint;
	@UiField VerticalPanel pnlMain;
	@UiField Label lblSpace;
	@UiField VerticalPanel pnlMainBulletin;
	
	
	/**/
	@Override
	public void resetForm() {
		//
		lstClasses.setSelectedIndex(0);
		lstBulletins.clear();		
	}

	/**/
	@Override
	public void setClasseList(List<ClasseProxy> classes) {
		//
		this.classes = classes;
		//
		lstClasses.clear();
		lstClasses.addItem("-","");
		for (ClasseProxy clazz : classes) {
			lstClasses.addItem( clazz.getClassName(), clazz.getId().toString());
		}
	}
	
	
	/**/
	@UiHandler("lstClasses")
	void onLstClassesChange(ChangeEvent event) {
		//
		if (getUiHandlers() != null)
			getUiHandlers().onClassChange(lstClasses.getValue(lstClasses.getSelectedIndex()));
	}

	/**/
	@Override
	public void setStudentListData(List<BulletinProxy> bulletins) {
		//
		this.bulletins = bulletins;
		//
		lstBulletins.clear();
		lstBulletins.addItem("-","");
		for (BulletinProxy bulletin : bulletins) {
			lstBulletins.addItem( bulletin.getStudentName() + " - " + bulletin.getClasseName() + " - " + bulletin.getYear(), 
					bulletin.getId().toString());
		}
	}
	
	
	/**/
	@UiHandler("lstBulletins")
	void onLstBulletinsChange(ChangeEvent event) {
		if (getUiHandlers() != null) {
			lblStudentName.setText( lstBulletins.getItemText(lstBulletins.getSelectedIndex()));
			lblClassName.setText( lstClasses.getItemText(lstClasses.getSelectedIndex()));
			getUiHandlers().onBulletinChange( lstBulletins.getValue(lstBulletins.getSelectedIndex()));
		}
	}

	
	/**/
	private void initializeTableMatu() {
		//
		tblNotes.removeAllRows();
		//
		tblNotes.setText(0, 0, "Groupe");
		tblNotes.setText(0, 1, "Coef");
		tblNotes.setText(0, 2, "T1");
		tblNotes.setText(0, 3, "Exa. T1");
		tblNotes.setText(0, 4, "T2");
		tblNotes.setText(0, 5, "Exa. Semes.");
		tblNotes.setText(0, 6, "Moyenne Semes.");
		tblNotes.setText(0, 7, "Remarques relatives à la période d'évaluation");
		tblNotes.getRowFormatter().setStyleName(0, "bulletinHeader");
	}
	
	
	/**/
	private void initializeBacTable() {
		//
		tblNotes.removeAllRows();
		//
		tblNotes.setText(0, 0, "Groupe");
		tblNotes.setText(0, 1, "Coef");
		tblNotes.setText(0, 2, "T1");
		tblNotes.setText(0, 3, "Bac Blanc/DS");
		tblNotes.setText(0, 4, "T2");
		tblNotes.setText(0, 5, "Bac Blanc/DS");
		tblNotes.setText(0, 6, "T3");
		tblNotes.setText(0, 7, "Bac Blanc/DS");
		tblNotes.setText(0, 8, "Moyenne Annuelle");
		tblNotes.setText(0, 9, "Remarques relatives à la période d'évaluation");
		tblNotes.getRowFormatter().setStyleName(0, "bulletinHeader");
	}
	
	
	/**/
	private void initializeESTable() {
		//
		tblNotes.removeAllRows();
		//
		tblNotes.setText(0, 0, "Groupe");
		tblNotes.setText(0, 1, "Coef");
		tblNotes.setText(0, 2, "T1");
		tblNotes.setText(0, 3, "T2");
		tblNotes.setText(0, 4, "T3");
		tblNotes.setText(0, 5, "Moyenne Annuelle");
		tblNotes.getRowFormatter().setStyleName(0, "bulletinHeader");
	}
	
	
	/**/
	@Override
	public void drawBulletinSubjectList(List<BulletinSubjectProxy> subjects) {
		//
		if (classes.get(lstClasses.getSelectedIndex()-1).getProgrammeName().toLowerCase().contains("matu"))
			drawMatuBulletin( subjects );
		if (classes.get(lstClasses.getSelectedIndex()-1).getProgrammeName().toLowerCase().contains("bacc"))
			drawBacBulletin( subjects );
		if (classes.get(lstClasses.getSelectedIndex()-1).getProgrammeName().toLowerCase().contains("second"))
			drawESBulletin( subjects );
	}
	
	
	/**/
	private void drawBacBulletin(List<BulletinSubjectProxy> subjects) {
		//
		initializeBacTable();
		//
		Integer rowStart = 1;
		Integer rowCount = 0;
		//
		for (int i = rowStart; i<subjects.size(); i++) {
			tblNotes.setText(i, 0, subjects.get( rowCount ).getSubjectName());
			tblNotes.setText(i, 1, subjects.get( rowCount ).getSubjectCoef().toString());
			tblNotes.setText(i, 2, subjects.get( rowCount ).getT1().toString());
			tblNotes.setText(i, 3, subjects.get( rowCount ).getExamT1().toLowerCase());
			tblNotes.setText(i, 4, subjects.get( rowCount ).getT2().toString());
			tblNotes.setText(i, 5, subjects.get( rowCount ).getExamT2().toString());
			tblNotes.setText(i, 6, subjects.get( rowCount ).getT3().toString());
			tblNotes.setText(i, 7, subjects.get( rowCount ).getExamT3().toString());
			tblNotes.setText(i, 8, subjects.get( rowCount ).getAn());
			tblNotes.setText(i, 9, (
					!subjects.get(rowCount).getRemarqueT3().equals("") ? subjects.get(rowCount).getRemarqueT3()
					: ( !subjects.get(rowCount).getRemarqueT2().equals("")? subjects.get(rowCount).getRemarqueT2()
							: subjects.get(rowCount).getRemarqueT1() ) ) );
			rowCount++;
		}
		
		//
		rowCount++;
		tblNotes.setText(rowCount, 0, "Moyenne :");
		tblNotes.setText(rowCount, 1, "");
		tblNotes.setText(rowCount, 2, "");
		tblNotes.setText(rowCount, 3, "");
		tblNotes.setText(rowCount, 4, "");
		tblNotes.setText(rowCount, 5, "");
		tblNotes.setText(rowCount, 6, "");
		tblNotes.setText(rowCount, 7, "");
		tblNotes.setText(rowCount, 8, "");
		tblNotes.setText(rowCount, 9, "");
		
		//
		styleBacTable();		
	}
	
	
	/**/
	private void drawESBulletin(List<BulletinSubjectProxy> subjects) {
		//
		initializeESTable();
		//
		Integer rowStart = 1;
		Integer rowCount = 0;
		//
		for (int i = rowStart; i<subjects.size(); i++) {
			tblNotes.setText(i, 0, subjects.get( rowCount ).getSubjectName());
			tblNotes.setText(i, 1, subjects.get( rowCount ).getSubjectCoef().toString());
			tblNotes.setText(i, 2, subjects.get( rowCount ).getT1().toString());
			tblNotes.setText(i, 3, subjects.get( rowCount ).getT2().toString());
			tblNotes.setText(i, 4, subjects.get( rowCount ).getT3().toString());
			tblNotes.setText(i, 5, subjects.get( rowCount ).getAn());
			rowCount++;
		}
		
		//
		rowCount++;
		tblNotes.setText(rowCount, 0, "Moyenne :");
		tblNotes.setText(rowCount, 1, "");
		tblNotes.setText(rowCount, 2, "");
		tblNotes.setText(rowCount, 3, "");
		tblNotes.setText(rowCount, 4, "");
		tblNotes.setText(rowCount, 5, "");
		
		//
		styleESTable();		
	}
	

	/**/
	public void drawMatuBulletin( List<BulletinSubjectProxy> subjects ) {
		//
		initializeTableMatu();
		//
		Integer rowStart = 1;
		Integer rowCount = 0;
		//
		for (int i = rowStart; i<subjects.size(); i++) {
			tblNotes.setText(i, 0, subjects.get( rowCount ).getSubjectName());
			tblNotes.setText(i, 1, subjects.get( rowCount ).getSubjectCoef().toString());
			tblNotes.setText(i, 2, subjects.get( rowCount ).getT1().toString());
			tblNotes.setText(i, 3, subjects.get( rowCount ).getExamT1().toLowerCase());
			tblNotes.setText(i, 4, subjects.get( rowCount ).getT2().toString());
			tblNotes.setText(i, 5, subjects.get( rowCount ).getExamT2().toString());
			tblNotes.setText(i, 6, subjects.get( rowCount ).getAn());
			tblNotes.setText(i, 7, (
					!subjects.get(rowCount).getRemarqueT3().equals("") ? subjects.get(rowCount).getRemarqueT3()
					: ( !subjects.get(rowCount).getRemarqueT2().equals("")? subjects.get(rowCount).getRemarqueT2()
							: subjects.get(rowCount).getRemarqueT1() ) ) );
			rowCount++;
		}
		
		//
		rowCount++;
		tblNotes.setText(rowCount, 0, "Moyenne :");
		tblNotes.setText(rowCount, 1, "");
		tblNotes.setText(rowCount, 2, "");
		tblNotes.setText(rowCount, 3, "");
		tblNotes.setText(rowCount, 4, "");
		tblNotes.setText(rowCount, 5, "");
		tblNotes.setText(rowCount, 6, "");
		tblNotes.setText(rowCount, 7, "");
		
		//
		styleTableMatu();
	}

	
	/**/
	private void styleTableMatu() {
		//		
		tblNotes.setCellSpacing(0);
		tblNotes.setCellPadding(3);
		tblNotes.setStyleName("subSection");
		//
		for (int i=0; i<8; i++)
			for (int j=1; j<tblNotes.getRowCount(); j++) {
				if (tblNotes.isCellPresent(j, i)) {
					if (tblNotes.getCellFormatter().getStyleName(j, i).equals(""))
						tblNotes.getCellFormatter().setStyleName(j, i, "brancheLine");
				}
			}
	}
	
	
	/**/
	private void styleBacTable() {
		//		
		tblNotes.setCellSpacing(0);
		tblNotes.setCellPadding(3);
		tblNotes.setStyleName("subSection");
		//
		for (int i=0; i<10; i++)
			for (int j=1; j<tblNotes.getRowCount(); j++) {
				if (tblNotes.isCellPresent(j, i)) {
					if (tblNotes.getCellFormatter().getStyleName(j, i).equals(""))
						tblNotes.getCellFormatter().setStyleName(j, i, "brancheLine");
				}
			}
	}
	
	
	/**/
	private void styleESTable() {
		//		
		tblNotes.setCellSpacing(0);
		tblNotes.setCellPadding(3);
		tblNotes.setStyleName("subSection");
		//
		for (int i=0; i<6; i++)
			for (int j=1; j<tblNotes.getRowCount(); j++) {
				if (tblNotes.isCellPresent(j, i)) {
					if (tblNotes.getCellFormatter().getStyleName(j, i).equals(""))
						tblNotes.getCellFormatter().setStyleName(j, i, "brancheLine");
				}
			}
	}
		
	
	/*
	 * */
	@UiHandler("cmdPrint")
	void onCmdPrintClick(ClickEvent event) {
		// 		
		pnlBulletin.setVisible(true);
		//
		if (Navigator.getUserAgent().toLowerCase().contains("chrome"))
			lblSpace.setHeight( Integer.toString( NotificationTypes.bulletinPageHeightChrome - tblNotes.getOffsetHeight() ) + "px");
		else
			lblSpace.setHeight( Integer.toString( NotificationTypes.bulletinPageHeight - tblNotes.getOffsetHeight() ) + "px");
		//
		PopupPanel popup = new PopupPanel(true) {
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
		popup.setStyleName("bulletin");
		popup.add(pnlBulletin);
		popup.addCloseHandler(new CloseHandler<PopupPanel>() {
			public void onClose(CloseEvent<PopupPanel> event) {
				pnlMainBulletin.add(pnlBulletin);
				lblSpace.setHeight("10px");
			}
		});
		//
		popup.show();
	}
}
