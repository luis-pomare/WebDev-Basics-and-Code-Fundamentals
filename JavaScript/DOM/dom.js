const button = document.getElementById("call-react-button")
const anchor = document.getElementById("front-end-anchor")

function callReact() {
  anchor.innerHTML = '<a href="./pages/frontEndFrameworks/react.html">react</a>'
  button.innerText = "FEF instead of React"
  button.removeEventListener("click", callReact)
  button.addEventListener("click", callFrameworks)
}

function callFrameworks() {
  anchor.innerHTML = '<a href="./pages/frontEndFrameworks.html">Frontend frameworks</a>'
  button.innerText = "React instead of FEF"
  button.removeEventListener("click", callFrameworks)
  button.addEventListener("click", callReact)
}

button.addEventListener("click", callReact)
