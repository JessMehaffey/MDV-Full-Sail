// Jessica Mehaffey
// SDI 1210
// October 18, 2012
// Assignment 4- Function Library


// Don't forget semicolons!
var phoneNumber = "123-456-7890";

var myLibrary = function(){
	// Phone Number Validator
	// Does string follow pattern (###-###-####) like phone number?
	var checkPhone = function(val){
	
		var strPhone = val.length
		for (var i=0; 1 <=strPhone; i++){
			if (val.substring(i, i+1) === "-"){
				return i;
			}
		};	
	
	};

	return {
		"checkPhone" : checkPhone,
		};

};

var newLib = new myLibrary();

console.log("The first dash is in position " + newLib.checkPhone("123-456-7890") + ", and the second dash is in position " + newLib.checkPhone("123-456-7890") + ". Therefore, " + phoneNumber + " is a valid phone number.");



// Does string follow pattern (aaa@bbb.ccc) like an email?

// Is the string a URL? (Start with http: or https:)

// Title-case a string. ((Split into words, then uppercase the first letter of each word)

// Format number to use specific number of decimal places ((like money, 2.1 = 2.10)

// Find the number of hours or days difference between two dates.