// createCounter নামের একটা ফাংশন তৈরি করছি
// এটা একটা "function factory" — মানে, এটা একটা নতুন ফাংশন বানিয়ে রিটার্ন করে
const createCounter = () => {

// লোকাল ভ্যারিয়েবল — শুধুমাত্র এই ফাংশনের ভেতরে থাকবে
// বাইরে থেকে কেউ access করতে পারবে না
let count = 0;

// createCounter() একটা inner ফাংশন return করে
// এই inner ফাংশন বাইরের count ভ্যারিয়েবলকে "মনে রাখে"
// এটাকেই বলে **closure**
return (amount) => {

    // এখানে amount প্যারামিটার হিসেবে আসবে
    // সেই মান count এর সাথে যোগ করে নতুন মান return করবে
    count = count + amount;

    return count;

}
}

// এখন আমরা createCounter() কল করছি
// এটা একটা নতুন function তৈরি করে দেয়, যেটার নিজস্ব "count" ভ্যারিয়েবল আছে
const counter = createCounter();

// এখন counter(3) কল করলে amount = 3
// count = 0 + 3 = 3 → রিটার্ন হবে 3
console.log(counter(3));

// আবার counter(5) কল করলে amount = 5
// আগের count ছিল 3, এখন count = 3 + 5 = 8 → রিটার্ন হবে 8
console.log(counter(5));
