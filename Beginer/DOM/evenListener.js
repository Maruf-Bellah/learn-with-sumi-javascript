// const x = document.getElementById('myButton');
// x.addEventListener("click", myFunction);
// x.addEventListener('mouseover', onMose);
// x.addEventListener('mouseout', mouseOut)


// function myFunction(){
//     alert('hello darling how are you')
// }

// function onMose(){
//     alert('On mouse over')
// }

// function mouseOut(){
//     alert('On mouse out')
// }

// let p1 = 5;
// let p2 = 4;


// document.getElementById('myButton').addEventListener('click', function(){
//     myFunction0(p1, p2)
// })


// function myFunction0(a, b){
//     document.getElementById('demo').innerHTML = a + b;
// }




// document.getElementById("myP").addEventListener("click", function() {
//     alert("You clicked the white element!");
//   }, false);


// document.getElementById("div1").addEventListener("click", function(){
//     alert('you click orange element')
// }, false);


// document.getElementById("myP2").addEventListener('click', function(){
//     alert("you clicked down elenment")
// }, true);


// document.getElementById('div2').addEventListener('click', function(){
//     alert('you click the down div ')
// }, true);


document.getElementById('mydiv').addEventListener('mousemove', 
myFunciton1);


function myFunciton1(){
    document.getElementById('random').innerHTML = Math.random();
}

function removeHandle(){
    document.getElementById('mydiv').removeEventListener("mousemove", 
    myFunciton1);
}