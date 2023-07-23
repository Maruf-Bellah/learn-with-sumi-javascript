// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


let show = getRndInteger(0, 10);
console.log(show);