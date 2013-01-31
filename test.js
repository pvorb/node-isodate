var ISODate = require("./");

// Parse ISO date string
var datestring = "2011-08-18T19:03:37+01:00";
console.log("Parsing: " + datestring);
console.log("Result: " + ISODate(datestring) + "\n");

// Parse ISO date string without delimiters
datestring = "20110818T190337+0100";
console.log("Parsing: " + datestring);
console.log("Result: " + ISODate(datestring) + "\n");

datestring = "2011-04-16T00:00:00Z";
console.log("Parsing: " + datestring);
console.log("Result: " + ISODate(datestring) + "\n");

// Writing current time
console.log("Parsing current time.");
var date = new Date();
console.log(date.toISOString());
