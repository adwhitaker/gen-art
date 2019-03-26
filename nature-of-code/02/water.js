
class Water {
    constructor() {
        this.position = createVector(0, height / 2)
        this.width = width
        this.height = height / 2
        this.c = -0.03
    }

    getForce(mover) {
        if (mover.position.y < this.height) {
            return createVector(0, 0)
        }

        const drag = mover.velocity.copy()
        drag.normalize()
        const speed = mover.velocity.copy()
        drag.mult((this.c * speed.magSq()))
        const f = p5.Vector.div(drag, mover.mass)
        return f
    }

    draw() {
        noStroke()
        fill('lightsteelblue')
        rect(this.position.x, this.position.y, this.width, this.height)
    }
}

class Mover {

    position;
    velocity;
    acceleration;
    mass;
    isStopped = false;
    height;

    constructor(x, y, mass) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.mass = mass
        this.height = mass * 10
    }

    applyForce(force) {
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
        const mass = random(0, 10)
        const x = i === 0 ? 50 : i * 150
        movers.push(new Mover(x, 50, mass))
    }
}

function draw() {
    background('white')
    water.draw()

    const gravity = createVector(0, 0.02)

    movers.forEach(mover => {
        mover.applyForce(gravity)
        const waterFocer = water.getForce(mover)
        mover.applyForce(waterFocer)
        mover.update()
        mover.edges()
        mover.draw()
    })
}