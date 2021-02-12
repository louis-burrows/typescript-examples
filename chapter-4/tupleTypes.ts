// tuple types allow you to express an array with a fixed number of elements
// => these elements do not have to be of the same type

// in our type below, we only allow for two elements in our array
// => element 1 must be a string
// => element 2 must be a number
type Tuple1 = [string, number]
type Tuple2 = [string, number, boolean]

const array1: Tuple1 = ['Adam', 85]
console.log('array1', array1)

const array2: Tuple2 = ['Adam', 85, true]
console.log('array2', array2)

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
