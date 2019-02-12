class Particle {

    constructor(x, y) {
        this.x = x
        this.y = y
        this.history = []
    }

    update() {
        this.x += random(-5, 5)
        this.y += random(-5, 5)

        const v = createVector(this.x, this.y)
        this.history.push(v)

        for (let i = 0; i < this.history.length; i++) {
            this.history[i].x += random(-2, 2)
            this.history[i].y += random(-2, 2)

        }

        if (this.history.length > 100) {
            this.history.splice(0, 1)
        }
    }

    show() {
        noFill()
        beginShape()
        for (let i = 0; i < this.history.length; i++) {
            const pos = this.history[i]
            vertex(pos.x, pos.y)
        }
        endShape()
    }
}

let particles = []

function setup() {
    createCanvas(400, 400);
    frameRate(15)
}

function mousePressed() {
    particles.push(new Particle(mouseX, mouseY))
}

function draw() {
    background(220);

    for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].show()
    }
}
