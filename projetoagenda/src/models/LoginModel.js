const mongoose = require('mongoose')

const LoginSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: String
})

const LoginModel = mongoose.model('Login', LoginSchema)

class Login {
  constructor(body) {
    this.body = body
    this.erros = []
    this.user = null
  }

  valida() {
    // Validação
    // O e-mail precisar ser válido
    // A senha precisa ter entre 3 e 50
  }
}

module.exports = Login
