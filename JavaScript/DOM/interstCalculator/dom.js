
let btn=document.querySelector(".add")
let ans=document.querySelector(".ans")
let warn=document.querySelector(".warning")
let interest=()=>{
    let amount=document.querySelector(".principle")
let inter=document.querySelector(".interest")
let years=document.querySelector(".period")
let months=document.querySelector(".period2")
    let result=(+amount.value)/100
    console.log(months.value)
    if(months.value=="" && years.value=="")
    {
        warn.textContent="Please Enter Time in Months Or Years"
        warn.style.color="red"
    }
    else if(months.value!="" && years.value!="")
    {
        warn.textContent="Please Enter Only in Months Or Years"
        warn.style.color="red"
    }
    else{
            if(months.value=="")
        {
            result*=(+inter.value)*(+years.value)
        }
        else
        {
            result*=((+inter.value)/12)*(+months.value)
        }
        ans.textContent=result
    }
    

}
btn.addEventListener("click",interest)