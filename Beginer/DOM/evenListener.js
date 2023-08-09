const x = document.getElementById('myButton');
x.addEventListener("click", myFunction);
x.addEventListener('mouseover', onMose);
x.addEventListener('mouseout', mouseOut)


function myFunction(){
    alert('hello darling how are you')
}

function onMose(){
    alert('On mouse over')
}

function mouseOut(){
    alert('On mouse out')
}