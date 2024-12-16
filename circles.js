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
  if (r > 4) { // base case: stop when radius is too small
    circle(x, y, r)
    
    // Recursive calls for circles in multiple directions
    recursiveCircle(x + r / 2, y, r / 2) // Circle to the right
    recursiveCircle(x - r / 2, y, r / 2) // Circle to the left
    recursiveCircle(x, y + r / 2, r / 2) // Circle below
    recursiveCircle(x, y - r / 2, r / 2) // Circle above

       // Recursive calls for circles in diagonal directions
    if (r > 16) { // Add diagonals only for larger circles
      recursiveCircle(x + r / 2, y + r / 2, r / 2) // Bottom-right
      recursiveCircle(x - r / 2, y + r / 2, r / 2) // Bottom-left
      recursiveCircle(x + r / 2, y - r / 2, r / 2) // Top-right
      recursiveCircle(x - r / 2, y - r / 2, r / 2) // Top-left
     }
  }
}

