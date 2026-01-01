
function envelop() {
  // pi will be captured by the inner function returned below
  const pi = 3.14159

  return function calculator(radius) {
    return 2 * radius * pi
  }
}

// `pi` is created and captured in a closure, the returned function is stored in `circumferenceCalculator`
const circumferenceCalculator = envelop()

// Each call to circumferenceCalculator() creates a new execution context for calculator(), and uses the same `pi` value from the closure
console.log(circumferenceCalculator(3), circumferenceCalculator(0.159155078))
