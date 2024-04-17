"use strict";
// 1. Hello world
let greeting = "Hello, World!";
console.log(greeting);
//2. Basic math
let num1 = 5;
let num2 = 5;
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
// 3.Swapping values
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log("a:", a);
console.log("b:", b);
// 4.Type Annotation (TypeScript)
let message;
message = "Hello, TypeScript!";
console.log(message);
//5. Modulus Operator
let num3 = 10;
let num4 = 3;
let remainder = num3 % num4;
console.log("Remainder:", remainder);
// 6. Increment Challenge
let counter = 0;
counter++;
console.log("Increment 1:", counter);
counter += 1;
console.log("Increment 2:", counter);
// 7.Logical Gates
let f = true;
let g = false;
// AND gate
let andResult1 = f && g;
console.log("AND Gate:", andResult1); // Expected output: false
// OR gate
let orResult = f || g;
console.log("OR Gate:", orResult); // Expected output: true
// NOT gate
let notResultA = !f;
let notResultB = !g;
console.log("NOT Gate (f):", notResultA); // Expected output: false
console.log("NOT Gate (g):", notResultB); // Expected output: true
// 8.Compound Assignment
let num = 10;
// Compound assignment operators
num += 5; // num = num + 5
console.log("Addition:", num); // Expected output: 15
num -= 3; // num = num - 3
console.log("Subtraction:", num); // Expected output: 12
num *= 2; // num = num * 2
console.log("Multiplication:", num); // Expected output: 24
num /= 4; // num = num / 4
console.log("Division:", num); // Expected output: 6
// 9.Even or Odd
let num5 = 7;
if (num5 % 2 === 0) {
    console.log(num5 + " is even.");
}
else {
    console.log(num5 + " is odd.");
}
// 10.Voting Eligibility
let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");
}
else {
    console.log("You are not eligible to vote.");
}
// 11.Grading System
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
}
else if (score >= 80) {
    console.log("Grade: B");
}
else if (score >= 70) {
    console.log("Grade: C");
}
else if (score >= 60) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}
// 12.Max of Three
let x = 5;
let y = 10;
let z = 15;
let max;
if (x >= y && x >= z) {
    max = x;
}
else if (y >= x && y >= z) {
    max = y;
}
else {
    max = z;
}
console.log("Maximum number:", max);
// 13.Leap Year Checker
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year.");
}
else {
    console.log(year + " is not a leap year.");
}
// 14.Fahrenheit to Celsius Converter
let fahrenheit = 68;
let celsius;
celsius = (fahrenheit - 32) * 5 / 9;
console.log(fahrenheit + "°F is equal to " + celsius.toFixed(2) + "°C.");
// 15.Positive, Negative, or Zero
let number = -10;
if (number > 0) {
    console.log(number + " is positive.");
}
else if (number < 0) {
    console.log(number + " is negative.");
}
else {
    console.log("The number is zero.");
}
// 16.Multiplication Table
let number6 = 7;
console.log("Multiplication Table for", number6);
for (let i = 1; i <= 10; i++) {
    console.log(number6 + " * " + i + " = " + (number6 * i));
}
