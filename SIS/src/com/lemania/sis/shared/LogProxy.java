package com.lemania.sis.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.sis.server.Log;
import com.lemania.sis.server.ObjectifyLocator;

@ProxyFor(value=Log.class, locator=ObjectifyLocator.class)
public interface LogProxy extends EntityProxy {

	Long getId();	
	
	public double getHour();	
	public void setHour(double hour);
	
	public String getMemo();
	public void setMemo(String memo);
	
	public int getYear();
	public void setYear(int year);

	public int getMonth();
	public void setMonth(int month);
	
	public String getCourseId();
	public String getTypeId();
	
	public String getTypeName();
	public String getProfName();
	
	public String getSchoolName();
	public String getCourseName();
	
	public String getModifyDate();
}
