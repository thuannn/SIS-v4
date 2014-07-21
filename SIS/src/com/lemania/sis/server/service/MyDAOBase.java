package com.lemania.sis.server.service;

import com.googlecode.objectify.Objectify;
import com.googlecode.objectify.ObjectifyFactory;
import com.googlecode.objectify.ObjectifyService;
import com.lemania.sis.server.Assignment;
import com.lemania.sis.server.Branche;
import com.lemania.sis.server.BulletinBranche;
import com.lemania.sis.server.BulletinSubject;
import com.lemania.sis.server.Classe;
import com.lemania.sis.server.Cours;
import com.lemania.sis.server.Ecole;
import com.lemania.sis.server.EvaluationHeader;
import com.lemania.sis.server.EvaluationStudentReport;
import com.lemania.sis.server.EvaluationSubject;
import com.lemania.sis.server.Professor;
import com.lemania.sis.server.Profile;
import com.lemania.sis.server.ProfileBranche;
import com.lemania.sis.server.ProfileSubject;
import com.lemania.sis.server.SettingOption;
import com.lemania.sis.server.Subject;
import com.lemania.sis.server.User;
import com.lemania.sis.server.bean.bulletin.Bulletin;
import com.lemania.sis.server.bean.classroom.Classroom;
import com.lemania.sis.server.bean.masteragendaitem.MasterAgendaItem;
import com.lemania.sis.server.bean.period.Period;
import com.lemania.sis.server.bean.perioditem.PeriodItem;
import com.lemania.sis.server.bean.student.Student;

public class MyDAOBase {
	
	public static Objectify ofy() {
        return ObjectifyService.ofy();
    }

    public static ObjectifyFactory factory() {
        return ObjectifyService.factory();
    }

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
		
		try {
        	ObjectifyService.register(Assignment.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(Profile.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(ProfileSubject.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(ProfileBranche.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(Bulletin.class);
        } catch (Exception e) {
        	// do nothing
        }		
		
		try {
        	ObjectifyService.register(BulletinSubject.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(BulletinBranche.class);
        } catch (Exception e) {
        	// do nothing
        }	
		
		try {
        	ObjectifyService.register(EvaluationHeader.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(EvaluationSubject.class);
        } catch (Exception e) {
        	// do nothing
        }
		
		try {
        	ObjectifyService.register(EvaluationStudentReport.class);
        } catch (Exception e) {
        	// do nothing
        }	
		
		try {
        	ObjectifyService.register(Classroom.class);
        } catch (Exception e) {
        	// do nothing
        }	
		
		try {
        	ObjectifyService.register(Period.class);
        } catch (Exception e) {
        	// do nothing
        }	
		
		try {
        	ObjectifyService.register(MasterAgendaItem.class);
        } catch (Exception e) {
        	// do nothing
        }	
		
		try {
        	ObjectifyService.register(PeriodItem.class);
        } catch (Exception e) {
        	// do nothing
        }	
	}
}
