const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let number of numbers) {
  // Continue - pula o número e passa para o próxima interação
  if (number === 2 || number === 5) {
    continue
  }
  console.log(number)
  // Break - sai do laço
  if (number === 7) {
    console.log('7 encontrado, saindo da busca ...')
    break
  }
}

/*******************************************************************/
