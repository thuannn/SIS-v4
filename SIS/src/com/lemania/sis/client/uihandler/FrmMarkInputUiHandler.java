package com.lemania.sis.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.sis.shared.BulletinBrancheProxy;
import com.lemania.sis.shared.BulletinSubjectProxy;

public interface FrmMarkInputUiHandler extends UiHandlers {
	//
	void onProfessorSelected(String profId);
	//
	void onAssignmentSelected(String assignmentId);
	//
	void onBulletinSubjectSelected(BulletinSubjectProxy bulletinSubject);
	//
	void onBulletinBrancheSelected(BulletinBrancheProxy bulletinBranche);
}
