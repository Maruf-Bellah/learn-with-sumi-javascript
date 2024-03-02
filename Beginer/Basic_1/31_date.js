const d = new Date();
// const d = new Date("2022-03-25");
// const d = new Date(2018, 11, 24, 10);
// const d = new Date(2020); //shudu ekta date dile seta milisecond e niye jabe
// console.log(d.toString());

// const d = new Date();
const show = d.toDateString(); // ajker din tarikh mash dekhabe
// console.log(show);

const d3 = new Date();
const show3 = d3.toUTCString(); // UTC er anujayi dekhabe
// console.log(show3);

const d4 = new Date();
const show2 = d4.toISOString(); // ISO er anujayi dekhabe
// console.log(show2);

// ============================================================

const d5 = new Date();
let text = d5.toLocaleTimeString(); //time dekha jay
// console.log(text);

// ==========================================================
const d6 = new Date();
let text2 = d6.toLocaleDateString(); // date dekha jabe
console.log(text2);

// ===================================================================

const d7 = new Date();
let text3 = d7.toLocaleString(); // time o date dui tai dekha jabe
console.log(text3);
