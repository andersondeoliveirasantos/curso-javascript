const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let number of numbers) {
  // Pula o número e passa para o próximo
  if (number === 2 || number === 5) {
    continue
  }
  console.log(number)

  if (number === 7) {
    console.log('7 encontrado, saindo da busca ...')
    break
  }
}

/*******************************************************************/
