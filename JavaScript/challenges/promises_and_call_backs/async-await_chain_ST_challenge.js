function delay(time, numericValue) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(numericValue)
    }, time)
  })
}

async function operator() {
  let pureResult = await delay(3000, 5)
  return (pureResult + 3) * 2
}

operator().then(console.log)
