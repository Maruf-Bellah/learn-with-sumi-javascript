// ekta function diye onek guli objet banano jay call() function diye

const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person1 = {
  firstName: "Maruf",
  lastName: "Bellah",
};

const person2 = {
  firstName: "Ayesha",
  lastName: "Bellah",
};

let show = person.fullName.call(person2);
console.log(show);

// এভাবে আরো peramiter add করা যায় ================

const person3 = {
  fullName: function (city, country, age) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person4 = {
  firstName: "Maruf",
  lastName: "Bellah",
};

const person5 = {
  firstName: "Ayesha",
  lastName: "Bellah",
};

let show2 = person3.fullName.call(person1, "dhaka", "bangladesh");
console.log(show2);
