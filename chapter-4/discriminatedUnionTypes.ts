// discriminated union types make union types easier to read

type ItemBaseSimple = {
  id: number;
  name: string;
  type: 'book' | 'cd' | 'dvd';
}

// is the same as

type ItemBase = {
  id: number;
  name: string;
}

type Book = ItemBase & {
  type: 'book';
  pages: number;
  author: string;
}

type CD = ItemBase & {
  type: 'cd';
  artist: string;
}

type DVD = ItemBase & {
  type: 'dvd';
  director: string;
}

type Item = Book | CD | DVD

// the above might seem like more work, but it's more explicit and easier to read
// => it will be a much better solution if there were more properties which were specific to DVD, CD or Book

// this uses our new item union type
const item1: Item = {
  id: 1,
  name: 'item',
  type: 'cd',
  artist: 'Adam'
}

// this uses the original base item type
const item2: ItemBaseSimple = {
  id: 1,
  name: 'item',
  type: 'cd'
}

// as you can see in the below function, once we check which 'type' the item is, we have access to values ONLY available to that type
// => TypeScript knows which one of our three types we are using here, because we did a conditional check
const displayItemInformation = (item: Item): string => {
  if (item.type === 'book') {
    return `Author: ${item.author} <br/> Number of pages: ${item.pages}`
  } else if (item.type === 'cd') {
    return `Artist: ${item.artist}`
  } else if (item.type === 'dvd') {
    return `Director: ${item.director}`
  }

  return ''
}

// run `ts-node chapter-4/discriminatedUnionTypes.ts` (minus quotes) to see thiss
console.log('CD details:', displayItemInformation(item1))

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
