//  Part 1: Concept Tasks (Practice Questions)
// 1️⃣ let / var / const Tasks
1// Create a variable using var, another using let, and one using const. Print all in console.

var num5 = 10
let num6= 30
const pi=3.14





2// Try to reassign values to each variable — note which ones throw an error.

var num1 = 10
var num2=20
let num3= 30
// let num3=40

const PI=3.14
// const PI=2.5
// let and const throws refernec errors,
//  because it has block scope wherein var has only functional scope only and it can be hoisted not in let and const case.

3// Create a block ({ }) and declare a let and a var variable inside. Try accessing them outside the block.
function hi(){
    var name='naveen'
    let age=22
    const PI=3.14
    // this is allowed within scope anything like var,let,const as well
    console.log(name)
console.log(age)
console.log(PI) 
}
// this is not allowed because accesing outside scope is not possible despite it is var which is in global scope.
// console.log(name)
// console.log(age)
// console.log(PI)



// Declare a variable x with var inside a function. Try to access it outside the function.

function hey(){
    var x=10;
    
}
hey()
console.log(x)
// it is not possible to access var is functional scoped not block scope and that too 
// it has difference between scope and hoisting in this case it is not possible to access.


