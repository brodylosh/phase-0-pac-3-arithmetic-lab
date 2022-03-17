function add (a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function divide (a, b) {
    return a / b;
};

function increment (n) {
    return n + 1;
};

function decrement (n) {
    return n - 1;
};

function makeInt (n) {
    n = parseInt(n,10);
    if (typeof n === 'number') {
        return n
    } else {
        return NaN;
    }
};

function preserveDecimal(n) {
    n = parseFloat(n);
    if (typeof n === 'number') {
        return n
    } else {
        return NaN;
    }
};

