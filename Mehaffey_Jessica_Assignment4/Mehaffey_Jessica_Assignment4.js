// Jessica Mehaffey
// SDI 1210
// October 18, 2012
// Assignment 4- Function Library


// Don't forget semicolons!
var phoneNumber = "123-456-7890";
var eMail = "blahblah@gmail.com";
var URL = "http://www.blahblah.com";
var wordsTitleCase = "This has been converted to Title case.";

var myLibrary = function(){
	// Phone Number Validator
	// Does string follow pattern (###-###-####) like phone number?
	var checkPhone = function(phone){
		var strPhone = phone.length
		for (var i=0; 1 <=strPhone; i++){
			if (phone.substring(i, i+1) === "-"){
				return i;
			}
		};	
	
	};


	// Email Validator
	// Does string follow pattern (aaa@bbb.ccc) like email?
	var checkEmail = function(email){
		var emailFormat = eMail.val
		if ( /(.+)@(.+){2,}\.(.+){2,}/.test(email) === true) {
			console.log("A valid email address was entered.");
		} else {
			console.log("An invalid email address was entered. Please try again.");
		}
		
	
	// URL Validator
	// Does string start with "http:" or "https:"?	
	var checkURL = function(url){
		if (!(/^http:\/\//.test(url))){
			console.log("The URL is valid.");
			}
		else if (!(/^https:\/\//.test(url))){
			console.log("The URL is valid.");
		} else {
			console.log("The URL is invalid.");
		};
		
	// Title-case a string
	// Split into words, then uppercase first letter of each word
	var checkTitleCase = function (titleCase){
	
	}
	};
	// Decimal Format
	// Format number to use specific number of decimal places (2.1 to 2.10)
		
		
	// Find Time Difference Between 2 Dates
	// Find number of hours/days between dates
		
};
	
	return {
		"checkPhone" : checkPhone,
		"checkEmail" : checkEmail,
		"checkURL" : checkURL,
		"checkTitleCase" : checkTitleCase,
		};
};




var newLib = new myLibrary();

console.log("The first dash is in position " + newLib.checkPhone(phoneNumber) + ", and the second dash is in position " + newLib.checkPhone("1230456-7890") + ". Therefore, " + phoneNumber + " is a valid phone number.");;
console.log("The email " + newLib.checkEmail(eMail) + " is valid.");
console.log("The URL " + newLib.checkURL(URL) + " is valid.");
console.log("The string " + newLib.checkTitleCase(titleCase) + " has been converted to Title Case!" );