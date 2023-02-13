console.log("Default exports from module 1 ")
console.log("")
import x from './module1.js';
console.log(x.obj)
x.test()

console.log("")
console.log("")
console.log("Named exports from module 1")

import {obj,test,arr} from './module1.js';
console.log(obj)
console.log(arr)
test()


import {name} from './module2.js';
console.log("")
console.log("")
console.log("Data imported from module 2")
console.log(name)

console.log("")
console.log("")
console.log("Data imported from module 3")
import obj1 from './module3.js';
console.log(obj1)