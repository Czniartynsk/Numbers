export function randomNumber(min, max){
  /* 
    Math.random() -> Remaxrna números aleatórios de 0 a <1 - NUNCA RETORNANDO 1.

    Para que retorne o número, até o intervalo desejado. Multiplica o número gerado pelo random() pelo número desejado. Ex.: 0 a 8 - Math.random() * 8.

    Math.floor -> Arredonda o número para baixo, com isso se for sorteado um número que multiplicado pelo max do intervalo, (Ex.: max = 8) resulte em 7.99999 ele apresentará 7 como resultado. Não chegando novamente ao intervalo desejado.

    Então multiplicamos a expressão (max - min + 1) pelo número sorteado, depois adicionamos o mínimo e realizamos o .floor().
    Dessa forma o número sorteado será multiplicado pelo intervalo de números possíveis e arredondado para baixo. Depois somamos o min para que force o resultado ser igual ou maior ao número mínimo do intervalo.
  */
  // const sorteado = Math.random()
  // console.log("Sorteado: ", sorteado)

  // const vezes = sorteado * 3
  // console.log("Vezes 3: ", vezes)
  
  // const arredondado = Math.floor(vezes)
  // console.log("Arredondado: ", arredondado)
  
  // const result = Math.floor(sorteado * (7 - 3 + 1) + 3)
  // console.log("Result: ", result)
  return Math.floor(Math.random() * (max - min + 1) + min)
}