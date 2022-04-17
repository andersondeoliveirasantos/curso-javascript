// Escreva uma função chamada ePaisagem que
// recebe dois arguentos, largura e altura
// de uma imagem ( number ).
// Retorne true se a imagem estiver no
// modo paisagem.

function ePaisagem(largura, altura) {
  return largura > altura ? true : false
}

console.log(ePaisagem(1080, 1920))
