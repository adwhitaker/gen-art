/**
 * randomly generated lines that slowy disappear
 */

function setup () {
    createCanvas(400, 400)
}

function draw () {
    background('rgba(255, 255, 255, 0.08)')
    const v1 = createVector(random(0, 400), random(0, 400))
    const v2 = createVector(random(0, 400), random(0, 400))
    line(v1.x, v1.y, v2.x, v2.y)
}
