package com.lemania.sis.server.service;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;


public class ContactDao extends MyDAOBase {
	
	public void sendEmail (String firstName, String lastName, String message ){
		Properties props = new Properties();
        Session session = Session.getDefaultInstance(props, null);

        String msgBody = message;

        try {
	        Message msg = new MimeMessage(session);
	        msg.setFrom(new InternetAddress("thuannn@gmail.com", "Lemania eProfil"));
	        msg.addRecipient(Message.RecipientType.TO,
	                         new InternetAddress("thuannn@gmail.com", "Thuan Nguyen"));
	        msg.setSubject("Nouveau message de "+ firstName + " " + lastName +" depuis eProfil");
	        msg.setText(msgBody);
	        Transport.send(msg);
	    } catch (Exception e) {
	    	throw new RuntimeException(e);
	    }
	}
}
