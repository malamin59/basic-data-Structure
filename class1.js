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