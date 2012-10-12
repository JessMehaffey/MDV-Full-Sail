// Jessica Mehaffey
// SDI 1210
// Project 3
// Javascript: Free Form Flow Chart

// Personal Notes:
// Make sure ";" ends every line!
// Arrays start with place 0!
// Always add \escapes when including quotes and apostrophes!

// Global Variables
// Used Code-wide

var NewEmployee = "that new chick"
var EmployeesScheduled = 6
var ScheduleComplete = true
var FilesToFile = 3

console.log("It\'s a great day to work! I can\'t wait to get started with all my paperwork!");
console.log("I should probably turn the laptop on first...");

// Objects
var Self = {
	name : "I",
	attack : function (kicks) {
		console.log(this.name + " wish this stupid laptop would work!");
	}
};
Self.attack("laptop");

// If Loop
if (ScheduleComplete === true){
  if (EmployeesScheduled <= 6){
		// code that runs if true
		EmployeesScheduled = EmployeesScheduled + 1;
		console.log("We have everyone in the schedule, so we can move on to the next task!")
	} else {
		// code that runs if false
		console.log("Better sit down and get that schedule finished!")
	};
} else {
	if (NewEmployee === "that new chick"){
		console.log("I better double check and make sure " + NewEmployee + " is on this schedule.");
	} else {
		NewEmployee = "I really hope " + NewEmployee + " does well. I don\'t want to have to fire her.";
		console.log(Employee);
	};
};

// Boolean
function PaperworkFiled(){
	var PaperworkFiled = false
	if(PaperworkFiled === false){
		console.log("I have to file a ton of paperwork today.");
	} else {
		console.log("Looks like I don't have to file any paperwork!");
	}
};

// Array
var Array = ["schedule", "assorted paperwork", "file paperwork"];
console.log("I have " + Array.length + " tasks to finish today.");
console.log("I have already finished the " + Array[0] + ", so I should probably start on the " + Array[1] + " that I have left!");

// While Loop
console.log("I have to file a total of 14 files, and 2 files are already filed. I better hurry up!");
while (FilesToFile < 14) {
	console.log("Another file filed! That makes " + FilesToFile + " files filed so far!");
FilesToFile++;
}

console.log("Well, all " + FilesToFile + " files are finally filed! Wow, that\'s a tongue twister!");
console.log("I should probably clock-out and get home so I can rest up for tomorrow. Lots of cakes are due!");