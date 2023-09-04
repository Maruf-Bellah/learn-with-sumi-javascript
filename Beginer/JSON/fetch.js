function clickButton(){
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(datas => displayCommet(datas))
}

function displayCommet(datas){
  const container = document.getElementById('container');
  for(let data of datas){
    console.log(data);
  const div = document.createElement('div');
  div.style.border ='1px solid blue'
  div.style.margin ='10px'
  div.style.padding ='10px'
  div.style.textAlign = 'center'
  div.innerHTML = `
    <p>${data.id}</p>
    <p>${data.title}</p>

  `
  container.appendChild(div)
  if(data.id === 15){
    continue
  }else{
    // continue;
    showButton()
  }
  }
}

function showButton(){

}