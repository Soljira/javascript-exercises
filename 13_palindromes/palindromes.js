/*
    1. Split only alphanumeric characters; store this as origArr
    2. Reverse the origArr and store it to reversedArr
    3. In a loop, compare each index to see if it matches

*/

const palindromes = function (string) {
    let cleanedString = string.replace(/[^a-zA-Z0-9]/g, "");
    let origArr = cleanedString.split("");
    let reversedArr = [...origArr].reverse();

    let isPalindrome = false;

    for (let character = 0; character < origArr.length; character++) {
        if (
            origArr[character].toLowerCase() !=
            reversedArr[character].toLowerCase()
        ) {
            return false;
        } else {
            isPalindrome = true;
        }
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
