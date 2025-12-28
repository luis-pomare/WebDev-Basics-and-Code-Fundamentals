function envelop() {
  const pi = 3.14159
  return function calculator(radius) {
    return radius * 2 * pi
  }
}

const circumferenceCalculator = envelop()

console.log(circumferenceCalculator(3), circumferenceCalculator(0.159155))
