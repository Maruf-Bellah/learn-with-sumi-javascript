// string কে duble / sing quote এর মধ্যে লেখা যায় 

// srting এর মধ্যে ০ থেকে অনেক word এক সাথে লেখা যায় 

let song = "amr sonar bangla ami tomay valobashi";

// console.log(song.length);

// Escape Character  পলায়ন / লুকায় রাখে 

let text = "We are the so-called \"Vikings\" from the north.";

let text1 = 'It\'s alright.';

let text2 = "The character \\ is called backslash.";




// Six other escape sequences are valid in JavaScript:

/* 

Code	Result
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator

*/

// Breaking Long Code Lines=======================

let textLong = "amar sonar bangla \
ami tomay valobashi "



// console.log(textLong);


let x = 'shagor';

let y = new String("shagor");

// console.log(x === y);

// যখন দুইটা object compere করবে সব সময় সেটা false রিটার্ন দিবে 

let x1 = new String("John");
let y1 = new String("John");

console.log(x1 == y1);