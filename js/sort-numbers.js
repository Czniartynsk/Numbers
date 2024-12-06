import { randomNumber } from "./random-number.js"

export function sortNumbers(min, max, iterations, nonRep){
  const numbers = []
  
  while (numbers.length < iterations) {
    let result = randomNumber(min, max)

    // Se botão de não repetir é true.
    if (nonRep){
      // Se ainda não tem o número no array, adiciona.
      // Se o número já está no array ele continua no loop, para gerar um novo número.
      if (numbers.includes(result)){
        continue
      }
    }

    numbers.push(result)

    // // Se botão de não repetir é true.
    // if (nonRep){
    //   // Se ainda não tem o número no array, adiciona.
    //   if (!numbers.includes(result)){
    //     numbers.push(result)
    //   }
    // }
  }

  // for (let i = 0; i<iterations; i++) {
  //   let result = randomNumber(max, min)
  //   // console.log("Max: ", max, "Min: ", min)
  //   console.log("Result: ", result)

  //   if(numbers.includes(result)){
  //     i--
  //   }

  // }
  return numbers
}