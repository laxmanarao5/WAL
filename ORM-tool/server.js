//import express
const exp=require("express")

//express method
const app=exp()

//bodey parser
app.use(exp.json())

//import dotenv and call config method
require("dotenv").config()

//Import express async handler
const expressAsyncHandler=require("express-async-handler")

//Assign port number
app.listen(process.env.port,()=>console.log(`Listening to port ${process.env.port} ......`))

//import db connection
const sequelize=require("./database/db.config")
//import Operators for queries
const {Op}=require("sequelize")
//import model
const {Customer}=require("./models/customer.model")

const {Person}=require("./models/person.model")

const {Skills}=require("./models/skills.models")

//import user model
const {User}=require("./models/user.model")
//test the connection

sequelize.authenticate()
.then(()=>console.log("Connection sucess"))
.catch(err=>console.log("Error occured : ",err))


sequelize.sync({force:true})

//Routes


//Routed for customer

app.post("/create-customer",expressAsyncHandler(async(req,res)=>{

    //await Customer.sync()  //creates table if not exists
    //await Customer.sync({force:true})    //drop existing table and creates new one
    //await Customer.sync({alter:true})    //Updates the table schema
    //get data from request
    //let newCustomer=req.body
    //create row for new customer
    //let cust=Customer.build(newCustomer)  //build adds some properties that required by database 
    //console.log(cust.toJSON())
    //insert data into database
    //await cust.save()     //save method is used to insert data into database
        await Customer.create(req.body)    //create is simplified method to build and save
    res.send({message:"New customer inserted sucessfully"})
    

}))

//get all customers
app.get("/get-customers",expressAsyncHandler(async(req,res)=>{
    let customers=await Customer.findAll()
    res.send({message:"All customers are",payload:customers})
}))


//get all customers
app.get("/get-customersexcept",expressAsyncHandler(async(req,res)=>{
    let customers=await Customer.findAll({where:{
        customer_id:{
            [Op.ne]:100
        }
    }})
    res.send({message:"All customers are",payload:customers})
}))

//get customers with primary key
app.get("/customer/:customer_id",expressAsyncHandler(async(req,res)=>{
    let customer=await Customer.findByPk(req.params.customer_id)
    res.send({message:"Customers details are",payload:customer})
}))

//get customers by non key colmns
app.get("/customer/name/:cust_name",expressAsyncHandler(async(req,res)=>{
    let customer=await Customer.findOne({where:{customer_name:req.params.cust_name}})
    res.status(200).send({message:"All customers are",payload:customer})
}))

//Update
app.put("/update",expressAsyncHandler(async(req,res)=>{
    let updateCount=await Customer.update(req.body,{where:{
        customer_id:req.body.customer_id
    }})
    updateCount==0?res.send({message:"Customer not found or No changes made to modify"}):res.send({message:"Data modified sucessfully"})
}))

//Delete
app.delete("/delete/:customer_id",expressAsyncHandler(async(req,res)=>{
    let deleteCount=await Customer.destroy({where:{
        customer_id:+req.params.customer_id
    }})
    deleteCount==0?res.send({message:"Customer not found "}):res.send({message:"Customer deleted sucessfully"})
}))







app.post("/add-user",expressAsyncHandler(async(req,res)=>{
    await User.create(req.body)
    res.send({message:"User added"})
}))
    


app.get("/users",expressAsyncHandler(async(req,res)=>{
    let users=await User.findAll()
    res.send({message:"All customers are",payload:users})
    
}))










app.post("/person",expressAsyncHandler(async(req,res)=>{
    await Person.create(req.body)
    res.send({message:"Person added"})
}))
app.get("/peoples",expressAsyncHandler(async(req,res)=>{
    let result=await Person.findAll()
    res.send({message:"Peoples are ",payload:result})
}))

app.post("/skill",expressAsyncHandler(async(req,res)=>{
    await Skills.create(req.body)
    res.send({message:"Skills added sucessfully"})
}))
app.get("/skills",expressAsyncHandler(async(req,res)=>{
    let result=await Skills.findAll()
    res.send({message:"Skills are ",payload:result})
}))



const {Emp}=require("./models/emp.model")
const {Job}=require("./models/job.model")

app.post("/add-emp",expressAsyncHandler(async(req,res)=>{
    let {emp_id,emp_name,job_id,job_desc}=req.body

    await Emp.create({emp_id:emp_id,emp_name:emp_name})
    await Emp.create({job_id:job_id,job_desc:job_desc})
}))


//inavlid path middleware
app.use("*",()=>{
    res.status(404).send({message:"Path not found"})
})

//error handling middleware
app.use((err,req,res,next)=>{
    let errorArray=err.message.split("\nValidation error: ")
    errorArray[0]=errorArray[0].split("Validation error: ")[0]
    res.send({message:"Error occured",error:errorArray})
})