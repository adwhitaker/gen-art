/*
 * object intersection
 */
class Bubble {
	constructor(x, y) {
		this.x = x
		this.y = y
		this.r = 50
		this.col = color(255)
	}

	display() {
		stroke(255)
		fill(this.col)
		ellipse(this.x, this.y, this.r * 2, this.r * 2)
	}
	update() {
		this.x = this.x + random(-1, 1)
		this.y = this.y + random(-1, 1)
	}
	changeColor() {
		this.col = (random(255), random(255), random(255))
	}
	intersects(b2) {
		return dist(this.x, this.y, b2.x, b2.y) < this.r + b2.r
	}
}


let bubbles = []

function setup() {
	createCanvas(600, 400);
	for (let i = 0; i < 5; i++) {
		bubbles[i] = new Bubble(random(width), random(height))
	}
}

function draw() {
	background(220);

	for (let i = 0; i < bubbles.length; i++) {
		bubbles[i].update()
		bubbles[i].display()
		for (let x = 0; x < bubbles.length; x++) {
			if (i < x && bubbles[i].intersects(bubbles[x])) {
				bubbles[i].changeColor()
				bubbles[x].changeColor()
			}
		}
	}


}
