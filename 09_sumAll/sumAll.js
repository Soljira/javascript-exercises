/*
    1. Get the two positive integers (reject if negative)
    2. Compare the two
    3. Store the lower num as the starting value, and the higher num as the final value
    4. Start the loop with the starting value.
    5. Add the value of the current value in the loop to the sum
    6. Repeat until the loop reaches the final iteration
*/

const sumAll = function (a, b) {
    let sum = 0;

    let starting = 0;
    let final = 0;

    if (
        isNaN(a) ||
        isNaN(b) ||
        a < 0 ||
        b < 0 ||
        typeof a !== "number" ||
        typeof b !== "number" ||
        !Number.isInteger(a) ||
        !Number.isInteger(b)
    ) {
        return "ERROR";
    }

    if (a > b) {
        starting = b;
        final = a;
    } else {
        starting = a;
        final = b;
    }

    for (let i = starting; i <= final; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
