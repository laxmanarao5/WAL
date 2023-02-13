let container=document.querySelector(".container")


let btn=document.querySelector(".btn")
let btn2=document.querySelector(".btn2")
btn.addEventListener("click",()=>{
    
    let para=document.createElement("p")
    para.textContent="This Para graph added by JavaScript"
    container.append(para)
})

let test=(a)=>{
    console.log(a)
}

btn2.addEventListener("click",()=>test(10))
//For parametrized functions as a argument we should call our function inside arrow function
let arr=[10,20,30,40,50]

let users=[
    {username:"laxman",
    email:"lakshmana5296@gmail.com",
    age:20},{username:"Deepthi",
    email:"deepti@gmail.com",
    age:21},{username:"laxman",
    email:"lakshmana5296@gmail.com",
    age:20},{username:"Deepthi",
    email:"deepti@gmail.com",
    age:21},{username:"laxman",
    email:"lakshmana5296@gmail.com",
    age:20},{username:"Deepthi",
    email:"deepti@gmail.com",
    age:21}
]


// for(element of arr)
// {

//     //create element
//     let heading=document.createElement("h2")
//     //add eleemnt to eleemnt
//     heading.textContent=element
//     heading.style.color="blue"
//     //add element to 
//     container.append(heading)
// }


let tableData=document.querySelector(".tableData")
// for(let user of users)
// {
//     let tr=document.createElement("tr")
//     let td1=document.createElement("td")
//     let td2=document.createElement("td")
//     let td3=document.createElement("td")
//     td1.textContent=user.username
//     td2.textContent=user.email
//     td3.textContent=user.age
//     tr.append(td1)
//     tr.append(td2)
//     tr.append(td3)
//     tableData.append(tr)
// }

let deleteRow=()=>{
    for(let user=0;user<users.length;user++)
{
    let tr=document.createElement('tr');
    tr.innerHTML+=`<td>${users[user].username}</td><td>${users[user].email}</td><td>${users[user].age}</td>`;
    let td=document.createElement('td')
    let button=document.createElement('button')
    button.textContent="Delete"
    td.append(button)
    tr.append(td)
    tableData.append(tr)
    button.addEventListener('click',()=>{
        tr.remove()
    users.splice(user,1)
    console.log(users)

    })
}
}
deleteRow();
let a="Laxman";

container.innerHTML=`<div><h2>${a}</h2></div>`;  //With the help of innerhtml we can directly add html elements to webpage