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

//test the connection

sequelize.authenticate()
.then(()=>console.log("Connection sucess"))
.catch(err=>console.log("Error occured : ",err))


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
    updateCount==0?res.send({message:"Customer not found or No changes found to update"}):res.send({message:"Data modified sucessfully"})
}))

//Delete
app.delete("/delete/:customer_id",expressAsyncHandler(async(req,res)=>{
    let deleteCount=await Customer.destroy({where:{
        customer_id:+req.params.customer_id
    }})
    deleteCount==0?res.send({message:"Customer not found "}):res.send({message:"Customer deleted sucessfully"})
}))






//error handling middleware
app.use((err,req,res,next)=>{
    //sending error response
    res.status().send({errMsg:err})
})