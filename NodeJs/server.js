// Creating a Server

//import express module
const express=require("express")  
//create a variable store express function
const app=express()
//Assign port
app.listen(80,()=>{
    console.log("Listening to port 80")
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


// Working with common Middlewares 

//Handle invalid path   it should be at last of file
app.use("*",(req,res,next)=>{
    res.send({message:"Invalid path"})
})
//Error handling middleware if any error express will send error object to error handling middleware
app.use((err,req,res,next)=>{
    res.send({message:"Error occured",error:err.message})
})