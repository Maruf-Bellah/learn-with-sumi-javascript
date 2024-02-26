// iterable মানে যার মধ্যে দিয়ে এক একটা করে iterate / loop করা যায় বা যেই order আছে সেই order ধরে ধরে এক একটা করে যেতে পারি তাকেই iterable বলে 

const myNumber = {};

// make it iterable 

myNumber[Symbol.iterator] = function(){
    let n = 0;
    let done = false;
    return{
        next(){
            n += 10;
            if(n == 100){
                done = true
            }
            return{
                value: n,
                done : done
            }
        }
    }
}

for(let num of myNumber){
    console.log(num);
}