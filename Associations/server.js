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

//test the connection

sequelize.authenticate()
.then(()=>console.log("Connection sucess"))
.catch(err=>console.log("Error occured : ",err))



const {Emp}=require("./models/emp.model")
const {Job}=require("./models/job.model")







//will create tables for all models
sequelize.sync({force:true})



//One to One association


//Establish relationship between tables 
Emp.Job=Emp.hasOne(Job,{foreignKey:{name:"emp_id",allowNull:false}})     //create foreign key in target
//Job.belongsTo(Emp,{foreignKey:{name:"emp_id"}})

//Add employeee
app.post("/add-emp",expressAsyncHandler(async(req,res)=>{
    //Manual approach
    // let {emp_id,emp_name,job_id,job_desc}=req.body

    // let emp= await Emp.create({emp_id:emp_id,emp_name:emp_name})

    // let job=await Job.create({job_id:job_id,job_desc:job_desc})
    // console.log(emp)
    // emp.setJob(job)
    // res.send({message:"Employee added"})

    await Emp.create(req.body,{
        include:[
            {
                association:Emp.Job
            }
        ]
    })
    res.send({message:"Employee added"})
    
}))

//add job

app.post("/add-job",expressAsyncHandler(async(req,res)=>{
    // if(req.body.emp_id==undefined){
    //     res.send({message:"Emp id required"})
    // }
    // else{
    //     await Job.create(req.body)
    // res.send({message:"Job added sucessfully"})
    // }

    await Job.create(req.body)
    res.send({message:"Job added sucessfully"})
}))


//Get employee information from two tables
app.get('/emps',expressAsyncHandler(async(req,res)=>{
    
    // //Eager loading
    // let emp=await Emp.findAll({include:{
    //     model:Job,
    //     attributes:['job_desc']
    // }})

    let [emps]=await Emp.findAll()

    //lazy loading - only fetches data of other table if needed 
    let job_info=await emps.getJob()


    res.send({message:"Employee info",payload:[emps,job_info]})
}))







// One to One Association

const {Customers}=require("./models/customer.model")
const {Accounts}=require("./models/accounts.model")

Customers.Accounts=Customers.hasMany(Accounts,{foreignKey:{name:"cust_id"}})     //create foreign key in target
//Job.belongsTo(Emp,{foreignKey:{name:"emp_id"}})

//Add customers


app.post("/add-customer",expressAsyncHandler(async(req,res)=>{
    // let {cust_id,cust_name,accounts}=req.body

    // let emp= await Customers.create({cust_id:cust_id,cust_name:cust_name})
    Customers.create(req.body,{
        include:[{
            association:Customers.Accounts
        }
            
        ]
    })


    res.send({message:"Customer details added"})
    
}))

app.get("/customers",expressAsyncHandler(async(req,res)=>{
    let result=await Customers.findAll()
    res.send({message:"Customers are",payload:result})
}))







//One to Many Association


const {User}=require("./models/user.model")
const {Address}=require("./models/address.model")
const {Skills}=require("./models/skills.model")
const {Contact}=require("./models/contact_details.model")

User.Address=User.hasOne(Address,{foreignKey:"user_id"})
User.Skills=User.hasMany(Skills,{foreignKey:"user_id"})
Address.Contact=Address.hasOne(Contact,{foreignKey:"user_id"})

// app.post("/create-user",expressAsyncHandler(async(req,res)=>{
    
// }))


app.post("/create-user",expressAsyncHandler(async(req,res)=>{
    
    await User.create(req.body,{
        include:[
            {
                association:User.Address,
                include:[{association:Address.Contact}]
            },
            {
                association:User.Skills

            }
            
        ]
    })
    res.send({message:"User added sucessfully"})
}))



app.get("/user_info/:option",expressAsyncHandler(async(req,res)=>{
    // let [cust]=await User.findAll()
    // let skills= await cust.getSkills()
    // let address=await cust.getAddress()
    // res.send({message:"users",payload:{cust,skills,address}})

    let [user]=await User.findAll()
    if(req.params.option=="all"){
    let [skills]= await user.getSkills( )
    let address=await user.getAddress()
    let contact_info=await address.getContact()
    address.contact_info=contact_info
   res.send({message:"users",payload:{user,skills,address,contact_info}})
    }
    else if(req.params.option=="skills"){
        let skills= await user.getSkills()
    res.send({message:"users",payload:{user,skills}})
    }
    else if(req.params.option=="address"){
        let address=await user.getAddress()
    res.send({message:"users",payload:{user,address}})
    }
    else{
        res.send({message:"users",payload:{user}})
    }
}))





































//inavlid path middleware
app.use("*",(req,res)=>{
    res.status(404).send({message:"Path not found"})
})

//error handling middleware
app.use((err,req,res,next)=>{
    let errorArray=err.message.split("\nValidation error: ")
    errorArray[0]=errorArray[0].split("Validation error: ")[0]
    res.send({message:"Error occured",error:errorArray})
})


