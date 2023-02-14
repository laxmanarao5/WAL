const express=require("express")
//create miniexpress application or router
const userApp=express.Router()

 //body parser - middleware
userApp.use(express.json()) 

const {
    getAllUsers,
    getUsersByEmail,
    getUsersByEmailAndUsername,
    createUser,
    modifyUser,
    deleteUserByEmpid
}=require("../controllers/users.controller")
//Create Routes(API)

//Route to GET all usres
userApp.get("/users",getAllUsers)

// Route to GET user by email
userApp.get("/user/:empid",getUsersByEmail)

//Get users bu email and username
userApp.get("/user/email/:email/username/:username",getUsersByEmailAndUsername)

// Insert data
userApp.post("/create-user",createUser)

userApp.put("/modify-user",modifyUser)

//Delete User
userApp.delete("/delete/:empid",deleteUserByEmpid)

//Exporting 
module.exports=userApp