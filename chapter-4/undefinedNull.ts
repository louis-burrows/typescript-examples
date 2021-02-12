// we are using strict null/undefined checks on this repo to ensure that any thing that could be null/undefined is checked

// our type tells us that a product may not have a price, so we'd need to check anywhere we use it
// => it could be undefined
type Product = {
  id: number;
  name: string;
  price?: number;
}

const displayProductPrice = (product: Product): string => {
  // comment out the if statement and see what happens
  // => hover over the product.price variable to see what's up
  if (product.price) {
    const pricePlusVat = product.price * 1.2
    return `£${pricePlusVat}`
  }

  return 'Free!'
}

// the same can be said for null checks
// => we are going to get a list of products from the DOM
const productsContainer = document.querySelector('#products')
// however, productsContainer could not exist in the DOM (if there's no div with the ID of 'products')
// => take away the '?' below and TypeScript won't like it, because 'productsContainer' could be null
// if there is a question mark, and it resolves to null, it will stop right there and not continue with the function.
productsContainer?.addEventListener('change', () => {
  // do something..
})

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
