function step1(value) {
  let result = value + 1
  if (result > 5) return Promise.reject("Value too large")
  return Promise.resolve(result)
}

function step2(value) {
  return Promise.resolve(value * 2)
}

function step3(value) {
  return Promise.resolve("Result: " + value)
}

step1(5)
  .then(step2)
  .then(step3)
  .then(console.log)
  .catch(console.log)
