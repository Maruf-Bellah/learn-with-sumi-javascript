// class ekhon kicui buji nai pore abar valo moto dekhe buje nibe 

class Car {
    constructor(name , year){
        this.name = name;
        this.year = year;
    }
    age(){
        const dete = new Date();
        return dete.getFullYear() - this.year;
    }
}
 
const myCar = new Car("Food" , 2005);
const myCar1 = new Car("Food" , 2005);

console.log(Car);
