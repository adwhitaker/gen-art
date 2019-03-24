class Mover {

    position;
    velocity;
    acceleration;
    mass;

    constructor() {
        this.position = createVector(20, 0);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.mass = 1
    }

    applyForce(force) {
        const f = p5.Vector.div(force, this.mass)
        this.acceleration.add(f);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
        this.velocity.limit(5)
    }

    draw() {
        stroke(0);
        strokeWeight(2);
        fill(127, 100);
        ellipse(this.position.x, this.position.y, 30 * this.mass, 30 * this.mass);
    }

    checkEdges() {
        if (this.position.y > height) {
            this.velocity.y *= -1;
        } else if (this.position.y < 0) {
            this.velocity.y *= -1;
            this.position.y = 0;
        }
    }

}

let movers = []

function setup() {
    createCanvas(600, 400)

    for (let i = 0; i < 1; i++) {
        movers.push(new Mover())
    }
}

function draw() {
    background('white')
    stroke('black')
    line(0, height / 2 + 15, width, height / 2 + 15)
    movers.forEach((mover) => {
        mover.applyForce(createVector(0, 0.1))

        
        if (keyIsPressed) {
            const drag = mover.velocity.copy();
            drag.normalize()
            const c = -0.03
            const speed = mover.velocity.copy()

            console.log('speed', speed.mag())
            drag.mult((c * speed.mag() * speed.mag()))
            console.log(drag)
            mover.applyForce(drag)
        }


        mover.update()
        mover.checkEdges()
        mover.draw()

        mover.update()
        mover.checkEdges()
        mover.draw()
    })
}