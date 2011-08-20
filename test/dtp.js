var year = "-?\d{2,4}",
	month = "[01]?\d",
	mname = "(Jan)|(Feb)|(Mar)|(Apr)|(May)|(Jun)|(Jul)|(Aug)|(Sep)|(Oct)|(Nov)"
		+ "|(Dec)",
	week = "[012345]?\d",
	wday = "[1234567]",
	wdayname = "(Mon)|(Tue)|(Wed)|(Thu)|(Fri)|(Sat)|(Sun)",
	day = "[0123]?\d",
	hour = "[012]?\d",
	min = "[012345]\d",
	sec = min,
	msec = "\d{4}",
	ampm = "a|pm",
	timezone = "+|-\d\d:\d\d";

// New parsing function
var newParse = function (datestring) {
	// ISO date
	if (datestring.match(new RegExp(year + "-" + month + "-" + day "T"
			+ hour + ":" + min + ":" + sec + "(" + timezone + ")"))
		return new Date();
};

Date.parse = newParse();
