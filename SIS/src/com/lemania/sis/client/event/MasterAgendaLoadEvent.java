package com.lemania.sis.client.event;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.HasHandlers;
import com.google.gwt.event.shared.HandlerRegistration;

public class MasterAgendaLoadEvent extends
		GwtEvent<MasterAgendaLoadEvent.MasterAgendaLoadHandler> {

	public static Type<MasterAgendaLoadHandler> TYPE = new Type<MasterAgendaLoadHandler>();
	
	//
	private String profileId = "";

	public interface MasterAgendaLoadHandler extends EventHandler {
		void onMasterAgendaLoad(MasterAgendaLoadEvent event);
	}

	public interface MasterAgendaLoadHasHandlers extends HasHandlers {
		HandlerRegistration addMasterAgendaLoadHandler(
				MasterAgendaLoadHandler handler);
	}

	public MasterAgendaLoadEvent() {
	}
	
	public MasterAgendaLoadEvent(String profileId) {
		this.profileId = profileId;
	}

	@Override
	protected void dispatch(MasterAgendaLoadHandler handler) {
		handler.onMasterAgendaLoad(this);
	}

	@Override
	public Type<MasterAgendaLoadHandler> getAssociatedType() {
		return TYPE;
	}

	public static Type<MasterAgendaLoadHandler> getType() {
		return TYPE;
	}

	public static void fire(HasHandlers source) {
		source.fireEvent(new MasterAgendaLoadEvent());
	}

	public String getProfileId() {
		return profileId;
	}

	public void setProfileId(String profileId) {
		this.profileId = profileId;
	}
}
