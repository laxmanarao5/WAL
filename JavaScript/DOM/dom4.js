let dataFetch=async(page1)=>{
    try{
        let url="https://reqres.in/api/users?page=";
        let response=await fetch(url+page1)
        let data= await response.json()
        console.log(data)
        let page=document.querySelector(".page")
        let total=document.querySelector(".total")
        let perPage=document.querySelector(".perPage")

        page.innerHTML=`<p>Page:${data.page}</p>`
        total.innerHTML=`<p>Total:${data.total}</p>`
        perPage.innerHTML=`<p>Per Page:${data.per_page}</p>`
        let container=document.querySelector(".container")
        container.innerHTML=""
        for (element of data.data)
        {
        container.innerHTML+=`<div class="card">
        <img src="${element.avatar}" class="image">
        <p>${element.first_name+element.last_name}</p>
        <p>${element.email}</p>
        </div>`
        }
        
        // let tableData=document.querySelector(".tableData")
        // for(let post of data)
        //     {
        //         tableData.innerHTML+=`<tr><td>${post.userId}</td><td>${post.id}</td><td>${post.title}</td><td>${post.body}</td></tr`
        //     }
    }
    catch(err)
    {
        console.log("Error in loading the page")
    }
}
dataFetch('1')
let btn1=document.querySelector(".page1")
let btn2=document.querySelector(".page2")

btn1.addEventListener("click",()=>dataFetch('1'))
btn2.addEventListener("click",()=>dataFetch('2'))