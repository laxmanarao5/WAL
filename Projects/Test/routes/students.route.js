//import express
const exp=require("express")

//call Router on express
const studentApp=exp.Router()

//body-parser
studentApp.use(exp.json())

//importing controllers
const {Test,addStudent,addAddress,addSemesterMarks,getStudents,getStudentsByRollNo,deleteStudent,updateAddress,updateMarks,getAggregate}=require("../controllers/students.controller")

//test route
studentApp.get("/test",Test)


//Add student
studentApp.post("/student",addStudent)

//Add address
studentApp.post("/student/:rollNo/address",addAddress)

//Add Marks
studentApp.post("/student/sem-marks",addSemesterMarks)

//Get Students
studentApp.get("/students",getStudents)

//Get Student by Id
studentApp.get("/student/:rollNo",getStudentsByRollNo)

//Get Aggregate of Marks
studentApp.get("/students-with-aggregate",getAggregate)

//Update address
studentApp.put("/student/:rollNo/new-address",updateAddress)

//Update Marks
studentApp.put("/student/semester/new-marks",updateMarks)

//Soft Delete user by Roll no
studentApp.delete("/student/:rollNo",deleteStudent)

//exporting student API
module.exports=studentApp