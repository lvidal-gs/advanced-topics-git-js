//It's a way to use "heritage" on JS
const date = new Date(2000, 6, 2)
let object = date
var counter = 0;
console.log(date)

//Chaining prototype
do {
  object = Object.getPrototypeOf(object)
  console.log(`Prototype ${counter}:`)
    console.log(object)
  counter++
} while (object)