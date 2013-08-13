package com.lemania.sis.shared;

import com.google.web.bindery.requestfactory.shared.EntityProxy;
import com.google.web.bindery.requestfactory.shared.ProxyFor;
import com.lemania.sis.server.BulletinBranche;
import com.lemania.sis.server.ObjectifyLocator;

@ProxyFor(value=BulletinBranche.class, locator=ObjectifyLocator.class)
public interface BulletinBrancheProxy extends EntityProxy {
	//
	Long getId();
	
	public Double getBrancheCoef();
	public void setBrancheCoef(Double brancheCoef);

	public String getBulletinBrancheName();
	public void setBulletinBrancheName(String bulletinBrancheName);

	public String getT1_1();
	public void setT1_1(String t1_1);

	public String getT1_2();
	public void setT1_2(String t1_2);

	public String getT1_3();
	public void setT1_3(String t1_3);

	public String getT1_4();
	public void setT1_4(String t1_4);

	public String getT1_5();
	public void setT1_5(String t1_5);

	public String getT2_1();
	public void setT2_1(String t2_1);

	public String getT2_2();
	public void setT2_2(String t2_2);

	public String getT2_3();
	public void setT2_3(String t2_3);

	public String getT2_4();
	public void setT2_4(String t2_4);

	public String getT2_5();
	public void setT2_5(String t2_5);

	public String getT3_1();
	public void setT3_1(String t3_1);

	public String getT3_2();
	public void setT3_2(String t3_2);

	public String getT3_3();

	public void setT3_3(String t3_3);

	public String getT3_4();
	public void setT3_4(String t3_4);

	public String getT3_5();
	public void setT3_5(String t3_5);

	public String getT2();
	public void setT2(String t2);

	public String getT3();
	public void setT3(String t3);

	public String getT1();
	public void setT1(String t1);

	public String getAn();
	public void setAn(String an);
}
