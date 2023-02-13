let condition=false;
let condition2=false;
let meet=new Promise((resolved,rejected)=>{
    setTimeout(()=>{
        if(condition==true)
        {
            resolved("Waiting for you")
        }
        else{
            rejected("meet you some other time")
        }
    },5000)
})
let buyPopcorn=new Promise((resolved,rejected)=>{
    setTimeout(()=>{

        if(condition2==true)
        {
            resolved("kindly have popcorn")
        }
        else{
            rejected("---------------------")
        }
    },10000)
})
meet.then((message)=>{
        console.log(message)
        return buyPopcorn;
}).then((message)=>{

    console.log(message)
    console.log("Task Completed")
}).catch((error)=>{
    console.log(error)
    if(error=="meet you some other time")
    {
        return buyPopcorn;
    }
    
}).catch((err)=>{
    console.log()
})