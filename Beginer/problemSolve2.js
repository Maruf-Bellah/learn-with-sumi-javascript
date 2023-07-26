//=========== নিচের sentence এ "sumit" শব্দটি কয়বার ব্যবহার করা হয়েছে ? প্রথমবার "sumit" কত নাম্বার পজিশনে পাওয়া গেছে 
const sentence = "Learn with Sumit is all about teaching web development skills ans techniques in an efficient and practical manner. if you are just getting started in web development , learn with sumit has all the tools you need to learn the newest and most populer technologies to convert you from a no stack to full stack developer. learn with Sumit also deep dives into advanced topics using the latest best practices for you seasoned web developers ";

let showSumit = sentence.match(/sumit/gi);
let matchSumit = showSumit.length;
// console.log(matchSumit)

let positonSumit = sentence.indexOf("Sumit");
// console.log(positonSumit);



//===== input : linearsSearch(['a', 'b', 'c', 'd', 'c'],'c');
// output : 2 or 'not found'
// problem : linearSearch() function টি  implement করে দেখান 



let arr = ['a', 'b', 'c', 'd', 'c'];

function linearSearch1(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return 'Not Found!';
}
// console.log(linearSearch1(['a', 'b', 'c', 'd', 'c'], 'b'));




//================= কোনো array থেকে কি ভাবে সব থেকে বড় string খুজে বের করবেন এবং তার index নাম্বার দেখাবেন

function longerWord(names) {
    let longestWord = '';
    for(name1 of names){
        if(name1.length > longestWord.length){
            longestWord = name1;
        }
    }
    return [longestWord , names.indexOf(longestWord)];

};
// console.log(longerWord(['Maruf', 'Bangla', 'Asif and maruf ', 'Begom']));

// =========================== ১-১০০ পর্যন্ত কোন সংখ্যা গুলো ৩,৫ এবং ৩ ও ৫ উভয় সংখ্যা দ্বারা বিভাজ্য তা বের করো

for(i = 0; i < 100 ; i++){
    if(i % 15 === 0){
        // console.log('3 o 5 diye bivajjo' + ' ' + i);
    }else if(i % 3 === 0){
        // console.log("3 diye bivajjo" + ' ' + i);
    }else if(i % 5 === 0){
        // console.log("5 diye bivajjo" + ' ' + i);
    }else{
        // console.log(i);
    }
}


function fizzFaz(numbers){
    for(i = 1; i < numbers; i++){
        if(i % 15 === 0){
            // console.log(i + ' ' + 'fizzFaz');
        }else if(i % 3 === 0){
            // console.log(i + ' ' + 'fizz');
        }else if(i % 5 === 0){
            // console.log(i + ' ' + 'Faz');
        }else{
            // console.log(i);
        }
    }
}
fizzFaz(100);


// === array থেকে false value কিভাবে খুজে বের করে বাদ দিতে পারি

const mixedArr =[
    'Maruf',
    undefined,
    'Learn with sumit',
    false,
    "",
    'apple',
    40,
    'Bellah',
    true,
    "Thanks All",
    NaN
];
let showFals = mixedArr.filter(function(el){
    if(el){
        return true;
    }else{
        return false;
    }
});

let trueArray = mixedArr.filter(Boolean); // evabe o lekha jay 


console.log(trueArray);

// console.log(showFals);

// === object থেকে false value কিভাবে খুজে বের করে বাদ দিতে পারি 

