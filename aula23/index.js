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

// TESTAR UMA function

function falaOi() {
  return 'Oi'
}

const vaiExecutar = 'Joãozinho'

console.log(vaiExecutar && falaOi())
