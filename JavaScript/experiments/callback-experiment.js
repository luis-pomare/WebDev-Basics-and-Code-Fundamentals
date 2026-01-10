function callback1(value) {
  console.log(value)
}

function callback2(value) {
  console.log(value * 3)
}

function callback3(value1, value2) {
  console.log(value1)
  callback2(value2)
}

function functionThatControlsExecution(functionReceived, valueReceived, valueNotReceived) {
  setTimeout(() => {
    functionReceived(valueReceived, valueNotReceived)
  }, 3000)
}

functionThatControlsExecution(callback1, 7)
functionThatControlsExecution(callback2, 7)
// functionThatControlsExecution(callback3, 7, 3)
