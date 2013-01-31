isodate
=======

enables the parsing of ISO 8601 date strings.

There's another package, iso8601
([github](//github.com/calmh/node-iso8601),
[npm](https://npmjs.org/package/iso8601)), which I'd consider before using this
package, since it doesn't change the prototype of class `Date`.

Installation
------------

    npm install isodate

or

    ender build isodate

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

License
-------

(MIT License)

Copyright © 2011-2013 Paul Vorbach

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
