// //Named Export  
// export let b=20;
// export let c="Hello";


// let a=10;
// export default {a,b,c}; //default export 

export let obj={
    name:"laxman",
    age:20
}
export let test=function()
{
    console.log("Test function from module 1 called")
}
export default {obj,test};

export let arr=[10,20,30,40,50]
