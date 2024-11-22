import { createNumberTag } from "./number-tag.js"

export function RenderSort(iterations, from, to) {
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
  legend.classList.add("text-align")
  
  // Altera o conteúdo do parágrafo.
  const paragraph = document.querySelector("p")
  // setTimeout(
  paragraph.textContent = "1º RESULTADO"
    // , 2000)
  paragraph.classList.add("text-align")

  // Limpa a div em que vão os números gerados.
  const container = fieldset.querySelector("& > div")
  container.innerHTML = ""
  container.classList.remove("inputs")
  
  // Altera a classe para o CSS
  container.classList.add("result")
  
  // Chama função que cria os elementos de tag dos números.
  //Aqui usa o itarations
  for (let i = 0; i<iterations; i++) {
    // if (i>1) {
    //   paragraph.textContent = `${i}º RESULTADO`
    // }

    container.appendChild(new createNumberTag(i, from, to))

    // setTimeout(, 3000)

    // console.log("passou", i)
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