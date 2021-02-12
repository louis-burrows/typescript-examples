// this test uses inferred types on an object

const obj = {
  name: 'User',
  email: 'user@example.com',
  age: 25
}

console.log('name', obj.name)
console.log('age (x2)', obj.age * 2)

// you can also use a type declaration to be specific with your types

type typedObj = {
  name: string;
  email: string;
  age: number;
}

const typedObj: typedObj = {
  name: 'User',
  email: 'user@example.com',
  age: 25
}

console.log('---')
console.log('name', typedObj.name)
console.log('age (x2)', typedObj.age * 2)

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
