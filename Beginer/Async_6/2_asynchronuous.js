// asynchronuous মানে যার তাল নেই

console.log("Line 1 code");

setTimeout(function () {
  console.log("Line 2 code");
}, 2000);

// setInterval(function(){
// console.log('Line 2 code');
// }, 2000)

setTimeout(myFunction, 3000);
function myFunction() {
  console.log("I Love you !");
}

console.log("Line 3 code");

// console.log(myFunction2());

setInterval(myFunction2, 1000);
function myFunction2() {
  let d = new Date();

  document.getElementById("demo").innerHTML =
    d.getDay() +
    " : " +
    d.getHours() +
    " : " +
    d.getMinutes() +
    " : " +
    d.getSeconds();

  console.log(d);
}
