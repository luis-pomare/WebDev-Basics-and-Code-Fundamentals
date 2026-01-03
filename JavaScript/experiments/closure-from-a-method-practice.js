function linearFunctionCreator(m, b) {
  return {
    functionWithClosures: function (value) {
      return m * value + b
    }
  }
}

const caller = linearFunctionCreator(1, 0)

const unitLinear = caller.functionWithClosures

console.log(unitLinear(3))
console.log(unitLinear(4))
console.log(unitLinear(5))

