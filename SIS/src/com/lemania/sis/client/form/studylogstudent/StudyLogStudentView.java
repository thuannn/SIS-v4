package com.lemania.sis.client.form.studylogstudent;

import javax.inject.Inject;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.SimplePanel;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;

class StudyLogStudentView extends ViewWithUiHandlers<StudyLogStudentUiHandlers> implements StudyLogStudentPresenter.MyView {
    interface Binder extends UiBinder<Widget, StudyLogStudentView> {
    }

    @UiField
    SimplePanel main;

    @Inject
    StudyLogStudentView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
    }
    
    @Override
    public void setInSlot(Object slot, IsWidget content) {
        if (slot == StudyLogStudentPresenter.SLOT_StudyLogStudent) {
            main.setWidget(content);
        } else {
            super.setInSlot(slot, content);
        }
    }
}