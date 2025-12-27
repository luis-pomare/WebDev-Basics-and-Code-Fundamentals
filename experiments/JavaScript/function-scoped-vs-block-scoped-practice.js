function calculator() {
  var x = 5
  if (true) {
    var y = 3
    var z = 0 // If I chage this var declaration for "let z = 0" then the execution is going to crash because of the block scope 
  }
  console.log(x, y, z)
}



calculator()
