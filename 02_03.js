/*
 * moving circle
 */
class Circle {
	constructor(x, y, w) {
		this.x = x
		this.y = y
		this.w = w
		this.action = 'add'
	}

	draw() {
		let p = this.x + (this.w / 2)
		if (p > height) { this.action = 'subtract'}
		if (p < this.w) { this.action = 'add' }

		if (this.action === 'add') {
			this.x += 1
		}
		if (this.action === 'subtract') {
			this.x -= 1
		}

		ellipse(this.x, this.y, this.w, this.w)
	}
}

let c
function setup() {
  createCanvas(400, 400);
		c = new Circle(200, 200, 10)
}

function draw() {
  background(220);
	c.draw()
}
