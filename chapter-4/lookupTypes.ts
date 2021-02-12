// lookup types allow you to remove the need to hardcode value types in multiple places around your app

type ProductBase = {
  id: number;
  name: string;
  price: number;
}

type Book = ProductBase & {
  type: 'book'
}

type CD = ProductBase & {
  type: 'cd'
}

type DVD = ProductBase & {
  type: 'dvd'
}

type GiftCard = ProductBase & {
  type: 'giftcard'
}

type Product = Book | CD | DVD

// the below allows us to access all available 'type' variations without having to write something like:
// => type ProductType = 'book' | 'cd' | 'dvd'
// => and then having to keep it up to date anytime we add a new product type
type ProductType = Product['type']

// add 'GiftCard' type to the 'Product' union type above and then see what becomes available to us on our function argument
const displayProductType = (productType: ProductType): string => {
  switch(productType) {
    case 'book':
      return 'Book'
    case 'cd':
      return 'CD'
    case 'dvd':
      return 'DVD'
  }
}

// all work fine!
displayProductType('book')
displayProductType('cd')
displayProductType('dvd')

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
