// 1.7 Velocity

class Mover {
    location
    velocity

    constructor() {
        this.location = createVector(random(width / 2) - 8, random(height / 2) - 8)
        this.velocity = createVector(random(-2, 2), random(-2, 2))
    }

    update() {
        this.location.add(this.velocity)
    }

    display() {
        stroke(0)
        fill(175)
        ellipse(this.location.x, this.location.y, 48, 48)
    }

    checkEdges() {
        if (this.location.x > width) {
            this.location.x = 0
        } else if (this.location.x < 0) {
            this.location.x = width
        }

        if (this.location.y > height) {
            this.location.y = 0
        } else if (this.location.y < 0) {
            this.location.y = height
        }
    }
}

let mover

function setup() {
    createCanvas(640, 360)
    mover = new Mover()
}

function draw() {
    background(255)
    mover.update()
    mover.checkEdges()
    mover.display()
}
