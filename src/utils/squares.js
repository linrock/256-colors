export default function sixSquares() {
  const squares = [[], [], [], [], [], []]
  let j = 0
  for (let i = 0; i < 216; i++) {
    if (i > 0 && i % 6 === 0) {
      j = (j + 1) % 6
    }
    squares[j].push(16 + i)
  }
  return squares
}
