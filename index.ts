
// 1. Hello world
let greeting: string = "Hello, World!";
console.log(greeting);

//2. Basic math
let num1: number = 5;
let num2: number = 5;

let sum: number = num1 + num2;
let difference: number = num1 - num2;
let product: number = num1 * num2;
let quotient: number = num1 / num2;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

// 3.Swapping values
let a: number = 1;
let b: number = 2;

[a, b] = [b, a];

console.log("a:", a); 
console.log("b:", b); 


// 4.Type Annotation (TypeScript)
let message: string; 
message = "Hello, TypeScript!";
console.log(message);

//5. Modulus Operator
let num3: number = 10;
let num4: number = 3;

let remainder: number = num3 % num4;
console.log("Remainder:", remainder); 

// 6. Increment Challenge
let counter: number = 0;


counter++;
console.log("Increment 1:", counter); 


counter += 1;
console.log("Increment 2:", counter); 


// 7.Logical Gates
let f: boolean = true;
let g: boolean = false;


// AND gate
let andResult1: boolean = f && g;
console.log("AND Gate:", andResult1); // Expected output: false

// OR gate
let orResult: boolean = f || g;
console.log("OR Gate:", orResult); // Expected output: true

// NOT gate
let notResultA: boolean = !f;
let notResultB: boolean = !g;
console.log("NOT Gate (f):", notResultA); // Expected output: false
console.log("NOT Gate (g):", notResultB); // Expected output: true


// 8.Compound Assignment
let num: number = 10;

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
let num5: number = 7;

if (num5 % 2 === 0) {
    console.log(num5 + " is even.");
} else {
    console.log(num5 + " is odd.");
}

// 10.Voting Eligibility
let age: number = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// 11.Grading System
let score: number = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
// 12.Max of Three
let x: number = 5;
let y: number = 10;
let z: number = 15;

let max: number;

if (x >= y && x >= z) {
    max = x;
} else if (y >= x && y >= z) {
    max = y;
} else {
    max = z;
}

console.log("Maximum number:", max);

// 13.Leap Year Checker

let year: number = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

// 14.Fahrenheit to Celsius Converter
let fahrenheit: number = 68;
let celsius: number;

celsius = (fahrenheit - 32) * 5 / 9;

console.log(fahrenheit + "°F is equal to " + celsius.toFixed(2) + "°C.");

// 15.Positive, Negative, or Zero
let number: number = -10;

if (number > 0) {
    console.log(number + " is positive.");
} else if (number < 0) {
    console.log(number + " is negative.");
} else {
    console.log("The number is zero.");
}

// 16.Multiplication Table
let number6: number = 7;

console.log("Multiplication Table for", number6);
for (let i = 1; i <= 10; i++) {
    console.log(number6 + " * " + i + " = " + (number6 * i));
}

