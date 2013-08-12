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
	//
	void saveNotes(BulletinBrancheProxy bulletinBranche, BulletinSubjectProxy bulletinSubject,
			String t_1_1, String t_1_2, String t_1_3, String t_1_4, String t_1_5, 
			String t_2_1, String t_2_2, String t_2_3, String t_2_4, String t_2_5, 
			String t_3_1, String t_3_2, String t_3_3, String t_3_4, String t_3_5,
			String remarque1, String remarque2, String remarque3 );
}
