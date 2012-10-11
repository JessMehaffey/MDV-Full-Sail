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
var EmployeesScheduled = "6"
var ScheduleComplete = true

// Output Log
// This contains the console.log text that will show up upon running the program


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

// While Loop