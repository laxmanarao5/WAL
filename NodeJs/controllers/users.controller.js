//import connection object

const connection=require("../database/db.config")

//Get All Users
const getAllUsers=(req,res)=>{ 
    //get data from database

    //Old Approach
    connection.query("SELECT * FROM wal_table",(err,result)=>{
        console.log(result)
        if(err){
            console.log("Error fetching data",err)
            res.send({message:err.message})
        }
        else{
            res.send({message:"Data fetched sucessfully",payload:result})
        }
    })


    // let result =await connection.execute("SELECT * FROM wal_table")
    // res.send({message:"data fetched sucessfully",payload:result})
}

//Get users by email
const getUsersByEmail=(req,res)=>{    
    let empidFromUrl=(+req.params.empid)
    connection.query("select * from wal_table where emp_id=?",empidFromUrl,(err,result)=>{
        console.log(result)
        if(err){
            console.log("Error fetching data",err)
            res.send({message:err.message})
        }
        else{
            res.send({message:"Data fetched sucessfully",payload:result})
        }
    })
    
}

//get users bu email and username
const getUsersByEmailAndUsername=(req,res)=>{
    //
    let emailFromUrl=req.params.email;
    
}

//Create user
const createUser=(req,res)=>{
    //Insert user into database
    let {emp_id,emp_name,emp_city,emp_designation,emp_age}=req.body
    connection.query("INSERT INTO wal_table SET emp_id=?,emp_name=?,emp_city=?,emp_designation=?,emp_age=?",
    [emp_id,emp_name,emp_city,emp_designation,emp_age],(err,result)=>{
        console.log(result)
        if(err){
            console.log("Error fetching data",err)
            res.send({message:err.message})
        }
        else{
            res.send({message:"Data inserted sucessfully"})
        }
    })
    
    
}

//Modify user
const modifyUser=(req,res)=>{

    let {emp_id,emp_name,emp_city,emp_designation,emp_age}=req.body
    connection.query("SELECT * FROM wal_table WHERE emp_id=?",
    emp_id,(err,result)=>{
        console.log(result)
        if(err){
            console.log("Error fetching data",err)
            res.send({message:err.message})
        }
        else{
            if(result.length==0)
            {
                res.send({message:"User does not exists in the database"})
            }
            else{
                connection.query("UPDATE wal_table SET emp_id=?,emp_name=?,emp_city=?,emp_designation=?,emp_age=? WHERE emp_id=?",
                [emp_id,emp_name,emp_city,emp_designation,emp_age,emp_id],(err,result)=>{
                    console.log(result)
                    if(err){
                        console.log("Error fetching data",err)
                        res.send({message:err.message})
                    }
                    else{
                        res.send({message:"Data modified sucessfully"})
                    }
                })
            }
        }
    })
    
    
}

//Delete user by email
const deleteUserByEmpid=(req,res)=>{
    
    let empidFromUrl=(+req.params.empid);
    connection.query("DELETE FROM wal_table WHERE emp_id=?",empidFromUrl,(err,result)=>{
        console.log(result)
        if(err){
            console.log("Error fetching data",err)
            res.send({message:err.message})
        }
        else{
            res.send({message:"Data deleted sucessfully",payload:result})
        }
    })
   
}

module.exports={
    getAllUsers,
    getUsersByEmail,
    getUsersByEmailAndUsername,
    createUser,
    modifyUser,
    deleteUserByEmpid
}