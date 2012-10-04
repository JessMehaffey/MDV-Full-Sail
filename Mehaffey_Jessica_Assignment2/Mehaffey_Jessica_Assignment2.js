// Jessica Mehaffey
// SDI 1210
// Project 2
// Javascript: Introducing Loops and Functions

// Personal Notes:
// Make sure ";" ends every line!
// Arrays start with place 0!
// Always add \escapes when including quotes and apostrophes!

// Set Variables
var strName = "Jessica";
var arrFlavors = ["Vanilla", "Chocolate", "Oreo", "Red Velvet", "Cookie Dough"];
var arrToppings = ["Once you decorate them, roll them in rainbow sprinkles!", "Chocolate chips go in the batter- don\'t forget!", "Half of an Oreo cookie goes in the liner before you add the batter!", "This is the only cupcake that gets cream cheese icing!", "Don\'t eat the raw cookie dough! ...I\'m kidding. Give me a scoop!",];
var bakeAllCupcakes;

// Beginning Text
console.log("Good Morning! Hope you are ready to get coated in batter! Things are getting hectic around here, and we need everybody wide awake and ready to work!");
console.log("My name is " + strName + " and I\'m in charge this morning! Get the eggs out of the fridge and meet me by the mixers, ASAP!");

// Addition Function
var addition = function(firstNumber, secondNumber){
		var outcome = firstNumber + secondNumber;
		
		return outcome;
};

// While Loop
var flavorCountDown = function(flavors){
	while (flavors < 5){
		console.log("We still have cupcakes left to bake!");
		flavors --;
			
			if (flavors < 5) {
				console.log("Keep up the good work! We still have " + flavors + " left to bake and decorate!");
			} else {
				console.log("Great job! All of the flavors are baked!");
			};
		};
	
	};


// For Loop	
for (var flavorsFinished = 0; flavorsFinished < arrFlavors.length; flavorsFinished++) {
	flavorsFinished++;
	console.log("The " + arrFlavors[0] + " cupcakes still need baked and decorated!");
	console.log("You already have " + flavorsFinished + " flavors baked? Wow!");
	flavorsFinished++; // Value of flavorsFinished increases by 1 each time
		
		
	if (flavorsFinished === 5){
		console.log("You already finished every flavor?! Put down your oven mitt- we\'re done baking for the day!")
	} else {
		console.log(flavorsFinished + " flavors left to bake! Get on it!");
	};
};
	


// Main Code
function bakeAllCupcakes(arrFlavors, arrToppings){
console.log("I can\'t believe we have baked " + addition(100 + 4) + "cupcakes already! We\'ve been busy bees!");
};