package com.lemania.sis.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.sis.server.ObjectifyLocator;
import com.lemania.sis.server.ProfileSubject;

@ProxyFor(value=ProfileSubject.class, locator=ObjectifyLocator.class)
public interface ProfileSubjectProxy extends EntityProxy {
	//
	Long getId();

	public String getSubjectName();
	public void setSubjectName(String subjectName);
	
	public Double getSubjectCoef();
	public void setSubjectCoef(Double subjectCoef);
	
	public Double getTotalBrancheCoef();
	public void setTotalBrancheCoef(Double totalBrancheCoef);
	
	public Boolean getIsActive();
	public void setIsActive(Boolean isActive);
}
