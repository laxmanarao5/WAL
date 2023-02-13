// import x from './module1.js';     //import defaiult exports

// import {b,c} from './module1.js'; //import named exports
// console.log(x)

// console.log(b)
// console.log(c)

console.log("Default exports ")
console.log("")
import x from './module1.js';
console.log(x.obj)
x.test()

console.log("")
console.log("")
console.log("Named exports ")

import {obj,test,arr} from './module1.js';
console.log(obj)
console.log(arr)
test()

console.log("")
console.log("")
console.log("")
console.log("")

export let name="laxman";