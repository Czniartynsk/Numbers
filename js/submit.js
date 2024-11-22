import { RenderSort } from "./render-sort.js"

const form = document.querySelector("form")
const from = document.getElementById("from")
const to = document.getElementById("to")
const iterations = document.getElementById("iterations")

form.onsubmit = (event) => {
  const myButton = document.getElementsByClassName("btn-content")
  if (!myButton[0].textContent.includes("novamente")) {
    event.preventDefault()
    // console.log("novamente")
  } else {
    // console.log("não nvoamente")
    
  }

  try {
    RenderSort(Number(iterations.value), Number(from.value), Number(to.value))
  } catch (error) {
    // alert("houve um erro!")
    console.log(error)
  }
}
