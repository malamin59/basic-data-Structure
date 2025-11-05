/* 
  Stack হলো একটি খুব পরিচিত Data Structure (ডেটা গঠন),
  যেখানে ডেটা রাখা ও তোলা হয় "LIFO" নিয়মে — অর্থাৎ "Last In, First Out"।
  মানে যেটা সবচেয়ে শেষে ঢোকে, সেটাই সবচেয়ে আগে বের হয়।
*/

class Stack {
  constructor() {
    // এখানে আমরা stack-এর সব উপাদান (items) একটি array-তে রাখব।
    // ক্লাস তৈরি হলে এই array ফাঁকা থাকবে।
    this.items = [];
  }

  // push(value) মেথডটি stack-এ নতুন একটি মান যোগ করে।
  push(value) {
    this.items.push(value); // array-এর শেষে মান যুক্ত করা হচ্ছে।
  }

  // pop() মেথডটি stack থেকে সর্বশেষ যোগ করা মানটি সরিয়ে দেয়।
  pop() {
    // যদি stack ফাঁকা থাকে, তাহলে undefined রিটার্ন করবে।
    if (this.isEmpty()) {
      return undefined;
    }
    // না হলে সর্বশেষ উপাদানটি pop() করে রিটার্ন করবে।
    return this.items.pop();
  }

  // peek() মেথডটি stack-এর সর্বশেষ মানটা "দেখে", কিন্তু মুছে না।
  peek() {
    // যদি stack ফাঁকা থাকে, undefined রিটার্ন করবে।
    if (this.isEmpty()) {
      return undefined;
    }
    // stack-এর শেষ উপাদানটি দেখাবে (index = length - 1)
    return this.items[this.items.length - 1];
  }

  // isEmpty() মেথডটি চেক করে stack ফাঁকা কিনা।
  isEmpty() {
    // যদি length = 0 হয় → ফাঁকা true, নাহলে false।
    return this.items.length === 0;
  }

  // print() মেথডটি পুরো stack প্রিন্ট করে — উপরের দিক থেকে নিচ পর্যন্ত।
  print() {
    // slice() দিয়ে কপি নেওয়া হয় (মূল array পরিবর্তন না করার জন্য)।
    // reverse() করে উপরের দিক থেকে নিচের দিকে সাজানো হয়।
    // join(" -> ") দিয়ে সুন্দরভাবে যুক্ত করে প্রিন্ট করা হয়।
    console.log(this.items.slice().reverse().join(" -> "));
  }
}

// ---- Stack ব্যবহার করা ----

// নতুন একটি stack তৈরি করা হলো।
const stack = new Stack();

// peek() মেথডে কিছু না থাকায় undefined দেখাবে।
console.log(stack.peek()); // undefined

// stack ফাঁকা কিনা চেক করা হলো → true
console.log(stack.isEmpty()); // true

// stack-এ কিছু মান push করা হলো।
stack.push(10);
stack.push(20);
stack.push(30);

// stack এখন এমন: [10, 20, 30]
// কিন্তু print() করলে আমরা উপরের দিক থেকে (LIFO) দেখব।
stack.print(); // Output: 30 -> 20 -> 10

// peek() দিয়ে শুধু শেষ মানটা দেখা হলো (30)
console.log(stack.peek()); // 30

// pop() দিয়ে শেষ মানটা সরিয়ে ফেলা হলো।
console.log(stack.pop()); // 30 সরিয়ে দিল, এখন stack: [10, 20]
