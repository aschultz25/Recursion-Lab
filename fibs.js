let fibs = [0, 1, 1, 2]
let n = 1
let memo = {}

function setup() {
  createCanvas(400, 400)
  noLoop()
  textAlign(CENTER, CENTER)
}

function draw() {
  background(220)
  text(`${n}th fibonacci number: ${fib(n)}`, width / 2, height / 2)
}

function keyPressed() {
  if (key === " ") {
    n += 1;
    redraw()
  }
}

function fib(n) {
  if (n < 1) { // Error/base case
    return 0
  }

  if (n === 1 || n === 2) { // Base case
    return 1
  }

  // Check if value is already computed
  if (memo[n] !== undefined) {
    return memo[n]
  }

  // Otherwise, compute it and store in memo
  memo[n] = fib(n - 1) + fib(n - 2)
  return memo[n]
}
