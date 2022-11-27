function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if(number == 2) {
      resolve(console.log(`The number is ${number}`))
    } else {
      reject(new Error('Failed'))
    }
  })
}

checkNumber(2)
checkNumber(3)