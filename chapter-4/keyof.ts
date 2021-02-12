// key of is really useful to get the keys of a specific type (any type in fact!)

//making sure things update where they need to update. It will do it automatically

type Product = {
  id: number;
  name: string;
  price: number;
  type: 'book' | 'dvd' | 'cd';
}

// hover over 'ProductKeys' below to see how it works
type ProductKeys = keyof Product

// lets say we have 3 collections of products, like so:
type Products = {
  book: Product[];
  dvd: Product[];
  cd: Product[];
  // giftcard: Product[];
}

// if we want to filter by a specific type, we'd need to filter through the list of product categories
// => we want to filter by one of the specific 'types' of products
// => the below works fine, but means we need to maintain this list when we add something else to our 'Products' type above
type ProductType = 'book' | 'dvd' | 'cd' // | 'giftcard'

// instead of manually updating 'ProductType' anytime we add something new, we can use 'keyof'
// => keyof effectively creates a dynamic version of 'ProductType' for us, which stays up-to-date
// => hover over the 'type' argument below to see
const filterProducts = (products: Products, type: keyof Products): Product[] => {
  const filteredProductList = products[type]
  return filteredProductList.filter(product => product.type === type)
}

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
