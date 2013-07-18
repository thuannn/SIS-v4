package com.lemania.sis.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.sis.server.Assignment;
import com.lemania.sis.server.ObjectifyLocator;

@ProxyFor(value=Assignment.class, locator=ObjectifyLocator.class)
public interface AssignmentProxy extends EntityProxy {

	Long getId();
	
	String getSchoolName();
	
	String getCourseName();
	
	Boolean getActive();
	void setActive(Boolean active);
}
