function myDisplayer(some) {
  //   console.log(some);
}

let myPromise = new Promise(function (res, rej) {
  let x = 0;

  if (x === 0) {
    res("OK");
  } else {
    rej("Error");
  }
});

myPromise.then(function (value) {
  myDisplayer(value),
    function (error) {
      myDisplayer(error);
    };
});

// Waiting for a Timeout=======================

let myPromise2 = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    myResolve("I love You !!");
  }, 3000);
});

myPromise2.then(function (value) {
  //   console.log(value);
});

// Waiting for a data
/* 
function myDisplyer2(some) {
  console.log(some);
}

function getData(myCallback) {
  let req = XMLHttpRequest();
  req.open("GET", "index.html");
  req.onload = function () {
    if (req.status == 200) {
      myCallback(req.responseTExt);
    } else {
      myCallback("Error : " + req.status);
    }
  };
  req.send();
}

getData(myDisplyer2); */
