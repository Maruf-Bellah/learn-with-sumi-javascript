// iteration মানে পূনরাবিত্তি হওয়া

// for Eech এ প্রত্যেক টা array এর মধ্য দিয়ে যায় এবং call back function দ্বারা  value , index , arr পায়

const numbers = [45, 8, 9, 4, 8, 4, 5, 98, 54, 5, 551, 1, 4, 41];

const see = numbers.forEach(function (value, index, arr) {
  //   console.log(value, index);
});

// ======================================================================

// map একটা নতুন array দেয়  আর পুরাতন array পরিবর্ত্ন করে না map ও return করে value , index, array

const see0 = numbers.map(function (value, index, arr) {
  return arr + 5;
});

// console.log(see0);

// =============================================================

// flatMap() একটা নতুন array দেয়  আর পুরাতন array পরিবর্ত্ন করে না map এর মত  return করে value , index, array

const see2 = numbers.flatMap(function (value, index, arr) {
  return value * 5;
});

// console.log(see2);

// ====================================================================

// filter() একটা নতুন array দেয়  আর পুরাতন array পরিবর্ত্ন করে না filter ও return করে value , index, array

const see3 = numbers.filter(function (value, index, arr) {
  return value < 10;
});

// console.log(see3);

// reduce() এটা array এর মদ্ধে যত নাম্বার আছে সে বাম থেকে ডানের দিকে গুনে একটা যোগফল দিয়ে দেয়  এবং এক দেয় total মানে পুরা array এর যোগফল index, value , array ,priviace value ও দেয়

const see4 = numbers.reduce(function (total, value, index, arr) {
  return total + value;
}, 100); // initial value bole

// console.log(see4);

// reduceRight() এটা array এর মদ্ধে যত নাম্বার আছে সে ডান থেকে বামের দিকে গুনে একটা যোগফল দিয়ে দেয়  এবং এক দেয় total মানে পুরা array এর যোগফল index, value , array

const see5 = numbers.reduceRight(function (total, value, index, arr) {
  return total + value;
}, 100); // initial value bole

// console.log(see5);

// every এটা array এর সব Element গুলি দেখে যে এই array এর মদ্ধে আছে কি না এ return করে index, vlaue , arrr

const see6 = numbers.every(function (total, value, index, arr) {
  return value > 45;
});

// console.log(see6);

// some এটা array এর সব Element গুলি দেখে যে এই array এর মদ্ধে যদি না  থাকে এ return করে  true === index, vlaue , arrr

const see7 = numbers.some(function (total, value, index, arr) {
  return value > 4;
});

// console.log(see7);

// indexOf কত নম্বার Element এ আছে

let show = numbers.indexOf(5);
// console.log(show);

// lastIndexOf last এ কত নম্বার Element এ আছে

let show1 = numbers.lastIndexOf(5);
// console.log(show1);

// find এটা array এর first Element টা দেয় , আর  condition ও থাকলে একটা element রিটার্ন করবে , index , value , array ও দেয় call back function এর মাদ্ধ্যেমে

let show3 = numbers.find(function (value, index, arr) {
  return value < 5;
});
// console.log(show3);

// findIndex() এটা array এর কত নম্বার index এ আছে  টা দেয় , আর  condition ও থাকলে একটা element রিটার্ন করবে , index , value , array ও দেয় call back function এর মাদ্ধ্যেমে

let show4 = numbers.findIndex(function (value, index, arr) {
  return value > 54;
});

// Array.from() একটা array বানায় object থেকে / যে কোনো string থেকে

let show6 = Array.from("ABCDEFG");
// console.log(show6.keys());

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
  text += x;
}

// console.log(text);

// entries() returns an Array Iterator object with key/value pairs:============

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits2.entries();
// console.log(f);

for (let x of f) {
  //   console.log(x);
}

// the Array with() method as a safe way to update elements in an array without altering the original array.

const months = ["Januar", "Februar", "Mar", "April"];
// const myMonths = months.with(2, "March");
// console.log(myMonths);

// the ... operator expands an iterable (like an array) into more elements:

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);
