const reverseString = function(string) {
    let myString = string.split("");
    let reverseString="";
    for(let i=string.length-1 ; i>=0 ; i--) {
        /* console.log(myString[i]); // Print the string in an array*/ 
        /* reverseString.push(myString[i]); Print reverse string in an array*/
        reverseString += myString[i]; // Concatenate reverse string in 'myNewString'
    }
    return reverseString;
};
console.log(reverseString("Hello, World!"));
// Do not edit below this line
module.exports = reverseString;
