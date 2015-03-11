package com.lemania.sis.client.form.studylogmgt;

import javax.inject.Inject;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;

class StudyLogManagementView extends ViewWithUiHandlers<StudyLogManagementUiHandlers> implements StudyLogManagementPresenter.MyView {
    interface Binder extends UiBinder<Widget, StudyLogManagementView> {
    }


    @Inject
    StudyLogManagementView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
    }
    
    @Override
    public void setInSlot(Object slot, IsWidget content) {
        if (slot == StudyLogManagementPresenter.SLOT_StudyLogManagement) {
            //
        } else {
            super.setInSlot(slot, content);
        }
    }
}