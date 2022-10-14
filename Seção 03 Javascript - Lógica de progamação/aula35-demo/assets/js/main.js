const elementos = [
  { tag: 'p', texto: 'Phrase 01' },
  { tag: 'div', texto: 'Phrase 02' },
  { tag: 'footer', texto: 'Phrase 03' },
  { tag: 'section', texto: 'Phrase 04' }
]

const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i]
  let tagCriada = document.createElement(tag)
  let textoCriado = document.createTextNode(texto)

  tagCriada.appendChild(textoCriado)
  div.appendChild(tagCriada)
}

container.appendChild(div)
