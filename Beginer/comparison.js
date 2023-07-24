// comparison and logical operator use করা হয় tru and false এর জন্য 
// comparison operator হলো logical statements এর মধ্যে ব্যবহার করা হয় সমতা নির্ধারন করার জন্য এবং variable আর value এর মধ্যে পার্থক্য করার জন্য 

// comparison operator 

// x = 5 ==========

// x == 8	false	
// x == 5	true	
// x == "5"	 true	
// x === 5	true	
// x === "5" false	
// !=	not equal	x != 8	true	
// !==	not equal value or not equal type	x !== 5	false	
// x !== "5"	true	
// x !== 8	true	
// >	greater than	x > 8	false	
// <	less than	x < 8	true	
// >=	greater than or equal to	x >= 8	false	
// <=	less than or equal to	x <= 8	true

let age= 'lk;sdfl;sd';

if(age == 18){
    // console.log('hello i am adult');
}

// logical operator ব্যবহার করা হয় logic নির্ধারন করতে varibale ও value এর মধ্যে 

// logical operator 
// && and       /       || or /    ! not


let show = (age > 20 ) ? 'i am aduld' : 'i and yang';
console.log(show);

age = Number(age);
if (isNaN(age)) {
//   console.log("Input is not a number");
} else {
//   console.log((age < 18) ? "Too young" : "Old enough");
}

// The Nullish Coalescing Operator =======================

// the nullish coalescing opetator সে return করে first argument যদি nullish না হয় (null or undefined) , আর যদি nullish হয় তাহলে সে second argument return করে  

let names = null;
let text = "missing";
let result = names ?? text;
console.log('The name is' + " " + result);
