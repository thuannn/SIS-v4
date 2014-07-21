package com.lemania.sis.client.popup.parentprofile;

import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.PopupView;
import com.gwtplatform.mvp.client.PresenterWidget;

public class ParentProfilePresenter extends
		PresenterWidget<ParentProfilePresenter.MyView> implements
		ParentProfileUiHandlers {
	public interface MyView extends PopupView,
			HasUiHandlers<ParentProfileUiHandlers> {
	}

	@Inject
	ParentProfilePresenter(final EventBus eventBus, final MyView view) {
		super(eventBus, view);

		getView().setUiHandlers(this);
	}

	protected void onBind() {
		super.onBind();
	}

	protected void onReset() {
		super.onReset();
	}

}
