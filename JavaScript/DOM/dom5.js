let dataFetch=async()=>{
    try{
        let response=await fetch("https://reqres.in/api/users?page=1")
        let data= await response.json()
        let page=document.querySelector(".page")
        let total=document.querySelector(".total")
        let perPage=document.querySelector(".perPage")
        page.innerHTML+=`<p>${data.page}</p>`
        total.innerHTML+=`<p>${data.total}</p>`
        perPage.innerHTML+=`<p>${data.per_page}</p>`
        let container=document.querySelector(".container")
        for (element of data.data)
        {
        container.innerHTML+=`<div class="card">
        <img src="${element.avatar}" class="image">
        <p>${element.first_name+element.last_name}</p>
        <p>${element.email}</p>
        </div>`
        }
    }
    catch(err)
    {
        console.log("Error in loading the page")
    }
}
dataFetch()