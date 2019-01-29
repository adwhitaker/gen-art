/**
 * moving terrain with Perlin noise
 */

let start = 0
let inc = 0.02

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);

    stroke(255)
    noFill()
    beginShape()

    let xOffset = start

    for (let x = 0; x < width; x++) {
        stroke(255)
        const y = noise(xOffset) * height
        vertex(x, y)
        xOffset += inc
    }

    endShape()

    start += inc
}