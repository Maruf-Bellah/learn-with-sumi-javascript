// async এবং await - promise কে লিখতে সহজ করে তোলে"

// async একটি ফাংশনকে promise  return করে
// await একটি ফাংশন কে promise এর জন্য অপেক্ষা করে

// The keyword async before a function makes the function return a promise:

function myDisplayer(some) {
  //   console.log(some);
}

async function myFunction() {
  return "Hello";
}

myFunction().then(function (value) {
  myDisplayer(value);
});

// await =========================================
// The await keyword can only be used inside an async function.===============
// The await keyword makes the function pause the execution and wait for a resolved promise before it continues:

async function myDisplay() {
  let myPromise = new Promise(function (resolve, reject) {
    resolve("I love You !!");
  });
  //   await console.log(myPromise);
}

myDisplay();

// Waiting for a Timeout ========

async function myDisplay1() {
  let myPromise = new Promise(function (resole) {
    setTimeout(function () {
      resole("I Love you !");
    }, 3000);
  });
  console.log(await myPromise);
  // await console.log(myPromise); // ekhane pending dekhabe
}

myDisplay1();
