const button = document.getElementById("call-react-button")
const anchor = document.getElementById("front-end-anchor")

function callReact() {
  anchor.innerHTML = '<a href="./pages/frontEndFrameworks/react.html">react</a>'
}

button.addEventListener("click", callReact)
