import { randomNumber } from "./random-number.js"

export function createNumberTag(id, from, to) {
  this.id = id
  this.tag = document.createElement("div")
  this.tag.classList.add("tag-number") 
  this.numberTag = document.createElement("number-sort")
  this.numberTag.textContent = randomNumber(from, to)

  this.tag.appendChild(this.numberTag)

  // console.log(this.tag)

  return this.tag
}
