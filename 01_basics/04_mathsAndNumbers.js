const score = 100;
//console.log(score);

const scoreValue = new Number(100);
//console.log(scoreValue);

//console.log(scoreValue.toString().length); // converts number to string and gets length
//console.log(scoreValue.toFixed(2)); // converts number to string with 2 decimal places


const otherNumber = 23.8974;
//console.log(otherNumber.toPrecision(4)); // formats number to specified length
const hundreds = 1000000;
//console.log(hundreds.toLocaleString("en-IN")); // formats number according to locale according to indian number system

// Maths 
/*
console.log(Math.PI);
console.log(Math.abs(-34)); // absolute value
console.log(Math.round(4.6)); // rounds to nearest integer
console.log(Math.ceil(4.2)); // rounds up
console.log(Math.floor(4.9)); // rounds down
console.log(Math.min(34, 56, 1, 2, -23, 45)); // returns minimum value
console.log(Math.max(34, 56, 1, 2, -23, 45)); // returns maximum value
console.log(Math.sqrt(64)); // square root
console.log(Math.pow(2, 5)); // power function
console.log(Math.random()); // random number between 0 and 1

*/

console.log(Math.random()); // random number between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1); // random number between 1 and 10