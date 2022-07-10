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

  valida() {
    if (!this.cpfLimpo) return false
    if (typeof this.cpfLimpo !== 'string') return false
    if (this.cpfLimpo !== 11) return false
    if (this.éSequência()) return false
    return 'CHEGUEI AQUI'
  }
}

const validacpf = new ValidaCPF('070.987.720-03')
console.log(validacpf.valida)
