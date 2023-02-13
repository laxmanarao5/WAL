const express=require("express")
//create miniexpress application or router
const userApp=express.Router()

 //body parser - middleware
 userApp.use(express.json()) 

//Sample data
let users=[
    {
        username:"laxman",
        email:"lakshmana5296@gmail.com",
        age:20
    },
    {
        username:"deepthi",
        email:"deepthi@gmail.com",
        age:21
    }
];


//Middleware 
//Middlewares executed between http request and request handlers
// For any request middlewares and routes can access the req and res

const middleware1=(req,res,next)=>{
    console.log("Middleware 1 executed")
    next()
}
const middleware2=(req,res,next)=>{
    console.log("Middleware 2 executed")
    next()
}


//make middleware work with every request - Application level middleware
userApp.use(middleware1)

//We can add middlewares to specific route by adding middlewares between path and request handlers


//Create Routes(API)


//Route to GET all usres
userApp.get("/users",middleware2,(req,res)=>{ // add middleware before request handlers
    res.send({message:"users Data",payload:users}) //send method will convert javaScript object to json format
})
// Route to GET user by email
userApp.get("/user/:email",(req,res)=>{    // : seperates path and url parameters
    let emailFromUrl=req.params.email    //param return object parameter as key and url as value
    let userInfo=users.find(userObject=>userObject.email===emailFromUrl)
    if(userInfo==undefined)
    {
        res.send({message:"User not found"})
    }
    else{
        res.send({message:"user found",payload:userInfo})
    }
})


userApp.get("/user/email/:email/username/:username",(req,res)=>{
    //
    let emailFromUrl=req.params.email;
    let usernameFromUrl=req.params.username;
    let userInfo=users.find(userObject=>userObject.email===emailFromUrl && userObject.username===usernameFromUrl)
    if(userInfo==undefined)
    {
        res.send({message:"User not found"})
    }
    else{
        res.send({message:"user found",payload:userInfo})
    }
})





// Insert data
userApp.post("/create-user",(req,res)=>{
    let newuser=req.body;
    let flag=users.find((element)=>element.username==newuser.username)
    if(flag==undefined)
    {
    users.push(newuser)
    console.log(newuser)
    res.send({message:"New User added sucessfully"})
    }
    else
    {
        res.send({message:"User already exists"})
    } 
    
})


//User details update

//read the data from response body
//serach for the user in Users object using findindex method
//if user exists update user with splice method
//else send response user not found (if index is -1)


userApp.put("/modify-user",(req,res)=>{

    let userInfo=req.body
    let indexOfUser=users.findIndex((userObject)=>userObject.email===userInfo.email)
    if(indexOfUser===-1)
    {
        res.send({message:"User not found"})
    }
    else
    {
        users.splice(indexOfUser,1,userInfo)
        res.send({message:"User modified sucessfully"})
    }
})


//Delete User


userApp.delete("/delete/:email",(req,res)=>{
    let userEmailFromUrl=req.params.email;
    let indexOfUser=users.findIndex(userObject=>userObject.email===userEmailFromUrl)
    if(indexOfUser===-1)
    {
        res.send({message:"User not found"})
    }
    else
    {
        users.splice(indexOfUser,1)
        res.send({message:"User Deleted sucessfully"})
    }
})



//Exporting 
module.exports=userApp