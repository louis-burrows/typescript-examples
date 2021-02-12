// you can create a default object for large objects and 'infer' the type to create a type declaration
// => this is only really useful for large objects to save time writing out a type declaration and your default object

type obj = {
  name: string;
  email: string;
  age: string;
  address: string;
  userName: string;
  password: string;
}

const user: obj = {
  name: 'Adam',
  email: 'adam@me.com',
  age: '85',
  address: '123 My Street',
  userName: 'adamcollins',
  password: '12345'
}

// is the same as:

const newUser = {
  name: 'Adam',
  email: 'adam@me.com',
  age: '85',
  address: '123 My Street',
  userName: 'adamcollins',
  password: '12345'
}

type newUser = typeof newUser

// except it's much shorter and the type declaration is updated whenever the newUser object is changed
// => keep in mind that this uses type inference, and you might want to be more explicit by using example 1

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
