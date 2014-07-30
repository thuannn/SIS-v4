package com.lemania.sis.client.form.attendancelist;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.sis.shared.AssignmentProxy;

interface AttendanceListUiHandlers extends UiHandlers {
	//
	void onProfessorSelected(String profId);
	//
	void onAssignmentSelected(AssignmentProxy a);
}
