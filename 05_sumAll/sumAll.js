const sumAll = function(firstNum, secondNum) {
    let limInf= 0;
    let limSup= 0;
    if ((firstNum || secondNum) < 0 ||
        typeof firstNum !== 'number' ||
        typeof secondNum !== 'number' ) {
        return 'ERROR';
    }
    if (firstNum <= secondNum) {
        limInf = firstNum;
        limSup = secondNum;
    } else {
        limInf = secondNum;
        limSup = firstNum;
    }
    let sum = limInf;
    let result = 0;
    for (let i=0; i<limSup; i ++) {
        sum = limInf + i;
        result = result + sum;
    }
    return result;
};

console.log(sumAll(10, "1"));

// Do not edit below this line
module.exports = sumAll;
