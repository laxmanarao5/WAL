

//import express
const exp=require("express")

//call Router method
userApp=exp.Router()

//body-parser
userApp.use(exp.json())

//protected middleware
const {protectedRoute}=require("../middlewares/protected.middleware")

//Session Part

//import express-session
const session=require("express-session")

//import sequelize
const {sequelize}=require("../database/db.config")

const expressSession = require('express-session');
const SessionStore = require('express-session-sequelize')(expressSession.Store);
 
const Sequelize = require('sequelize');

const sequelizeSessionStore = new SessionStore({
    db: sequelize,
});
 


//session configuration
userApp.use(expressSession({
    secret:process.env.SECRET_KEY,
    saveUninitialized:false,
    resave:false,
    store: sequelizeSessionStore,
    saveUninitialized: false,
    cookie:{
        maxAge:5000
    }

}));

//import controllers
const {test,registration,getUsers,login,updateUser,logout}=require("../controllers/user.controller")

//Test route
userApp.get("/test",test)

//user registration
userApp.post("/register",registration)

//login
userApp.post("/login",login)

//Update user info
userApp.put("/user",protectedRoute,updateUser)

//logout
userApp.get("/logout",logout)
//get users
userApp.get("/users",getUsers)


//Export user API
module.exports=userApp