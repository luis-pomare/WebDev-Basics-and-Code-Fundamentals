console.log("Execution phase started")

function asyncCallWithClosure() {
  const valuableData = "Your macrotask context has been executed"
  setTimeout(() => {
    console.log(valuableData)
  }, 3000);
}

asyncCallWithClosure()
console.log("Execution phase finished")
