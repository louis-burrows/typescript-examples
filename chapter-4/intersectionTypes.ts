// intersection types allow for the combination of multiple types
// => it works in a similar way 'extending' interfaces with TypeScript

type User = {
  name: string;
  email: string;
}

type UserWithRoles = User & {
  roles: string[];
}

const user: UserWithRoles = {
  name: 'Adam',
  email: 'adam@me.com',
  roles: ['admin']
}

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
