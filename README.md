isodate
=======

enables the parsing of ISO 8601 date strings.

Usage
-----

~~~ javascript
var isodate = require("isodate");

// Read a date string
var date = isodate("2011-08-20T19:39:52Z");
console.log(date);

// Write current date as ISO 8601 string.
date = new Date();
console.log(date.toISOString());
~~~

It's also possible to parse strings with timezones like in
`2011-08-20T19:44:05+01:00`.
