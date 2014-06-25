package com.lemania.sis.client;

import com.google.gwt.user.client.ui.ListBox;

public class FieldValidation {
	
	// User name validation
	public static boolean isValidUserName(String userName) {
		if (userName == null)
			return false;
		return (userName.length() >= 6);
	}
	
	// Password validation
	private final static String PASSWORD_VALIDATION_REGEX = "((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,32})";
	public static boolean isValidPassword(String password) {
		if (password == null)
			return false;
		return password.matches(PASSWORD_VALIDATION_REGEX);
	}
	
	// Email validation
	public static boolean isValidEmailAddress( String value ) {
		 if(value == null) return false;
         
         String emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.(?:[a-zA-Z]{2,6})$";
         
         boolean valid = false;
         
         if( value.getClass().toString().equals(String.class.toString()) ) {
                 valid = ((String)value).matches(emailPattern);
         } else {
                 valid = ((Object)value).toString().matches(emailPattern);
         }

         return valid;
	}
	
	// Number validation
	public static boolean isNumeric(String str) {
		return str.matches("-?\\d+(\\.\\d+)?");  //match a number with optional '-' and decimal.
	}
	
	/*
	 * */
	public static void selectItemByValue( ListBox list, String value) {
		//
		for (int i=0; i<list.getItemCount(); i++)
			if (list.getValue(i) == value) {
				list.setSelectedIndex(i);
				break;
			}
	}
	
	/*
	 * */
	public static void selectItemByText( ListBox list, String text) {
		//
		for (int i=0; i<list.getItemCount(); i++)
			if (list.getItemText(i) == text) {
				list.setSelectedIndex(i);
				break;
			}
	}
}
