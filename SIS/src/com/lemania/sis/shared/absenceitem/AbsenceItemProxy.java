package com.lemania.sis.shared.absenceitem;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.sis.server.ObjectifyLocator;
import com.lemania.sis.server.bean.absenceitem.AbsenceItem;

@ProxyFor ( value= AbsenceItem.class, locator= ObjectifyLocator.class )
public interface AbsenceItemProxy extends EntityProxy {
	//
	public Long getId();

	public String getCodeAbsenceType();
	public void setCodeAbsenceType(String codeAbsenceType);
	
	public String getProfComment();
	public void setProfComment(String profComment);
	
	public int getLateMinutes();
	public void setLateMinutes(int lateMinutes);
	
	public boolean isJusttified();
	public void setJusttified(boolean justtified);
	
	public boolean isParentNotified();
	public void setParentNotified(boolean parentNotified);
	
	public String getStrAbsenceDate();
	public void setStrAbsenceDate(String strAbsenceDate);
	
	// 
	
	public String getPeriodId();
	public String getStudentId();
}
