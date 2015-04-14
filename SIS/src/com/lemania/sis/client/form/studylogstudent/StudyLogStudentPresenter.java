package com.lemania.sis.client.form.studylogstudent;

import com.google.gwt.event.shared.GwtEvent.Type;
import com.google.inject.Inject;
import com.google.web.bindery.event.shared.EventBus;
import com.gwtplatform.mvp.client.Presenter;
import com.gwtplatform.mvp.client.View;
import com.gwtplatform.mvp.client.annotations.ContentSlot;
import com.gwtplatform.mvp.client.annotations.ProxyCodeSplit;
import com.gwtplatform.mvp.client.annotations.UseGatekeeper;
import com.gwtplatform.mvp.client.proxy.ProxyPlace;
import com.gwtplatform.mvp.client.annotations.NameToken;
import com.gwtplatform.mvp.client.proxy.RevealContentHandler;
import com.gwtplatform.mvp.client.HasUiHandlers;
import com.lemania.sis.client.LoggedInGatekeeper;
import com.lemania.sis.client.form.mainpage.MainPagePresenter;
import com.lemania.sis.client.place.NameTokens;
public class StudyLogStudentPresenter extends Presenter<StudyLogStudentPresenter.MyView, StudyLogStudentPresenter.MyProxy> implements StudyLogStudentUiHandlers {
    
	
	interface MyView extends View , HasUiHandlers<StudyLogStudentUiHandlers> {
    }
    
	
	@ContentSlot
    public static final Type<RevealContentHandler<?>> SLOT_StudyLogStudent = new Type<RevealContentHandler<?>>();

    @UseGatekeeper( LoggedInGatekeeper.class )
    @NameToken(NameTokens.studylogstudent)
    @ProxyCodeSplit
    interface MyProxy extends ProxyPlace<StudyLogStudentPresenter> {
    }

    @Inject
    StudyLogStudentPresenter(
            EventBus eventBus,
            MyView view, 
            MyProxy proxy) {
        super(eventBus, view, proxy, MainPagePresenter.TYPE_SetMainContent);
        
        getView().setUiHandlers(this);
    }
    
    protected void onBind() {
        super.onBind();
    }
    
    protected void onReset() {
        super.onReset();
    }
}