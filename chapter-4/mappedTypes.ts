//

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
type ProductType = Product['type']

// we can update this GroupedProducts type everytime we add a new type, like so..
type GroupedProducts = {
  book: Product[];
  cd: Product[];
  dvd: Product[];
  // giftcard: Product[];
}

// or we can make it dynamic, and never have to update it again
// => add the 'GiftCard' type to the `type Product` union type above, then hover over DynamicGroupedEvent
type DynamicGroupedEvent = {
  [Type in ProductType]: Product[];
}

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
