// return
// Retorna um valor
// Termina a função

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto
  }
  return falaResto
}

const olaMundo = falaResto('Olá')
console.log(olaMundo)
