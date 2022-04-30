function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min
  return Math.floor(num)
}

console.log(rand())

function f1(callback) {
  setTimeout(function () {
    console.log('F1')
    if (callback) callback()
  }, 500)
}

function f2(callback) {
  setTimeout(function () {
    console.log('F2')
    if (callback) callback()
  }, rand())
}

function f3(callback) {
  setTimeout(function () {
    console.log('F3')
    if (callback) callback()
  }, rand())
}

f1()
f2()
f3()

console.log('Hello World !!!')
