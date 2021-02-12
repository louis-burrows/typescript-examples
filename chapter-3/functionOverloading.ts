// in this example, it's much easier to use named functions rather than anonymous arrow functions
// => we can 'combine' two separate functions which have similar parameters to save on duplicated code
// typescript can work out which version of the function you are using depending on what you pass into it.

type Result = {
  url: string;
}

const demoFetch = async(url: string): Promise<any> => {
  return Promise.resolve([{
    url
  }])
}

function search(term: string, tags?: string[]): Promise<Result[]>
function search(term: string, callback?: (results: Result[]) => void, justTags?: string[]): void

async function search(term: string, tagsOrCallback?: string[] | ((results: Result[]) => void), justTags?: string[]) {

  //this is checking which version of the function that user has called before we go any further, by checking the type of the parameter
  const callback = typeof tagsOrCallback === 'function' ? tagsOrCallback : undefined

  const tags =
    typeof tagsOrCallback !== 'undefined' && Array.isArray(tagsOrCallback) ? tagsOrCallback :
    typeof justTags !== 'undefined' && Array.isArray(justTags) ? justTags :
    undefined

  let search = `/search?query=${term}`

  if (tags && tags.length > 0) {
    search += `&tags=${tags.join(',')}`
  }

  const results = await demoFetch(search) as Result[]

  // depending on which parameter was passed in, it will return this, or it will return the results below.
  if (callback) {
    return void callback(results)
  }

  return results
}

// hover over this to show what typescript will let you apply to the function
search()

// you can do the following calls all with the same function
search('adam') // technically, we'd need to do `await search('adam')` as it returns a promise

search('adam', ['developer', 'clearabee']) // technically, we'd need to do `await search('adam', ['developer', 'clearabee'])` as it returns a promise

// no 'await' required, because we're using a callback instead
search('adam', (res => {
  console.log('searchWithCallback', res)
}))

// no 'await' required, because we're using a callback instead
search(
  'adam',
  (res => {
    console.log('searchWithCallbackAndTags', res)
  }),
  ['developer', 'clearabee']
)

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
