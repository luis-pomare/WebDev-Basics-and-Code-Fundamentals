console.log(sayHi().name, sayHi().number, sayHi().counter);


function sayHi() {
  counter = 10
  return { name: "Hello", number: 7, counter }
}

var counter = 0 // If this declaration is changed by "let counter = 0" the execution is going to crash since let do not allow assignment before declaration
