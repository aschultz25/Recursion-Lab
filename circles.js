function setup() {
  createCanvas(400, 400)
  ellipseMode(RADIUS)
  noFill()
  noLoop()
}

function draw() {
  background(220)
  recursiveCircle(width / 2, height / 2, width / 4)
}

// Recursive function to draw concentric circles
function recursiveCircle(x, y, r) {
  if (r > 1) { // base case: stop when radius is too small
    circle(x, y, r)
    recursiveCircle(x, y, r / 2) // Recursive call for a smaller circle
  }
}
