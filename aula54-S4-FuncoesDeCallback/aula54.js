function f1() {
  setTimeout(function () {
    console.log('F1')
  }, 500)
}

function f2() {
  setTimeout(function () {
    console.log('F2')
  }, 1000)
}

function f3() {
  setTimeout(function () {
    console.log('F3')
  }, 800)
}

f1()
f2()
f3()

console.log('Hello World !!!')
