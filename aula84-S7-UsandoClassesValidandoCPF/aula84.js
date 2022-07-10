// 705.484.450-52 070.987.720-03
class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(thi, 'cpsLimpo', {
      writable: false,
      enumerable: false,
      configurable: false
      value:cpfEnviado.replace(/\D+/g, '')
    })
  }
}

const validacpf = new ValidaCPF('070.987.720-03')
