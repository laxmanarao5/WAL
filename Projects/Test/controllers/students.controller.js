//import sequelize
const {sequelize}=require("../database/db.config")

//import express async handler to handle async erros
const expressAsyncHandler=require("express-async-handler")

//import Models
const {Student}=require("../database/models/student.model")
const {Address}=require("../database/models/address.model")
const {SemesterMarks}=require("../database/models/semesterMarks.model")

//create tables
sequelize.sync()


//Associations

//Student - Address
Student.Address=Student.hasOne(Address,{foreignKey:"roll_no"})
Address.Student=Address.belongsTo(Student,{foreignKey:"roll_no"})


//Student - SemesterMarks
Student.SemesterMarks=Student.hasMany(SemesterMarks,{foreignKey:"roll_no"})

//Controller for Testing
exports.Test=(req,res)=>{
    res.send({message:"Student API working fine"})
}

//Controller for add student
exports.addStudent=expressAsyncHandler(async(req,res)=>{
    await Student.create(req.body)
    res.send({message:"Student added"})
})

//Add Address
exports.addAddress=expressAsyncHandler(async(req,res)=>{
    let student=await Student.findOne({where:{
        roll_no:req.params.rollNo
    }})
    console.log(student)
    if(student==null)
    res.send({message:"Student with roll number not found to add address"})
    else{
        let result=await Address.create(req.body)
        student.setAddress(result)
        res.send({message:"Address added sucessfully"})
    }
})

//Add semester marks
exports.addSemesterMarks=expressAsyncHandler(async(req,res)=>{
    let student=await Student.findOne({where:{
        roll_no:req.body.roll_no
    }})
    console.log(student)
    if(student==null)
    res.send({message:"Student with roll number not found to add address"})
    else{
        let result=await SemesterMarks.create(req.body)
        res.send({message:"Semester marks added sucessfully"})
    }

})

//Fetch all students information
exports.getStudents=expressAsyncHandler(async(req,res)=>{
    let students =await Student.findAll({where:{
        status:true
    },include:[{
        model:Address,
        attributes:{ exclude:['roll_no',"id"]}},
        {
            model:SemesterMarks,
            attributes:{ exclude:['roll_no']}}]
        
    ,attributes:{
        exclude:['status']
    }})
    res.send({message:"Students ",payload:students})
})

//Fetch student info by id
exports.getStudentsByRollNo=expressAsyncHandler(async(req,res)=>{
    let students =await Student.findOne({where:{
        status:true,
        roll_no:req.params.rollNo
    },include:[{
        model:Address,
        attributes:{ exclude:['roll_no',"id"]}},
        {
            model:SemesterMarks,
            attributes:{ exclude:['roll_no']}}]
        
    ,attributes:{
        exclude:['status']
    }})
    res.send({message:"Student info ",payload:students})
})

//Aggregation of Marks
exports.getAggregate=expressAsyncHandler(async(req,res)=>{
    const result=await sequelize.query(
        "select roll_no, avg((maths+physics+chemistry)/3) as Average from semestermarks where roll_no in(select roll_no from student where status=true) group by roll_no",
    {
        type:sequelize.QueryTypes.SELECT
    })
    res.send({message:"Aggregate of Marks",payload:result})

})


//Update address
exports.updateAddress=expressAsyncHandler(async(req,res)=>{
    let updateCount=await Address.update(req.body,{where:{
        roll_no:req.params.rollNo}})
    if(updateCount!=0)
        res.send({message:"Address updated sucessfully"})
    else
        res.send({message:"Student not found"})
})

//Update Marks
exports.updateMarks=expressAsyncHandler(async(req,res)=>{
    let updateCount=await SemesterMarks.update(req.body,{where:{
        roll_no:req.body.roll_no,semester:req.body.semester}})
    if(updateCount!=0)
        res.send({message:"Marks updated sucessfully"})
    else
        res.send({message:"Student or Semester not found"})
})

//Delete student
exports.deleteStudent=expressAsyncHandler(async(req,res)=>{
    let deleteCount=await Student.update({status:false},{where:{
        roll_no:req.params.rollNo}})
    if(deleteCount!=0)
        res.send({message:"Student deleted sucessfully"})
    else
        res.send({message:"Student or Semester not found"})
})