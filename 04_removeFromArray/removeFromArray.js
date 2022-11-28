const removeFromArray = function(array, ...remove) {
    /* 
    let itemIndex;
    let i=0; */

    let result;
    /* while (i < array.length) {
    itemIndex = array.indexOf(remove[i]);
    array.splice(itemIndex, 1);
    i++;
    } */
    
    /* 
    result = array.map ((filtered) => !remove.includes(filtered)); */
    
    result= array.filter((filtered) => !remove.includes(filtered));
    return result;
};
console.log(removeFromArray([1, 2, 3, 4], 1, 3))
// Do not edit below this line
module.exports = removeFromArray;
