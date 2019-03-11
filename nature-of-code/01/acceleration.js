// 1.8 - 1.10 Acceleration - towards the mouse

class Mover {
    location
    velocity
    acceleration
    topspeed

    constructor() {
        this.location = createVector(random(width / 2) - 8, random(height / 2) - 8)
        this.velocity = createVector(0, 0)
        this.acceleration = createVector(0, 0)
        this.topspeed = 5
    }

    update() {
        const mouse = createVector(mouseX, mouseY)
        const direction = p5.Vector.sub(mouse, this.location)
        direction.setMag(0.1)
        
        const acceleration = direction;

        this.velocity.add(acceleration)
        this.location.add(this.velocity)
        this.velocity.limit(this.topspeed)
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
