//import async handler
const expressAsyncHandler=require("express-async-handler")   //module to handle async errors - it will handover async errors to error handler middleware automatically

//import connection object
const connection=require("../database/db.config")

//calling promise method on connection object to make our app support promise
const db=connection.promise()






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
    let {emp_id,emp_name,emp_city,emp_designation,emp_age}=req.body

    //Verifying for duplicates
    let [duplicates]=await db.query("select * from wal_table where emp_id=?",emp_id)
    if(duplicates[0]==undefined)
    {
        //Insert user into database
        await db.query("INSERT INTO wal_table SET emp_id=?,emp_name=?,emp_city=?,emp_designation=?,emp_age=?",
        [emp_id,emp_name,emp_city,emp_designation,emp_age])
        //Sending response
        res.send({message:"user inserted sucessfully"})
    }
    else{
        res.send({message:"User already exists"})
    }    
    
})



//Modify user
const modifyUser=expressAsyncHandler(async(req,res)=>
{
    let {emp_id,emp_name,emp_city,emp_designation,emp_age}=req.body
    //Verifying for duplicates
    let [duplicates]=await db.query("select * from wal_table where emp_id=?",emp_id)
    if(duplicates[0]==undefined)
    {
        res.send({message:"No user found to modify"})
    }
    else{
        await db.query("UPDATE wal_table SET emp_id=?,emp_name=?,emp_city=?,emp_designation=?,emp_age=? WHERE emp_id=?",
                [emp_id,emp_name,emp_city,emp_designation,emp_age,emp_id])
        res.send({message:"User details modified sucessfully"})
    }

})

    


//Delete user by email
const deleteUserByEmpid=expressAsyncHandler(async(req,res)=>{
    let empidFromUrl=(+req.params.empid);
    let [duplicates]=await db.query("select * from wal_table where emp_id=?",empidFromUrl)
    if(duplicates[0]==undefined)
    {
        res.send({message:"No user found to delete"})
    }
    else{
            await db.query("DELETE FROM wal_table WHERE emp_id=?",empidFromUrl)
            res.send({message:"User deleted sucessfully"})
        }
    })
   




module.exports={
    getAllUsers,
    getUsersByEmail,
    createUser,
    modifyUser,
    deleteUserByEmpid
}