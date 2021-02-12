// type predicates allow us to add more information to contro flow
// => we can let TypeScript know that if our check returns true, our variable is of a certain type

type Product = {
  id: number;
  name: string;
  price: number;
  type: 'book' | 'dvd' | 'cd';
}

type Products = {
  book: Product[];
  dvd: Product[];
  cd: Product[];
}

// let's say our 'type' is string, because it comes back from an API and we aren't sure if it matches one of our product types
// => we can write a helper function to check if it of the right type

//if the keys of the product matches the type that is put into it, then return the object
const isProductTypeCorrect = (products: Products, type: string): type is keyof Products => {
  return Object.keys(products).includes(type)
}

const filterProducts = (products: Products, type: string): Product[] => {
  if (isProductTypeCorrect(products, type)) {
    const filteredProductList = products[type]
    return filteredProductList.filter(product => product.type === type)
  }

  throw Error('Provided product type does not match our list')
}

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
