//Import express 
const express=require("express")
//call to express
const productApp=express()

//body-parser
productApp.use(express.json())

productApp.get("/products",(req,res)=>{
    res.send({message:"Products are fetching"})
})


//exporting API
module.exports=productApp