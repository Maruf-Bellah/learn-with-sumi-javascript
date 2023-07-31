// inheritance মানে নিয়ে আসা ,  যেমন আমার বাবার কিছু গুন আমার ভিতরে চলে এসেছে তার বাবার গুন তার ভিতরে কিছু চলে এসেছে এভাবে ১৪ গুস্টি পর্যন্ত   

// এই কোড ভুল এবং বুজা হয় নি আবার ভালো মত বুজে লেখো 

class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends Car{
    constructor(brand, mod){
        super(brand);
        this.model = mod;
    }
    show(){
        return this.present()+ ' , '+ 'it is a ' + ' ' + this.model;
    }
}

let myCar =new model('BMW', 'Mustange');
console.log(myCar);