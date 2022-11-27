let p = Promise.resolve(new Error('Did not work')) // Não deu certo

console.log('lalala ...')

p.then(value => console.log(value))
  .catch(reason => console.log('Failed: '+ reason))