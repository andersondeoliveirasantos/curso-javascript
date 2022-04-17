/*
try {
  // É executado quando não há erros
} catch (e) {
  // é executado quando há erros
} finally {
  // Sempre é executado
}
*/
/****************************************************/
/*
try {
  console.log('Abri um arquivo')
  console.log('Manipulei o arquivo e gerou erro')
  console.log('Fechei o arquivo')
} catch (e) {
  console.log('Tratando o erro')
} finally {
  console.log('Eu sempre sou executado')
}
*/

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date.')
  }

  if (!data) {
    data = new Date()
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
}

const hora = retornaHora()
console.log(hora)
