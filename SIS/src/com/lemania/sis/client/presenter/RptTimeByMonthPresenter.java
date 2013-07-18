package com.lemania.sis.client.presenter;

import java.util.List;

import com.gwtplatform.mvp.client.HasUiHandlers;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.annotations.ProxyEvent;
import com.lemania.sis.client.event.LoginAuthenticatedEvent;
import com.lemania.sis.client.event.LoginAuthenticatedEvent.LoginAuthenticatedHandler;
import com.lemania.sis.client.place.NameTokens;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.lemania.sis.client.AdminGateKeeper;
import com.lemania.sis.client.CurrentUser;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.google.web.bindery.requestfactory.shared.Receiver;
import com.google.web.bindery.requestfactory.shared.ServerFailure;
import com.gwtplatform.mvp.client.proxy.RevealContentEvent;
import com.lemania.sis.client.presenter.MainPagePresenter;
import com.lemania.sis.client.uihandler.RptTimeByMonthUiHandler;
import com.lemania.sis.shared.LogProxy;
import com.lemania.sis.shared.service.EventSourceRequestTransport;
import com.lemania.sis.shared.service.LogRequestFactory;
import com.lemania.sis.shared.service.LogRequestFactory.LogRequestContext;

public class RptTimeByMonthPresenter
		extends	Presenter<RptTimeByMonthPresenter.MyView, RptTimeByMonthPresenter.MyProxy> 
		implements RptTimeByMonthUiHandler, LoginAuthenticatedHandler {

	private CurrentUser currentUser;
	
	public interface MyView extends View, HasUiHandlers<RptTimeByMonthUiHandler> {
		public void initializeValues(int currentMonth, int currentYear);
		public void initializeTable();
		
		public void setLogData(List<LogProxy> logs);
	}

	@ProxyCodeSplit
	@NameToken(NameTokens.rpttimebymonth)
	@UseGatekeeper(AdminGateKeeper.class)
	public interface MyProxy extends ProxyPlace<RptTimeByMonthPresenter> {
	}

	@Inject
	public RptTimeByMonthPresenter(final EventBus eventBus, final MyView view,
			final MyProxy proxy) {
		super(eventBus, view, proxy);
	}

	@Override
	protected void revealInParent() {
		RevealContentEvent.fire(this, MainPagePresenter.TYPE_SetMainContent, this);
	}

	@Override
	protected void onBind() {
		super.onBind();
		
		// Thuan
		getView().setUiHandlers(this);
	}
	
	@Override
	protected void onReset() {
		super.onReset();
		
		// Thuan
		getView().initializeValues(currentUser.getCurrentMonth(), currentUser.getCurrentYear());
		getView().initializeTable();
	}

	@ProxyEvent
	@Override
	public void onLoginAuthenticated(LoginAuthenticatedEvent event) {
		// Keep the info of current User
		this.currentUser = event.getCurrentUser();
	}

	@Override
	public void onMonthChanged(int selectedYear, int selectedMonth) {
		LogRequestFactory rfl = GWT.create(LogRequestFactory.class);
		
		// initialize the Request Factory with the custom Request Transport which show the 
		// progress bar
		rfl.initialize(this.getEventBus(), new EventSourceRequestTransport(this.getEventBus()));
		LogRequestContext rcl = rfl.logRequest();
		rcl.listAllFullDetailByMonth(selectedYear, selectedMonth).fire(new Receiver<List<LogProxy>>(){
			@Override
			public void onFailure(ServerFailure error){
				Window.alert(error.getMessage());
			}
			@Override
			public void onSuccess(List<LogProxy> response) {
				getView().setLogData(response);
			}
		});
	}
}
