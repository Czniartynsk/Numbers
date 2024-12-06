import { numberTag } from "./number-tag.js"

export function RenderSort(numbers) {
  // Aqui vai limpar a div dos inputs, então guarda os valores.
  // Remove os elementos (Switch e Botão).
  const fieldset = document.querySelector("fieldset")

  const mySwitch = document.querySelector("#switch")
  fieldset.removeChild(mySwitch)

  const divButton = document.getElementById("sortear")
  fieldset.removeChild(divButton)

  // Altera o conteúdo do legend.
  const legend = document.querySelector("legend")
  // setTimeout(
  legend.textContent = "Resultado do sorteio"
    // , 2000)
  legend.classList.add("text-align", "show")
  
  // Altera o conteúdo do parágrafo.
  const paragraph = document.querySelector("p")
  // setTimeout(
  paragraph.textContent = "1º RESULTADO"
    // , 2000)
  paragraph.classList.add("text-align", "show")

  // Limpa a div em que vão os números gerados.
  const container = fieldset.querySelector("& > div")
  container.innerHTML = ""
  container.classList.remove("inputs")
  
  // Altera a classe para o CSS
  container.classList.add("result")
  
  // Cria os elementos de tag dos números do array recebido.
  let i = 0
  for (let number of numbers) {
    i++
    container.appendChild(new numberTag(number, i))
  } 
  
  // Cria o novo botão que chamará a função de sortear novamente.
  const imgButton = document.createElement("img")
  imgButton.setAttribute("src", "../assets/icons/Frame.svg")
  imgButton.setAttribute("alt", "Sortear novamente.")
  // console.log(imgButton)

  const myButton = document.createElement("button")
  myButton.textContent = "Sortear novamente"
  myButton.setAttribute("type", "submit")
  myButton.classList.add("btn-content")
  myButton.appendChild(imgButton)
  // console.log(myButton)

  const sortearNovamente = document.createElement("div")
  sortearNovamente.setAttribute("id", "sortear")
  sortearNovamente.classList.add("btn")

  sortearNovamente.appendChild(myButton)
  // console.log(sortearNovamente)
  
  fieldset.appendChild(sortearNovamente)

}