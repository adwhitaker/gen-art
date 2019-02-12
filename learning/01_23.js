/**
 * Rainbow colors
 */
class Circle {
    constructor(x, y, w, action, colorz) {
        this.x = x
        this.y = y
        this.width = w
        this.action = action
        this.color = colorz
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

        fill(this.color, 33, this.width)
        ellipse(this.x, this.y, this.width, this.width)
        this.color = this.color > 360 ? 10 : this.color + 10
    }
}

const MAX_WIDTH = 50
let circles = []

function setup() {
    createCanvas(400, 400)
    frameRate(10)
    noStroke()
    colorMode(HSB, 360, 100, MAX_WIDTH)

    const interval = 25
    for (let i = 1;
         (i * interval) < height; i++) {
        for (let x = 1;
             (x * interval) < width; x++) {
            const w = Math.floor(random(0, MAX_WIDTH))
            let colorz = i * 20
            circles.push(new Circle(
                i * interval,
                x * interval,
                w,
                random(['add', 'subtract']),
                colorz
                )
            )
        }
    }
}

function draw() {
    background(250, 33, MAX_WIDTH / 2)
    circles.forEach(circle => circle.draw())
}