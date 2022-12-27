const palindromes = function (str) {
    let letters = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let myArr = letters.split('');
    /* let arr = Array.from(str); */ //This is a slow method
    let reverseArr = myArr.reverse();
    let reverseStr = reverseArr.join('')

    return reverseStr === letters
};
console.log(palindromes('racecar!'))
// Do not edit below this line
module.exports = palindromes;
