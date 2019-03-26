
class Water {
    constructor() {

    }

    draw() {
        noStroke()
        fill('lightsteelblue')
        rect(0, height / 2, width, height / 2)
    }
}

class Mover {

    position;
    velocity;
    acceleration;
    mass;
    isStopped = false;
    height;

    constructor(x, y, height = 10) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.mass = height / 10
        this.height = height
    }

    applyForce(force) {
        // const f = p5.Vector.div(force, this.mass)
        this.acceleration.add(force)
    }

    update() {
        if (this.isStopped) {
            return
        }

        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
        this.velocity.limit(5)
    }

    edges() {
        if (this.position.y + (this.height / 2) > height) {
            this.isStopped = true
        }
    }

    draw() {
        noStroke()
        fill('green')
        ellipse(this.position.x, this.position.y, this.height, this.height)
    }
}

let water
let movers = []
function setup() {
    createCanvas(650, 400)

    water = new Water()

    for (let i = 0; i < 5; i++) {
        const height = random(0, 100)

        const x = i === 0 ? 50 : i * 150
        movers.push(new Mover(x, 50, random(0, 100)))
    }
}

function draw() {
    background('white')

    water.draw()

    const gravity = createVector(0, 0.02)

    movers.forEach(mover => {
        mover.applyForce(gravity)
        mover.update()
        mover.edges()
        mover.draw()
    })
}