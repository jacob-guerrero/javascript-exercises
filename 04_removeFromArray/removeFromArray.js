const removeFromArray = function(array, ...remove) {
    let itemIndex;

    itemIndex = array.indexOf(remove[0]);
    array.splice(itemIndex, 1);
    
    return array;
};
console.log(removeFromArray([1, 2, 3, 4], 3, 4))
// Do not edit below this line
module.exports = removeFromArray;
