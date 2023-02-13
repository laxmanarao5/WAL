let btn1=document.querySelector(".btn1");
//Timer functions
function heavy()
{
    console.log("Hello")
    // for(let i=1;i<100000000;i++)
    // {

    // }
    let ref=setTimeout(()=>{  //settimeout call the callback function after timeout
        
        for(let i=1;i<10000;i++)
    {
        console.log("Heavy task is performing")

    }
    console.log("Heavy task completed")
    })
    console.log("Hello World")
}

btn1.addEventListener('click',heavy);

//Timer functions


console.log("Hello")

setInterval(()=>{
    console.log("Set Interval")
},1000)

