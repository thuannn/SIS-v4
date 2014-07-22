package com.lemania.sis.client.popup.parentprofile;

import com.gwtplatform.mvp.client.UiHandlers;

public interface ParentProfileUiHandlers extends UiHandlers {
	//
	void saveParent( String title,
		 String firstName,
		 String lastName,
		 String eMail,
		 String phoneMobile,
		 String phoneHome,
		 String phoneWork,
		 boolean acceptSMS,
		 boolean acceptEmail );
}
