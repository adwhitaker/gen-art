class Particle {
    constructor(x, y, radius, color) {
        this.initialX = x
        this.initialY = y
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.radians = Math.random() * Math.PI * 2
        this.distanceFromCenter = random(50, 120)
        this.velocity = 0.05
    }

    update() {
        const oldLocation = { x: this.x, y: this.y }
        this.radians += this.velocity
        this.x = this.initialX + Math.cos(this.radians) * this.distanceFromCenter
        this.y = this.initialY + Math.sin(this.radians) * this.distanceFromCenter
        this.draw(oldLocation)
    }

    draw(oldLocation) {
        // Draw Circles
        // noStroke()
        // fill(this.color)
        // ellipse(this.x, this.y, this.radius, this.radius)

        // Draw line
        strokeWeight(this.radius)
        stroke(this.color)
        line(oldLocation.x, oldLocation.y, this.x, this.y)
    }
}

let particles = []

function setup() {
    createCanvas(400, 400)
    const colors = ['steelblue', 'black', 'darkblue']

    for (let i = 0; i < 50; i++) {
        const color = colors[[Math.floor(random(0, 2))]]
        const radius = random(1, 2)
        particles.push(new Particle(height / 2, width / 2, radius, color))
    }
}

function draw() {
    background('rgba(255, 255, 255, 0.05)')
    // background('white')
    particles.forEach(particle => particle.update())
}


