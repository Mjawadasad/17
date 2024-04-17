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
