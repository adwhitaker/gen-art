/**
 * Perlin Noise
 */
let inc = 0.1

function setup() {
	createCanvas(400, 400);
	pixelDensity(1)
	noLoop()
}

function draw() {
	let yOff = 1
	background(220);

	loadPixels()

	for (let y = 0; y < height; y++) {
		let xOff = 1

		for (let x = 0; x < width; x++) {
			let index = (x + y * width) * 4
			let n = noise(xOff, yOff) * 255
			pixels[index + 0] = n
			pixels[index + 1] = n
			pixels[index + 2] = n
			pixels[index + 3] = 255

			xOff += inc
		}
		yOff += inc
	}
	updatePixels()
}
