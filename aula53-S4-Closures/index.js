function retornaFuncao() {
  const nome = 'Anderson'
  return function () {
    return nome
  }
}

const funcao = retornaFuncao()
console.dir(funcao)
