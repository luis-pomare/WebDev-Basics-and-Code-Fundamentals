// Global execution context starts

// The function call expression is evaluated first
// sayHi() is invoked THREE times here (once per property access)
console.log(
  sayHi().name,
  sayHi().number,
  sayHi().counter
);

// Function declaration is hoisted entirely (both name and body)
// This allows sayHi() to be called before its definition appears in the file
function sayHi() {
  // `counter` is assigned a value here
  // At runtime, `counter` already exists due to hoisting (because it is declared with `var`)
  counter = 10;

  // A new object is created and returned on each call
  // The object contains a snapshot of the current value of `counter`
  return { name: "Hello", number: 7, counter };
}

// `var counter` is hoisted to the top of the global scope
// During the creation phase, it is initialized with `undefined`
// The assignment `counter = 10` inside sayHi() works because `var`
// allows access before the declaration line is reached
var counter = 0;

// If this were changed to:
// let counter = 0
// the code would throw a ReferenceError
// because `let` variables exist in the Temporal Dead Zone (TDZ)
// and cannot be accessed or assigned before their declaration
