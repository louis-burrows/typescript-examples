const result = {
  title: 'A guide to @@starthl@@Ember@@endhl@@.js',
  link: '/url'
}

// worth noting the special type, TemplateStringsArray, which allows you to generate things like the below

const highlight = (strings: TemplateStringsArray, ...values: string[]) => {
  let str = ''
  strings.forEach((templ, i) => {
    let expr = values[i]?.replace('@@starthl@@', '<em>').replace('@@endhl@@', '</em>') ?? ''
    str += templ + expr
  })
  return str
}

let markup = highlight`<li>${result.title}<a>${result.link}</a></li>`

console.log('markup', markup)

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
