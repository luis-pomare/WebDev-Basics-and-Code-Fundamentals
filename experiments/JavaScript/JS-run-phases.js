console.log(sayHi().name, sayHi().number, sayHi().counter);


function sayHi() {
  counter++
  return { name: "Hello", number: 7, counter }
}

var counter = 0
