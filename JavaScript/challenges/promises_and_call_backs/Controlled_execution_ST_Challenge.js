// Receives a callback, executes it after 3 seconds, and passes the value 10 to it


function runLater(callback) {
  /* This would be perfectly valid and usable
  setTimeout(callback, 10000, 10)
  */
  setTimeout(() => {
    callback(10)
  }, 3000);
}

runLater(value => console.log(value))
