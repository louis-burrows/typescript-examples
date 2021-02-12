// enums are an easy way refer back to a value that might be used in multiple places across the code-base
//they are types defined in an object which you can reference, to save you typing out types everywhere in your code. It just makes it a bit more reusable.

// note the 'const' before the word 'enum'
// -> this is important because enums exist in JavaScript but function differently
// -> this 'const' keyword ensures TypeScript removes these enums when compiling down to JavaScript
const enum UserLevel {
  Admin,
  Regular,
  RegularTrial
};

type User = {
  name: string;
  type: UserLevel;
}

const updateUser = (user: User): string => {
  const { type } = user
  // if the user is of a specific type, allow
  if (type === UserLevel.Admin || type === UserLevel.Regular) {
    return 'Update successful'
  }
  return 'You must be an admin or paid user to perform this action'
}

// run `ts-node chapter-2/enums.ts` (minus quotes) to see the output of the below
const admin = {
  name: 'admin',
  type: UserLevel.Admin
}
console.log('asAdmin', updateUser(admin))
console.log('---')

const regular = {
  name: 'regular',
  type: UserLevel.Regular
}
console.log('asRegular', updateUser(regular))
console.log('---')

const regularTrial = {
  name: 'regular trial',
  type: UserLevel.RegularTrial
}
console.log('asRegularTrial', updateUser(regularTrial))

// this is a convoluted example in the sense that we're only using the enum in one place
// -> to make it useful, you'd use it in multiple places

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
