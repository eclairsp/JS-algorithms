const factorialIndex = 10;

const factorial = index => {
    if (index === 0) return 1;
    if (index < 0) return "Not possible!";

    if (index > 0) {
        return index * factorial(index - 1);
    }

    //  index = 5
    //      5 * factorial(4)
    //          20 * factorial(3)
    //              60 * factorial(2)
    //                  120 * factorial(1)
    //                      120
};

const factorialResult = factorial(factorialIndex);
console.log(factorialResult);

module.exports = factorial;
