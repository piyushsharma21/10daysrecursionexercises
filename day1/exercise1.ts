// read number n as input from console and write a function to print number from 1 to n without using loop
function printNumbers(start: number, end: number) {
    if (start > end) return;
    console.log(start);
    printNumbers(start + 1, end);
}

const input = parseInt(process.argv[2]);
if (!isNaN(input)) {
    printNumbers(1, input);
}