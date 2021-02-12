// control flow allows you to 'narrow' your types if you don't know the type of a variable
// work out the type, so that you can then work out what to do with it
// use typeof, to find out the type

// the address book of our current user
const addressBook = [
  {
    street: '123 My Street',
    city: 'London'
  },
  {
    street: '256, My Road',
    city: 'Edinburgh'
  }
]

// so, we don't know the incoming type, but we need to return a string
const getAddress = (address: unknown): string => {
  // lets first check if the address is a number, if it is:
  // -> this mean it will be an index for our array of addresses in the user's address book
  if (typeof address === 'number' && addressBook.length > address) {
    const { street, city } = addressBook[address]
    // because we have to return a string, we need to access the street and city parameters on the object and combine them to return a string
    return `${street}, ${city}`
  } else if (typeof address === 'string') {
    // if the input was already a string, return it
    return address
  }
  // if the type is anything else, just return a default string because we don't know how to deal with other types
  return 'No address found or provided'
}

// run `ts-node chapter-2/controlFlow.ts` (minus quotes) to see the output of the below
console.log('addressString', getAddress('123 Road, Birmingham'))
console.log('---')
console.log('addressNumber1', getAddress(0))
console.log('---')
console.log('addressNumber2', getAddress(1))
console.log('---')
console.log('addressBoolean', getAddress(true))

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
