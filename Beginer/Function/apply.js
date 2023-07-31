// apply() method  হলো call() method এর মত 


// তবে ........................।।
// apply() method argument কে নেয় একটা array হিসেবে 
// call() method argument কে নেয় আলাদাভাবে 


const person ={
    fullName : function(city, country){
        return this.firstName + ' ' + this.lastName + ' ' + city +' '+ country;
    }
}

const person1 ={
    firstName: "Maruf",
    lastName : "Bellah"
};

let show = person.fullName.apply(person1,[ "Dhaka", "Bangladesh"]);
console.log(show);