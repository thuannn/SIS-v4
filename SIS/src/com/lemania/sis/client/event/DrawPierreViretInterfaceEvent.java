package com.lemania.sis.client.event;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.HasHandlers;
import com.google.gwt.event.shared.HandlerRegistration;

public class DrawSchoolInterfaceEvent extends
		GwtEvent<DrawSchoolInterfaceEvent.DrawSchoolInterfaceHandler> {

	public static Type<DrawSchoolInterfaceHandler> TYPE = new Type<DrawSchoolInterfaceHandler>();

	public interface DrawPierreViretInterfaceHandler extends EventHandler {
		void onDrawPierreViretInterface(DrawSchoolInterfaceEvent event);
	}

	public interface DrawPierreViretInterfaceHasHandlers extends HasHandlers {
		HandlerRegistration addDrawPierreViretInterfaceHandler(
				DrawPierreViretInterfaceHandler handler);
	}

	public DrawSchoolInterfaceEvent() {
	}

	@Override
	protected void dispatch(DrawSchoolInterfaceHandler handler) {
		handler.onDrawPierreViretInterface(this);
	}

	@Override
	public Type<DrawSchoolInterfaceHandler> getAssociatedType() {
		return TYPE;
	}

	public static Type<DrawSchoolInterfaceHandler> getType() {
		return TYPE;
	}

	public static void fire(HasHandlers source) {
		source.fireEvent(new DrawSchoolInterfaceEvent());
	}
}
