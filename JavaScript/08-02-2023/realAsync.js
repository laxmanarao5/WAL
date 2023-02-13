let getDataFromApi=()=>{
//    fetch('https://jsonplaceholder.typicode.com/posts').then(response=>response).then((data)=>{
//     console.log(data)
//    })
//    let data=fetch('https://jsonplaceholder.typicode.com/posts').then(response=>response.json()).then(data=>{
//     for(post of data)
//     {
//         if(post.id>=45 && post.id<=50){

//             console.log(post)
//         }
        
//     }
//    })
//    console.table(data)

   let data1=fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(data=>{
    console.log(data.filter(user=>user.company.name=="Romaguera-Jacobson" || user.company.name=="Romaguera-Crona"))
   })

}
// getDataFromApi()

//Modern approach
let test=async()=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/users')    //Fetch returns promise ,we need wait until the data is completely received because it is async opeation so we need to add await
    let data=await response.json()                                            // json function returns promise, we need to wait until it completes as it is a blocking operation
    console.table(data.filter(user=>user.company.name=="Romaguera-Jacobson" || user.company.name=="Romaguera-Crona"))
    let response1=await fetch('https://jsonplaceholder.typicode.com/posts')
    let data1=await response1.json()
    console.table(data1.filter(post=>post.id>45 && post.id<50))
}
test()