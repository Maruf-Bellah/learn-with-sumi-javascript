// sequence হলো ক্রম ভাবে যাওয়া , মানে একটার পর একটা করে 


// কোন একটা function এর মধ্যে যদি আরেকটা function কে callBack function আকারে পাঠানো হয় তাহলে তাকে callBack function বলে 



function display(some) {
    console.log(some);
}
function calculator(num1, num2, callBack) {
    let sum = num1 + num2;

    if (callBack) {
        callBack(some)
    }
    return sum;

}

const result = calculator(5, 5, + display(4));
// console.log(result);

