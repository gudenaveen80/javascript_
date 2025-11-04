// Part 1: let, var, const & Scope — Output-Based Questions (10)
// 🧠 Concept Check: Block scope, redeclaration, reassignment, and hoisting.

// 1️⃣
// var a = 10;
// let b = 20;
// const c = 30;
// console.log(a, b, c); // 10 20 30
// Answer.10 20 30



// 2️⃣
// var x = 5;
// var x = 10;
// console.log(x);


// answer.10

// 3️⃣
// let y = 5;
// y = 10;
// console.log(y);
// answer.10

// 4️⃣
// const z = 5; //
// z = 10;
// console.log(z);
// answer.10

// 5️⃣
// {
//   var a = 1;
//   let b = 2;
//   const c = 3;
// }
// console.log(a); // 1
// console.log(b); //
// answer.1,error


// 6️⃣
// for (var i = 0; i < 3; i++) {}
// console.log(i);
// answer.3

// 7️⃣
// for (let j = 0; j < 3; j++) {}
// console.log(j);
// answer.3

// 8️⃣
// console.log(a);
// var a = 10;
// answer.undefined

// 9️⃣
// console.log(b);
// let b = 10;
// answer.reference error

// 🔟
// const person = { name: "Noor" };
// person.name = "Jahan";
// console.log(person.name);
// answer.jahan

// ⚙️ Part 2: Operators — Output-Based Questions (10)
// 🧠 Concept Check: Arithmetic, comparison, logical, bitwise, nullish, and ternary operators.

// 1️⃣
// console.log(5 + "5");

// answer.55



// 2️⃣
// console.log("5" - 2);  
// answer.3  

// 3️⃣
// console.log(5 == "5");
// console.log(5 === "5"); // 
// answer.true,false


// 4️⃣
// console.log(null == undefined);
// console.log(null === undefined);
// answer.true,false


// 5️⃣
// console.log(true && false);
// console.log(true || false);
// answer.0,true

// 6️⃣
// console.log(5 > 3 ? "Yes" : "No");
// answer.Yes

// 7️⃣
// let a = null ?? "Default";
// console.log(a);
// answer.Default

// 8️⃣
// let a = 0 ?? 5;
// console.log(a);
// answer.0

// 9️⃣
// console.log(5 & 3);     5 ===> 5 write in binary  0101  and 3 in binary 0011  
//                                                               (& means and ⇒ 1 and 1 is 1 remaining all cases 0)
//                                                                      0 1 0 1
//                                                                      0 0 1 1
//                                                            —------------
//                                                                      0 0 0 1  ===> converts into values it means o/p: 1  
// console.log(5 | 3);
// answer.7


// 🔟
// let x = 5;
// x += 3;
// console.log(x);
// answer.8
