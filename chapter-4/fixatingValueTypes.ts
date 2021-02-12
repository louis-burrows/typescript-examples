// fixating value types is a way to convert values which would otherwise be inferred as a primative type into their value type
// => if we don't use a type annotation when we create our object, the 'type' will be inferred as a string
// => when we pass this object to our function, it breaks

type Product = {
  id: number;
  name: string;
  price: number;
  type: 'book' | 'cd' | 'dvd';
}

const displayProduct = (product: Product): string => {
  return `${product.name} (£${product.price})`
}

// see what happens when we don't use a type annotation when we create our object
const product1 = {
  id: 1,
  name: 'My new book',
  price: 12.99,
  type: 'book' 
}

// TypeScript says `Type 'string' is not assignable to type '"book" | "cd" | "dvd"'`
displayProduct(product1)

// this works, but isn't great for all scenarios, it's too rigid
const product2: Product = {
  id: 1,
  name: 'My new book',
  price: 12.99,
  type: 'book'
}

displayProduct(product2)

// we can use 'as const' in order to cast what would otherwise be inferred as type 'string' into it's value type
// => we're saying that the type annotation for 'type' should be 'book', instead of 'string'
// => value type 'book' exists in our union annotation, so it works!
const product3 = {
  id: 1,
  name: 'My new book',
  price: 12.99,
  type: 'book' as const
}

displayProduct(product3)

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
