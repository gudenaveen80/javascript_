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

// Part 2: 10 Multiple Choice Questions
// 1. Which keyword allows re-declaration of a variable in the same scope?
// A) let
//  B) const
//  C) var
//  D) none

Ans.C;

// 2. Which variable declaration is block-scoped?
// A) var
//  B) let
//  C) Both var and let
//  D) none
Ans.B;

// 3. What happens if you try to reassign a value to a const variable?
// A) It updates the value
//  B) It creates a new variable
//  C) It throws an error
//  D) It silently ignores
Ans.C;

// 4. What is the output?
// console.log(typeof null);

// A) "null"
//  B) "undefined"
//  C) "object"
//  D) "string"

Ans.object;

// 5. What is the scope of a var declared variable inside a function?
// A) Global
//  B) Block
//  C) Function
//  D) Lexical
ans.C;

// 6. Which of the following data types is not primitive?
// A) String
//  B) Number
//  C) Object
//  D) Boolean
ans.C;
// 7. What will this code print?
// {
//   let a = 10;
//   var b = 20;
// }
// console.log(typeof a);
// console.log(typeof b);

// A) number, number
//  B) undefined, number
//  C) error, number
//  D) error, undefined

ans.A;

// 8. Which variable is hoisted with initialization?
// A) let
//  B) const
//  C) var
//  D) none

ans.C;

// 9. What is the output?
// const name = "Ravi";
// name = "Raj";
// console.log(name);

// A) Ravi
//  B) Raj
//  C) Error
//  D) undefined

ans.B;

// 10. Which of the following is a truthy value in JavaScript?
// A) 0
//  B) ""
//  C) null
//  D) "false"
ans.B;

// 🧩 JS Output-Based Questions — let, var, const

// 1️⃣
// var x = 10;
// let y = 20;
// const z = 30;
// x = 15;
// y = 25;
// // z = 35;  // uncomment this line
// console.log(x, y, z);

// Options:
//  A) 10 20 30
//  B) 15 25 30
//  C) Error
//  D) 15 20 30
ans.B;
//  📝 const can’t be reassigned, but others can.

// 2️⃣
// var a = 5;
// var a = 10;
// console.log(a);

// Options:
//  A) 5
//  B) 10
//  C) Error
//  D) undefined
ans.B;

//  📝 var allows redeclaration.

// 3️⃣
// let a = 5;
// let a = 10;
// console.log(a);

// Options:
//  A) 5
//  B) 10
//  C) Error
//  D) undefined
ans.C;

//  📝 let doesn’t allow redeclaration in the same scope.

// 4️⃣
// {
//   var a = 1;
//   let b = 2;
//   const c = 3;
// }
// console.log(a);
// console.log(b);
// console.log(c);

// Options:
//  A) 1 2 3
//  B) 1 Error Error
//  C) 1 undefined undefined
//  D) Error
//  📝 var is function-scoped; let and const are block-scoped.
ans.D;
// 5️⃣
// console.log(a);
// var a = 10;

// Options:
//  A) 10
//  B) undefined
//  C) Error
//  D) null

//  📝 var is hoisted with undefined.
ans.B;

// 6️⃣
// console.log(b);
// let b = 10;

// Options:
//  A) 10
//  B) undefined
//  C) ReferenceError
//  D) null

//  📝 let is hoisted but in a Temporal Dead Zone (TDZ).
ans.C;
// 7️⃣
// function test() {
//   if (true) {
//     var x = 100;
//     let y = 200;
//   }
//   console.log(x);
//   console.log(y);
// }
// test();

// Options:
//  A) 100 200
//  B) 100 Error
//  C) undefined 200
//  D) Error

//  📝 y is block-scoped and not accessible outside if block.
ans.B;
// 8️⃣
// const num;
// num = 50;
// console.log(num);

// Options:
//  A) 50
//  B) undefined
//  C) Error
//  D) null

//  📝 You must initialize a const when declaring it.
ans.C;
// 9️⃣
// var x = 1;
// let y = 2;
// {
//   var x = 10;
//   let y = 20;
//   console.log(x, y);
// }
// console.log(x, y);

// Options:
//  A) 10 20 and 1 2
//  B) 10 20 and 10 2
//  C) 1 2 and 1 2
//  D) Error

//  📝 var overwrites globally; let stays block-scoped.
ans.B;

// 🔟
// const arr = [1, 2, 3];
// arr.push(4);
// console.log(arr);

// Options:
//  A) [1, 2, 3]
//  B) [1, 2, 3, 4]
//  C) Error
//  D) undefined
ans.B;

//  📝 const prevents reassignment, not modification of array/object contents.
