/* // stateLess VS stat ful

const createCounter = () => {
  let count = 0;
  return (amount) => {
    count = count + amount;
    return count;
  };
};

const counter = createCounter();

console.log(counter(3));
 */

// function state less
// object always state full

// the quick brown fox jumps over the lazy dog

/// know we create a class
class Counter {
  constructor(count) {
    this.count = this.count;
  }

  add(amount) {
    this.count = this.count + amount;
  }
  print() {
    console.log(this.count);
  }
}


const counter1 = new Counter(10);

counter1.print()