package com.lemania.sis.client.view;

import com.gwtplatform.mvp.client.ViewImpl;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.presenter.FrmEvaluationInputStudentPresenter;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.DataGrid;

public class FrmEvaluationInputStudentView extends ViewImpl implements
		FrmEvaluationInputStudentPresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, FrmEvaluationInputStudentView> {
	}

	@Inject
	public FrmEvaluationInputStudentView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField(provided=true) DataGrid<Object> dataGrid = new DataGrid<Object>();
}
