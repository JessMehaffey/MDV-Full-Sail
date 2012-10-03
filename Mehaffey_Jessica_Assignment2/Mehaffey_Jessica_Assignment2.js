// Jessica Mehaffey
// SDI 1210
// Project 2
// Javascript: Introducing Loops and Functions

// Personal Notes:
// Make sure ";" ends every line!
// Arrays start with place 0!

// Set Variables
var strName = "Jessica";
var arrNumbers = [10, 12, 23, 24, 35];
var addOutcome;

// Addition Function
var addition = function(firstNumber, secondNumber){
		var outcome = firstNumber + secondNumber;
		
		return outcome;
};


// While Loop
var countDown = function(cupcakes){

	for (cupcakes > 0){
		console.log(cupcakes + " dozen cupcakes still need baked and decorated!");
		console.log("When you think about it, " + cupcakes + " dozen cupcakes really won\'t take too long to bake!"
		cupcakes = cupcakes - 1;
		
		if (cupcakes === 25){
			break;
		};
		
		if (cupcakes > 0){
			console.log(cupcakes + "left to bake!");
		} else {
			console.log("Put down your oven mitt- we\'re done baking for the day!");
		};
	};
	
};



// Main Code
console.log("I can\'t believe we have baked " + addition(100 + 4) + "cupcakes already! We\'ve been busy bees!");