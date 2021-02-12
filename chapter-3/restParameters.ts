const search = (term: string, ...tags: string[]) => {
  let search = `/search?query=${term}`

  if (tags && tags.length > 0) {
    search += `&tags=${tags.join(',')}`
  }

  return search
}

console.log('search', search('adam', 'developer', 'clearabee'))

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
