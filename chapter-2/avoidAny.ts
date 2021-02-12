// try to avoid using 'any' at all costs

const name: any = 'User'

// this is because it can cause some major issues

const total = name * 3 // uh oh!
console.log('total', total) // run `ts-node chapter-2/avoidAny.ts` (minus quotes) to see why this is an issue

// change `const name: any = 'User'` (above) to `const name: string = 'User'` and TypeScript will warn you about the multiplication (which is not allowed)

// that said, you can use 'any' whilst you are developing if you aren't yet sure what your type will be

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
