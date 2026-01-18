function step1(value) {
  return Promise.resolve(value + 1)
}

function step2(value) {
  return Promise.resolve(value * 2)
}

function step3(value) {
  return Promise.resolve("Result: " + value)
}

step1(3)
  .then(step2)
  .then(step3)
  .then(console.log)
