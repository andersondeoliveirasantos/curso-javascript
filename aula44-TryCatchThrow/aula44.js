function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('x e y precisam ser números.')
  }

  return x + y
}

try {
  console.log(soma(1, 2))
  console.log(soma('1', 2))
} catch (error) {
  /// console.log(error) // Não lançar esse tipo de erro.
  console.log('Alguma coisa mais amigável para o usuário.')
}

/*************************************************/
/*
try {
  console.log(naoExisto)
} catch (erro) {
  console.log('naoExisto não existe.')
  console.log(err)
}
*/
