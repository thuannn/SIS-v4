/**
 * 
 */
package com.lemania.sis.client.form.absencemgt;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.sis.shared.absenceitem.AbsenceItemProxy;
import com.lemania.sis.shared.student.StudentProxy;

/**
 * @author ngocthuannguyen
 *
 */
public interface AbsenceManagementUiHandlers extends UiHandlers {
	//
	void onStudentSelected( StudentProxy student );
	//
	void updateJustifyStatus(AbsenceItemProxy ai, boolean isJustified);
	//
	void updateParentNotifiedStatus(AbsenceItemProxy ai, boolean parentNotified);
	//
	void updateAdminComment(AbsenceItemProxy ai, String adminComment);
	//
	void updateMotif(AbsenceItemProxy ai, String motifID);
	//
	void filterDate( StudentProxy student, String dateFrom, String dateTo);
	//
	void showAbsenceInputPopup(StudentProxy student);
}
