let ref=setInterval(()=>{
    console.log("setInterval of 2 Sec called")
},2000)

let ref1=setInterval(()=>{
    console.log("setInterval of 4 sec called")
},4000)
// let ref2=setTimeout(()=>{
//     console.log("setTimeout called")
// },1000)

function stopFirst()
{
    clearInterval(ref)
}
function stopSecond()
{
    clearInterval(ref1)
}
let btn1=document.querySelector(".first").addEventListener("click",stopFirst)
let btn2=document.querySelector(".second").addEventListener("click",stopSecond)