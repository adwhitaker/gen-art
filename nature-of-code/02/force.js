class Mover {

    position;
    velocity;
    acceleration;

    constructor() {
        this.position = createVector(30, 30);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    draw() {
        stroke(0);
        strokeWeight(2);
        fill(127);
        ellipse(this.position.x, this.position.y, 48, 48);
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

let mover

function setup() {
    createCanvas(600, 400)
    
    mover = new Mover()
}

function draw() {
    background('white')

    const gravity = createVector(0, 0.2)
    mover.applyForce(gravity)

    mover.update()
    mover.checkEdges()
    mover.draw()
}

function keyPressed() {
    const wind = createVector(0.5, 0)
    mover.applyForce(wind)
}