let arr=[10,20,30,6,-12,45];
// for(element of arr)
// {
//     if(element<30)
//     {
//         console.log(element)
//     }
// }



//Filter  Method
// Modification not alloowed in filter method

let result=arr.filter(element=>element<30);
console.log(result)

let result1=arr.filter(element=>element>20 && element<50);
console.log(result1)

//Map Method
let result3=arr.map(element=>element+10);
console.log(result3)

let result4=arr.map(element=>element<10);
console.log(result4)     // Map cannot be used for selection , only used for modification


let searchElement=arr1.find(element=>element==20);
console.log(searchElement)

let searchElement1=arr1.findIndex(element=>element==20);
console.log(searchElement1)


//reduce method
// In first iteration reduce takes two elements from array and on next turn it takes element by element and accumulator -last result
console.log(arr1.reduce((element,accumulator)=>element+accumulator))
console.log(arr1.reduce((element,accumulator)=>element<accumulator?element:accumulator))
console.log(arr1.reduce((element,accumulator)=>element>accumulator?element:accumulator))