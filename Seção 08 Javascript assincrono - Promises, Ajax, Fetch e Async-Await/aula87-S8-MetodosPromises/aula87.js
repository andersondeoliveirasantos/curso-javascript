function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('CAI NO ERRO')
        return
      }

      resolve(msg.toUpperCase() + ' - Passei na PROMISE')
    }, tempo)
  })
}

// *** Promise.all ***
/*
const promises = [
  'Primeiro valor',
  esperaAi('Promise 1', 3000),
  esperaAi('Promise 2', 500),
  esperaAi('Promise 3', 1000),
  'Outro valor'
]

Promise.all(promises)
  .then(function (valor) {
    console.log(valor)
  })
  .catch(function (erro) {
    console.log(erro)
  })
*/

// *** Promise.race ***
/*
const promises = [
  esperaAi('Promise 1', rand(1, 5)),
  esperaAi('Promise 2', rand(1, 5)),
  esperaAi('Promise 3', rand(1, 5))
  // esperaAi(1000, 1000)
]

Promise.race(promises)
  .then(function (valor) {
    console.log(valor)
  })
  .catch(function (erro) {
    console.log(erro)
  })
*/

// *** Promise.resolve ***
/*
function baixaPagina() {
  const emCache = true

  if (emCache) {
    return Promise.resolve('Página em cache')
  } else {
    return esperaAi('Baixei a página', 3000)
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina)
  })
  .catch(e => console.log(e))
*/

// *** Promise.reject ***

function baixaPagina() {
  const emCache = true

  if (emCache) {
    return Promise.reject('Página em cache')
  } else {
    return esperaAi('Baixei a página', 3000)
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina)
  })
  .catch(e => console.log('ERRO', e))
