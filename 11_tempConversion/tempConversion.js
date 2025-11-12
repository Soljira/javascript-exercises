function roundUpToOneDecimal(num) {
    return Math.round(num * 10) / 10;
}

const convertToCelsius = function (temp) {
    return roundUpToOneDecimal((temp - 32) / 1.8);
};

const convertToFahrenheit = function (temp) {
    return roundUpToOneDecimal((9 / 5) * temp + 32);
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
