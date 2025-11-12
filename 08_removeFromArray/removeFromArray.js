const removeFromArray = function (arr, itemToBeRemoved) {
    // while (arr.includes(itemToBeRemoved)) {
    //     let index = arr.findIndex((item) => item == itemToBeRemoved);
    //     arr.splice(index, 1);
    // }

    // Optional arguments
    const args = [...arguments];
    return arr.filter((item) => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
