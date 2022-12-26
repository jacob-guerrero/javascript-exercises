const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
  let sum = 0;
	/* for (let i=0; i < array.length ; i++) {
    sum += array[i];
  } */
  array.forEach(elem => {
    sum += elem;
  });
  return sum;
};

const multiply = function(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let mult = 1;
  arr.forEach(elem => {
    mult *= elem;
  });
  return mult
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(n) {
  let res = 1;
  for (let i=1; i<=n; i++) {
    res *= i;
  }
	return res
};
console.log(factorial(5))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
