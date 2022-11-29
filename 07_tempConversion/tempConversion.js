const convertToCelsius = function(far) {
  let res = (far - 32) * 5/9;
  return Math.round(res * 10) / 10;
};

const convertToFahrenheit = function(cel) {
  let res = (cel * 9/5 + 32);
  return Math.round(res * 10) / 10;
};

console.log(convertToFahrenheit(4));
console.log(convertToCelsius(52));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
