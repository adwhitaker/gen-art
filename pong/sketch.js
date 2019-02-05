/*
 * Pong
 */
class Circle {
    constructor(x, y, w) {
        this.x = x
        this.y = y
        this.w = w
        this.action = 'add'
    }

    reverse() {
        this.action = this.action === 'add' ? 'subtract' : 'add'
    }

    draw() {
        let p = this.x + (this.w / 2)
        if (p > height) {
            this.action = 'subtract'
        }
        if (p < this.w) {
            this.action = 'add'
        }

        if (this.action === 'add') {
            this.x += 1
        }
        if (this.action === 'subtract') {
            this.x -= 1
        }

        ellipse(this.x, this.y, this.w, this.w)
    }

    intersects(paddle) {
        let distz = dist(this.x, this.y, paddle.x, paddle.y)
        return distz === 10
        return false
    }
}

class Paddle {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    draw() {
        rect(this.x, this.y, 10, 50)
    }

    up() {
        this.y -= 10
    }

    down() {
        this.y += 10
    }
}

let c
let rP
let lP

function setup() {
    createCanvas(400, 400)
    rectMode(CENTER)
    c = new Circle(200, 200, 10)
    rP = new Paddle(width - 20, height / 2)
    lP = new Paddle(20, height / 2)
}

function draw() {
    background(220)
    if (c.intersects(lP) || c.intersects(rP)) {
        c.reverse()
    }
    rP.draw()
    lP.draw()
    c.draw()

}


function keyPressed() {
    console.log(keyCode)
    if (keyCode === UP_ARROW) {
        lP.up()
        rP.up()
    }
    if (keyCode === DOWN_ARROW) {

        lP.down()
        rP.down()

    }
}