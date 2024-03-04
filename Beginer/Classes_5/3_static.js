// স্ট্যাটিক ক্লাস পদ্ধতি ক্লাসের উপরই সংজ্ঞায়িত করা হয়।
// আপনি একটি বস্তুর উপর একটি স্ট্যাটিক পদ্ধতি কল করতে পারবেন না, শুধুমাত্র একটি অবজেক্ট ক্লাসের উপর।

// If you want to use the myCar object inside the static method, you can send it as a parameter:

class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

const myCar = new Car("Ford");
// console.log(Car.hello());
// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error
