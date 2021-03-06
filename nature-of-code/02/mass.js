class Mover {

    position;
    velocity;
    acceleration;
    mass;

    constructor() {
        this.position = createVector(random(0, width), random(0, height));
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.mass = random(0.1, 2);
    }

    applyForce(force) {
        const f = p5.Vector.div(force, this.mass)
        this.acceleration.add(f);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    draw() {
        stroke(0);
        strokeWeight(2);
        fill(127, 100);
        ellipse(this.position.x, this.position.y, 30 * this.mass, 30 * this.mass);
    }

    checkEdges() {
        if (this.position.x > width) {
            this.position.x = width;
            this.velocity.x *= -1;
        } else if (this.position.x < 0) {
            this.velocity.x *= -1;
            this.position.x = 0;
        }

        if (this.position.y > height) {
            this.velocity.y *= -1;
            this.position.y = height;
        }
    }

}

let movers = []

function setup() {
    createCanvas(600, 400)

    for(let i = 0; i < 1; i++) {
        movers.push(new Mover())
    }
}

function draw() {
    background('white')
    const wind = createVector(0, 0.2)
    const c = -0.01;

    movers.forEach((mover) => {

        wind.mult(mover.mass)
        mover.applyForce(wind)

        const friction = mover.velocity.copy();
        friction.normalize()
        friction.mult(-1)
        friction.mult(c)

        mover.applyForce(friction)

        mover.update()
        mover.checkEdges()
        mover.draw()

        mover.update()
        mover.checkEdges()
        mover.draw()
    })
}