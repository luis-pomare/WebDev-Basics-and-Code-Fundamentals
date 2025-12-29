// Global execution context starts executing immediately
// This line runs synchronously and is pushed to the call stack
console.log("Execution phase started");

function asyncCallWithClosure() {
  // This variable is created when the function is called
  // It lives in this function's lexical environment
  const valuableData = "Your macrotask context has been executed";

  // setTimeout registers a timer in the runtime environment
  // The callback function is NOT executed now
  // Instead, it is stored and associated with the timer
  setTimeout(() => {
    // This function executes AFTER the timer expires
    // At this moment, asyncCallWithClosure has already finished
    // However, this callback still has access to `valuableData`
    // because it was captured in a closure
    console.log(valuableData);
  }, 3000);
}

// This call creates a new execution context for asyncCallWithClosure
// The function runs, sets up the timer, and then finishes
asyncCallWithClosure();

// Global execution continues immediately without waiting
console.log("Execution phase finished");

// After approximately 3 seconds:
// 1. The timer expires in the runtime environment
// 2. The callback is placed in the macrotask queue
// 3. The event loop checks that the call stack is empty
// 4. The callback is moved to the call stack
// 5. The closure allows access to `valuableData`
