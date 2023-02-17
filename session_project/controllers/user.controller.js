//import express-session

require("dotenv").config()
const connection=require("../database/db.config")
//configure express session
const expressAsyncHandler=require("express-async-handler")
const db=connection.promise()
const bcryptjs= require("bcryptjs")
const userApp = require("../routes/user.route")

// //import express-session
// const session=require("express-session")
// //import mysql driver for session store
// const MysqlSessionStore=require("express-mysql-session")(session)

// const sessionStore=new MysqlSessionStore({},connection.promise())  //MysqlSessionStore expect connection should return promise 

// userApp.use(session({
//     secret:process.env.SECRET_KEY,
//     saveUninitialized:false,    //if it is true a new record will be crreated upon calling even session is not set with user info
//     resave:false,  //target environment support linux command touch
//     store:sessionStore,
//     cookie:{
//         maxAge:100000
//     }
// }))




//Registration

const registerUser=expressAsyncHandler(async(req,res)=>{
    const {name,email,password}=req.body
    let [result]=await db.query("SELECT * FROM users WHERE email=?",email)
    if(result[0]==undefined)
    {
        let hashedPassword=await bcryptjs.hash(password,3)
        await db.query("INSERT INTO users SET name=?,email=?,password=?",[name,email,hashedPassword])
        res.send({message:"Registration sucessfull"})
    }
    else{
        res.send({mesasge:"email already registered with us"})
    }


})

//login
const login=async(req,res)=>{
    let {email,password}=req.body
      //it only accept string
    let [result]=await db.query("SELECT * FROM users WHERE email=?",email)
    if(result[0]!=undefined &&await bcryptjs.compare(password,result[0].password))
    {
        req.session.email=email
        req.session.pageView=1
        res.send({message:"Log in sucess"})
    }
    else
    res.send({message:"Inavalid credentials"})
}


//update
const modifyUser=async(req,res)=>{
    const {name,email,password}=req.body
    if(req.session.email!=undefined && req.session.email==email)
    {
        let hashedPassword=await bcryptjs.hash(password,3)
        await db.query("UPDATE users SET name=?,email=?,password=?",[name,email,hashedPassword])
        res.send({message:"Updation Sucessfull sucessfull"})
    }
    else{
        res.send({mesasge:"Please login again to continue"})
    }
}

//logout
const logout=(req,res)=>{
    req.session.destroy()
    res.send({message:"Logout sucessfull"})
}

module.exports={registerUser,login,modifyUser,logout}