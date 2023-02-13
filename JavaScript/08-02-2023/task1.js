
//Movie release date announced by SS Rajamouli
let condition=false;
let obj=new Promise((resolved,rejected)=>{
    setTimeout(()=>{
        if(condition==true)
        {
            resolved("Movie released ")
        }
        else{
            rejected("Movie Postponed, As the postproduction work is pending")
        }
    },5000)
})
obj.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.log(error)
})