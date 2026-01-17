function executor(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value)
    }, 1000)
  })
}

function printCountdown(value, numberOfTimes) {
  if (numberOfTimes <= 0) return executor('Done')
  return executor(value).then(() => { // executor returns a promise
    console.log(value)
    return printCountdown(value, numberOfTimes - 1)
  })
}

printCountdown('JS', 3)
  .then(
    (value) => {
      console.log(value)
      printCountdown('CSS', 2)
        .then(
          (value) => {
            console.log(value)
            printCountdown('HTML', 1)
              .then(
                console.log
              )
          }
        )
    }
  )
