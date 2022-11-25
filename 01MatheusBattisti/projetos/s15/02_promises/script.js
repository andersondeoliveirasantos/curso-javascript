let p = Promise.resolve(5)

console.log('Other codes')

console.log(p)

p.then((value) => {console.log(`The value is ${value}`)})