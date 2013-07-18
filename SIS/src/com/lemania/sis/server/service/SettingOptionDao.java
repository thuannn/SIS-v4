package com.lemania.sis.server.service;

import java.util.ArrayList;
import java.util.List;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Query;
import com.lemania.sis.server.SettingOption;

public class SettingOptionDao extends MyDAOBase {
	
	public void initialize(){
		return;
	}
	
	public List<SettingOption> listAll(){
		Query<SettingOption> q = this.ofy().query(SettingOption.class);
		List<SettingOption> returnList = new ArrayList<SettingOption>();
		for (SettingOption SettingOption : q){
			returnList.add(SettingOption);
		}
		return returnList;
	}
	
	public void save(String optionName, String optionValue){
		// try finding the existing option by name, if not found, save as new
		Query<SettingOption> q = this.ofy().query(SettingOption.class).filter("optionName", optionName);
		List<SettingOption> returnList = new ArrayList<SettingOption>();
		for (SettingOption so : q){
			returnList.add(so);
		}
		
		// ideally, only save the first object found
		if (returnList.size() > 0) {
			SettingOption currentSO = returnList.get(0);
			currentSO.setOptionValue(optionValue);
			this.ofy().put(currentSO);
		}
		else {
			SettingOption newSO = new SettingOption();
			newSO.setOptionName(optionName);
			newSO.setOptionValue(optionValue);
			this.ofy().put(newSO);
		}
	}
	
	public SettingOption saveAndReturn(SettingOption SettingOption){
		Key<SettingOption> key = this.ofy().put(SettingOption);
		try {
			return this.ofy().get(key);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public void removeSettingOption(SettingOption SettingOption){
		this.ofy().delete(SettingOption);
	}
}