/*
    num is the nth number of the series
    fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3, 5, 8,)
    fibonacci(6); // returns 8

    reduce method
    1. Store the argument as the iteration limit
    2. Set initial sum to 1. 
    3. Set the initial addend as 0.
    4. Add the sum and addend.
    5. Update the sum with the result.
    6. Update the addend with the previous sum.
    7. Repeat until the iteration limit is reached
*/
const fibonacci = function (num) {
    num = +num;
    let sum = 1;
    let addend = 0;

    if (num === 0) return 0;
    if (num < 0) return "OOPS";

    for (let index = 1; index < num; index++) {
        let temp = sum;
        sum += addend;
        addend = temp;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
