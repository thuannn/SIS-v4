package com.lemania.sis.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.sis.server.ObjectifyLocator;

@ProxyFor(value=com.lemania.sis.server.User.class, locator=ObjectifyLocator.class)
public interface UserProxy extends EntityProxy {
	
	public String getUserName();
	public void setUserName(String userName);
	
	public String getPassword();
	public void setPassword(String password);
	
	public String getFullName();
	public void setFullName(String fullName);
	
	public String getEmail();
	public void setEmail(String email);
	
	public Boolean getActive();
	public void setActive(Boolean active);
	
	public Boolean getIsAdmin();
	public void setIsAdmin(Boolean admin);
	
	public int getCurrentYear();
	public int getCurrentMonth();
	public int getCurrentDay();
	
	public Long getId();
}