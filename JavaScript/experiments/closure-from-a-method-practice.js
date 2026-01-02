function linearFunctionCreator(m, b) {
  return function functionWithClosures(value) {
    return m * Value + b
  }
}

const unitLinear = linearFunctionCreator(1, 0)
