// defineProperty - definePropeties
function Produto(nome, preco, estoque) {
  this.nome = nome
  this.preco = preco

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // Mostra a chave
    value: estoque, // Valor
    writable: false, // Pode alterar o valor ou não
    configurable: true // Configurável
  })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)
