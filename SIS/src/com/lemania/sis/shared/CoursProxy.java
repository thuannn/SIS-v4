package com.lemania.sis.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.sis.server.Cours;
import com.lemania.sis.server.ObjectifyLocator;

@ProxyFor(value=Cours.class, locator=ObjectifyLocator.class)
public interface CoursProxy extends EntityProxy {
	Long getId();
	
	String getCoursNom();
	void setCoursNom(String name);
	
	String getSchoolName();
	
	Boolean getCoursActif();
	void setCoursActif(Boolean status);
}
