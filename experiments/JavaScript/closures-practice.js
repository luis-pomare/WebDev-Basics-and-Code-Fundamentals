// Returns a function that closes over `pi`, allowing it to be reused across calls without redefinition.
function envelop() {
  const pi = 3.14159
  return function calculator(radius) {
    return 2 * radius * pi
  }
}

const circumferenceCalculator = envelop()

console.log(circumferenceCalculator(3), circumferenceCalculator(0.159155078))
