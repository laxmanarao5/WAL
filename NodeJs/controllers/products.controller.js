//import database connection
const connection=require("../database/db.config")

//get all products
const getAllProducts=(req,res)=>{
    //fetching data from database
    connection.query("SELECT * FROM products",(err,result)=>{
        if(err)
        {
            console.log("Error : ",err)
            res.send({message:"Error while fetching data"})
        }
        else
        {
            //seding response object
            res.send({message:"Products fetched sucessfully",payload:result})
        }
    })
}

//get product by product id
const getProductsById=(req,res)=>{
    let productId=req.params.id
    connection.query("SELECT * FROM products WHERE product_id=?",productId,(err,result)=>{
        if(err)
        {
            console.log("Error : ",err)
            res.send({message:"Error while fetching data"})
        }
        else
        {
            res.send({message:"Products fetched sucessfully",payload:result})
        }
    })
    
}

//add product
const addProduct=(req,res)=>{
    let {productId,productName,brand,productPrice,dateOfMan}=req.body
    console.log(dateOfMan)
    connection.query("INSERT INTO products SET product_id=?,product_name=?,brand=?,product_price=?,date_of_man=?",[productId,productName,brand,productPrice,dateOfMan],(err,result)=>{
        if(err)
        {
            console.log("Error : ",err)
            res.send({message:"Error while inserting data, as duplicate product id found"})
        }
        else
        {
            res.send({message:"Products added sucessfully"})
        }
    })
}

//modify product info
const modifyProduct=(req,res)=>{
    let {productId,productName,brand,productPrice,dateOfMan}=req.body
    connection.query("UPDATE products SET product_id=?,product_name=?,brand=?,product_price=?,date_of_man=? WHERE product_id=?",[productId,productName,brand,productPrice,dateOfMan,productId],(err,result)=>{
        if(err)
        {
            console.log("Error : ",err)
            res.send({message:"Error while updating data"})
        }
        else
        {
            res.send({message:"Products modified sucessfully"})
        }
    })
}

//delete product from products
const deleteProduct=(req,res)=>{
    let productId=(+req.params.id)
    connection.query("DELETE FROM products WHERE product_id=?",productId,(err,result)=>{
        if(err)
        {
            console.log("Error : ",err)
            res.send({message:"Error while deleting data"})
        }
        else
        {
            res.send({message:"Products deleted sucessfully"})
        }
    })
    
}
module.exports={getAllProducts,getProductsById,addProduct,modifyProduct,deleteProduct}