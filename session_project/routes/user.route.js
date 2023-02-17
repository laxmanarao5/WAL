const exp=require("express")

const userApp=exp.Router()


userApp.use(exp.json())

const connection=require("../database/db.config")
//import express-session
const session=require("express-session")
//import mysql driver for session store
const MysqlSessionStore=require("express-mysql-session")(session)

const sessionStore=new MysqlSessionStore({},connection.promise())  //MysqlSessionStore expect connection should return promise 


//configure express session

userApp.use(session({
    secret:process.env.SECRET_KEY,
    saveUninitialized:false,    //if it is true a new record will be crreated upon calling even session is not set with user info
    resave:false,  //target environment support linux command touch
    store:sessionStore,
    cookie:{
        maxAge:100000
    }
}))

const {registerUser,login,modifyUser,logout}=require("../controllers/user.controller")


//registration
userApp.post("/register",registerUser)

//login 
userApp.post("/login",login)

//modifyuser
userApp.put("/update",modifyUser)


//logout
userApp.get("/logout",logout)






module.exports=userApp