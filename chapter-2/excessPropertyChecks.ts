// TypeScript only cares about the properties we require when it comes to objects and functions

type Person = {
  name: string;
  email: string;
  age: number;
}


// because we are creating our object here, with the type declaration here too:
// -> TypeScript will error if you add a non-existance property (try it)
const person1: Person = {
  name: 'Adam',
  email: 'adam@test.com',
  age: 74
}

// run `ts-node chapter-2/excessPropertyChecks.ts` (minus quotes) to see the output of the below
console.log('person1', person1)
console.log('---')

// however, if we create the object, then assign it to a variable using the type declaration, it's allowed. Why?
// -> because TypeScript only cares about the values we define in our type (the ones we want to use)
// -> this allows for lots of flexibility when you don't know all the properties on a object, and only need a few
const apiResponse = {
  name: 'Louis',
  email: 'louis@test.com',
  age: 65,
  address: '123 My Road, Birmingham, UK'
}

// so the 'address' property does exist on this, but TypeScript doesn't care/ignores it. It allows the excess propery to exist. Although you can't use it or access it, it won't flag as being an error. Very useful for api response when you are unsure of what will get returned to you. Allows you to incrementally add typescript, when you know what you are geting back.
const person2: Person = apiResponse

// run `ts-node chapter-2/excessPropertyChecks.ts` (minus quotes) to see the output of the below
console.log('person2Name', person2.name)
console.log('person2Email', person2.email)
console.log('person2Age', person2.age)

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
