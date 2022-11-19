let bus = {
  wheels: 8,
  passengerLimit: 40,
  doors: 2,
}

delete bus.wheels

console.log(bus.wheels)

bus.windows = 20

console.log(bus)
console.log(bus.windows)