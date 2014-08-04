package com.lemania.sis.client.form.attendancelist;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.sis.shared.AssignmentProxy;

interface AttendanceListUiHandlers extends UiHandlers {
	//
	void onProfessorSelected(String profId);
	//
	void onAssignmentSelected(AssignmentProxy a);
	//
	void saveAbsenceItem(
			String studentId,
			String periodId,
			String profId,
			String classId,
			String subjectId, 
			String motifId,
			String codeAbsence,
			String profComment,
			int lateMinute,
			boolean justified,
			boolean parentNotified );
	//
	void removeAbsenceItem( String aiID );
}
