
function delay(ms, value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value)
    }, ms)
  })
}

delay(0, "Start")
  .then((start) => {
    console.log(start)
    return delay(1000, "3 sec")
  })
  .then((threeSeg) => {
    console.log(threeSeg)
    return delay(2000, "stop")
  }).then(console.log)
