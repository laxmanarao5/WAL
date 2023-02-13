
//in web browser open inspect and then sources and select js file and set break points and select resume to observe the execution in each step


// Error Handling

try{
    console.log(a)
}
catch(error)
{
    console.error("Error :  ",error)
}
finally{
    console.log("Finally executed")
    // To disconnect connection to db,api etc,clean the code,Close files that are open to read - clean up operations
}

let arr=[10,20,30,40];
let result=arr.filter(element=>element+20);
console.log(result)



try{
    let a;
    if(a==undefined)
    {
        throw new Error("a must be initialized")
    }
    console.log(a)
}
catch(error)
{
    console.error("Error :  ",error)
    console.error("Error :  ",error.message) // To print only error discription
}


try{
    let a=17;
    if(a<19)
    {
        throw new Error("age must be minimum 18 years old")
    }
    console.log(a)
}
catch(error)
{
    console.error("Error :  ",error.message) // To print only error discription
}