const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escreve = require('./modules/escrever')

const pessoas = [
  { nome: 'Anderson' },
  { nome: 'Daniela' },
  { nome: 'Alice' },
  { nome: 'Tomaz' }
]
const json = JSON.stringify(pessoas, '', 2)
escreve(caminhoArquivo, json)
