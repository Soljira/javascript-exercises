const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (arr) {
    return arr.reduce((sum, current) => (sum += current), 0);
};

const multiply = function (arr) {
    return arr.reduce((product, current) => (product *= current), 1);
};

const power = function (a, b) {
    return a ** b;
};

/*
    1. Store the original num
    2. multiply the num by itself
    3. store the result
    4. decrement the num by 1
    5. multiply the result to the decremented num
    6. repeat until num is 1

    4

*/
const factorial = function (num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
