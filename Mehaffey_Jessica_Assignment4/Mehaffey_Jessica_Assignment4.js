// Jessica Mehaffey
// SDI 1210
// October 18, 2012
// Assignment 4- Function Library


// Don't forget semicolons!
var phoneNumber = "123-456-7890";
var eMail = "blahblah@gmail.com";

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

	return {
		"checkPhone" : checkPhone,
		};


	// Email Validator
	// Does string follow pattern (aaa@bbb.ccc) like email?
	var checkEmail = function(email){
		var emailFormat = ([A-Z, a-z, 0-9, _]) + "@" ([A-Z, a-z, 0-9, _]) + "." ([A-Z, a-z]); {2,4};
		if (emailFormat.test(eMail) === true) {
			console.log("A valid email address was entered.");
		} else {
			console.log("An invalid email address was entered. Please try again.");
		}
	};
};






var newLib = new myLibrary();

console.log("The first dash is in position " + newLib.checkPhone(phoneNumber) + ", and the second dash is in position " + newLib.checkPhone("1230456-7890") + ". Therefore, " + phoneNumber + " is a valid phone number.");



// Does string follow pattern (aaa@bbb.ccc) like an email?

// Is the string a URL? (Start with http: or https:)

// Title-case a string. ((Split into words, then uppercase the first letter of each word)

// Format number to use specific number of decimal places ((like money, 2.1 = 2.10)

// Find the number of hours or days difference between two dates.