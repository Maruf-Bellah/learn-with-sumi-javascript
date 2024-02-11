// Sorting Arrays ====================

/*
Alpabetic Sort=============
Array sort()
Array reverse()
Array toSorted()
Array toReversed()
Sorting Objects
*/

/* 
Numeric Sort=================
Numeric Sort
Random Sort
Math.min()
Math.max()
Home made Min()
Home made Max()
*/

// 1 === The sort() method sorts an array alphabetically:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const a = fruits.sort();
// console.log(a);

// 2 === The reverse() method reverses the elements in an array:

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const b = fruits2.reverse();
// console.log(b);

// 3 === the toSorted() method as a safe way to sort an array without altering the original array.

// The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.

const months1 = ["Jan", "Feb", "Mar", "Apr"];
// const c = months1.toSorted();

// console.log(c);

//  4==== the toReversed() method as a safe way to reverse an array without altering the original array.

const months2 = ["Jan", "Feb", "Mar", "Apr"];
// const reversed = months2.toReversed();
// console.log(reversed);

// Numeric Sort=====================================

// ডিফল্টরূপে, sort() ফাংশন মানগুলিকে স্ট্রিং হিসাবে সাজায়।
// এটি স্ট্রিংয়ের জন্য ভাল কাজ করে ("অ্যাপল" "কলা" এর আগে আসে)।
// সংখ্যাগুলিকে স্ট্রিং হিসাবে সাজানো হলে, "25" "100" এর থেকে বড়, কারণ "2" "1" এর চেয়ে বড়।
// এই কারণে, সংখ্যা বাছাই করার সময় sort() পদ্ধতিটি ভুল ফলাফল তৈরি করবে।
// আপনি একটি তুলনা ফাংশন প্রদান করে এটি ঠিক করতে পারেন

const points = [40, 100, 1, 5, 25, 10];
const c = points.sort(function (a, b) {
  return a - b;
});
// console.log(c);

// একটি অ্যারে সাজানোর জন্য একই কৌশল ব্যবহার করুন:

const points1 = [40, 100, 1, 5, 25, 10];
const d = points1.sort(function (a, b) {
  return b - a;
});
// console.log(d);

// যখন sort() ফাংশন দুটি মানের তুলনা করে, তখন এটি তুলনা ফাংশনে মান পাঠায় এবং প্রত্যাবর্তিত (নেতিবাচক, শূন্য, ধনাত্মক) মান অনুযায়ী মানগুলিকে সাজায়।
// ফলাফল নেতিবাচক হলে, b এর আগে a সাজানো হয়।
// ফলাফল ইতিবাচক হলে, b এর আগে a সাজানো হয়।
// ফলাফল 0 হলে, দুটি মানের সাজানোর ক্রম দিয়ে কোন পরিবর্তন করা হয় না।
// উদাহরণ:
// তুলনা ফাংশন অ্যারের সমস্ত মান তুলনা করে, একই সময়ে দুটি মান (a, b)।
// 40 এবং 100 তুলনা করার সময়, sort() পদ্ধতি তুলনা ফাংশন (40, 100) কল করে।
// ফাংশনটি 40 - 100 (a - b) গণনা করে, এবং যেহেতু ফলাফলটি নেতিবাচক (-60), তাই সাজানোর ফাংশনটি 100-এর চেয়ে কম মান হিসাবে 40 কে সাজাতে হবে।
// আপনি সংখ্যাগত এবং বর্ণানুক্রমিকভাবে সাজানোর সাথে পরীক্ষা করতে এই কোড স্নিপেটটি ব্যবহার করতে পারেন:

const points3 = [40, 100, 1, 5, 25, 10];
// console.log(points3);

function myFunction1() {
  points3.sort();
  //   console.log(points3);
}

function myFunction2() {
  points3.sort(function (a, b) {
    return a - b;
  });
  //   console.log(points3); // this is right to sorth
}

// myFunction1();
// myFunction2();

// Sorting an Array in Random Order ============= এটা random ভাবে sorting করা যায়

const points4 = [40, 100, 1, 5, 25, 10];
const e = points4.sort(function () {
  return 0.5 - Math.random();
});
// console.log(e);

function myFunction() {
  for (let i = points4.length - 1; i > 0; i--) {
    // console.log(i);
    let j = Math.floor(Math.random() * (i + 1));
    // console.log(j);
    let k = points4[i];
    // console.log(k);
    points4[i] = points4[j];
    // console.log(points4[i]);
    points4[j] = k;
  }
  //   console.log(points);
}

// myFunction();

// আপনি একটি অ্যারে বাছাই করার পরে, আপনি সর্বোচ্চ এবং সর্বনিম্ন মান পেতে সূচক ব্যবহার করতে পারেন

// Sort Ascending: ===============

const points6 = [40, 100, 1, 5, 25, 10];
const g = points6.sort(function (a, b) {
  return a - b;
});

// console.log(g);
// console.log(g[0]);

// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value

// Sort Descending:====================

const points7 = [40, 100, 1, 5, 25, 10];
const h = points7.sort(function (a, b) {
  return b - a;
});
// console.log(h);
// console.log(h[0]);

// now points[0] contains the highest value
// and points[points.length-1] contains the lowest value

// Using Math.min() on an Array=============

// আপনি একটি অ্যারের মধ্যে সর্বনিম্ন সংখ্যা খুঁজে পেতে Math.min.apply ব্যবহার করতে পারেন:

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
console.log(myArrayMin());
