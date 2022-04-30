// return
// Retorna um valor
// Termina a função

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto
  }
  return falaResto
}

const fala = falaFrase('Hello')
const resto = fala('world !!!')
console.log(resto)
