// 🧠 Part 1: Functional Scope vs Block Scope (let, var, const) — 10 Output Based Questions
// Concept focus: variable scope, shadowing, redeclaration, and hoisting
// Q1
// function test() {
//   var x = 10;
//   if (true) {
//     var x = 20;
//     console.log(x);
//   }
//   console.log(x);
// }
// test();

// answer.20 20

// Q2
// function example() {
//   let y = 5;
//   if (true) {
//     let y = 10;
//     console.log(y);
//   }
//   console.log(y);
// }
// example();

// answer.10 5

// Q3
// function run() {
//   if (true) {
//     var a = 100;
//     let b = 200;
//     const c = 300;
//   }
//   console.log(a);
//   console.log(typeof b);
// }
// run();

// answer.100 undefined

// Q4
// var x = 1;
// function outer() {
//   console.log(x);
//   var x = 2;
// }
// outer();
// answer.undefined 
// Q5
// let x = 10;
// {
//   let x = 20;
//   {
//     let x = 30;
//     console.log(x);
//   }
//   console.log(x);
// }
// console.log(x);
// answer.30,20,10
// Q6
// {
//   var a = 1;
//   let b = 2;
//   const c = 3;
// }
// console.log(a);
// console.log(typeof b);
// console.log(typeof c);
// answer. 1 undefined undefined

// Q7
// for (var i = 0; i < 3; i++) {}
// console.log(i);
// answer.3

// for (let j = 0; j < 3; j++) {}
// console.log(typeof j);
// ans.3
// Q8
// function demo() {
//   console.log(a);
//   var a = 50;
//   console.log(a);
// }
// demo();
// ans.undefined,50
// Q9
// function blockTest() {
//   const value = 5;
//   if (true) {
//     const value = 10;
//     console.log(value);
//   }
//   console.log(value);
// }
// blockTest();
// ans.10 5
// Q10
// function testScope() {
//   if (true) {
//     var x = "var inside";
//     let y = "let inside";
//   }
//   console.log(x);
//   console.log(typeof y);
// }
// testScope();
// answer.var inside undefined


// 🧩 Part 2: if, else if, and switch case — Practice Tasks
// Concept focus: decision making and control flow
// 🎯 Tasks
// Write a program that checks a student's marks and prints:


// "Grade A" if marks > 80


// "Grade B" if marks between 60–80


// "Grade C" if marks between 40–60


// "Fail" otherwise

// marks=40
// if(marks>80){
//     console.log('Grade A')
// }
// else if (marks>60 &&marks<80){
//     console.log('Grade B')
// }
// else if(marks>40 && marks<60){
//     console.log('Grade C')
// }
// else{
//   console.log('fail')  
// }



// Use a switch case to print the day name when given a number (1–7).
// let day=2
// switch(day){
//     case 1:
//         console.log('monday')
//         break
//     case 2:
//         console.log('tuesday')
//         break
//     case 3:
//         console.log('wednesday')
//         break
//     case 4:
//         console.log('thursday')
//         break
//     case 5:
//         console.log('friday')
//         break
//     case 6:
//         console.log('saturday')
//         break
//     case 7:
//         console.log('sunday')
//         break
// }


// Create a simple calculator using switch case (add, sub, mul, div).

let a =Number(prompt('enter a num1 '))
let b =Number(prompt('enter a num2 '))
let operation=prompt('enter a operation add,sub,mul,div):')
switch(operation.toLowerCase()){
    case 'add':
        console.log(a+b)
        break
    case 'sub':
        console.log(a-b)
        break
    case 'mul':
        console.log(a*b)
        break
    case 'div':
        if(b==0){
            console.log('you should not enter num2 as 0')
        }else{
        console.log(a/b)}
        break
}



// Using if...else if, check a person’s age group:


// below 13 → "Child"


// 13–19 → "Teen"


// 20–59 → "Adult"


// 60+ → "Senior"

let age=prompt("enter your age:")
if(age<13){
    console.log('Child')
}
else if(age>13 && age<19){
    console.log('Teen')
}
else if(age>20 && age<59){
    console.log('Adult')
}
else{
    console.log('Senior')
}


// Use switch to print a message for traffic light colors (red → stop, yellow → wait, green → go).

let color='green'

switch(color){
    case 'red':
        console.log('stop')
        break
    case 'yellow':
        console.log('wait')
        break
    case 'green':
        console.log('go')
        break
}


// ⚡ Part 3: if...else if, switch case, falsy values & nullish coalescing — 10 Output Based Questions
// Concept focus: condition checking, falsy values (false, 0, "", null, undefined, NaN) and ?? operator
// Q1
// let a = 0;
// if (a) console.log("Truthy");
// else console.log("Falsy");
// ans.falsy

// Q2
// let value = null ?? "default";
// console.log(value);
// ans.default
// Q3
// let x;
// let y = x ?? 10;
// console.log(y);
// ans.10
// Q4
// let name = "";
// console.log(name || "Guest");
// console.log(name ?? "Guest");
// ans.Guest
//     empty space ''
    
// / Q5
// let n = NaN;
// if (n) console.log("True");
// else console.log("False");
// ans.false
// Q6
// let choice = 2
// switch (choice) {
//   case 1:
//     console.log("One");
//   case 2:
//     console.log("Two");
//   case 3:
//     console.log("Three");
//     break;
//   default:
//     console.log("Other");
// }
// ans.Two,three
// Q7
// let userInput = undefined;
// let result = userInput ?? "No Value";
// console.log(result);
// ans.undefined
// Q8
// let num = "5";
// if (num == 5) console.log("== works");
// if (num === 5) console.log("=== works");
// ans.==works
// Q9
// let test = 0 || "fallback";
// let check = 0 ?? "fallback";
// console.log(test, check);
// ans.fallback 0
// Q10
// let score = null;
// if (score ?? 0 > 50) console.log("Passed");
// else console.log("Failed");
// ans.Failed

