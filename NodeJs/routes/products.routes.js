//Import express 
const express=require("express")
//call to express
const productApp=express()

const {getAllProducts,
    getProductsById,
    addProduct,modifyProduct,
    deleteProduct
}=require("../controllers/products.controller")

//body-parser
productApp.use(express.json())


//get all products
productApp.get("/products",getAllProducts)

//get products by email
productApp.get("/product/:id",getProductsById)

//Add product to products
productApp.post("/addProduct",addProduct)

//Modify a product
productApp.put("/modify-product",modifyProduct)

//delete product
productApp.delete("/delete/:id",deleteProduct)

//exporting API
module.exports=productApp