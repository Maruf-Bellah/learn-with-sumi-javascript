// this holo = js this key word টা  কোন bojcet এর মধ্যে আছে 


// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.


/* 
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    getFullName: function(){
        return this.fullName();
    }
};

let show = person.getFullName();
console.log(show);

*/

/* 

const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
let show = person1.fullName.call(person2); ///অন্য একটা function থেকে value নিলে এভাবে নিতে হয়ে call()

console.log(show);  

*/



// bind() মানে সে ধার করে অন্য একটা object থেকে 

const person = {
    firstName : "maruf",
    lastName : "Bellah",

    fullName : function(){
        return this.firstName + ' ' + this.lastName;
    }
}

const member = {
    firstName: 'Ayesha',
    lastName: 'Bellha',
}

let show = person.fullName.bind(member)
console.log(show());

