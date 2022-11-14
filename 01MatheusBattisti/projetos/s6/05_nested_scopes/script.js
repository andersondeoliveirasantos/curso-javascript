let a = 10 // global scope

function multiply(x, y) {
  let a = x * y // scope function

  if(a > 10) {
    let a = 0
    a++
    console.log(a) // scope "if" within the function ( dentro da função )
  }
  console.log(a)
}

console.log(a)

multiply(3, 7)