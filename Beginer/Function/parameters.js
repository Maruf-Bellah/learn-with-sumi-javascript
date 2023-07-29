

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

function a(x){
    x.one = 7;
    return x.one * x.two 
};

// এটার মধ্যে কিন্তু one এর value chnage হচ্ছে 

let m = {
    one: 4,
    two: 5
};

console.log(a(m));
console.log(m);