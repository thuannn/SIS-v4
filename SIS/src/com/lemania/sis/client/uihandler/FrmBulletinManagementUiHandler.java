package com.lemania.sis.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.sis.shared.BulletinBrancheProxy;
import com.lemania.sis.shared.BulletinProxy;
import com.lemania.sis.shared.BulletinSubjectProxy;

public interface FrmBulletinManagementUiHandler extends UiHandlers {
	//
	void onEcoleSelected(String ecoleId);
	//
	void onProgrammeSelected(String programmeId);
	//
	void onBulletinSelected(BulletinProxy bulletin);
	//
	void onClassChange(String classId);
	//
	void removeSubject(BulletinSubjectProxy subject);
	void removeBranche( BulletinBrancheProxy branche );
	//
	void onSubjectSelected(BulletinSubjectProxy subject);
	//
	void updateBrancheCoef(BulletinBrancheProxy branche, String coef);
	void updateSubjectCoef( BulletinSubjectProxy subject, String coef, Integer lastSubjectIndex);
	//
	void addSubject(String bulletinId, String subjectId, String profId, String coef);
	void addBranche(String bulletinSubjectId, String brancheId, String coef);
	//
	void loadProfessorList( String subjectId, String classId );
}
