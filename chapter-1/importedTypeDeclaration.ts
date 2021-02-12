// this test uses an imported type declaration
import type { TMultiplyNumber } from './exportedTypes'

const multiplyNumber: TMultiplyNumber = (number, multiplier) => {
  return number * multiplier
}

console.log('multipliedNumber', multiplyNumber(3, 2))

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
