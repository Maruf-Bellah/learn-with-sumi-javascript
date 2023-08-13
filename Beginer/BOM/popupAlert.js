function hello(){
    alert('whatsup alert')
}

function myFunction(){
    var text;
    if(confirm('Press a button')){
        text = 'You press OK'
    }else{
        text ='Yur press Cancel '
    }
    document.getElementById('demo').innerHTML = text;
}


function myFunction0(){
    var text ;
   let perosn =  prompt('Hey Whatsup : ', 'Maruf Bellah')
    if(perosn === '' || perosn === null){
        text = 'User cancelled the prompt';
    }else{
        text = 'Hello' + ' ' + perosn + ' ' +' How are you ?';
    }
    document.getElementById('demo2').innerHTML = text;
}