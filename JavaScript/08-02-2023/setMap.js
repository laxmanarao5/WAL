// let set= new Set()
// set.add(10)
// set.add(20)
// set.add(30)
// set.add({name:"laxman"})
// set.add(30)

// //Deleteting objrct from Set
// for(element of set)
// {
//     console.log(element)
//     if(element.name=="laxman")
//     {
//         set.delete(element)
//     }
// }
// console.log([...set]) // Use spread operator to convert set into array
// console.log(set.size)
// console.log(set.has(30))
// console.log(set)
// set.delete(20)
// console.log(set)
// set.clear()
// console.log(set.has(30))
// console.log(set)


// let arr=[10,20,30,40,10,20]


// let set1= new Set(arr)
// console.log(set1)    // Array to set


// console.log("Its done for Set ")
// console.log("Now , Its time for map data structure")

// //maps maintains insertion order
// let map=new Map()
// map.set(10,"laxman")
// console.log(map)
// map.set({name:"laxman"},"rao")
// console.log(map)
// map.delete(10)
// console.log(map)
// for(let key in map)
// {
//     console.log(key)
//     if(key.name=="laxman")
//     {
//         map.delete(key)
//     }
// }
// console.log(map)

let obj={a:10}
let map1=new Map()
map1.set(obj,"laxman")
console.log( "Obj before makeing it null",obj)
obj=null;
console.log( "Obj after makeing it null",obj)
console.log(map1)
console.log( "Size of map is ",map1.size)

//Weak map will accept only object as key and objects are unset it will be effected in weakmap not like map
let obj2={a:10}
let wmap=new WeakMap()
wmap.set(obj2,"laxman")
console.log(wmap)
console.log( "Obj before makeing it null",obj2)
obj2=null;
console.log( "Obj after makeing it null",obj2)
for(let ele in wmap)
{
    console.log(ele)
}
console.log(wmap)


//Wekset 
let lax="a:10";
// let wset=new WeakSet()
// wset.add([lax])
// console.log(wset)
// lax=null;
// console.log(wset)

let set1=new Set()
set1.add(lax)
for(element of set1)
{
    console.log(element)
}

lax=null
for(element of set1)
{
    console.log(element)
}



//flatmap
//flat map converts different diamentional arrays into single dimensional array

const productsArray = [
    {
      name: "Shirt",
      variants: [
        { color: "red", size: "S" },
        { color: "blue", size: "M" },
      ],
    },
    {
      name: "Pants",
      variants: [
        { color: "green", size: "L" },
        { color: "black", size: "XL" },
      ],
    },
    {
      name: "Dress",
      variants: [
        { color: "pink", size: "S" },
        { color: "purple", size: "M" },
      ],
    },
  ]
  console.log(productsArray.map((element)=>element.variants))
  console.log(productsArray.flatMap((element)=>element.variants))