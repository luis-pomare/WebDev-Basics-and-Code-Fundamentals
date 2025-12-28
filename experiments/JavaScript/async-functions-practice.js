console.log("Execution stack begins")

setTimeout(() => { console.log("Timer execution") }, 0)

Promise.resolve().then(() => { console.log("Promise execution") })

console.log("Execution stack finishes")
