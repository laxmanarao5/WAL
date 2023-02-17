//import async handler
const expressAsyncHandler=require("express-async-handler")   //module to handle async errors - it will handover async errors to error handler middleware automatically

//import connection object
const connection=require("../database/db.config")

//calling promise method on connection object to make our app support promise
const db=connection.promise()

//import bcryptjs
const bcryptjs=require("bcryptjs")

require("dotenv").config()

const jwt=require("jsonwebtoken")

//Get All Users
const getAllUsers=expressAsyncHandler(async(req,res)=>{ 
    //get data from database
    let [result,fields]= await db.query("SELECT * FROM wal_table")  //it return a promise with array of two objects - database records and columns info
    //send response
    res.send({message:"Data fetched sucessfully",payload:result})
})


//Get users by empid
const getUsersByEmail=expressAsyncHandler(async(req,res)=>{  
    //Get parameter from URL  
    let empidFromUrl=(+req.params.empid)
    //Fetch data from database
    let [result,fiels]=await db.query("select * from wal_table where emp_id=?",empidFromUrl)
    //send response
    res.send({message:"Data fetched sucessfully",payload:result})
    })

    
//Create user
const createUser=expressAsyncHandler(async(req,res)=>{
    //Unpacking data received from body of POST request
    let {username,password,email}=req.body
    //Verifying for duplicates
    let [duplicates]=await db.query("select * from users where email=?",email)
    if(duplicates[0]==undefined)
    {
        let hashedPassword=await bcryptjs.hash(password,3)
        //Insert user into database
        await db.query("INSERT INTO users SET username=?,password=?,email=?",
        [username,hashedPassword,email])
        //Sending response
        res.status(201).send({message:"user inserted sucessfully"})
    }
    else{
        res.status(409).send({message:"User already exists"})
    }    
    
})

//Login User
const loginUser=expressAsyncHandler(async(req,res)=>{
    //get user credentials from request
    let {email,password}=req.body;
    //verify username
    let [userRecord]=await db.query("SELECT * FROM users WHERE email=?",email)
    if(userRecord.length===0)
    res.status(422).send({message:"Email Id not registered with us"})
    else{
        if(await bcryptjs.compare(password,userRecord[0].password)){//verify password
            let signedToken=jwt.sign({email:email},process.env.SECRET_KEY,{expiresIn:180})
            //delete password from 
            delete userRecord[0].password
            res.send({message:"Login sucess",token:signedToken,user:userRecord[0]})
        }
        else
            res.status(401).send({message:"Password didn't match"})
    }
    
   
})

//Modify user
const modifyUser=expressAsyncHandler(async(req,res)=>
{
    let {emp_id,emp_name,emp_city,emp_designation,emp_age}=req.body
    //Verifying for duplicates
    let [duplicates]=await db.query("select * from users where emp_id=?",emp_id)
    if(duplicates[0]==undefined)
    {
        res.send({message:"No user found to modify"})
    }
    else{
        await db.query("UPDATE users SET emp_id=?,emp_name=?,emp_city=? WHERE emp_id=?",
                [emp_id,emp_name,emp_city,emp_designation,emp_age,emp_id])
        res.send({message:"User details modified sucessfully"})
    }

})

    


//Delete user by email
const deleteUserByEmpid=expressAsyncHandler(async(req,res)=>{
    let empidFromUrl=req.params.email;
    let [duplicates]=await db.query("select * from users where email=?",empidFromUrl)
    if(duplicates[0]==undefined)
    {
        res.send({message:"No user found to delete"})
    }
    else{
            await db.query("DELETE FROM users WHERE email=?",empidFromUrl)
            res.send({message:"User deleted sucessfully"})
        }
    })
   

    
const getProtectedRoutes=(req,res)=>{
        res.send({message:"Protected route"})
        console.log(req.headers);
    }


module.exports={
    getAllUsers,
    getUsersByEmail,
    createUser,
    modifyUser,
    deleteUserByEmpid,
    loginUser,
    getProtectedRoutes
}