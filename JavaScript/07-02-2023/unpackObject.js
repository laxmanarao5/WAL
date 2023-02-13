//Unpacking Array

let arr=[10,20,30,40];
let [a,b,c,d]=[...arr]; //All element
console.log(a,b,c,d)

let [,y,z]=[...arr];  // leave the elements which we don't want
console.log(y,z)

//Unpacking Objects

let Person={
    name:"laxman",
    age:20,
    address:{
        pin:500031,
        city:"Hyd"
    }
}
let {name,age,address}={...Person};
console.log(address)