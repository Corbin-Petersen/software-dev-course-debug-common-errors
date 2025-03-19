/*

NOTE: The provided problematic code snippets were commented out in order to successfully run the program with my revised code.

*/

// PROGRAMS AND SOLUTIONS

// ------ Program A ------
// Description: This program is intended to display a simple prompt in the console but fails to run.  

/*
console.log("Welcome to the bootcamp
*/

// What’s Wrong? 
// ANSWER: Syntax Error - It is missing the closing double-quotes and semicolon  

// Proposed solution:
console.log("Welcome to the bootcamp!");

// ------ Program B ------
// Description: This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

/*
let numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}
*/

// What’s Wrong?
// ANSWER: Logic Errors - the string "eight" is not a number that can be multiplied by 2

// Proposed Solution:
let numbers = [2, 4, 8];
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}

// ------ Program C (Logic Error) ----- 
// Description: This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

/*
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return true;  // Supposed to indicate num is NOT prime
    }
  }
  return false; // Supposed to indicate num IS prime
}
console.log(isPrime(7)); // Expected true but gets false
*/

// What’s Wrong?
// ANSWER: Logic Error: The function had the returns set backwards, checking if a number was prime, then saying false when it was, and true when it was not.

// Proposed Solution:
function isPrime(num) {
  if (num < 2) return false; 
  for (let i = 2; i < num; i++) {
    if (num % i !== 0) { // changed comparison to check if num could NOT be divisible by i, therefore returning true
      return true; 
    }
  }
  return false;  
}
console.log(isPrime(23)); 