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

  campoSAoValidos() {}
}

const valida = new ValidaFormulario()
