// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(me => console.log(me))

// const url = ('https://jsonplaceholder.typicode.com/todos/1');
// fetch(url)
// .then(show => show.json())
// .then(json => console.log(json))

function clickButton() {
  const url = ('https://jsonplaceholder.typicode.com/todos/1');
  fetch(url)
  .then(show => show.json())
  .then(json => console.log(json))
}


function loadUser(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => displayUser(data))
}

function displayUser(data){
 
  const ul = document.getElementById('user-list');
  for(let show of data){
    console.log(show.name);
    // const li = document.createElement('li');
    // li.innerText = 'user';
    // ul.appendChild(li)
    const li = document.createElement('li');
    li.innerText = show.name;
    ul.appendChild(li)
  }
}
