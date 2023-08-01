
let paymentSuccess = true;
let mark = 70;


function enroll(){
    console.log('Course enrollment is in progress');

    setTimeout(function(){
        if(paymentSuccess){
            callBack();
        }else{
            console.log('Payment Failed');
        }
    },  2000)
}

function progress(callBack){
    console.log('Course on progress');

    setTimeout(function(){
        if(mark >= 80){
            callBack()
        }else{
            console.log('You could not get enough marks to get the certificate');
        }
    })
}
enroll(progress())