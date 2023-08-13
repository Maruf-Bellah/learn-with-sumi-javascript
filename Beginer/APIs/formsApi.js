function myFunction(){
    const inputObj = document.getElementById('id1');
    if(inputObj.checkVisibility()){
        document.getElementById('demo').innerHTML = inputObj.validationMessage();
    }else{
        document.getElementById('demo').innerHTML = 'Input OK'
    }
}