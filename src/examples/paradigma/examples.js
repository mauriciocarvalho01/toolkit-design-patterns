// 1,1,2,3,5,8,13
// Funcional
const fibonacciFuncional = (n) => {
    const fib = (n, a = 0, b = 1) => (
        n === 0 ? a : fib(n - 1, b, a + b)
    );
    return fib(n);
};

console.log(fibonacciFuncional(10)); // Saída: 55


// Procedural
function fibonacciProcedural(n) {
    if (n <= 1) return n;

    let a = 0, b = 1, temp;

    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

console.log(fibonacciProcedural(10)); // Saída: 55


// Orientado a Objetos
class FibonacciOO {
    constructor() {
        this.memo = {};
    }

    calculate(n) {
        if (n <= 1) return n;
        if (this.memo[n]) return this.memo[n];

        this.memo[n] = this.calculate(n - 1) + this.calculate(n - 2);
        return this.memo[n];
    }
}

const fib = new FibonacciOO();
console.log(fib.calculate(10)); // Saída: 55


