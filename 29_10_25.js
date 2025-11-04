//  Part 1: Concept Tasks (Practice Questions)
// 1️⃣ let / var / const Tasks
1; // Create a variable using var, another using let, and one using const. Print all in console.

var num5 = 10;
let num6 = 30;
const pi = 3.14;

2; // Try to reassign values to each variable — note which ones throw an error.

var num1 = 10;
var num2 = 20;
let num3 = 30;
// let num3=40

const PI = 3.14;
// const PI=2.5
// let and const throws refernec errors,
//  because it has block scope wherein var has only functional scope only and it can be hoisted not in let and const case.

3; // Create a block ({ }) and declare a let and a var variable inside. Try accessing them outside the block.
function hi() {
  var name = "naveen";
  let age = 22;
  const PI = 3.14;
  // this is allowed within scope anything like var,let,const as well
  console.log(name);
  console.log(age);
  console.log(PI);
}
// this is not allowed because accesing outside scope is not possible despite it is var which is in global scope.
// console.log(name)
// console.log(age)
// console.log(PI)

// Declare a variable x with var inside a function. Try to access it outside the function.

function hey() {
  var x = 10;
}
hey();
console.log(x);
// it is not possible to access var is functional scoped not block scope and that too
// it has difference between scope and hoisting in this case it is not possible to access.

// 3️⃣ Data Types Tasks
// Create variables for all JS data types: String, Number, Boolean, Null, Undefined, Object, Array, Symbol, BigInt.
var a = 10;

// 1.1 String

// A String represents a sequence of characters. It is used for storing and manipulating text. Strings can be enclosed in single quotes ('...'), double quotes ("..."), or backticks (`...`) for template literals.
var name = "naveen";
let name2 = "anusha";
const name3 = `shadhwin is really cool
   he is 3 years old.`;

// 1.2 Number

// The Number type represents both integer and floating-point values. JavaScript does not have separate types for integers and floats. Special numeric values include Infinity, -Infinity, and NaN (Not-a-Number).
// var num1= 10
// let num2=20
// const PI=3.14

// 1.3 BigInt

// BigInt is used to represent integers larger than the safe limit for regular numbers (2^53 - 1). You create a BigInt by adding an n at the end of an integer.
var number1 = 123246576879089847534623;

// 1.4 Boolean

// A Boolean has only two possible values: true or false. It is commonly used in conditional statements and comparisons.
console.log(5 > 2 > 1);
console.log("10" > 10);

// 1.5 Undefined

// A variable that has been declared but not assigned a value automatically gets the value undefined. It represents an uninitialized state.
var num11;
console.log(num11);
// 1.6 Null

// The value null represents an intentional absence of any object value. It’s often used to indicate “no value” or “empty.”
var num12 = null;
console.log(num12);
// 1.7 Symbol

// Symbols are unique and immutable values often used as object keys to avoid name collisions. Every Symbol value is unique.

let id = Symbol("id");
console.log(id);
// 2.1 Object

// let person={
//     name:'naveen',
//     age:22,
//     class:56
// };

// An Object is a collection of key–value pairs. Keys are strings (or symbols), and values can be of any type.

// Print typeof for each variable.
var num15 = 20;
console.log(typeof num15);

var number1 = 123246576879089847534623;
console.log(typeof num15);

console.log(5 > 2 > 1);
console.log("10" > 10);
console.log(typeof num15);

var num11;
console.log(num11);
console.log(typeof num15);

var num12 = null;
console.log(num12);
console.log(typeof num15);

let h = Symbol("id");
console.log(h);
console.log(typeof h);

let person = {
  name: "naveen",
  age: 22,
  class: 56,
};
console.log(typeof person);