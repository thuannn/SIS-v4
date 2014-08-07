/**
 * 
 */
package com.lemania.sis.client.form.absencemgt;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.sis.shared.student.StudentProxy;

/**
 * @author ngocthuannguyen
 *
 */
public interface AbsenceManagementUiHandlers extends UiHandlers {
	//
	void onStudentSelected( StudentProxy student );
}
