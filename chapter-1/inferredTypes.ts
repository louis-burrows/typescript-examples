// this test uses 'inferred types'

const multiplyNumber = (number = 1, multiplier = 0) => {
  return number * multiplier
}

console.log('multipliedNumber', multiplyNumber(3, 2))

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
