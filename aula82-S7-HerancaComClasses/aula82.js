class DispositivoEletronico() {
  constructor(nome) {
    this.nome = nome
    this.ligado = false
  }

ligar() {
  if(this.ligado) {
    console.log(this.nome + ' já ligado')
    return
  }
}

desligado() {

  }
}