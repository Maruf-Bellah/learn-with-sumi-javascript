// window.history অবজেক্টে ব্রাউজার হিস্টোরি থাকে।

// ব্যবহারকারীদের গোপনীয়তা রক্ষা করার জন্য, জাভাস্ক্রিপ্ট কীভাবে এই বস্তুটি অ্যাক্সেস করতে পারে তার সীমাবদ্ধতা রয়েছে।

// কিছু পদ্ধতি:===============================

// history.back() - ব্রাউজারের আগের পেজে নিয়ে যাবে যে পেজ আছে সেই পেজের আগের পেজে নিয়ে যাবে
// history.forward() - একটি পৃষ্ঠায় একটি ফরোয়ার্ড বোতাম তৈরি করুন:

function back() {
  window.history.back();
}

function forward() {
  window.history.forward();
}
