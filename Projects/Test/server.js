//import express module
const exp=require("express")

//import dotenv
require("dotenv").config()

//call exp constructor
const app=exp()

//create a server
app.listen(process.env.PORT)

//import Studnet API
const studentApp=require("./routes/students.route")


//Routing part

//Routing to Student API
app.use("/student-api",studentApp)




//Database Part

//import sequelize
const {sequelize}=require("./database/db.config")

//test connection
sequelize.authenticate()
.then(()=>{console.log("Connection Sucess")})
.catch(err=>{console.log("Database connection failed",err)})



//Invalid path middleware
app.use("*",(req,res)=>{
    res.send({message:"Invalid path"})
})

//Error handler middleware
app.use((err,req,res,next)=>{
    res.send({message:"Error occured ",error:err.message})
})