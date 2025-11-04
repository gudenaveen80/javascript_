// 1. Function Definition & Function Expression
// console.log(a()); 
// console.log(b());

// function a() {
//   return "Function Declaration";
// }

// var b = function() {
//   return "Function Expression";
// };

// 🟩 Expected Output:

// ans.function declaration
//     b is not defined
// ✅ Function declarations are hoisted fully, but function expressions are hoisted as undefined.

// ⚙️ 2. Anonymous Function (inside expression)
// let greet = function() {
//   return "Hello!";
// };
// console.log(typeof greet);
// console.log(greet.name);

// 🟩 Expected Output:
// ans.Function 
//     greet

// ✅ Even anonymous functions get an inferred name (greet) when assigned to a variable.

// ⚡ 3. IIFE (Immediately Invoked Function Expression)
// let result = (function(x, y) {
//   return x * y;
// })(3, 4);

// console.log(result);

// 🟩 Expected Output:
// ans.12

// ✅ IIFE executes immediately after its definition.

// 🏹 4. Arrow Function and this
// let user = {
//   name: "Noor",
//   say: () => {
//     console.log(this.name);
//   },
// };
// user.say();

// 🟩 Expected Output:
// ans.undefined

// ✅ Arrow functions don’t have their own this, they take it from the surrounding scope (here: global).

// 🔁 5. Generator Function
// function* counter() {
//   yield 1;
//   yield 2;
//   return 3;
// }

// let gen = counter();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// 🟩 Expected Output:
// {value:1 done:false}
// {value:2 done:false}
// {value:3 done:true}

// ✅ Generators return iterator objects with {value, done} pairs.

// 🚀 6. First-Class Function
// function greet(name) {
//   return "Hello " + name;
// }

// function execute(fn, value) {
//   return fn(value);
// }

// console.log(execute(greet, "Students"));

// 🟩 Expected Output:
// ans.hello students

// ✅ Functions can be passed as arguments → “first-class citizens.”

// 🧪 7. Pure Function
// let count = 0;
// function add(a, b) {
//   return a + b;
// }
// console.log(add(3, 4));   
// console.log(count);

// 🟩 Expected Output: Note if you 3,4 =>5 times it will give same output 5 times no changes 
// ans.7 
    0

// ✅ Pure functions have no side effects and depend only on input values.

// ⚙️ 8. Default Parameters
// function multiply(a, b = 5) {
//   return a * b;
// }
// console.log(multiply(3));
// console.log(multiply(3, 2));

// 🟩 Expected Output:
// ans.15 6

// ✅ Default parameters apply when no argument or undefined is passed.

// 🔄 9. Recursion
// function factorial(n) {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// }
// console.log(factorial(4));

// 🟩 Expected Output:
// ans.24

// ✅ Function calls itself repeatedly until base condition met.

// 🔔 10. Callback & Higher-Order Function
// function printResult(fn, num) {
//   console.log(fn(num));
// }

// function double(n) {
//   return n * 2;
// }

// printResult(double, 10);

// 🟩 Expected Output:
// ans.20

// ✅ printResult is a higher-order function (takes a function as an argument).
//  double is a callback function.