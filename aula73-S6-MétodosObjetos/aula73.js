/*
Object.values
Object.entries
object.getOwnPropertyDescriptor(o, 'prop)
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'Produto', preco: 1.8 }
Object.defineProperty(produto, 'nome', {
  writable: false,
  configurable: false,
  value: 'Qualquer outra coisa'
})

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
console.log(produto)

/*
const produto = { nome: 'Produto', preco: 1.8 }
Object.freeze(produto)  // Não deixa alterar a variável
const caneca = { nome: produto.nome, preco: produto.preco }

console.log(Object.keys(produto))
*/
