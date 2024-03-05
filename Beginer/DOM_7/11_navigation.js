// navigation এটা কি এখনো বুঝি নাই , পরে বুঝে নিবে

// এইচটিএমএল ডম দিয়ে, আপনি নোড সম্পর্ক ব্যবহার করে নোড ট্রি নেভিগেট করতে পারেন।

// আমরা একটা লেখা অন্য একটা লেখার বা অন্য একটা paragraph এর মধ্যে রাখতে পারি

document.getElementById("one2").innerHTML =
  document.getElementById("one1").firstChild.nodeValue;
