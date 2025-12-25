Section A – Core JavaScript

A1. What is the output and why?

The console is going to print 10 but x is going to have a value of 20, because the console.log function is receiving the x value from the global scope variable, and after that the test function declare a new x variable but this time with function scope

A2. What is logged and why?

const a = { value: 1 };
const b = a;
b.value = 2;

console.log(a.value);

the number 1 is going to be logged due to the fact that it is the value for the key that is been referenced by a.value

A3. What is the output and why?

for (var i = 0; i < 3; i++) {
setTimeout(() => console.log(i), 0);
}

we are going to see 3 number on the console in 3 different lines starting with 0, then 1, and finally 2 because the console.log function is going to be called 3 times by the for loop but it is going to be called after the runing of a timer with 0 as the ms delay

Section B – Functions and closures

B1. What does this return and why?

function outer() {
let count = 0;
return function inner() {
count++;
return count;
};
}

const fn = outer();
fn();
fn();

The outer function is called twice, and both times it is going to retunr 1 as the result because it inicializes cout = 0 on each call

Section C – this and objects

C1. What is logged and why?

const obj = {
name: "JS",
getName() {
return this.name;
}
};

const fn = obj.getName;
console.log(fn());

The console.log call is going to print "JS" because it is callign the internal getName function of the object

Section D – Async JavaScript

D1. What is the output order and why?

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

A, b, c and finally D, I don't see any function that alters the secuence, I understand the promise is going to resove itself and the give way to the console.log(d) because it is not waiting for any external factor to be executed
