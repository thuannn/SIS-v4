package com.lemania.sis.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;

public interface FrmEvaluationReportListUiHandler extends UiHandlers {
	//
	void onEcoleSelected(String ecoleId);
	//
	void onProgrammeSelected(String programmeId);
	//
	void loadClassMasterList();
	//
	void createNewReport(String fromDate, String toDate, String objective, String schoolYear, String classId, String classMasterId);
	//
	void onClassSelected(String classId);
}
