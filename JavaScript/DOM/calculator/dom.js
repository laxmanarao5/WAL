let first=document.querySelector(".firstNumber")
let second=document.querySelector(".secondNumber")
let add=document.querySelector(".add")
let sub=document.querySelector(".sub")
let mul=document.querySelector(".mul")
let div=document.querySelector(".div")
let ans=document.querySelector(".ans")

let addition=()=>{
    ans.textContent=(+first.value)+(+second.value)

}
let subs=()=>{
    ans.textContent=(+first.value)-(+second.value)

}
let mult=()=>{
    ans.textContent=(+first.value)*(+second.value)

}
let divi=()=>{
    ans.textContent=(+first.value)/(+second.value)

}
add.addEventListener("click",addition)
sub.addEventListener("click",subs)
mul.addEventListener("click",mult)
div.addEventListener("click",divi)