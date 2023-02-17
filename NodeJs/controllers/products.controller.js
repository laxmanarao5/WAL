//import asynchandler
const expressAsyncHandler=require("express-async-handler")
//import database connection
const connection=require("../database/db.config")

//calling promise method on connection to database
const db=connection.promise()



//get all products
const getAllProducts=expressAsyncHandler(async(req,res)=>{
    //fetch data from db
    let [result]=await db.query("SELECT * FROM products")
    console.log(req.headers);
    //send response
    res.send({message:"Data fetched sucessfully",payload:result})
})




//get product by product id

const getProductsById=expressAsyncHandler(async(req,res)=>{
    //read parameters from request
    let productIdFromUrl=req.params.id
    //fetch data from database
    let [result]=await db.query("SELECT * FROM products WHERE product_id=?",productIdFromUrl)
    //send response
    res.send({message:"Data fetched sucessfully",payload:result})
})




//add product

const addProduct=expressAsyncHandler(async(req,res)=>{
    //unpack data received from req body
    let {productId,productName,brand,productPrice,dateOfMan}=req.body
    //search for duplicates
    let [duplicate]=await db.query("select * from products where product_id=?",productId)
    if(duplicate[0]==undefined)
    {
        //insert product info to database
        await db.query("INSERT INTO products SET product_id=?,product_name=?,brand=?,product_price=?,date_of_man=?",[productId,productName,brand,productPrice,dateOfMan])
        //send response
        res.send({message:"Product added sucesssfully"})
    }
    else{
        //send response
        res.send({message:"Product already found "})
    }
})




//modify product info

const modifyProduct=expressAsyncHandler(async(req,res)=>{
    //unpack data received from request 
    let {productId,productName,brand,productPrice,dateOfMan}=req.body
    //search for duplicates
    let [duplicate]=await db.query("select * from products where product_id=?",productId)
    if(duplicate[0]==undefined)
    {
        //send response
        res.send({message:"No product found to modify"})
    }
    else{
        //update product info
        await db.query("UPDATE products SET product_id=?,product_name=?,brand=?,product_price=?,date_of_man=? WHERE product_id=?",[productId,productName,brand,productPrice,dateOfMan,productId])
        //send response
        res.send({message:"Product information updated"})
    }

})



//delete product from products

const deleteProduct=expressAsyncHandler(async(req,res)=>{
    //read parameter from 
    let productIdFromUrl=req.params.id
    //fetch data from database
    let [result]=await db.query("SELECT * FROM products WHERE product_id=?",productIdFromUrl)
    if(result[0]==undefined)
    {
        res.send({message:"product not found"})
    }
    else
    {
        await db.query("DELETE FROM products WHERE product_id=?",productIdFromUrl)
        res.send({message:"Deleted sucessfully"})
    }
})

module.exports={getAllProducts,getProductsById,addProduct,modifyProduct,deleteProduct}