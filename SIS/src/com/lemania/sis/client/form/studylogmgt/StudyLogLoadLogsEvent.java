package com.lemania.sis.client.form.studylogmgt;

import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.GwtEvent;
import com.google.gwt.event.shared.HasHandlers;
import com.google.web.bindery.event.shared.HandlerRegistration;

public class StudyLogLoadLogsEvent extends GwtEvent<StudyLogLoadLogsEvent.StudyLogLoadLogsHandler> {
    private static Type<StudyLogLoadLogsHandler> TYPE = new Type<StudyLogLoadLogsHandler>();
    
    public interface StudyLogLoadLogsHandler extends EventHandler {
        void onStudyLogLoadLogs(StudyLogLoadLogsEvent event);
    }
    
    public interface StudyLogLoadLogsHandlers extends HasHandlers {
        HandlerRegistration addStudyLogLoadLogsHandler(StudyLogLoadLogsHandler handler);
    }
    
    private final String message;
    private String subjectId;
    private String classeId;
   
    StudyLogLoadLogsEvent(final String message) {
        this.message = message;
    }
    
    StudyLogLoadLogsEvent(final String message, String subjectId, String classeId ) {
        this.message = message;
        this.subjectId = subjectId;
        this.classeId = classeId;
    }

    public static Type<StudyLogLoadLogsHandler> getType() {
        return TYPE;
    }

    @Override
    protected void dispatch(final StudyLogLoadLogsHandler handler) {
        handler.onStudyLogLoadLogs(this);
    }

    @Override
    public Type<StudyLogLoadLogsHandler> getAssociatedType() {
        return TYPE;
    }
    
    public String getMessage() {
        return this.message;
    }

	public String getSubjectId() {
		return subjectId;
	}

	public void setSubjectId(String subjectId) {
		this.subjectId = subjectId;
	}

	public String getClasseId() {
		return classeId;
	}

	public void setClasseId(String classeId) {
		this.classeId = classeId;
	}
}