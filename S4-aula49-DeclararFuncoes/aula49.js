// Declaração de função ( Function hoisting )
falaOi()

function falaOi() {
  console.log('Hi')
}

// Frist-class objects ( Objetos de primeira classe )
// Function expression

const souUmDado = function () {
  console.log('Sou um dado.')
}
souUmDado()
