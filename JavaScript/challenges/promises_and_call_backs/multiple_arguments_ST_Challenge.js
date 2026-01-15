// The same previews exercise, this time it needs to receive any number of values 


function runLater(callback) {
  /* This would be perfectly valid and usable
  setTimeout(callback, 10000, 10)
  */
  setTimeout(() => {
    callback(10)
  }, 3000);
}

runLater(value => console.log(value))
