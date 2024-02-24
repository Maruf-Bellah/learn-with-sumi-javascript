/* 
New Features in ES2021
Promise.any()
String replaceAll()
Numeric Separators (_) 

*/

// JavaScript Promise.any() => eta valokore dekhte hobe

// create  a promise

const myPromise1 = new Promise((resolve, resect) => {
  setTimeout(resolve, 2000, "Maruf Bellah");
});

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Ayesha Bellah");
});

Promise.any([myPromise1, myPromise2]).then((x) => {
  console.log(x);
});
