const express=require("express")
//create miniexpress application or router
const userApp=express.Router()

 //body parser - middleware
userApp.use(express.json()) 

const verifyToken=require("../middlewares/verifyToken")

const {
    getAllUsers,
    getUsersByEmail,
    createUser,
    modifyUser,
    deleteUserByEmpid,loginUser,getProtectedRoutes
}=require("../controllers/users.controller")
//Create Routes(API)

//Route to GET all usres
userApp.get("/users",getAllUsers)

// Route to GET user by email
userApp.get("/user/:empid",getUsersByEmail)

// Insert data
userApp.post("/register-user",createUser)

//Login User
userApp.post("/login-user",loginUser)

//Modify user
userApp.put("/modify-user",modifyUser)

//Delete User
userApp.delete("/delete/:email",verifyToken,deleteUserByEmpid)

  

//Protected routes--uses authorization middleware
userApp.get("/protected",verifyToken,getProtectedRoutes)

//Exporting 
module.exports=userApp