// bind() method একটা object থেকে অন্য একটা object বানাতে পারে / হাওলাত নিতে পারে 


const person = {
    firstName: 'Maruf',
    lastName: 'Bellah',
    age: 20,
    fullName: function () {
        return this.firstName + ' ' + this.lastName + ' ' + this.age ;
    }
}

const member ={
    firstName: "Ayesha",
    lastName : "Bellah",
    age  : 50
};


let fullName = person.fullName.bind(member, 456);
console.log(fullName());