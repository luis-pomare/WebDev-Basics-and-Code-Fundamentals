function callback1(value) {
  console.log(value)
}

function callback2(value) {
  console.log(value * 3)
}

function functionThatControlsExecution(functionReceived, valueReceived) {
  setTimeout(() => {
    functionReceived(valueReceived)
  }, 3000)
}

functionThatControlsExecution(callback1, 7)
functionThatControlsExecution(callback2, 7)
