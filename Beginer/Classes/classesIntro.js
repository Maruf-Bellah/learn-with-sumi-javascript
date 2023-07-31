
// basic lekha===================

/*
 class ClassName {
    constructor(){...}
} 
*/

// class Car {
//     constructor(name , year){
//         this.name = name;
//         this.year = year;
//     }
// }

// const myCar = new Car("BMW" , 1524);
// console.log(myCar);

/* class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
};

const myCar = new Car('adiu', 78987);
console.log(myCar); */

class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        const date = new Date();
        return date.getFullYear() - this.year;
    }
};

const myCar = new Car('adiu', 2010);
console.log('my car is ' + ' ' + myCar.age() + ' ' + 'old');