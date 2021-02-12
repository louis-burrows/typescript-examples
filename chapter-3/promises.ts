// promises let us know that we will receive a response at some point, but we need to wait
// => 'Promise' is a supertype which will be returned from an async function (Promise<any> by default)
// => we can narrow down that 'any' by providing a subtype we have set ourselves

type Product = {
  id: number;
  name: string;
  price: number;
}

// here we will let anything using 'fetchProducts' know to expect a return or Promise<Product[]>
const fetchProducts = async (): Promise<Product[]> => {
  // the default return from 'fetch' is Promise<any>
  const products = await fetch('/products').then(res => res.json())

  //the await above, means that JS will not continue to this until the await is resolved.
  // we can then convert this using the 'as' type assertion
  //fetch will return a promose as any, so we need this typecast to define the type
  return products as Product[]
}

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
