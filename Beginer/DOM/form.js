// function validateForm(){
//     let x = document.forms["myForm"]["fname"].value;

//     if(x == ''){
//         alert('hey bro fill the input');
//         return false;
//     }
// }


function validation(){
    let m = document.forms['myForm']['fname'].value;
    if(m == ''){
        alert('hey bro whatsup befor fill the input')
    }
   
    // return true;
    return false;
}


function myFunction(){
    let x = document.getElementById('numb').value;

    let text; 
    if(isNaN(x) || x < 1 || x > 10){
        text ="Input is not valid"
    }else{
        text ="Input ok"
    }
    document.getElementById('demo').innerHTML = text;
}

// আমরা চাইলে login page / resister page কে js দিয়ে control করতে পারি 
