// IIFE - Immediately Invoked Function Expression

;(function (idade, peso, altura) {
  const sobrenome = 'de Oliveira Santos'
  function criaNome(nome) {
    return nome + ' ' + sobrenome
  }

  function falaNome() {
    console.log(criaNome('Anderson'))
  }

  falaNome()
  console.log(idade, peso, altura)
})(30, 80, 1.8)
