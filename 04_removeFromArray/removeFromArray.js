const removeFromArray = function(array, ...remove) {
    let itemIndex;

    let i=0;
    while (i < array.length) {
    itemIndex = array.indexOf(remove[i]);
    array.splice(itemIndex, 1);
    i++;
    }
    if (array.length == 2) {
        itemIndex = array.indexOf(remove[i]);
        array.splice(0, 1);
    }
    
    return array;
};
console.log(removeFromArray([1, 2, 3, 4], 3, 1, 2))
// Do not edit below this line
module.exports = removeFromArray;
