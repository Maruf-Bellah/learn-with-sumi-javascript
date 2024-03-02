// Date Get Methods

/* 
getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970) 
*/

// The getFullYear() method returns the year of a date as a four digit number:

const d = new Date("2021-03-25");
d.getFullYear();
// console.log(d);

const a = new Date();
const g = a.getFullYear();
// console.log(g);

const b = new Date("2021-03-25");
const f = b.getMonth();
// console.log(f);

const c = new Date();
const e = c.getMonth();
// console.log(e);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const h = new Date("2021-05-25");
let month = months[h.getMonth()];

// console.log(month);

const h1 = new Date();
let month1 = months[h1.getMonth()];
// console.log(month1);

// The getDate() method returns the day of a date as a number (1-31):
const i = new Date("2021-03-25");
const i2 = new Date();
const j = i2.getDate();
// console.log(j);

// The getHours() method returns the hours of a date as a number (0-23):

const k = new Date("2021-03-25"); // 0 theke shuru hobe (0-23)
k.getHours();
const k2 = new Date();
const l = k2.getHours();
// console.log(l);

// The getMinutes() method returns the minutes of a date as a number (0-59)
const m = new Date("2021-03-25");
const m2 = new Date();
const n = m2.getMinutes();
// console.log(n);

// The getSeconds() method returns the seconds of a date as a number (0-59):

const o = new Date("2021-03-25");
const o2 = new Date();

const p = o2.getSeconds();
console.log(p);
