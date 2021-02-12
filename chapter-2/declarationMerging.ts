// this is about the only reason (other than extending) to use interfaces
// -> that said, there's a chance you will never use this

// let's start off with a simple interface to describe an item in the online shop
interface ShopItem {
  name: string;
  price: number;
}

const item: ShopItem = {
  name: 'Book',
  price: 12.99,
  reviews: ['loved it!', 'not bad']
}

// you can then extend this interface with a feature of TypeScript known as declaration merging
// => this makes the original interface extend and include a reviews property, even though it's declared after
interface ShopItem {
  reviews: string[];
}

console.log('item', item)

// like the example in the book explains, the above isn't really useful or likely to ever occur
// => you are more likely to use declaration merging for extending global variables such as the 'window' in JavaScript
declare global {
  interface Window {
    myRandomFunction: () => void;
  }
}

// this would usually error, but now, it's allowed!
// => comment out the 'declare global' block of code to see it break
window.myRandomFunction()

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
