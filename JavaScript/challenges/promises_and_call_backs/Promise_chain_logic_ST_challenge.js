function step1(value) {
  return Promise.resolve(value + 1)
}

function step2(value) {
  let result = value * 2
  if (result > 5) return Promise.reject("Value too large")
  return Promise.resolve(result)
}

function step3(value) {
  return Promise.resolve("Result: " + value)
}

step1(1)
  .then(step2)
  .then(step3)
  .then(console.log)
  .catch(console.log)
