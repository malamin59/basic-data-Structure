// const createCounter = () =>{
//  let count = 0;
//  return (amount)  =>{
//     count = count + amount;
//     return count
//  }
// }

// const counter = createCounter();
// console.log(counter(3));
// console.log(counter(5));
// এটি একটি "Counter" নামের ক্লাস (class) তৈরি করা হলো।
// ক্লাস হলো এমন একটি নকশা (blueprint) যেটা দিয়ে একাধিক অবজেক্ট (object) তৈরি করা যায়,
// যেগুলোর প্রপার্টি ও মেথড (method) এক রকম হয়।
class Counter {

  // constructor হলো একটি বিশেষ মেথড।
  // যখনই আমরা "new Counter()" দিয়ে নতুন অবজেক্ট বানাই, এটি স্বয়ংক্রিয়ভাবে চালু হয়।
  constructor(count) {
    // এখানে "this" মানে হলো বর্তমানে তৈরি হওয়া অবজেক্টটি।
    // প্রতিটি অবজেক্টের নিজস্ব "count" প্রপার্টি থাকবে।
    this.count = count;
  }

  // এই মেথড (add) দিয়ে নির্দিষ্ট পরিমাণ সংখ্যা যোগ করা হয়।
  add(amount) {
    // এখানে "this.count" মানে হলো সেই অবজেক্টের count মান।
    this.count = this.count + amount;
  }

  // এই মেথডটি বর্তমান count এর মান কনসোলে প্রিন্ট করবে।
  print() {
    console.log(this.count);
  }
}

// ---- ক্লাসটি ব্যবহার করা ----

// "Counter" ক্লাস থেকে একটি নতুন অবজেক্ট তৈরি করা হলো, যার শুরু মান 0।
const counter1 = new Counter(0);

// counter1 এর count বাড়ানো হলো ২ ও ৩ করে।
counter1.add(2);
counter1.add(3);

// এখন counter1 এর count প্রিন্ট হবে → ৫
counter1.print();

// আরেকটি আলাদা অবজেক্ট তৈরি করা হলো, যার শুরু মান ১০।
const counter2 = new Counter(10);

// counter2 তে ২০ ও ৩০ যোগ করা হলো।
counter2.add(20);
counter2.add(30);

// এখন counter2 এর মান প্রিন্ট হবে → ৬০
counter2.print();
