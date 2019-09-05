const fibonacciIndex = 11;

const fibonacci = index => {
    let fibonacciSeries = Array(index);

    fibonacciSeries[0] = 0;
    fibonacciSeries[1] = 1;

    if (index === 0) return 0;
    if (index === 1) return 1;

    let i = 2;
    while (i <= index) {
        fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
        i += 1;
    }

    return fibonacciSeries[index];
};

const fibonacciFormula = index => {
    const sqrtFive = Math.sqrt(5);

    const Phi = (1 + sqrtFive) / 2;
    const phi = (1 - sqrtFive) / 2;

    const fibonacciResult =
        (Math.pow(Phi, index) - Math.pow(phi, index)) / sqrtFive;

    return Math.round(fibonacciResult);
};

const fibonacciValue = fibonacci(fibonacciIndex);
const fibonacciValuefromFormula = fibonacciFormula(fibonacciIndex);

console.log(
    `Fibonacci value at ${fibonacciIndex} using series is: ${fibonacciValue}`
);

console.log(
    `Fibonacci value at ${fibonacciIndex} using formula is: ${fibonacciValuefromFormula}`
);
