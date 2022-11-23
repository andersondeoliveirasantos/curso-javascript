function checkNumber(num) {
  let number = Number(num)
    if(Number.isNaN(number)) {
      console.log('Please, pass only numbers to the program') // Por favor, passe somente númenros para o programa.
  } else {
  return number
  }
}

checkNumber(5)
checkNumber('sadh')

let number = prompt('Enter a number') // Digite um número.

checkNumber(number)