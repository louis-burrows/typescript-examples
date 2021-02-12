// the inputs don't have to be the same, for you to be able to use the same time. They are both giving the same output, and that is the common type. Even though the type says an input parameter is needed, you can use it for functions that don't take an input, but which have an output of same type. Typecript primarily wants the return to equal the return type.

type Result = {
  id: number;
  name: string;
}

type SearchFn = (term: string) => Promise<Result[]>

// this function fulfills the type contract
const searchFn: SearchFn = (term) => {
  return Promise.resolve([{
    id: 1,
    name: term
  }])
}

// so does this one, even without the 'term' argument
// => we can simply ignore any arguments we don't need, whilst using the same type as above
const contentSearchFn: SearchFn = () => {
  return Promise.resolve([{
    id: 1,
    name: 'Book'
  }])
}

// this also works in places where we drop in the function

type SearchWithCallback = (
  term: string,
  search: SearchFn
) => void

const searchWithCallbackOne: SearchWithCallback = (
  term,
  searchFn
) => {

}

const searchWithCallbackTwo: SearchWithCallback = (
  term,
  contentSearchFn
) => {

}

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
