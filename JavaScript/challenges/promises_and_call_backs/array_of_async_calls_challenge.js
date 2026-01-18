// We are going to build a function that passes all the numbers from 0 to the number that the user provides
// to the delayWithDouble function and stores every result in an array showing with each iteration the current state 

function delay(ms, value) {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), ms)
  })
}


