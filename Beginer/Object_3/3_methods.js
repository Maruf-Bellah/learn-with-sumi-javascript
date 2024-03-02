// JavaScript Object Methods

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return (this.firstName + " " + this.lastName).toUpperCase();
    }
};

console.log(person.fullName());