let first=document.querySelector(".firstNumber")
let add=document.querySelector(".add")
let ans=document.querySelector(".ans")
let addition=()=>{
    let number=(+first.value);
    flag=1
    for(let i=2;i<number;i++)
    {
        
        if(number%i==0)
        {
            flag=0
            break
        }
    }
    let para=document.createElement("h3")
    
    if(flag==0 || number==1 || number==0)
    {
        ans.textContent="Not Prime number"
    }
    else{
        ans.textContent="Prime number"
    }

}

add.addEventListener("click",addition)