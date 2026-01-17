function executor(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value)
    }, 1000)
  })
}

function printCountdown(value) {
  if (value < 0) return executor('Done')
  return executor(value).then(v => { // executor returns a promise
    console.log(v)
    return printCountdown(v - 1)
  })
}

printCountdown(15).then(console.log)
