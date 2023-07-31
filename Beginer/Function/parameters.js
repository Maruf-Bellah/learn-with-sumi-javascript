
function a(x) {
    x.one = 7;
    return x.one * x.two
};

// এটার মধ্যে কিন্তু one এর value chnage হচ্ছে 

let m = {
    one: 4,
    two: 5
};

// console.log(a(m));
// console.log(m);

function myFunction(x, y = 10) {
    return x + y;
}
// console.log(myFunction(5));


// Function Rest Parameter==============================
function sum(...args) {
    let sum = 0;

    for (let arg of args) sum += arg;
    return sum
}


let show = sum(45, 6, 5, 211415, 5, 4, 54);
// console.log(show);


// The Arguments Object=====================================

let x = findMax(1, 123, 500, 115, 44,9000, 88);

function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
console.log(x);


// ekdom laste eta hobe ================================
/* 
function a(x, y){
    return x * y
};

// এটার মধ্যে কিন্তু m ও n এর value chnage হয় নাই 

let m = 6;
let n = 5;

console.log(a(m, n)); */
// console.log(m, n); 