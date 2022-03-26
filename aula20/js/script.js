function meuEscopo() {
  const form = document.querySelector('.form')

  /*
  form.onsubmit = function (evento) {
    evento.preventDefault()
    alert('Realemte deseja emviar?')
    console.log('Os dados foram enviado')
  }
  */
  let contador = 1
  function recebeEventoForm(evento) {
    evento.preventDefault()
    console.log(`Form não foi enviado ${contador}`)
    contador++
  }

  form.addEventListener('Submit', receberEventoForm)
}
meuEscopo()
