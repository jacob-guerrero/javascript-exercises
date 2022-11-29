const convertToCelsius = function(num) {
  let far = (num - 32) * 5/9;
  return Math.round(far * 10) / 10;
};

const convertToFahrenheit = function(num) {
  let cel = (num * 9/5 + 32);
  return Math.round(cel * 10) / 10;
};

console.log(convertToFahrenheit(4));
console.log(convertToCelsius(52));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
