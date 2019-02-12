

class Particle {
    constructor(x, y, radius, color) {
        this.initialX = x
        this.initialY = y
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.radians = 0
        this.velocity = 0.05
    }

    update() {
        this.radians += this.velocity
        this.x = this.initialX + Math.cos(this.radians) * 100
        this.y = this.initialY + Math.sin(this.radians) * 100
        this.draw()
    }

    draw() {
        noStroke()
        fill(this.color)
        ellipse(this.x, this.y, this.radius, this.radius)
    }
}

let particles = []
function setup() {
    createCanvas(400, 400)

    for (let i = 0; i < 1; i++) {
        particles.push(new Particle(height / 2, width / 2, 10, 'steelblue'))
    }
}

function draw() {
    background('rgba(255, 255, 255, 0.05)')
    particles.forEach(particle => particle.update())
}


