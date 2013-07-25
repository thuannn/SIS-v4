package com.lemania.sis.server.service;

import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.util.DAOBase;
import com.lemania.sis.server.Branche;
import com.lemania.sis.server.Classe;
import com.lemania.sis.server.Cours;
import com.lemania.sis.server.Ecole;
import com.lemania.sis.server.Professor;
import com.lemania.sis.server.SettingOption;
import com.lemania.sis.server.Student;
import com.lemania.sis.server.Subject;
import com.lemania.sis.server.User;

public class MyDAOBase extends DAOBase {

	static {
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
        	ObjectifyService.register(Ecole.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(Cours.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(Student.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(Classe.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(Branche.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(Subject.class);
        } catch (Exception e) {
        	// do nothing
        }
	}
}
