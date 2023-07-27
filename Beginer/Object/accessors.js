// JavaScript Accessors (Getters and Setters)

// Getters and setters allow you to define Object Accessors (Computed Properties).
// Getters এবং setters আপনাকে অবজেক্ট এক্সেসরস (কম্পিউটেড প্রপার্টি) নির্ধারণ করতে দেয়।

const person = {
    firstName: "Maruf",
    lastName: "Bellah",
    language: "Bangla",
    lang: function () {
        return this.language.toUpperCase();
    }
};

// The getter example provides a simpler syntax. // গেটার উদাহরণ একটি সহজ সিনট্যাক্স প্রদান করে।

console.log(person.lang());

const person1 = {
    firstName: "Maruf",
    lastName: "Bellah",
    language: "Bangla",
    get lang() {
        return this.language;
    }
};

// console.log(person1.lang);

const person2 = {
    firstName: "Maruf",
    lastName: "Bellah",
    language: "",
    set lang(lang) {
        this.language = lang;
    }
};

person2.lang = "Bangla and English";
console.log(person2.language);