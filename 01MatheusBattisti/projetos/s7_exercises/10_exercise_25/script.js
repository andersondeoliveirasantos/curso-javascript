function printEven (number) {
  for(let i = number; i >= 0; i--)
    if(i % 2 == 0) {
      console.log(i)
    }
}

printEven(15)
printEven(8)
printEven(18)

/* ************************************* */

function printOdd (number2) {
  for(let p = number2; p >= 0; p--)
    if(p % 2 == 1) {
      console.log(p)
    }
}

printOdd(10)