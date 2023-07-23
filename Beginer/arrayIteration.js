// iteration মানে পূনরাবিত্তি হওয়া 

// for Eech এ প্রত্যেক টা array এর মধ্য দিয়ে যায় এবং call back function দ্বারা  value , index , arr পায় 

const numbers = [45, 8,9,4,8,4,5,98,54,5,551,1,4,41];


// const see = numbers.forEach(function(value , index , arr){
//     console.log(arr);
// })


// ======================================================================

// map একটা নতুন array দেয়  আর পুরাতন array পরিবর্ত্ন করে না map ও return করে value , index, array 

/* const see = numbers.map(function(value , index , arr){
    return arr + 5;
})

console.log(see); */

// =============================================================

// flatMap() একটা নতুন array দেয়  আর পুরাতন array পরিবর্ত্ন করে না map ও return করে value , index, array 

/* 
const see = numbers.flatMap(function(value , index , arr){
    return value * 5;
})

console.log(see); */


// ====================================================================

// filter() একটা নতুন array দেয়  আর পুরাতন array পরিবর্ত্ন করে না filter ও return করে value , index, array 

/* const see = numbers.filter(function(value , index , arr){
    return value <  10;
})

console.log(see); */



// reduce() এটা array এর মদ্ধে যত নাম্বার আছে সে বাম থেকে ডানের দিকে গুনে একটা যোগফল দিয়ে দেয়  এবং এক দেয় total মানে পুরা array এর যোগফল index, value , array 


/*  const see = numbers.reduce(function(total, value , index , arr){
    return total +  value ;
}, 100) // initial value bole 

console.log(see); */


// reduceRight() এটা array এর মদ্ধে যত নাম্বার আছে সে ডান থেকে বামের দিকে গুনে একটা যোগফল দিয়ে দেয়  এবং এক দেয় total মানে পুরা array এর যোগফল index, value , array 

/* 
 const see = numbers.reduceRight(function(total, value , index , arr){
    return total +  value ;
}, 100) // initial value bole 

console.log(see); */


// every এটা array এর সব Element গুলি দেখে যে এই array এর মদ্ধে আছে কি না এ return করে index, vlaue , arrr 

/*  const see = numbers.every(function(total, value , index , arr){
    return  value > 45 ;
}); */

// console.log(see);

// some এটা array এর সব Element গুলি দেখে যে এই array এর মদ্ধে যদি না  থাকে এ return করে  true === index, vlaue , arrr 

//  const see = numbers.some(function(total, value , index , arr){
//     return  value > 4 ;
// });

// console.log(see);


// indexOf কত নম্বার Element এ আছে 

// let show = numbers.indexOf(5);
// console.log(show);


// lastIndexOf last এ কত নম্বার Element এ আছে 

// let show = numbers.lastIndexOf(5);
// console.log(show);


// find এটা array এর first Element টা দেয় , আর  condition ও থাকলে একটা element রিটার্ন করবে , index , value , array ও দেয় call back function এর মাদ্ধ্যেমে 

/* let show = numbers.find(function(value, index, arr){
    return value < 5;
});
console.log(show); */


// findIndex() এটা array এর কত নম্বার index এ আছে  টা দেয় , আর  condition ও থাকলে একটা element রিটার্ন করবে , index , value , array ও দেয় call back function এর মাদ্ধ্যেমে 

/* let show = numbers.findIndex(function(value, index, arr){
    return value > 54;
}); */

// Array.from() একটা array বানায় object থেকে / যে কোনো string থেকে 


// let show = Array.from("ABCDEFG");
// console.log(show.keys());




const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();


let text = '';
for (let x of keys) {
  text += x ;
};

console.log(text);