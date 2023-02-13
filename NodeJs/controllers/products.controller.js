
let products=[{
    productId:1,
    productName:"samsung galaxy s23 ultra",
    brand:"samsung"
    },
    {
        productId:2,
        productName:"oneplus 11",
        brand:"oneplus"
    },
]

//get all products
const getAllProducts=(req,res)=>{
    res.send({message:"Products are fetched",payload:products})
}

//get product by product id
const getProductsById=(req,res)=>{
    let productId=req.params.id
    console.log(productId)
    let productInfo=products.find((productObject)=>productObject.productId==productId)
    console.log(productInfo)
    if(productInfo==undefined)
    {
        res.send({message:"Product not fount"})
    }
    else{
        res.send({message:"Products details fetched",payload:productInfo})
    }
    
}

//add product
const addProduct=(req,res)=>{
    let newProduct=req.body
    let test=products.find((productObject)=>productObject.productId==newProduct.productId)
    if(test==undefined)
    {
        products.push(newProduct)
        res.send({message:"Product added sucessfully"})
    }
    else
    {
        res.send({message:"Product is already exists"})
    }
}

//modify product info
const modifyProduct=(req,res)=>{
    let productInfo=req.body
    let indexOfProduct=products.findIndex((productObject)=>productObject.productId==productInfo.productId)
    if(indexOfProduct==-1)
    {
        res.send({message:"Product not found"})
    }
    else{
        products.splice(indexOfProduct,1,productInfo)
        res.send({message:"Product modified sucessfully"})
    }
}

//delete product from products
const deleteProduct=(req,res)=>{
    let productIdfromUrl=(+req.params.id)
    console.log(productIdfromUrl)
    let indexOfProduct=products.findIndex((productObject)=>productObject.productId===productIdfromUrl)
    if(indexOfProduct==-1)
    {
        res.send({message:"Product not found to delete"})
    }
    else
    {
        products.splice(indexOfProduct,1)
        res.send({message:"Product deleted sucessfully"})
    }
}
module.exports={getAllProducts,getProductsById,addProduct,modifyProduct,deleteProduct}