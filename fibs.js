let fibs = [0, 1, 1, 2]
let n = 1

function setup() {
  createCanvas(400, 400)
  noLoop()
  textAlign(CENTER, CENTER)
}

function draw() {
  background(220)
  text(`${n}th Fibonacci number: ${fib(n)}`, width / 2, height / 2)
}

function keyPressed() {
  if (key === " ") {
    n += 1
    redraw()
  }
}

// Fibonacci function with memoization
function fib(n) {
  if (n < 1) { // Error/base case
    return 0
  }
  
  if (n < fibs.length) { // Check if already calculated
    return fibs[n]
  }

  // Calculate the Fibonacci number and store it
  const result = fib(n - 1) + fib(n - 2)
  fibs[n] = result // Store in the array
  return result
}

