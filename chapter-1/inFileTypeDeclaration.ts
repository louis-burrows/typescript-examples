// this test uses an in-file type declaration
export type multiplyNumber = (number: number, multiplier: number) => number;

const multiplyNumber: multiplyNumber = (number, multiplier) => {
  return number * multiplier
}

console.log('multipliedNumber', multiplyNumber(3, 2))

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
