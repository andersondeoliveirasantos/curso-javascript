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

// Arrow function
const funcaoArrow = () => {
  console.log('Sou uma função Arrow function')
}
funcaoArrow()

// Dentro de um objeto
const obj = {
  falar() {
    console.log('Shi is speaking ...')
  }
}
obj.falar()
