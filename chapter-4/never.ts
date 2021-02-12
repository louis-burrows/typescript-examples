// never is simply the opposite of 'any'
// => variables using 'any' type can have any type of value
// => variables using 'never' type can't have any type of value, ever

type Product = {
  id: number;
  name: string;
  price: number;
  type: 'book' | 'dvd' | 'cd' // | 'giftcard'
}

const neverError = (message: string, token: never) => {
  throw Error(`${message}. ${token} should not exist`)
}

// our switch statement loops over each 'type' to display a description for each item
const getProductDescription = (product: Product) => {
  const { type, name } = product
  switch(type) {
    case 'book':
      return `${name} - brand new book!`
    case 'cd':
      return `${name} - brand new CD!`
    case 'dvd':
      return `${name} - brand new DVD!`
    // case 'giftcard':
    //   return `${name} - brand new gift card!`
    default:
      // uncocmment the below line and see it's value is 'never'
      // => this is because type can never have a value here in the default case
      // type
      neverError( 'No sure what to do!', type )
  }
}

// however, if you add a new 'type' of product to our type 'Product' at the top, see what happens
// => by using 'never' we can ensure that any changes we make to our types aren't forgotten to be updated in any places like our switch statement here
// => uncomment the case 'giftcard': (and the line below it) to see how the error for neverError disappears

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
