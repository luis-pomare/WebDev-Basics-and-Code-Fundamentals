// We are going to build a function that passes all the numbers from 0 to the number that the user provides
// to the delayWithDouble function and stores every result in an array showing with each iteration the current state 

function delayWithDouble(ms, value) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value * 2), ms)
  })
}

async function arrayCreator() {
  let arrayOfDoubles = []
  let currentValue = await delayWithDouble(3000, 9)
  arrayOfDoubles.push(currentValue)
  return arrayOfDoubles
}

arrayCreator().then(console.log)
