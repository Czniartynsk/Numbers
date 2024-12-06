export function numberTag(number, i) {
  // Colocar para ler json e criar baseado no json.
  console.log(i)
  this.id = number
  this.tag = document.createElement("div")
  this.tag.classList.add("tag-number", "show", `delay-${i}`) 
  this.numberTag = document.createElement("number-sort")
  this.numberTag.classList.add("show", `delay-${i+1}`)
  this.numberTag.textContent = number

  this.tag.appendChild(this.numberTag)

  // console.log(this.tag)

  return this.tag
}
