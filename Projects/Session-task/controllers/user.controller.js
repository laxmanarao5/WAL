//import express-asynchandler
const expressAsyncHandler=require("express-async-handler")

//Import User Model
const {User}=require("../database/models/user.model")

exports.test=expressAsyncHandler(async(req,res)=>{
    res.send({message:"User API working fine"})
})

//import bcryptjs
const bcryptjs=require("bcryptjs")

//User registration
exports.registration=expressAsyncHandler(async(req,res)=>{
    await User.create(req.body)
    res.send({message:"User registration sucessfull"})
})

//login
exports.login=expressAsyncHandler(async(req,res)=>{
    let {email,password}=req.body
      //it only accept string
    let result=await User.findOne({where:{
        email:req.body.email
    }})
    if(result!=undefined &&await bcryptjs.compare(password,result.password))
    {
        req.session.email=req.body.email
        res.send({message:"Log in sucess"})
    }
    else
    res.send({message:"Inavalid credentials"})
})

//modify user
exports.updateUser=expressAsyncHandler(async(req,res)=>{
    req.body.email=req.session.email
    await User.update(req.body,{where:{
        email:req.session.email
    }})
    res.send({message:"User Updation sucessfull"})
})

//logout
exports.logout=expressAsyncHandler(async(req,res)=>{
    req.session.destroy(()=>{
        res.send({message:"Logout sucessfull"})
    })
    
}
)
//get users
exports.getUsers=expressAsyncHandler(async(req,res)=>{
    let result=await User.findAll({attributes:{exclude:["password"]}})
    res.send({message:"All users ",payload:result})
})
