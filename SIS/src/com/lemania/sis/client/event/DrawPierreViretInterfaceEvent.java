package com.lemania.sis.client.event;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.HasHandlers;
import com.google.gwt.event.shared.HandlerRegistration;

public class DrawPierreViretInterfaceEvent extends
		GwtEvent<DrawPierreViretInterfaceEvent.DrawPierreViretInterfaceHandler> {

	public static Type<DrawPierreViretInterfaceHandler> TYPE = new Type<DrawPierreViretInterfaceHandler>();

	public interface DrawPierreViretInterfaceHandler extends EventHandler {
		void onDrawPierreViretInterface(DrawPierreViretInterfaceEvent event);
	}

	public interface DrawPierreViretInterfaceHasHandlers extends HasHandlers {
		HandlerRegistration addDrawPierreViretInterfaceHandler(
				DrawPierreViretInterfaceHandler handler);
	}

	public DrawPierreViretInterfaceEvent() {
	}

	@Override
	protected void dispatch(DrawPierreViretInterfaceHandler handler) {
		handler.onDrawPierreViretInterface(this);
	}

	@Override
	public Type<DrawPierreViretInterfaceHandler> getAssociatedType() {
		return TYPE;
	}

	public static Type<DrawPierreViretInterfaceHandler> getType() {
		return TYPE;
	}

	public static void fire(HasHandlers source) {
		source.fireEvent(new DrawPierreViretInterfaceEvent());
	}
}
