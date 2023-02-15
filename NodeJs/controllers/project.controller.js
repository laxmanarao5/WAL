
const expressAsyncHandler=require("express-async-handler")

const connection=require("../database/db.config")

const db=connection.promise()



//Get employee detains by project id
const getEmpOfProject=expressAsyncHandler(async(req,res)=>{
    //read parameters from url
    let pidFromUrl=req.params.pid
    //verify project present or not
    let [duplicates]=await db.query("select * from projects where ProjectId=?",pidFromUrl)
    if(duplicates[0]==undefined)
    res.send({message:"Project ID not found"})
    else{
        //get employess with project id from database
        let [result] = await db.query("select employees.EmpId,EmpFName,EmpLName,Age,EmailID,PhoneNo,Address from employees inner join projects on employees.EmpId=projects.EmpID where ProjectId=?",pidFromUrl)
        //send response
        result[0]==undefined?res.send({message:"Project is not yet allocated "}):res.send({message:"Employees allocated to ",payload:result})
    }   
})



//Get projects by employee id
const getProjOfEmployee=expressAsyncHandler(async(req,res)=>{
    //read parameters from url
    let eidFromUrl=req.params.eid
    //verify employee present or not
    let [duplicates]=await db.query("select * from employees where EmpId=?",eidFromUrl)
    if(duplicates[0]==undefined)
    res.send({message:"Entered Employee Id not found"})
    else{
        //get projects with employee id from database
        let [result] = await db.query("select projects.EmpID,ProjectId,clientId,Projectname,ProjectStartDate from employees inner join projects on employees.EmpId=projects.EmpID where projects.EmpId=?;",eidFromUrl)
        //send response
        result[0]!=undefined?res.send({message:"Projects are",payload:result}):res.send({message:"Employee is on bench"})
    }
})



//get employees on bench

const getEmpOnBench=expressAsyncHandler(async(req,res)=>{
    //get employee on bench from database
    let [result] = await db.query("select employees.EmpId,EmpFName,EmpLName,Age,EmailID,PhoneNo,Address from employees left join projects on employees.EmpId=projects.EmpID where projects.EmpID is null")
    //send response
    result[0]==undefined?res.send({message:"No one is on bench"}):res.send({message:"Details fetched sucessfully",payload:result})

})

module.exports={getEmpOfProject,getProjOfEmployee,getEmpOnBench}
