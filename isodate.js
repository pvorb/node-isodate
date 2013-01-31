/**
 * Module for parsing an ISO 8601 formatted string into a Date object.
 */
module.exports = function (string) {
    var match;
	if (typeof string.getTime === "function")
		return string;
	else if (match = string.match(/^(\d{4})(-?(\d{2})(-?(\d{2})(T(\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|((\+|-)(\d{2}):?(\d{2}))))?)?)?$/)) {
		var date = new Date(
		    Number(match[1]), // year
		    (Number(match[3]) - 1) || 0, // month
		    Number(match[5]) || 0, // day
		    Number(match[7]) || 0, // hour
		    Number(match[8]) || 0, // minute
		    Number(match[10]) || 0, // second
		    Number(match[12]) || 0);

		if (match[13] && match[13] !== "Z") {
			var h = Number(match[16]) || 0,
			    m = Number(match[17]) || 0;

			h *= 3600000;
			m *= 60000;

			var offset = h + m;
			if (match[15] == "+")
				offset = -offset;

			date = new Date(date.valueOf() - offset);
		}

		return date;
	} else
		throw new Error("Invalid ISO 8601 date given.", __filename);
};
