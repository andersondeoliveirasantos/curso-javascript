class ValidaFormulario {
  constructor() {
    this.formulario - document.querySelector('.formalario')
    this.eventos()
  }
  eventos() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e)
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    const camposValidos = this.campoSAoValidos()
  }
  campoSAoValidos() {
    let valid = true

    for(let campo of this.formulario.querySelectorAll('.validar')) {
      if(campo.value) {
        this.criaErro(campo, 'Campo tal não pode estar em branco')
      }


    }
  }

  criaErro(campo, msg)
  const div = document.createElement('div')
  div.innerHTML = msg
  div.classList.add('error-text')

}
const valida = new ValidaFormulario()
