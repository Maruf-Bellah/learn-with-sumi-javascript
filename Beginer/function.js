// জাভাস্ক্রিপ্ট ফাংশন হল কোডের একটি ব্লক যা একটি নির্দিষ্ট কাজ সম্পাদন করার জন্য ডিজাইন করা হয়েছে।

// একটি জাভাস্ক্রিপ্ট ফাংশন কার্যকর করা হয় যখন "কিছু" এটিকে আহ্বান করে (এটিকে কল করে)।

/* function myFunction(p1, p2) {
    var my = p1 * p2;
    console.log(my);
    return my 
}
 myFunction(5, 3) */





// Function is called, the return value will end up in x

let x = myFunction(4, 3);
console.log(x);

function myFunction(a, b) {
    // Function returns the product of a and b
    return a * b;
}


// Convert Fahrenheit to Celsius:

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

// let value = 'hello bor' + toCelsius(77) + 'how are you' ;
let value = `hello bor  ${toCelsius(77)}  how are you`;

console.log(value);

