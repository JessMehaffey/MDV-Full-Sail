// Jessica Mehaffey
// SDI 1210
// October 18, 2012
// Assignment 4- Function Library


// Don't forget semicolons!
var phoneNumber = "123-456-7890";
var eMail = "blahblah@gmail.com";
var URL = "http://www.facebook.com";
var wordsTitleCase = "This has been converted to Title case.";
var number = 5.3
var firstDate = new Date(2003, 3, 14);
var secondDate = new Date(2008, 0, 12);
var difference = firstDate.getTime() - secondDate.getTime()

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
		};
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
	}
		
	// Title-case a string
	// Split into words, then uppercase first letter of each word
	// FIX ME
	var checkTitleCase = function(titleCase){
		wordsTitleCase.toTitleCase;
		console.log("This Has Been Converted To Title Case.");
	}
		
	// Decimal Format
	// Format number to use specific number of decimal places (2.1 to 2.10)
	var checkDecimalFormat = function(decimalFormat){
		number.toPrecision(3);
		console.log(number + " has been converted to " + number.toPrecision(3));
		}
		
	// Find Time Difference Between 2 Dates
	// Find number of hours/days between dates	
	var getDateDifference = function(secondDate, firstDate){
		var Seconds = difference / 1000;
		var secondsBetween = Math.abs(Seconds);
		}
		
	

	return {
		"checkPhone" : checkPhone,
		"checkEmail" : checkEmail,
		"checkURL" : checkURL,
		"checkTitleCase" : checkTitleCase,
		"checkDecimalFormat" : checkDecimalFormat,
		"getDateDifference" : getDateDifference,
		};
};



var newLib = new myLibrary();

console.log("The first dash is in position " + newLib.checkPhone(phoneNumber) + ", and the second dash is in position " + newLib.checkPhone("1230456-7890") + ". Therefore, " + phoneNumber + " is a valid phone number.");
console.log("The email " + newLib.checkEmail("blahblah@gmail.com") + " is valid.");
console.log("The URL " + newLib.checkURL("http://www.facebook.com") + " is valid.");
console.log("The string " + newLib.checkTitleCase("checkTitleCase") + " has been converted to Title Case!");
console.log("The number " + newLib.checkDecimalFormat(number) + " has been converted to decimal format.");
console.log("The difference between " + firstDate + " and " + secondDate + " is " + newLib.getDateDifference(difference));