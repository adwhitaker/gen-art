class Circle {
    constructor(x, y, w, action) {
        this.x = x
        this.y = y
        this.width = w
        this.action = action
    }

    draw() {
        if (this.width === 0) {
            this.action = 'add'
        }
        if (this.width === MAX_WIDTH) {
            this.action = 'subtract'
        }

        if (this.action === 'add') {
            this.width = this.width + 1
        }
        if (this.action === 'subtract') {
            this.width = this.width - 1
        }

        ellipse(this.x, this.y, this.width, this.width)
    }
}

const MAX_WIDTH = 25
let circles = []

function setup() {
    createCanvas(400, 400)
    frameRate(20)
    noStroke()

    const interval = 25
    for (let i = 1; (i * interval) < height; i++) {
        for (let x = 1; (x * interval) < width; x++) {
            const w = Math.floor(random(0, MAX_WIDTH))
            circles.push(new Circle(i * interval, x * interval, w, random(['add', 'subtract'])))
        }
    }
}

function draw() {
    background('#6254A8')
    circles.forEach(circle => circle.draw())
}