// function objects are standard JavaScript but we can make them type-safe using TypeScript

type User = {
  name: string;
  email: string;
  updateName: (newName: string) => string;
}

const user: User = {
  name: 'Adam',
  email: 'adam@me.com',
  updateName: (newName) => {
    user.name = newName
    return newName;
  }
}

// run `ts-node chapter-3/functionObjects.ts` (minus quotes) to see what this outputs
console.log('nameBeforeUpdate', user.name)
user.updateName('Louis')
console.log('nameAfterUpdate', user.name)

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
