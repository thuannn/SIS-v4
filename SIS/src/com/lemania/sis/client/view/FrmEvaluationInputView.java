package com.lemania.sis.client.view;

import com.gwtplatform.mvp.client.ViewImpl;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.presenter.FrmEvaluationInputPresenter;

public class FrmEvaluationInputView extends ViewImpl implements
		FrmEvaluationInputPresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, FrmEvaluationInputView> {
	}

	@Inject
	public FrmEvaluationInputView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
}
