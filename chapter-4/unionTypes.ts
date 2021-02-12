// union types allow for multiple types to be used as a type annotation

type Product = {
  id: string | number;
}

// both OK!
const product1: Product = {
  id: 1
}

const product2: Product = {
  id: '1'
}

// you can also allow a type annotation to be several other types, like so:

type ItemWithImages = {
  id: number;
  name: string;
  images: string[];
}

type ItemWithoutImages = {
  id: number;
  name: string;
}

type Item = ItemWithoutImages | ItemWithImages

// both OK!
const product3: Item = {
  id: 1,
  name: 'Book',
  images: ['https://images.com/image.jpg']
}

const product4: Item = {
  id: 2,
  name: 'Magazine'
}

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
