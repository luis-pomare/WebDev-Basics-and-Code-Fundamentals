// Function declaration is hoisted, so it can be called
function calculator() {
  // `x` is declared with `var`, so it is function-scoped and accessible anywhere inside the `calculator` function
  var x = 5;

  // This `if` statement creates a block HOWEVER, `var = y` does NOT respect block scope
  if (true) {
    // y and z are hoisted to the top of the function scope
    var y = 3;
    var z = 0;

    // If this line were changed to let z = 0 then `z` would be block-scoped and NOT accessible outside this `if` block
  }

  // At this point: x, y, and z all exist in the same function scope because they were declared using `var`
  console.log(x, y, z);
}

calculator();
