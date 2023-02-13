function Test(a)
{
    console.log(a)
}
Test(100,200)  //No error for any number of parameters,just takes as many it needs and ignore remaining parameters


//Default parameters

function Test(a=1)
{
    console.log(a)
}
Test()


// function sum(...arr)
// {
//     return arr.reduce((element,accumulator)=>element+accumulator)
// }
let sum=(...arr)=>arr.reduce((element,accumulator)=>element+accumulator);  // ...arr is rest parameter takes all parameter except parameters already taken by variables before
console.log(sum(10,20,30,40,50))

function sum1(a,...arr)
{
    console.log(a)
}
sum1(10,20,30)