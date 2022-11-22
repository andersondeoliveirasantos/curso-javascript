  class Car {
    constructor(brand, color, remainingGasoline, consumption) {
      this.brand = brand
      this.color = color
      this.remainingGasoline = remainingGasoline
      this.consumption = consumption
    }

    toDrive(km) {
      let litersConsumed = km / this.consumption
      this.remainingGasoline -= litersConsumed
    }

    toFuel(l) {
      this.remainingGasoline += l
    }

  }

  let car = new Car('Vw', 'Gray', 100, 14)

  console.log(car)

  car.toDrive(100)

  console.log(car)

  car.toFuel(10)

  console.log(car)