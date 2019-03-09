/**
 * The Nature of Code
 * Chapter 1: Vectors
 */


function setup() {
    createCanvas(400, 400)
}

// Subtracting mouse from center
/**
function draw() {
    background(255)
    const mouse = createVector(mouseX, mouseY)
    const center = createVector(width/2, height/2)
    mouse.sub(center)
    translate(width/2, height/2)
    line(0, 0, mouse.x, mouse.y)
}
 */

 // Multiplication
 /**
function draw() {
    background(255)
    const mouse = createVector(mouseX, mouseY)
    const center = createVector(width/2, height/2)
    mouse.sub(center)
    
    // Multiplication
    mouse.mult(2)

    translate(width/2, height/2)
    line(0, 0, mouse.x, mouse.y)
}
  */


// Division
/**
function draw() {
    background(255)
    const mouse = createVector(mouseX, mouseY)
    const center = createVector(width/2, height/2)
    mouse.sub(center)
    
    // Division
    mouse.div(2)

    translate(width/2, height/2)
    line(0, 0, mouse.x, mouse.y)
}
 */

 // Magnitude
 /**
function draw() {
    background(255)
    const mouse = createVector(mouseX, mouseY)
    const center = createVector(width/2, height/2)
    mouse.sub(center)
    
    const mag = mouse.mag()
    fill('red')
    rect(0, 0, mag, 10)

    translate(width/2, height/2)
    line(0, 0, mouse.x, mouse.y)
}
  */

// Normalize
/*
function draw() {
    background(255)
    const mouse = createVector(mouseX, mouseY)
    const center = createVector(width/2, height/2)
    mouse.sub(center)
    
    mouse.normalize()
    fill('red')
    rect(0, 0, mouse.mag(), 10)

    translate(width/2, height/2)
    line(0, 0, mouse.x, mouse.y)
}
*/
