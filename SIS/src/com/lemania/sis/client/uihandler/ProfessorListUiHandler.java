package com.lemania.sis.client.uihandler;

import com.gwtplatform.mvp.client.UiHandlers;
import com.lemania.sis.shared.AssignmentProxy;
import com.lemania.sis.shared.ProfessorProxy;

public interface ProfessorListUiHandler extends UiHandlers {
	
	void updateProfessorStatus(ProfessorProxy prof, Boolean status);
	void updateProfessorName(ProfessorProxy prof, String name);
	
	void updateAssignmentStatus(AssignmentProxy assignment, Boolean status);	
	
	void professorSelected(ProfessorProxy prof);
	
	void addCourse(String courseId, ProfessorProxy prof);
	void addSchoolSelected(String ecoleId);
}