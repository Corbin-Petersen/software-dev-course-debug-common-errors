/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// PROGRAMS AND SOLUTIONS

// ------ Program A ------
// Description: This program is intended to display a simple prompt in the console but fails to run.  

//console.log("Welcome to the bootcamp

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
    if (num % i !== 0) {
      return true;  // changed to return false, since the code checks if the number CAN be divisible by another number besides itself, which makes it NOT prime.
    }
  }
  return false; // Changed to return true, because if the number passed through the above code without returning false, then it must be prime. 
}
console.log(isPrime(23)); 