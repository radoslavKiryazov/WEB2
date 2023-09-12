class Point {
    #x
    #y
    constructor(x, y) {
        this.#x = x,
            this.#y = y
    }

    getX() {
        return this.#x;
    }
    getY() {
        return this.#y;
    }
    moveTo(newX, newY) {
        this.#x = newX,
            this.#y = newY
    }
    toString() {
        return `x = ${this.getX()} | y = ${this.getY()}`
    }
}
class Circle {
    #radius
    #center
    constructor(center, radius) {
        this.#center = center,
            this.#radius = radius;
    }
    getCenterX() {
        return this.#center.getX()
    }
    getCenterY() {
        return this.#center.getY()
    }
    getRadius() {
        return this.#radius
    }
    moveCenterTo(x, y) {
        return this.#center.moveTo(x, y)
    }
    toString() {
        return `Circle - (Center: ${this.#center.toString()}) Radius: ${this.#radius}`
    }
}
console.log(new Circle(new Point(1, 2), 4).toString())
// → Circle(Center: [1,2], Radius: 4)