const factorial = require("../../maths/factorial");

test("Factorial of 10 is 3628800.", () => {
    expect(factorial(10)).toBe(3628800);
});

test("Factorial of 0 is 1.", () => {
    expect(factorial(0)).toBe(1);
});

test("Factorial of negative number is not possible.", () => {
    expect(factorial(-1)).toBe("Not possible!");
});
