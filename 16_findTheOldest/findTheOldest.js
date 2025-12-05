const findTheOldest = function (arr) {
    let newArr = arr.sort((a, b) => {
        if ("yearOfDeath" in a && "yearOfDeath" in b) {
            return (
                a.yearOfDeath - a.yearOfBirth - (b.yearOfDeath - b.yearOfBirth)
            );
        } else {
            const currentYear = new Date().getFullYear();
            if (!("yearOfDeath" in a) && "yearOfDeath" in b) {
                return (
                    currentYear -
                    a.yearOfBirth -
                    (b.yearOfDeath - b.yearOfBirth)
                );
            } else if (!("yearOfDeath" in b) && "yearOfDeath" in a) {
                return (
                    a.yearOfDeath -
                    a.yearOfBirth -
                    (currentYear - b.yearOfBirth)
                );
            }
        }
    });

    return newArr.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
