function unstableFetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Network error")
    }, 500)
  })
}

async function safeFetch() {
  // Calls unstableFetch
  // If it succeeds → return value
  // If it fails → return "fallback value"
}

safeFetch().then(console.log)
