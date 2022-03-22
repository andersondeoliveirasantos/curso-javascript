function meuEscopo() {
  const form = document.querySelector('.form')

  /*
  form.onsubmit = function (evento) {
    evento.preventDefault()
    alert('Realemte deseja emviar?')
    console.log('Foi enviado')
  }
  */

  function receberEventoForm(evento) {
    evento.preventDeFault()
    console.log('Form não foi enviado')
  }

  form.addEventListener('Submit', receberEventoForm)
}
meuEscopo()
