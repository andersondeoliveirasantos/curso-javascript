class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome
    this.ligado = false
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + ' já ligado')
      return
    }

    this.ligado = true
  }

  desligado() {
    if (!this.ligado) {
      console.log(this.nome + ' já desligado')
      return
    }

    this.ligafo = false
  }
}

const d1 = new DispositivoEletronico('Smartphone')
console.log(d1)
