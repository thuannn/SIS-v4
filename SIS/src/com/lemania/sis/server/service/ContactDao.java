package com.lemania.sis.server.service;

import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import javax.mail.Address;
import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import com.twilio.sdk.TwilioRestClient;
import com.twilio.sdk.TwilioRestException;
import com.twilio.sdk.resource.factory.SmsFactory;
import com.twilio.sdk.resource.instance.Account;
import com.twilio.sdk.resource.instance.Sms;


public class ContactDao extends MyDAOBase {
	
	public void sendEmail (String firstName, String lastName, String email, String message ) {
		//
		Properties props = new Properties();
        Session session = Session.getDefaultInstance(props, null);

        String msgBody = "Email : " + email + "\n\nMessage : " + message;

        try {
	        Message msg = new MimeMessage(session);
	        msg.setFrom(new InternetAddress("thuannn@gmail.com", "Lemania eProfil"));
	        msg.addRecipient(Message.RecipientType.TO, new InternetAddress("Thuan.Nguyen@lemania.ch", "Thuan NGUYEN"));
	        msg.addRecipient(Message.RecipientType.TO, new InternetAddress("Cindy.Clemence@lemania.ch", "Cindy CLEMENCE"));
	        msg.addRecipient(Message.RecipientType.TO, new InternetAddress("Olga.Theofanidis@lemania.ch", "Olga THEOFANIDIS"));
	        msg.setSubject("Nouveau message de "+ firstName + " " + lastName +" depuis eProfil");
	        msg.setText(msgBody);
	        Transport.send(msg);
	    } catch (Exception e) {
	    	throw new RuntimeException(e);
	    }
	}
	
	
	/*
	 * 
	 * */
	public void sendEmail ( 
			String messageSubject,
			String from, String to, String replyto, String cc,
			String messageBody ) {
		//
		Properties props = new Properties();
        Session session = Session.getDefaultInstance(props, null);

        try {
	        Message msg = new MimeMessage(session);
	        //
	        String[] fromEmails = from.split(",");
	        msg.setFrom(new InternetAddress( fromEmails[0].trim(), fromEmails[1].trim() ));
	        //
	        String[] toto;
 	        String[] toPairs = to.split("/");
	        for ( String toMail : toPairs ) {
	        	toto = toMail.split(",");
	        	msg.addRecipient( Message.RecipientType.TO, new InternetAddress( toto[0].trim(), toto[1].trim() ));
	        }
	        //
	        String[] cccc;
 	        String[] ccPairs = cc.split("/");
	        for ( String ccMail : ccPairs ) {
	        	cccc = ccMail.split(",");
	        	msg.addRecipient( Message.RecipientType.TO, new InternetAddress( cccc[0].trim(), cccc[1].trim() ));
	        }
	        //
	        String[] rrrr;
 	        String[] rrPairs = replyto.split("/");
 	        Address[] rraa = new Address[ rrPairs.length ];
	        for ( int i = 0; i < rrPairs.length; i++ ) {
	        	//
	        	rrrr = rrPairs[i].split(",");
	        	rraa[i] = new InternetAddress( rrrr[0].trim(), rrrr[1].trim() );
	        }
	        msg.setReplyTo( rraa );
	        //
	        msg.setSubject( messageSubject );
	        msg.setText( messageBody );
	        //
	        Transport.send(msg);
	        //
	    } catch (Exception e) {
	    	throw new RuntimeException(e);
	    }
	}
	
	
	
	/*
	 * */
	public void sendSMS( String number, String message ) {
		//
		
	}
}