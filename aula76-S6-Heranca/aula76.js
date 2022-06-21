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

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco)
  this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

Camiseta.prototype.aumento

const produto = new Produto('Gen', 111)
const camiseta = new Camiseta('Regata', 7.5, 'Preta')
// camiseta.aumento(10)
console.log(produto)
console.log(camiseta)
