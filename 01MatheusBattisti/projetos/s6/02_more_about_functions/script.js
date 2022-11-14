function multiplyThreeNumbers (x, y, z) {
  return x * y * z
}

console.log(multiplyThreeNumbers(2, 3, 4))

const mult = multiplyThreeNumbers(5, 4, 8)

console.log(`The value of mult is ${mult}`)

function canDrive(age, cnh) {
  if(age >= 18 && cnh == true) {
    console.log(`Can drive !!!`)
  } else {
    console.log(`Can't drive !!!`)
  }
}

console.log(canDrive(19, true))
console.log(canDrive(25, true))
console.log(canDrive(44, 0)) // 0 = a false
console.log(canDrive(19, 1)) // 1 = a true
console.log(canDrive(17, false))