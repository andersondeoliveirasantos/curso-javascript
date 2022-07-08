class ControleRemoto {
  constructor(tv) {
    this.tv = tv
    this.volume = 0
  }

  aumentarVolume() {
    this.volume += 2
  }
  diminuirVolume() {
    this.volume -= 2
  }
}

console controle1 = new ControleRemoto('LG')
console1