function linearFunctionCreator(m, b) {
  // An object is created and returned and contains a function that closes over m and b
  return {
    functionWithClosures: function (value) {
      return m * value + b;
    }
  };
}

const caller = linearFunctionCreator(1, 0);

// A reference to the inner object is extracted with the closure over m and b
const unitLinearFunction = caller.functionWithClosures;


console.log(unitLinearFunction(3));
console.log(unitLinearFunction(4));
console.log(unitLinearFunction(5));
