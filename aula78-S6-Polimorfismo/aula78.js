// Classe = Função construtora

// Superclass

function Conta(agencia, conta, saldo) {
  this.agencia = agencia
  this.conta = conta
  this.saldo = saldo
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    this.verSaldo
    return
  }
  this.saldo -= valor
}
Conta.prototype.depositar = function (valor) {}
Conta.prototype.verSaldo = function () {}
