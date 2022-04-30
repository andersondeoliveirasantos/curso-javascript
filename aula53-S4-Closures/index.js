function retornaFuncao() {
  const nome = 'Anderson'
  return function () {
    return nome
  }
}

const funcao = retornaFuncao('Anderson')
const funcao2 = retornaFuncao('de Oliveira Santos')
console.dir(funcao)
console.log(funcao2)

console.log(funcao(), funcao2())
