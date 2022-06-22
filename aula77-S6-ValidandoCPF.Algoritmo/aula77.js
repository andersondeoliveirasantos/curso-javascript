// VALIDANDO CPF

// 705.484.450-52 070.987.720-03

/*
1º DIGITO:
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2 
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro digito)
Se o calculo acima for maior que 9, considerar 0
console.log(11 - (237 % 11))
*/

/*
2º DIGITO:
7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11  10 9  8  7  6  5  4  3  2 
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro digito)
console.log(11 - (284 % 11))
*/

/*
let cpf = '705.484.450-52'
let cpfLimpo = cpf.replace(/\D+/g, '')
cpfArray = Array.from(cpfLimpo)

console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0))
*/

function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    enumerble: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, '')
    }
  })
}

ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === 'undefined') return false
  if (this.cpfLimpo.length !== 11) return false

  const cpfParcial = this.cpfLimpo.slice(0, -2)
  const digito1 = this.criaDigito(cpfParcial)
  const digito2 = this.criaDigito(cpfParcial + digito1)

  return true
}

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial)

  let regressivo = cpfArray.length + 1
  const total = cpfArray.reduce((ac, val) => {
    ac += regressivo * Number(val)
    regressivo--
    return ac
  }, 0)

  const digito = 11 - (total % 11)
  return digito > 9 ? 0 : digito
}

const cpf = new ValidaCPF('070.987.720-03')
console.log(cpf.valida())
