class Car {
  constructor () {
    this.make = ''
    this.model = ''
    this.color = ''
    this.engine = ''
  }

  displayInfo () {
    console.log(`Car: ${this.make} ${this.model} - ${this.color} with ${this.engine} engine`)
  }
}

class CarBuilder {
  constructor () {
    this.car = new Car()
  }

  setMake (make) {
    this.car.make = make
    return this
  }

  setModel (model) {
    this.car.model = model
    return this
  }

  setColor (color) {
    this.car.color = color
    return this
  }

  setEngine (engine) {
    this.car.engine = engine
    return this
  }

  build () {
    return this.car
  }
}

const builder = new CarBuilder()
const car1 = builder.setMake('Toyota').setModel('Corolla').setColor('Red').setEngine('V6').build()
const car2 = builder.setMake('Honda').setModel('Civic').setColor('Blue').setEngine('V4').build()

car1.displayInfo() // Car: Toyota Corolla - Red with V6 engine
car2.displayInfo() // Car: Honda Civic - Blue with V4 engine
