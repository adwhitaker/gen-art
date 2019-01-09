let currentColor = 0;

function setup() {
	createCanvas(400, 400)
	colorMode(HSB)
}

function draw() {
	for (var i = 0; i < 400; i++) {
		var r = random(-200, 200);
		stroke(currentColor, 75, 100)
		line(200, i, 200 + r, i);
	}

	if (currentColor > 400) {
		currentColor = 0;
	} else {
		currentColor++
	}
}
