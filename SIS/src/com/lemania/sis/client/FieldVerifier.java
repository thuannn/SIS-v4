package com.lemania.sis.client;

public class FieldVerifier {
	
	public static boolean isValidUserName(String userName) {
		if (userName == null)
			return false;
		return (userName.length() >= 6);
	}
	
	private final static String PASSWORD_VALIDATION_REGEX = "((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,32})";
	
	public static boolean isValidPassword(String password) {
		if (password == null)
			return false;
		return password.matches(PASSWORD_VALIDATION_REGEX);
	}
}
