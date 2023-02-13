// let a;
// console.log("type of a is ",typeof(a))
// console.log("Value of a is ",a)
// a=10;
// console.log("type of a is ",typeof(a))
// console.log("Value of a is ",a)
// a="laxman";
// console.log("type of a is ",typeof(a))
// console.log("Value of a is ",a)
// a=true;
// console.log("type of a is ",typeof(a))
// console.log("Value of a is ",a)
// a={'laxman':2}
// console.log("type of a is ",typeof(a))
// console.log("Value of a is ",a)

// let c=2;
// let b=8;
// let res=c**b;
// console.log(res)
// let a=10;
// let b=20;
// let c=30;
// if(a==b && b==c)
// {
//     console.log("All are equal")
// }
// else if(a>b && a>c)
// {
//     console.log(a)
// }
// else if(b>a && b>c)
// {
//     console.log(b)
// }
// else
// {
//     console.log(c)
// }
// for(let i=20;i<30;i++)
// {
//     if(i%2==0)
//     {
//     console.log(i)
//     }
// }


// Functions 

// function findSum(first,second)
// {
//     return first+second;
// }

// console.log(findSum(10,20))


// function bigNumber(a,b,c)
// {
//     if(a==b && b==c)
//     {
//         console.log("All are equal")
//     }
//     else if(a>b && a>c)
//     {
//         console.log(a)
//     }
//     else if(b>a && b>c)
//     {
//         console.log(b)
//     }
//     else
//     {
//         console.log(c)
//     }
// }
// bigNumber(10,20,40)

//Write a function to receive a number as a input and check prime or not

// function prime(number)
// {
//     flag=0;
//     for(let i=2;i<number;i++)
//     {
//         if(number%i==0)
//         {
//             flag=1;
//             break;
//         }
//     }
//     if(flag==0)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(prime(10));

let sum=function(first,second){return first+second};
console.log(sum())

//arrow function

let findSum=(first,second)=>first+second;
console.log(findSum(100,200));

let findit=first=>10*first;

console.log(findSum(100,200));
console.log(findit(10));



function even(number)
{
    if(number%2==0)
    {
        return true;
    }
    else{
        return false;
    }
}
let even1=first=>(first+1)%2;
console.log(even1(9))


