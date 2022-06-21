// Produto -> aumento, desconto
// Camiseta = Cor, caneca = maerial

function Produto(nome, preco) {
  this.nome = nome
  this.preco = preco
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia
}

Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia
}

function Camiseta(nome, preco, cor) {}
