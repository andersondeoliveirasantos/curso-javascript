function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - mim) + mim)
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject(false)

    setTimeout(() => {
      resolve(msg.toUpperCase() + ' - Passei na PROMISE')
    }, tempo)
  })
}

// Promise.all
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

// Promise.race - Promise.resolve - Promise.reject

const promises = [
  esperaAi('Promise 1', 3000),
  esperaAi('Promise 2', 500),
  esperaAi('Promise 3', 1000)
]

Promise.race(promises)
  .then(function (valor) {
    console.log(valor)
  })
  .catch(function (erro) {
    console.log(erro)
  })
