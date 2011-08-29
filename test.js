var ISODate = require("./");

// Parse ISO date string
var datestring = "2011-08-18T19:03:37+01:00";
console.log("Parsing: " + datestring);
console.log("Result: " + ISODate(datestring) + "\n");

// Writing current time
console.log("Parsing current time.");
var date = new Date();
console.log(date.toISOString());
