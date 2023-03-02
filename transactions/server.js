//import express
const exp=require("express")

const app=exp()

//import dotenv
require("dotenv").config()

//create server
app.listen(process.env.PORT || 90)

//Test db connection
const {sequelize}=require("./database/db.config")
sequelize.authenticate()
.then(()=>console.log("Connection sucess"))
.catch(err=>console.log("Error occured : ",err))

//crate tables
sequelize.sync()

//Working with API

//import customer API
const customerApp=require("./routes/customers.route")

//routing to custome API
app.use("/customer-api",customerApp)

//Invalid path middleware
app.use("*",(req,res)=>{
    res.send({message:"Invalid path"})
})

//Error handler middleware
app.use((err,req,res,next)=>{
    res.send({message:"error occured",error:err.message})
})
