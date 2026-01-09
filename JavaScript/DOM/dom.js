// First this retrieves the elements that will control the navigation behavior
const button = document.getElementById("call-react-button")
const anchor = document.getElementById("front-end-anchor")


function callReact() {
  // Updates the anchor and button content to point specifically to the React page
  anchor.innerHTML = '<a href="./pages/frontEndFrameworks/react.html">react</a>'
  button.innerText = "FEF instead of React"
  button.removeEventListener("click", callReact)
  button.addEventListener("click", callFrameworks)
}

function callFrameworks() {
  // Updates the anchor and button content to point specifically to the Frontent frameworks page
  anchor.innerHTML = '<a href="./pages/frontEndFrameworks.html">Frontend frameworks</a>'
  button.innerText = "React instead of FEF"
  button.removeEventListener("click", callFrameworks)
  button.addEventListener("click", callReact)
}

// Makes the initial assignment of the callback for the correct event handler
button.addEventListener("click", callReact)
