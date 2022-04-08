function fibonacci(num) {
  // find fib. num of input num
  if (num === 0) {
    return 0
  } else if (num === 1) {
    return 1
  }

  let current = 1;
  let previous = 0;
  let sum = -1;
  while (num >= 2) {
    sum = current + previous
    previous = current
    current = sum
    num -= 1
  }
  return sum
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
