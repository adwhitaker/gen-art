function setup() {
    createCanvas(400, 400);
    noLoop()
}

/**
 * random points - sharp edges
 */
function draw() {
    background(0);

    stroke(255)
    beginShape()
    let xOff = 0
    for (let x = 0; x < width; x++) {
        stroke(255)
        let y = random(height)
        vertex(x, y)
        xOff += 0.01
    }
    endShape()
}


/**
 * Perlin noise - smooth edges
 */
function draw() {
    background(0);

    stroke(255)
    beginShape()
    let xOff = 0
    for (let x = 0; x < width; x++) {
        stroke(255)
        y = noise(xOff) * height
        vertex(x, y)
        xOff += 0.01
    }
    endShape()
}

