// 705.484.450-52 070.987.720-03
class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpsLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    })
  }

  éSequência() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
    const digito1 = this.geraDigito(cpfSemDigitos)
  }

  geraDigito(cpfSemDigitos) {
    let total = 0
    let reverso = cpfSemDigitos.lenght + 1

    for (let stringNumerica of cpfSemDigitos) console.log(stringNumerica)
  }

  valida() {
    if (!this.cpfLimpo) return false
    if (typeof this.cpfLimpo !== 'string') return false
    if (this.cpfLimpo.lenght !== 11) return false
    if (this.éSequência()) return false
    if (this.geraNovoCpf()) return false

    return 'CHEGUEI AQUI'
  }
}

let validacpf = new ValidaCPF('070.987.720-03')

console.log(validacpf.valida())
