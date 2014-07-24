package com.lemania.sis.shared.parent;

import java.util.List;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.sis.server.ObjectifyLocator;
import com.lemania.sis.server.bean.parent.Parent;
import com.lemania.sis.shared.student.StudentProxy;

@ProxyFor( value=Parent.class, locator=ObjectifyLocator.class)
public interface ParentProxy extends EntityProxy {
	//
	Long getId();
	
	public String getTitle();
	public void setTitle(String title);
	
	public String getFirstName();
	public void setFirstName(String firstName);

	public String getLastName();
	public void setLastName(String lastName);

	public String geteMail();
	public void seteMail(String eMail);

	public String getPhoneMobile();
	public void setPhoneMobile(String phoneMobile);

	public String getPhoneHome();
	public void setPhoneHome(String phoneHome);

	public String getPhoneWork();
	public void setPhoneWork(String phoneWork);

	public boolean isAcceptSMS();
	public void setAcceptSMS(boolean acceptSMS);

	public boolean isAcceptEmail();
	public void setAcceptEmail(boolean acceptEmail);
	
	public String getChildIds();
	public void setChildIds(String childIds);
}
