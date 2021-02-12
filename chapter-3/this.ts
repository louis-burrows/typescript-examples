// you will likely have come across 'this' before when writing JavaScript code

// tell typescript what /this/ is, and then it will be happy, and you can access it.

// you will have used something like the below before
document?.getElementById('#userInput')?.addEventListener('change', function() {
  // 'this' just gives you access to the owner object (the above function^)
  this.parentElement?.classList.add('active')
})

// the only problem is this isn't very Type safe, because we don't necessarly know what 'this' is
// => there's a better way to define this in TypeScript in order to be explicit
// => note, you can't use anonymous arrow functions and 'this'
document?.getElementById('#userInput')?.addEventListener('change', function(this: HTMLElement) {
  this.parentElement?.classList.add('active')
})

// another example
document.addEventListener('change', function(this) {
  console.log('this.value', this.value)
})

document.addEventListener('change', function(this: HTMLSelectElement) {
  console.log('this.value', this.value)
})

document.addEventListener('change', function(this: HTMLInputElement) {
  console.log('this.value', this.value)
})

// --
// ignore the next line, it stops TypeScript considering all files in this project as the same block-scope
export {}
