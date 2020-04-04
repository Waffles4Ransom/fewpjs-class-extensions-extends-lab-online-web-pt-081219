class Polygon {
  constructor(array) {
    this.sides = array
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((total, side) => total = total + side, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides !== 3) {return false}

    let a = this.sides[0]
    let b = this.sides[1]
    let c = this.sides[2]

    return ((a + b > c) && (a + c > b) && (b + c > a)) ? true : false 
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides !== 4) {return false}
    return (this.sides.every(side => side === this.sides[0])) ? true : false
  }

  get area() {
    return this.sides[0] ** 2
  }
}