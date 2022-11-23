function salutation(name) { // Saudação.
  if(typeof name != 'string') {
    throw new Error('The parameter does not have to be a string.') // O parâmetro namo precisa ser uma string.
  } else {
    console.log(`Hello ${name}.`)
  }
}

salutation('Anderson')
salutation(5)

console.log('test')