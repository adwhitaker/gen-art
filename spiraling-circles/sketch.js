class Particle {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.radians = Math.random() * Math.PI * 2
        this.distanceFromCenter = random(50, 120)
        this.velocity = 0.05
        this.lastMouse = { x: x, y: y }
    }

    update() {
        const oldLocation = { x: this.x, y: this.y }
        this.radians += this.velocity

        // Drag effect
        this.lastMouse.x += ((mouseX ? mouseX : this.lastMouse.x) - this.lastMouse.x) * 0.05
        this.lastMouse.y += ((mouseY ? mouseY : this.lastMouse.y) - this.lastMouse.y) * 0.05

        // Circular Motion
        this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter
        this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter
        this.draw(oldLocation)
    }

    draw(oldLocation) {
        strokeWeight(this.radius)
        stroke(this.color)
        line(oldLocation.x, oldLocation.y, this.x, this.y)
    }
}

let particles = []

function setup() {
    createCanvas(800, 800)
    const colors = [
        '#343838',
        '#005F6B',
        '#008C9E',
        '#00B4CC',
        '#00DFFC'
    ]

    for (let i = 0; i < 100; i++) {
        const color = colors[[Math.floor(random(0, 5))]]
        const radius = random(1, 3)
        particles.push(new Particle(height / 2, width / 2, radius, color))
    }
}

function draw() {
    background('rgba(255, 255, 255, 0.05)')
    particles.forEach(particle => particle.update())
}


