// Creating a Server


require("dotenv").config()
//import express module
const express=require("express")  
//create a variable store express function
const app=express()
//Assign port
let port=process.env.PORT||80
app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})


//Connecting to database by importing connection file
const connection=require("./database/db.config")

connection.connect((err)=>{
    if(err)
    {
        console.log("Connection failed ",err)
    }
    else
    {
        console.log("Connection to Database success")
    }
})



// Working with USER_API

//import API
const userApp=require("./routes/users.routes")

//Routing to API with common path 
app.use("/user",userApp)


//Working with products API

//import products API
const productApp=require("./routes/products.routes")

//Routing products API
app.use("/products",productApp)


//import projets API
const projectApp=require("./routes/project.routes")

//Routing projects API
app.use("/projects",projectApp)

//Stoping server
app.get("/stopServer",()=>{
    process.exit()
})

// Working with common Middlewares 

//Handle invalid path   it should be at last of file
app.use("*",(req,res,next)=>{
    res.send({message:"Invalid path"})
})
//Error handling middleware if any error express will send error object to error handling middleware
app.use((err,req,res,next)=>{
    res.send({message:"Error occured",error:err.message})
})