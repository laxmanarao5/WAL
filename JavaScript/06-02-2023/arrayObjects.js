// let arr=[10,20,30];
// console.log(arr[2])
// for(let index=0;index<arr.length;index++)
// {
//     console.log(arr[index])
// }




///For of Loop 


// for(element of arr)
// {
//     console.log(element)
// }


//console.log(arr)


// let person={
//     name:"laxman",
//     eid:588
// }
// console.log(person)
// console.log(person.name) //Dot operator
// console.log(person['name'])

// // Add a new property
// person.mobile=8367027220;
// console.log(person)

// //Update a proeperty
// person.name="Laxmana Rao";
// console.log(person)

// //delete a property
// delete person.mobile;  //can delete only a specific property but can't delete object
// console.log(person)

// //Iterate an object

// for(x in person)
// {
//     console.log(x," : ",person[x])
// }


let arr1=[10,20,30,6,-12,45];
arr1.forEach((element,index)=>
{
    console.log(index,":",element)
})


let arr=[10,20,30,40];
console.log(arr)
console.log(arr.length)
arr.unshift(1,2,5);  //Add element at begining ,return length of array
console.log(arr)
console.log(arr.length)

arr.push(50,60,70);  //Append elements at last
console.log(arr)
console.log(arr.length)

//Add elements at specific index 

console.log(arr.splice(4,0,15,16,17));  //index,noOfElemntsToBeDeleted,element1,element2,...
console.log(arr)
console.log(arr.length)


//Delete eleemts fro array

console.log(arr.shift()); //Delete at begining
console.log(arr.pop()); // Delete at end of array
console.log(arr.splice(2,3));    //index,noOfElemntsToBeDeleted  , returns deleted eleements
console.log(arr)
console.log(arr.length)


//Update an element in array
console.log(arr)
console.log(arr.length)
arr.splice(2,1,100);
console.log(arr)
console.log(arr.length)


//Task 