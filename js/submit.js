import { sortNumbers } from "./sort-numbers.js"
import { RenderSort } from "./render-sort.js"

const form = document.querySelector("form")
const from = document.getElementById("from")
const to = document.getElementById("to")
const iterations = document.getElementById("iterations")
const checkRep = document.getElementById("non-rep")

form.onsubmit = (event) => {
  try {
    const myButton = document.getElementsByClassName("btn-content")
    if (!myButton[0].textContent.includes("novamente")) {
      event.preventDefault()
      // console.log("novamente")
    } else {
      // console.log("não nvoamente")
    }
  
    // console.log("Checkado:", checkRep.checked)
    const numbers = sortNumbers(Number(from.value), Number(to.value), Number(iterations.value), checkRep.checked)
  
    console.log(numbers)

    RenderSort(numbers)
  } catch (error) {
    // alert("houve um erro!")
    console.log(error)
  }
}
