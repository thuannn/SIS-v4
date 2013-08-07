package com.lemania.sis.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.sis.server.BulletinSubject;
import com.lemania.sis.server.ObjectifyLocator;

@ProxyFor(value=BulletinSubject.class, locator=ObjectifyLocator.class)
public interface BulletinSubjectProxy extends EntityProxy {
	//
	Long getId();

	public String getSubjectName();
	public void setSubjectName(String subjectName);
	
	public Double getSubjectCoef();
	public void setSubjectCoef(Double subjectCoef);
	
	public Double getTotalBrancheCoef();
	public void setTotalBrancheCoef(Double totalBrancheCoef);
	
	public String getProfName();
	public void setProfName(String profName);
	
	public Boolean getIsActive();
	public void setIsActive(Boolean isActive);
}
