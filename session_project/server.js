const exp=require("express")
const app=exp()
app.listen(3000,()=>console.log("server is running on port 3000"))

require("dotenv").config()

const connection=require("./database/db.config")
const db=connection.promise()
const bcryptjs= require("bcryptjs")
//registration
const userApp=require("./routes/user.route")

app.use("/user",userApp)



connection.connect((err)=>{
    if(err)
    console.log("some error",err)
    else
    console.log("connection success")
})

//body-parser
app.use(exp.json())


//test route
app.get("/test",(req,res)=>{
    console.log(req.headers);
    //making the route protected by verifying session info
    //req.session.user!=undefined?res.send({message:req.session.user}):res.send({message:"Unautherised"})
    req.headers.cookie==undefined?res.send({message:"unauthorised access"}):req.session.user!=undefined?res.send({message:req.session.user}):res.send({message:"relogin"})
})

app.get("/index",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
})
