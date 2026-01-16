// Inputs (a, b) Prints a given (a) value each second for (b) number of times 

function executor(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(value)
      resolve(value)
    }, 3000)
  })
}

executor(1)
  .then(() => executor(2))
  .then(() => executor(3))

