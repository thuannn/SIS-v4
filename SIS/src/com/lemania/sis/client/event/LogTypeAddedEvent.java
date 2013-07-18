package com.lemania.sis.client.event;

import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.EventHandler;
import com.lemania.sis.shared.LogTypeProxy;
import com.google.gwt.event.shared.HasHandlers;
import com.google.gwt.event.shared.HandlerRegistration;

public class LogTypeAddedEvent extends GwtEvent<LogTypeAddedEvent.LogTypeAddedHandler> {

	public static Type<LogTypeAddedHandler> TYPE = new Type<LogTypeAddedHandler>();
	private LogTypeProxy hp;

	public interface LogTypeAddedHandler extends EventHandler {
		void onHourAdded(LogTypeAddedEvent event);
	}

	public interface HourAddedHasHandlers extends HasHandlers {
		HandlerRegistration addLogTypeAddedHandler(LogTypeAddedHandler handler);
	}

	public LogTypeAddedEvent(LogTypeProxy hp) {
		this.hp = hp;
	}

	public LogTypeProxy getHp() {
		return hp;
	}

	@Override
	protected void dispatch(LogTypeAddedHandler handler) {
		handler.onHourAdded(this);
	}

	@Override
	public Type<LogTypeAddedHandler> getAssociatedType() {
		return TYPE;
	}

	public static Type<LogTypeAddedHandler> getType() {
		return TYPE;
	}

	public static void fire(HasHandlers source, LogTypeProxy hp) {
		source.fireEvent(new LogTypeAddedEvent(hp));
	}
}
