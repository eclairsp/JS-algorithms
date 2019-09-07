const fib = require("../../maths/fibonacci");

test("Fibonacci value at 11 is 89 using series.", () => {
    expect(fib.fibonacci(11)).toBe(89);
});

test("Fibonacci value at 11 is 89 using formula.", () => {
    expect(fib.fibonacciFormula(11)).toBe(89);
});

test("Fibonacci of negative number is not supported using series.", () => {
    expect(fib.fibonacci(-1)).toBe("Negative numbers not supported.");
});

test("Fibonacci of negative number is not supported using formula.", () => {
    expect(fib.fibonacciFormula(-1)).toBe("Negative numbers not supported.");
});
