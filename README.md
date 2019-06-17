# DateFormatter
Simple dateformatter in JavaScript that is available via NPM

---
# Build Status and Other Information
[![Build Status](https://travis-ci.com/rianf2/DateFormatter.svg?token=AxiGsz8UJ6oV7WVqs7mJ&branch=master)](https://travis-ci.com/rianf2/DateFormatter)

---
# Purpose
This project is for 2 purposes: 
1. to learn how to make node modules
2. to learn how to use travis

If this get's anywhere then hey, even better!

---

# Example Usage

```javascript
const formatter = require("@bolzak/dateformatter");

console.log(formatter.getDate("DD/MM/YYYY"));
console.log(formatter.getTime("HH:MIN:SS"))
console.log(formatter.getDateTime("YYYY/MM/DD HH:MIN"));
```
---
# Accepted queries
Dates can be in the form of:
* DD/MM/YYYY
* MM/DD/YYYY
* YYYY/MM/DD

*Note: The symbols dividing the parts of the date can be any symbol, not necessarily a slash*

Times can be in the form of:
* HH:MIN:SS
* HH:MIN
 
*Note: As with dates, the symbols dividing the parts of the date can be any symbol, not necessarily a colon*

DateTime strings can be any combination of valid date and time strings, however, the date portion must be first!

---
