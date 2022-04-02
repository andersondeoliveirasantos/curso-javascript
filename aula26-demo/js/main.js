// Capturar o evento de submit do formulário
const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  console.log('Evento previnido')
  setResultado('Hello World !!!')
})

if (peso) {
  //
} else {
  // dfgg
}

function criaP () {
  const p: HTMLParagraphElement nt('p')
  p.classList.add('paragafo-resultado')
  p.innerHTML = 'Qualquer coisa'
}

function setResultado(msg) {
  const resultado = document.querySelector('#resultado')
  resultado.innerHTML = msg
  resultado.appendChild(p)
}