/*
TIPO DE DADOS 

Primitivos (imutáveis) - String, number, boolean, undefined, null, bigint - VALORES COPIADOS

Referência (mutável) - Arrays, object, function - VALORES PASSADS POR REFERÊNCIA
*/

/*
let a = [1, 2, 3]
let b = [...a]
let c = b
console.log(a, b)

a.push(4)
console.log(a, b)

b.pop()
console.log(a, b)

a.push('Anderson')
console.log(a, c)
*/

const a = {
  nome: 'Anderson',
  sobrenome: 'de Oliveira Santos'
}
const b = { ...a }

a.nome = 'João'
console.log(a)
console.log(b)
