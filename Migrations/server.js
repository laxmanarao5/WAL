//import express
const exp=require("express")
const app=exp()
app.listen(80)
//import dotenv
require("dotenv")


const expressAsyncHandler=require("express-async-handler")

const {DataTypes}=require("sequelize")
const sequelize=require("./models/index").sequelize

app.use(exp.json())

// const sequelize=db.sequelize
//import model

const Student=require("./models/student")(sequelize,DataTypes)

app.post("/user",expressAsyncHandler(async(req,res)=>{

    await Student.create(req.body)
    res.send({message:"User Inserted Sucessfully"})
}))


app.use("/students",expressAsyncHandler(async(req,res)=>{
    let result=await Student.findAll()
    res.send({message:"All Students",payload:result})
}))


//Error handler
app.use((err,req,res,next)=>{
    res.send({message:err.message})
})