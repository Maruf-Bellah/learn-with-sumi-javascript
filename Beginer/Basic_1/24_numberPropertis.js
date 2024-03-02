// Number Properties========================

/* EPSILON 1 এবং সবচেয়ে ছোট সংখ্যা > 1 এর মধ্যে পার্থক্য।
MAX_VALUE জাভাস্ক্রিপ্টে সম্ভাব্য সর্বাধিক সংখ্যা৷
MIN_VALUE জাভাস্ক্রিপ্টে সম্ভাব্য ক্ষুদ্রতম সংখ্যা৷
MAX_SAFE_INTEGER সর্বোচ্চ নিরাপদ পূর্ণসংখ্যা (২৫৩ - ১)
MIN_SAFE_INTEGER সর্বনিম্ন নিরাপদ পূর্ণসংখ্যা -(২৫৩ - ১)
POSITIVE_INFINITY ইনফিনিটি (ওভারফ্লোতে রিটার্ন করা হয়েছে)
NEGATIVE_INFINITY নেতিবাচক অসীম (ওভারফ্লোতে ফেরত)
NaN A "Not-a-Number" নাম্বার না */

//1======== Number.EPSILON is the difference between the smallest floating point number greater than 1 and 1.

let a = Number.EPSILON;
// console.log(a);

// 2 =================Number.MAX_VALUE is a constant representing the largest possible number in JavaScript.

// Using x.MAX_VALUE, where x is a variable or a value, will return undefined:

let x = [23, 33, 35, 45, 34553, 23, 234];
let b = x.MAX_VALUE;
// console.log(b);

// 3============ Number.MIN_VALUE is a constant representing the lowest possible number in JavaScript.

let c = Number.MIN_VALUE;
// console.log(c);

// 4 ============ Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript.
// Number.MAX_SAFE_INTEGER is (253 - 1).

let d = Number.MAX_SAFE_INTEGER;
// console.log(d);

// 5===============Number.MIN_SAFE_INTEGER represents the minimum safe integer in JavaScript.

// Number.MIN_SAFE_INTEGER is -(253 - 1).

let e = Number.MIN_SAFE_INTEGER;
// console.log(e);

// JavaScript POSITIVE_INFINITY

let f = Number.POSITIVE_INFINITY;
// console.log(f);

// POSITIVE_INFINITY is returned on overflow:

let g = 1 / 0;
// console.log(g);

// JavaScript NEGATIVE_INFINITY

let h = Number.NEGATIVE_INFINITY;
// console.log(h);

// NEGATIVE_INFINITY is returned on overflow:

let i = -1 / 0;
// console.log(i);

// NaN is a JavaScript reserved word for a number that is not a legal number.

let j = Number.NaN;
// console.log(j);

// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

let k = 100 / "Apple";
console.log(k);
