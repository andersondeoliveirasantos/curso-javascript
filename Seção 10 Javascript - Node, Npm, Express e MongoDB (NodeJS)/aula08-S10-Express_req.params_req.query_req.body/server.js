const express = require('express')
const app = express()

//         CRIAR  LER   ATUALIZAR  APAGAR
// CRUD -> CREAT, READ, UPDATE,    DELETE
//         POST   GET   PUT        DELETE

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página / sobre
// http://meusite.com/contato <- GET -> Entregue a página / contato

app.get('/', (req, res) => {
  res.send(`
  <from action="/" mothod="POST">
  Nome do cliente: <input type="text" name="nome">
  <button>Enviar formulário</button>
  </from>
  `)
})

app.post('/', (req, res) => {
  res.send('Recebi o formulário')
})

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato com a gente.')
})

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000')
  console.log('Servidor executando na porta 3000')
})
