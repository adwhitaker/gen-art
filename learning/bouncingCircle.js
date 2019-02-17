/**
 * bouncing circle
 */

function setup() {
    createCanvas(400, 400);
}

let x = 150
let y = 150
let xSpeed = 1.5
let ySpeed = 1
function draw() {
    background(225);

    x += xSpeed
    y += ySpeed

    if ((x > width) || (x < 0)) {
        xSpeed = xSpeed * -1
    }

    if ((y > height) || (y < 0)) {
        ySpeed = ySpeed * -1
    }

    fill('green')
    ellipse(x, y, 50, 50)
}