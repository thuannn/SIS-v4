package com.lemania.sis.client.view;

import com.gwtplatform.mvp.client.ViewImpl;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.sis.client.presenter.ContactPresenter;

public class ContactView extends ViewImpl implements ContactPresenter.MyView {

	private final Widget widget;

	public interface Binder extends UiBinder<Widget, ContactView> {
	}

	@Inject
	public ContactView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
}
