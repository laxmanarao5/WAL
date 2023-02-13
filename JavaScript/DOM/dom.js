//Accessing eleemnts from DOM
let light=document.querySelector(".light-theme");
let dark=document.querySelector(".dark-theme");

let body=document.querySelector("body");
let text=document.querySelector(".text");
let text2=document.querySelector(".text-second");
let heading=document.querySelector(".heading1");
let second=document.querySelector(".second");
console.log(dark)
dark.addEventListener('click',()=>{
    body.style.backgroundColor="#000";
    text.style.color="#fff";
    heading.style.color="#fff";
    text2.style.color="#fff"
    text2.style.backgroundColor="rgb(81, 87, 100)"
    

})
light.addEventListener('click',()=>{
    body.style.backgroundColor="#fff";
    text.style.color="#000";
    heading.style.color="#000";
    text2.style.color="#000"
    text2.style.backgroundColor="rgb(40, 86, 192)"
    

})

