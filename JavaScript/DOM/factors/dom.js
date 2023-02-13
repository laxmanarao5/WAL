let first=document.querySelector(".firstNumber")
let add=document.querySelector(".add")
let ans=document.querySelector(".ans")
let addition=()=>{
    let number=(+first.value);
    ans.innerHTML=""
    for(let i=1;i<=number;i++)
    {
        if(number%i==0)
        {
            let para=document.createElement("h3")
            para.textContent=i
            ans.append(para)
        }
    }

}

add.addEventListener("click",addition)