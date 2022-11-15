function rememberSum(x) {
  return function(y) {
    return x + y
  }
}

/* ************************************************** */

let sum1 = rememberSum(2)

console.log(sum1(5))

let sum2 = rememberSum(5)

console.log(sum2(7))

function counter(i) {
  let count = i;
  let counterSum = function(){
    console.log(count)
    count++
  }
  return counterSum
}

/* ************************************************** */

let myCounter = counter(5)
myCounter()
myCounter()
myCounter()
myCounter()
myCounter()

/* ************************************************** */

let myCounter2 = counter(1)
myCounter2()
myCounter2()
myCounter2()