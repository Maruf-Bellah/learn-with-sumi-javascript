// for in loop কে objer এর value নেওয়ার জন্য use করা হয় 

let names ={
    firsName : 'Maruf',
    lastName : 'Bellah',
    age : 20,
    eyeColor: 'Black'
}

for(let x in names){
    console.log(names[x]);
}


// array এর মধ্যে ও use করা যায় যদি omportant না হয় তাহলে for in loop ব্যবহার করার দরকার নাই তবে for of ও forEacch ব্যবহার করতে পারো 


const numbers = [45, 4, 9, 16, 25];


for(x in numbers){
    // console.log(numbers[x]);
}

// for Eeach 3 ta value nay =====================

// The item value
// The item index
// The array itself

numbers.forEach(element => {
    console.log(element);
});