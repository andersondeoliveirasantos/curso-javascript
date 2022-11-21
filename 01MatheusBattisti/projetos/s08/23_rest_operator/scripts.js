let number = 1 
let number1 = 9
let number2 = 5
let number3 = 3
let number4 = 4

function printNumbers(...args) {
  for(let i = 0; i < args.length; i++) {
    console.log(args[i])
  }
}

printNumbers(number, number1, number2)
console.log('break')
printNumbers(number2, number3)
console.log('break')
printNumbers(2, 6, 7, 8, 9, 5, 3, 2, 5, 6, 2, 4, 5)