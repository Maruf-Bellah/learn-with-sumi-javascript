if (true) {
  var varVariabel = "this is var"; // var holo global / function scope
  var varVariabel = "this is var again"; // ekhon eta dekhabe karon koron js sob somoy laster ta dekhay jodi variable er name ekoi hote thake
}

console.log(varVariabel);

if (true) {
  let letVariable = "this is let"; // let holo block scope
  //   let letVariable = 'this is let again ' eta error dibe
  // js  এর মদ্ধে let ও const এর মদ্ধে পার্থক্য হলো = let k reassaign করা যায় তবে redefine করা যায় না = আর  এর মদ্ধে  দুইটার একটা ও করা যায় না তবে ভ্যালু পরিবর্তন করা যয়
  letVariable = "this is let again";

  const constVariable = {
    name: "maruf",
    age: 34,
  };
  constVariable.name = "ayesha";
  console.log(constVariable);
}

// console.log(letVariable);
