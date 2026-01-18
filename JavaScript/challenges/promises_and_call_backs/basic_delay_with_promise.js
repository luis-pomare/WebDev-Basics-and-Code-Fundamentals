function delay(time, value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value)
    }, time)
  })
}

delay(5000, "hello").then(console.log)
