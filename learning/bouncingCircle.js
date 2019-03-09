/**
 * bouncing circle with p5.Vector
 */

let position
let velocity

function setup() {
    createCanvas(400, 400)
    position = createVector(100, 50)
    velocity = createVector(1.5, 0.5)
}

function draw() {
    background(225)

    position.add(velocity)

    if ((position.x > width) || (position.x < 0)) {
        velocity.x = velocity.x * -1
    }

    if ((position.y > height) || (position.y < 0)) {
        velocity.y = velocity.y * -1
    }

    fill('green')
    ellipse(position.x, position.y, 50, 50)
}