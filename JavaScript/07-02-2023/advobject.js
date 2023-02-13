// let a=10;
// console.log(a)
// a+10;     // Primitive datatypes are immutable
// console.log(a)
// a=a+10;   //a wiil be refer to new memory location where updated value stored, old data is collected by garbage collector
// console.log(a)


// let a=10;
// let b=10;
// //Create copy
// let c=a;
// console.log("C before change of a : ",c);
// console.log(a)
// a=a+10;
// console.log("C after change of a : ",c);
// console.log(a)

// let obj={
//     a:10,
//     b:20
// }
// console.log(obj)
// obj.c=30;
// console.log(obj)


// // Creating copy of object

// let copyObject=obj;
// obj.d=40;
// console.log(obj)
// console.log(copyObject)  //creating a copy is not possible with assignment operator as reference variable only duplicated 

// let obj={
//     a:10,
//     b:20
// }
// let obj2={
//     a:10,
//     b:20
// }
// console.log(obj==obj2)  // Obj and obj2 are referring to different locations hence false
// let obj3=obj2;
// console.log(obj3==obj2)     

// Creating Copy of objects

// let obj={
//     a:10,
//     b:20
// }
// let obj2={
//     d:30
// }
// let copyObject=Object.assign({},obj) //Old Method
// console.log(obj)
// console.log(copyObject)
// obj.c=30;
// console.log(obj)
// console.log(copyObject)
// console.log(obj==copyObject)

// let copyObject={...obj};    // New approach of creating copy of object
// let copyObject2={...obj,obj2}; 
// console.log(obj)
// console.log(copyObject)
// console.log(copyObject2)
// obj.c=30;
// console.log(obj)
// console.log(copyObject)
// console.log(obj==copyObject)

// let arr=[10,20,30];
// let copyArr={...arr};
// console.log(copyArr)
// // Shallow copy



let obj={
    eno:100,
    username:"ravi",
    skills:["Java","ReactJS"],
    address:{
        street:"miyapur",
        city:"hyderabad"
    }
}

//let copyObject={...obj};   //Shallow copy - nested objects are not yet duplicated
let copyObject=JSON.parse(JSON.stringify(obj)); //Deep copy

// Object is converted to string and then again parsed into new Object
console.log("Object : ",obj)
console.log("Copy : ",copyObject)

obj.address.pin=532429;
console.log("Object : ",obj)
console.log("Copy : ",copyObject)





