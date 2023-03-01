//import express
const exp=require("express")
const app=exp()

//import environment variable
require("dotenv").config()

app.listen(process.env.PORT||80,()=>{
    console.log(`Listening to port ${process.env.PORT}`);
})


//Import User API
const userApp=require("./routes/user.route")

//Routing to user API
app.use("/user-api",userApp)


//Test DB connection
const {sequelize}=require("./database/db.config")

sequelize.authenticate().then(()=>{
    console.log("connection to database sucess")
}).catch(err=>console.log("error : ",err))

//Call Sync method on sequelize to create tables in database
sequelize.sync()


//Invalid path middleware
app.use("*",(req,res)=>{
    res.send({message:"Invalid path"})
})
//Error handling middleware
app.use((err,req,res,next)=>{
    res.send({message:"Error occured : ",error:err.message})
})