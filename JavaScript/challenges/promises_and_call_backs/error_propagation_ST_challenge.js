function mayFail(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value > 5) reject("Too big")
      else resolve(value)
    }, 500)
  })
}

async function processValue(value) {
  // Call mayFail(value)
  // Return the resolved value
  // Do NOT use try/catch
  let finalResult = await mayFail(value)
  return finalResult
}

processValue(7)
  .then(console.log)
  .catch(console.log)

processValue(3)
  .then(console.log)
  .catch(console.log)
