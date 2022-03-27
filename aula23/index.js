/*

OPERADORES LÓGICOS

&& -> false && ture -> false "o valor mesmo"
|| ->

*/

console.log('Anderson' && 0 && 'Daniela' && 'Alice')

/*
FALSY
*false
0
''  ""  ``
null / undefined
NaN
*/

console.log('Anderson' && NaN && 'Daniela' && 'Alice')

// TESTAR UMA function &&

function falaOi() {
  return 'Oi'
}

const vaiExecutar = 'Joãozinho'

console.log(vaiExecutar && falaOi())

// TESTAR UMA function ||

console.log(0 || null || 'Anderson de Oliveira' || true)

--------------------------------------------------------------

const corUsuario = null
const corPadrao = corUsuario || 'preto'

console.log(corPadrao)

--------------------------------------------------------------

const a = 0
const b = null
const c = 'false' // É uma string, está entre '', string é avaliada como true 
const d = false
const e = NaN

console.log(a || b || c || d || e)
