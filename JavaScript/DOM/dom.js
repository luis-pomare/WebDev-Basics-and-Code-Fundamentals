const button = document.getElementById("call-react-button")
const anchor = document.getElementById("front-end-anchor")

function callReact() {
  anchor.innerHTML = '<a href="./pages/frontEndFrameworks/react.html">react</a>'
  button.removeEventListener("click", callReact)
  button.addEventListener("click", callFrameworks)
  button.innerText("FEF instead of React")
}

function callFrameworks() {
  anchor.innerHTML = '<a href="./pages/frontEndFrameworks.html">FEF</a>'
  button.removeEventListener("click", callFrameworks)
  button.addEventListener("click", callReact)
  button.innerText("React instead of FEF")
}

button.addEventListener("click", callReact)
