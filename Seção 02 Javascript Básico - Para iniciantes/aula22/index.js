/*

OPERADORES LÓGICOS

&& -> AND -> E ( Todas as expressões precisam ser verdadeiras para retornar true )

|| -> OR  -> OU ( Apenas uma expressão precisa ser verdadeira para retornar true )

!  -> NOT -> NÃO (Nega a expressão, se for true vai aparecer false, se for false, vai aparecer true )

*/

const expressaoAnd = true && true && false && true

const expressaoOr = false || false || false || true || false || false

console.log(expressaoAnd)

console.log(expressaoOr)

const usuario = 'Anderson'

const senha = '123456'

//                       true                    false
const vaiLogar = usuario === 'Anderson' && senha === '12345'
console.log(vaiLogar)

//          Nega a expressão
console.log(!false)
