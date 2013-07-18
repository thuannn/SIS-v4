package com.lemania.sis.client.view;

import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.presenter.RptTimeBySchoolPresenter;
import com.lemania.sis.client.uihandler.RptTimeBySchoolUiHandler;
import com.lemania.sis.shared.CoursProxy;
import com.lemania.sis.shared.EcoleProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;

public class RptTimeBySchoolView extends ViewWithUiHandlers<RptTimeBySchoolUiHandler> implements
		RptTimeBySchoolPresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, RptTimeBySchoolView> {
	}

	@Inject
	public RptTimeBySchoolView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField ListBox lstSchools;
	@UiField DataGrid<CoursProxy> tblDepts;
	
	@Override
	public void populateEcoleList(List<EcoleProxy> ecoles) {
		lstSchools.addItem("","");
		for (int i=0; i<ecoles.size(); i++)
			lstSchools.addItem(ecoles.get(i).getSchoolName(), ecoles.get(i).getId().toString());
	}

	@Override
	public void clearSchoolList() {
		lstSchools.clear();		
	}

	@Override
	public void initiallizeDepartmentTable() {
		tblDepts.setWidth("100%");
		
	    TextColumn<CoursProxy> colProf = new TextColumn<CoursProxy>() {
			@Override
			public String getValue(CoursProxy object) {
				return object.getCoursNom();
			}
	    };
	    tblDepts.addColumn(colProf, "Département");
	    tblDepts.setColumnWidth(colProf, 28, Unit.PCT);
	    //
	    TextColumn<CoursProxy> col01 = new TextColumn<CoursProxy>() {
			@Override
			public String getValue(CoursProxy object) {
				return ""; //String.valueOf(object.getTotal_01());
			}
	    };
	    tblDepts.addColumn(col01, "janvier");
	    //
	    TextColumn<CoursProxy> col02 = new TextColumn<CoursProxy>() {
			@Override
			public String getValue(CoursProxy object) {
				return ""; //String.valueOf(object.getTotal_02());
			}
	    };
	    tblDepts.addColumn(col02, "fevrier");
	    //
	    TextColumn<CoursProxy> col03 = new TextColumn<CoursProxy>() {
			@Override
			public String getValue(CoursProxy object) {
				return ""; //String.valueOf(object.getTotal_03());
			}
	    };
	    tblDepts.addColumn(col03, "mars");
	    //
	    TextColumn<CoursProxy> col04 = new TextColumn<CoursProxy>() {
			@Override
			public String getValue(CoursProxy object) {
				return ""; //String.valueOf(object.getTotal_04());
			}
	    };
	    tblDepts.addColumn(col04, "avril");
	    //
	    TextColumn<CoursProxy> col05 = new TextColumn<CoursProxy>() {
			@Override
			public String getValue(CoursProxy object) {
				return ""; //String.valueOf(object.getTotal_05());
			}
	    };
	    tblDepts.addColumn(col05, "mai");
	    //
	    TextColumn<CoursProxy> col06 = new TextColumn<CoursProxy>() {
			@Override
			public String getValue(CoursProxy object) {
				return ""; //String.valueOf(object.getTotal_06());
			}
	    };
	    tblDepts.addColumn(col06, "juin");
	    //
	    TextColumn<CoursProxy> col07 = new TextColumn<CoursProxy>() {
			@Override
			public String getValue(CoursProxy object) {
				return ""; //String.valueOf(object.getTotal_07());
			}
	    };
	    tblDepts.addColumn(col07, "juillet");
	    //
	    TextColumn<CoursProxy> col08 = new TextColumn<CoursProxy>() {
			@Override
			public String getValue(CoursProxy object) {
				return ""; //String.valueOf(object.getTotal_08());
			}
	    };
	    tblDepts.addColumn(col08, "août");
	    //
	    TextColumn<CoursProxy> col09 = new TextColumn<CoursProxy>() {
			@Override
			public String getValue(CoursProxy object) {
				return ""; //String.valueOf(object.getTotal_09());
			}
	    };
	    tblDepts.addColumn(col09, "septembre");
	    //
	    TextColumn<CoursProxy> col10 = new TextColumn<CoursProxy>() {
			@Override
			public String getValue(CoursProxy object) {
				return ""; //String.valueOf(object.getTotal_10());
			}
	    };
	    tblDepts.addColumn(col10, "octobre");
	    //
	    TextColumn<CoursProxy> col11 = new TextColumn<CoursProxy>() {
			@Override
			public String getValue(CoursProxy object) {
				return ""; //String.valueOf(object.getTotal_11());
			}
	    };
	    tblDepts.addColumn(col11, "novembre");
	    //
	    TextColumn<CoursProxy> col12 = new TextColumn<CoursProxy>() {
			@Override
			public String getValue(CoursProxy object) {
				return ""; //String.valueOf(object.getTotal_12());
			}
	    };
	    tblDepts.addColumn(col12, "décembre");	
	}
}
