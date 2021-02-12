// this test uses inline types inside the function head

const multiplyNumber = (number: number, multiplier: number): number => {
  return number * multiplier
}

console.log('multipliedNumber', multiplyNumber(3, 2))

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
