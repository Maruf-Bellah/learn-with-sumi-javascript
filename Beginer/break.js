// break হলো loop থেকে jump দেয় 


// continue হলো loop এর মধ্যে যে শর্ত টা দেয় সেটা কে এই continue তার উপর লাফ দেয় / তাকে বাদ দেয় / ignor / skip করে যায় 

let text = '';
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
    // console.log(text);
    // console.log(i);
}


for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
    // console.log(text);
    console.log(i);
 
}