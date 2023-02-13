let dataFetch=async()=>{
    try{
        let response=await fetch("https://jsonplaceholder.typicode.com/posts")
        let data= await response.json()
        console.log(data)
        let tableData=document.querySelector(".tableData")
        for(let post of data)
            {
                tableData.innerHTML+=`<tr><td>${post.userId}</td><td>${post.id}</td><td>${post.title}</td><td>${post.body}</td></tr`
            }
    }
    catch(err)
    {
        console.log("Error in loading the page")
    }
}
dataFetch()