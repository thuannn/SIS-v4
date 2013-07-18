package com.lemania.sis.server.service;

import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.util.DAOBase;
import com.lemania.sis.server.Assignment;
import com.lemania.sis.server.Cours;
import com.lemania.sis.server.Ecole;
import com.lemania.sis.server.Log;
import com.lemania.sis.server.LogType;
import com.lemania.sis.server.Professor;
import com.lemania.sis.server.SettingOption;
import com.lemania.sis.server.User;

public class MyDAOBase extends DAOBase {

	static {
		try {
        	ObjectifyService.register(Assignment.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
			ObjectifyService.register(SettingOption.class);
		} catch (Exception e){
			// do nothing
		}
		
		try {
    		ObjectifyService.register(User.class);        
    	} catch (Exception e) {
    		// do nothing
    	}
		
		try {
        	ObjectifyService.register(Professor.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(LogType.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
			ObjectifyService.register(Log.class);
		} catch (Exception e){
			// do nothing
		}
		
		try {
        	ObjectifyService.register(Ecole.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(Cours.class);
        } catch (Exception e) {
        	// do nothing
        }
	}
}
