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

const produto = { nome: 'Produto', preco: 1,8 }
const caneca = { nome: produto.nome, preco: produto.preco }

console.log(produto)
