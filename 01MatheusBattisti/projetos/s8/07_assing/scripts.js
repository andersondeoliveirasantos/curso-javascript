let car = {
  doors: 2,
  doorsTrunk: '200 litros',
  motor: '2.0',
}

let additional = {
  sunroof: true,
  airConditioning: true,
}

console.log(car)

Object.assign(car, additional)

console.log(car)
