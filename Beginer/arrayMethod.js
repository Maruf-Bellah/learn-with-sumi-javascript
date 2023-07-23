// Array Method 


// Array length

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let size = fruits.length;
// console.log(size);

// ==================================================
// Array toString()
// let size = fruits.toString()
// console.log(size);


// ==================================================
// Array pop()

// let size = fruits.pop()
// console.log(size);
// console.log(fruits);


// ==================================================
// Array push()

// let size = fruits.push('lemon');
// console.log(size);
// console.log(fruits);



// ==================================================
// Array shift()

// let size = fruits.shift();
// console.log(size);
// console.log(fruits);

// ==================================================
// Array unshift()

// let size = fruits.unshift('painApple');
// console.log(size);
// console.log(fruits);


// ==================================================
// Array join() এটা একটা string এ জয়েন করে এবং এ string এর মত ব্যবহার করে 

// let size = fruits.join(" * ")
// console.log(size);
// console.log(fruits);


// ==============================================
// Array delete() এটা array এর element কে delete করে এবং সেখানে undefined দেখা যায় এই জন্য pop() / shift ব্যবহার করা ভালো 

// let size = delete fruits[0];
// console.log(size);
// console.log(fruits);

// ===================================================================

// Array concat() দুটো array কে একসাথে করে 

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren = myGirls.concat(myBoys, arr3);
// console.log(myChildren);


// ===========================================================

// Array flat() একটি new array দেয় অনেক গুলি sub-array কে জোড়া লাগিয়ে 

// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr);


// Array splice() হলো new item add করা যায় একটা array এর মদ্ধ্যে 

// let size = fruits.splice(2, 0 , "ovi vai" , "sujon vai"); // [] empty array return দেয় 
// console.log(size);
// console.log(fruits);

// Array slice() কোন element কে কাটার জন্য slice use করা হয় , বেং slice কোন array কে কাটে না বরং পুর্বের array থেকে একটা নতুন array বানায় 


let test = fruits.slice(1);
console.log(test);
console.log(fruits);