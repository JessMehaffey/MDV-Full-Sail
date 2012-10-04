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
var addOutcome;

// Main Code Section 1
console.log("Good Morning! Hope you are ready to get coated in batter! Things are getting hectic around here, and we need everybody wide awake and ready to work!");
console.log("My name is " + strName + " and I\'m in charge this morning! Get the eggs out of the fridge and meet me by the mixers, ASAP!");

// Addition Function
var addition = function(firstNumber, secondNumber){
		var outcome = firstNumber + secondNumber;
		
		return outcome;
};


// While Loop
var countDown = function(cupcakes){

	for (var flavorsFinished = 0; flavorsFinished < arrFlavors.length; flavorsFinished++) {
		console.log( + " flavors of cupcakes still need baked and decorated!");
		console.log("When you think about it, " + flavorsFinished + " flavors of cupcakes really won\'t take too long to bake!");
		flavorsFinished++; // Value of flavorsFinished increases by 1 each time
		
		
		if (cupcakes > 0){
			console.log(flavorsFinished + "flavors left to bake!");
		} else {
			console.log("Put down your oven mitt- we\'re done baking for the day!");
		};
	};
	
};


// Loop
for (var i=0; j = arrFlavors.length; i < j; i++) {
	console.log("Have we made " + arrFlavors[i] + " cupcakes yet? " + arrToppings[i] );
};


// Main Code Section 2
console.log("I can\'t believe we have baked " + addition(100 + 4) + "cupcakes already! We\'ve been busy bees!");