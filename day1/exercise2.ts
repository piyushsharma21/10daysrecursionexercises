// Read input from console
// Return nth element in Fibonacci series 
// F(n) = F(n-1) + F(n-2); F(0) = 0, F(1) = 1;
// if limit is given then print the series till first limit elements
const input: number = parseInt(process.argv[2]);
const limit: number = parseInt(process.argv[3]);

function fibonacci(n: number) {
    if ([0, 1].includes(n)) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

if (!isNaN(input)) {
    console.log(fibonacci(input));
}

if (!isNaN(limit)) {
    console.log(`\nfirst ${limit} elements`);
    for (let i = 0; i < limit; i++) {
        console.log(fibonacci(i));
    }
}

